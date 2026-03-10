"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

interface ParticleBackgroundProps {
  variant?: "shield"
  colorScheme?: "isodose" | "blue" | "mono"
  opacity?: number
  enableRadiation?: boolean
  radiationInterval?: number
  interactive?: boolean
  backgroundColor?: string
}

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  targetX: number
  targetY: number
  vx: number
  vy: number
  dirX: number
  dirY: number
  distanceNorm: number
  size: number
  color: string
}

type Phase = "forming" | "stable" | "radiating" | "returning"

const ISODOSE_COLORS = [
  "#8B0000",
  "#B22222",
  "#DC143C",
  "#FF4500",
  "#FF8C00",
  "#FFA500",
  "#FFD700",
  "#ADFF2F",
  "#00CED1",
  "#4169E1",
]

const BLUE_COLORS = ["#0f4c81", "#1f6fb2", "#3c8dcc", "#74b3e6", "#b8dffc"]
const MONO_COLORS = ["#17305f", "#4a6fa7", "#9bb7df", "#dce6f7"]

const FORMING_MS = 1600
const RADIATING_MS = 4200
const RETURNING_MS = 1400
const EXPLOSION_BASE = 1.1
const EXPLOSION_EXTRA = 0.35

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function easeInOutSine(t: number) {
  const x = clamp(t, 0, 1)
  return -(Math.cos(Math.PI * x) - 1) / 2
}

export default function ParticleBackground({
  colorScheme = "isodose",
  opacity = 0.3,
  enableRadiation = true,
  radiationInterval = 6000,
  interactive = true,
  backgroundColor = "transparent",
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const logoCenterRef = useRef({ x: 0, y: 0 })
  const mouseRef = useRef({ x: -10000, y: -10000 })
  const animationRef = useRef<number>()
  const phaseRef = useRef<Phase>("forming")
  const phaseStartRef = useRef(0)
  const [isReady, setIsReady] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const palette = useMemo(() => {
    if (colorScheme === "blue") return BLUE_COLORS
    if (colorScheme === "mono") return MONO_COLORS
    return ISODOSE_COLORS
  }, [colorScheme])

  const buildParticles = useCallback(
    (width: number, height: number, img: HTMLImageElement) => {
      const mask = document.createElement("canvas")
      mask.width = width
      mask.height = height
      const maskCtx = mask.getContext("2d")
      if (!maskCtx) return []

      const aspect = img.naturalWidth > 0 && img.naturalHeight > 0 ? img.naturalWidth / img.naturalHeight : 1
      let logoHeight = clamp(height * 0.36, 220, 430)
      let logoWidth = logoHeight * aspect
      if (logoWidth > width * 0.55) {
        logoWidth = width * 0.55
        logoHeight = logoWidth / Math.max(aspect, 0.1)
      }

      const centerX = width * 0.78
      const centerY = height * 0.45
      logoCenterRef.current = { x: centerX, y: centerY }

      const drawX = centerX - logoWidth / 2
      const drawY = centerY - logoHeight / 2
      maskCtx.clearRect(0, 0, width, height)
      maskCtx.drawImage(img, drawX, drawY, logoWidth, logoHeight)

      const imageData = maskCtx.getImageData(0, 0, width, height)
      const data = imageData.data

      const gap = clamp(Math.round(logoHeight / 70), 4, 8)

      let minX = width
      let minY = height
      let maxX = 0
      let maxY = 0
      let hasMask = false

      for (let y = 0; y < height; y += gap) {
        const row = y * width
        for (let x = 0; x < width; x += gap) {
          const alpha = data[(row + x) * 4 + 3]
          if (alpha > 24) {
            hasMask = true
            if (x < minX) minX = x
            if (x > maxX) maxX = x
            if (y < minY) minY = y
            if (y > maxY) maxY = y
          }
        }
      }

      if (!hasMask) return []

      const hotspotX = maxX - (maxX - minX) * 0.18
      const hotspotY = minY + (maxY - minY) * 0.16

      let maxDoseDist = 1
      let maxLogoDist = 1

      for (let y = 0; y < height; y += gap) {
        const row = y * width
        for (let x = 0; x < width; x += gap) {
          const alpha = data[(row + x) * 4 + 3]
          if (alpha > 24) {
            const dDose = Math.hypot(x - hotspotX, y - hotspotY)
            const dLogo = Math.hypot(x - centerX, y - centerY)
            if (dDose > maxDoseDist) maxDoseDist = dDose
            if (dLogo > maxLogoDist) maxLogoDist = dLogo
          }
        }
      }

      const particles: Particle[] = []
      for (let y = 0; y < height; y += gap) {
        const row = y * width
        for (let x = 0; x < width; x += gap) {
          const alpha = data[(row + x) * 4 + 3]
          if (alpha <= 24) continue

          const dDose = Math.hypot(x - hotspotX, y - hotspotY)
          const dLogo = Math.hypot(x - centerX, y - centerY)
          const colorIndex = Math.min(palette.length - 1, Math.floor((dDose / maxDoseDist) * palette.length))
          const baseDirX = x - centerX
          const baseDirY = y - centerY
          const baseDirNorm = Math.hypot(baseDirX, baseDirY) || 1

          particles.push({
            x: centerX + (Math.random() - 0.5) * width * 0.45,
            y: centerY + (Math.random() - 0.5) * height * 0.45,
            baseX: x,
            baseY: y,
            targetX: x,
            targetY: y,
            vx: 0,
            vy: 0,
            dirX: baseDirX / baseDirNorm,
            dirY: baseDirY / baseDirNorm,
            distanceNorm: dLogo / maxLogoDist,
            size: 1.8 + Math.random() * 0.9,
            color: palette[colorIndex],
          })
        }
      }

      return particles
    },
    [palette],
  )

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const rect = container.getBoundingClientRect()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = Math.max(1, Math.floor(rect.width * dpr))
    canvas.height = Math.max(1, Math.floor(rect.height * dpr))
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      const particles = buildParticles(rect.width, rect.height, img)
      particlesRef.current = particles
      phaseRef.current = "forming"
      phaseStartRef.current = performance.now()
      setIsReady(true)
    }
    img.onerror = () => {
      particlesRef.current = []
      setIsReady(true)
    }
    img.src = "/images/jefferson-j-logo.svg"
  }, [buildParticles])

  const animate = useCallback(
    (now: number) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      const particles = particlesRef.current
      const phase = phaseRef.current
      const elapsed = now - phaseStartRef.current
      const stableMs = Math.max(1400, radiationInterval)

      if (phase === "forming" && elapsed >= FORMING_MS) {
        phaseRef.current = "stable"
        phaseStartRef.current = now
      } else if (enableRadiation && phase === "stable" && elapsed >= stableMs) {
        phaseRef.current = "radiating"
        phaseStartRef.current = now
      } else if (phase === "radiating" && elapsed >= RADIATING_MS) {
        phaseRef.current = "returning"
        phaseStartRef.current = now
      } else if (phase === "returning" && elapsed >= RETURNING_MS) {
        phaseRef.current = "stable"
        phaseStartRef.current = now
      }

      if (backgroundColor === "transparent") {
        ctx.clearRect(0, 0, width, height)
      } else {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, width, height)
      }

      const currentPhase = phaseRef.current
      const phaseElapsed = now - phaseStartRef.current
      const mouse = mouseRef.current
      const center = logoCenterRef.current
      const explosionDistance = Math.hypot(width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        let targetX = p.baseX
        let targetY = p.baseY

        if (currentPhase === "radiating") {
          const progress = easeInOutSine(phaseElapsed / RADIATING_MS)
          const spread = explosionDistance * (EXPLOSION_BASE + p.distanceNorm * EXPLOSION_EXTRA) * progress
          targetX = p.baseX + p.dirX * spread
          targetY = p.baseY + p.dirY * spread
        } else if (currentPhase === "returning") {
          const progress = easeInOutSine(phaseElapsed / RETURNING_MS)
          const spread = explosionDistance * (EXPLOSION_BASE + p.distanceNorm * EXPLOSION_EXTRA) * (1 - progress)
          targetX = p.baseX + p.dirX * spread
          targetY = p.baseY + p.dirY * spread
        }

        if (interactive && currentPhase === "stable") {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const mouseDist = Math.hypot(dx, dy)
          if (mouseDist < 96 && mouseDist > 0.001) {
            const force = (96 - mouseDist) / 96
            p.vx += (dx / mouseDist) * force * 1.7
            p.vy += (dy / mouseDist) * force * 1.7
          }
        }

        p.targetX = targetX
        p.targetY = targetY

        if (currentPhase === "radiating" || currentPhase === "returning") {
          p.x = p.targetX
          p.y = p.targetY
          p.vx = 0
          p.vy = 0
        } else {
          const spring = 0.085
          const damping = 0.88
          p.vx += (p.targetX - p.x) * spring
          p.vy += (p.targetY - p.y) * spring
          p.vx *= damping
          p.vy *= damping
          p.x += p.vx
          p.y += p.vy
        }

        const centerDistance = Math.hypot(p.baseX - center.x, p.baseY - center.y)
        const tint = clamp(centerDistance / Math.max(width, height), 0, 1)
        const alpha = 0.88 - tint * 0.2
        ctx.fillStyle = p.color
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(animate)
    },
    [backgroundColor, enableRadiation, interactive, radiationInterval],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.05 })
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setupCanvas()
    const onResize = () => {
      setIsReady(false)
      setupCanvas()
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [setupCanvas])

  useEffect(() => {
    if (!isReady || !isVisible) return
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [animate, isReady, isVisible])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !interactive) return

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => {
      mouseRef.current = { x: -10000, y: -10000 }
    }

    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseleave", onLeave)
    return () => {
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("mouseleave", onLeave)
    }
  }, [interactive])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity, transition: "opacity 300ms ease" }}
        aria-hidden="true"
        role="presentation"
      />
    </div>
  )
}
