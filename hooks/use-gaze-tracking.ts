"use client"

import { useState, useEffect, type RefObject } from "react"

const P_MIN = -15
const P_MAX = 15
const STEP = 3
const SIZE = 256

interface GazeTrackingResult {
  currentImage: string | null
  isLoading: boolean
  error: Error | null
}

function formatPupilValue(value: number): string {
  if (value === 0) return "0p0"
  return value < 0 ? `m${Math.abs(value)}p0` : `${value}p0`
}

function buildImagePath(basePath: string, px: number, py: number): string {
  const pxStr = formatPupilValue(px)
  const pyStr = formatPupilValue(py)
  return `${basePath}/gaze_px${pxStr}_py${pyStr}_${SIZE}.webp`
}

export function useGazeTracking(containerRef: RefObject<HTMLElement>, basePath: string): GazeTrackingResult {
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const centerImage = buildImagePath(basePath, 0, 0)
    let mounted = true

    const preloader = new Image()
    preloader.onload = () => {
      if (!mounted) return
      setCurrentImage(centerImage)
      setIsLoading(false)
      setError(null)
    }
    preloader.onerror = () => {
      if (!mounted) return
      setError(new Error("Failed to load face-looker images"))
      setIsLoading(false)
    }
    preloader.src = centerImage

    const updateFromPoint = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      const normalizedX = (x / rect.width) * 2 - 1
      const normalizedY = -((y / rect.height) * 2 - 1)

      const px = Math.round((normalizedX * P_MAX) / STEP) * STEP
      const py = Math.round((normalizedY * P_MAX) / STEP) * STEP

      const clampedPx = Math.max(P_MIN, Math.min(P_MAX, px))
      const clampedPy = Math.max(P_MIN, Math.min(P_MAX, py))

      setCurrentImage(buildImagePath(basePath, clampedPx, clampedPy))
    }

    const handleMouseMove = (e: MouseEvent) => updateFromPoint(e.clientX, e.clientY)
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return
      updateFromPoint(e.touches[0].clientX, e.touches[0].clientY)
    }
    const handleLeave = () => setCurrentImage(centerImage)

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("touchmove", handleTouchMove, { passive: true })
    container.addEventListener("mouseleave", handleLeave)
    container.addEventListener("touchend", handleLeave)

    return () => {
      mounted = false
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("touchmove", handleTouchMove)
      container.removeEventListener("mouseleave", handleLeave)
      container.removeEventListener("touchend", handleLeave)
    }
  }, [containerRef, basePath])

  return { currentImage, isLoading, error }
}
