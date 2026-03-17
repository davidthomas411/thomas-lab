"use client"

import { useState, useEffect, type RefObject } from "react"

const P_MIN = -15
const P_MAX = 15
const STEP = 3
const SIZE = 256
const GAZE_VALUES = Array.from({ length: (P_MAX - P_MIN) / STEP + 1 }, (_, index) => P_MIN + index * STEP)
const GAZE_POINTS = GAZE_VALUES.flatMap((px) => GAZE_VALUES.map((py) => ({ px, py })))

interface GazeTrackingResult {
  currentImage: string | null
  isLoading: boolean
  error: Error | null
}

function getPointKey(px: number, py: number): string {
  return `${px}:${py}`
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

const FALLBACK_POINTS_BY_KEY = new Map(
  GAZE_POINTS.map((point) => [
    getPointKey(point.px, point.py),
    [...GAZE_POINTS].sort((left, right) => {
      const leftDistance = (left.px - point.px) ** 2 + (left.py - point.py) ** 2
      const rightDistance = (right.px - point.px) ** 2 + (right.py - point.py) ** 2

      if (leftDistance !== rightDistance) return leftDistance - rightDistance

      const leftHorizontalDelta = Math.abs(left.px - point.px)
      const rightHorizontalDelta = Math.abs(right.px - point.px)
      if (leftHorizontalDelta !== rightHorizontalDelta) return leftHorizontalDelta - rightHorizontalDelta

      const leftVerticalDelta = Math.abs(left.py - point.py)
      const rightVerticalDelta = Math.abs(right.py - point.py)
      if (leftVerticalDelta !== rightVerticalDelta) return leftVerticalDelta - rightVerticalDelta

      return Math.abs(left.px) + Math.abs(left.py) - (Math.abs(right.px) + Math.abs(right.py))
    }),
  ]),
)

export function useGazeTracking(containerRef: RefObject<HTMLElement>, basePath: string): GazeTrackingResult {
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const centerImage = buildImagePath(basePath, 0, 0)
    const centerPointKey = getPointKey(0, 0)
    const availabilityCache = new Map<string, boolean>()
    const pendingLoads = new Map<string, Promise<boolean>>()
    const resolvedImageCache = new Map<string, string>()
    let mounted = true
    let activeRequestId = 0
    let lastRequestedPointKey = centerPointKey

    const loadImage = (src: string): Promise<boolean> => {
      const cachedResult = availabilityCache.get(src)
      if (cachedResult !== undefined) return Promise.resolve(cachedResult)

      const pendingLoad = pendingLoads.get(src)
      if (pendingLoad) return pendingLoad

      const loadPromise = new Promise<boolean>((resolve) => {
        const image = new Image()
        image.onload = () => {
          availabilityCache.set(src, true)
          pendingLoads.delete(src)
          resolve(true)
        }
        image.onerror = () => {
          availabilityCache.set(src, false)
          pendingLoads.delete(src)
          resolve(false)
        }
        image.src = src
      })

      pendingLoads.set(src, loadPromise)
      return loadPromise
    }

    const resolveClosestImage = async (px: number, py: number): Promise<string> => {
      const pointKey = getPointKey(px, py)
      const cachedResolvedImage = resolvedImageCache.get(pointKey)
      if (cachedResolvedImage) return cachedResolvedImage

      const fallbackPoints = FALLBACK_POINTS_BY_KEY.get(pointKey) ?? GAZE_POINTS

      for (const fallbackPoint of fallbackPoints) {
        const imagePath = buildImagePath(basePath, fallbackPoint.px, fallbackPoint.py)
        const exists = await loadImage(imagePath)

        if (exists) {
          resolvedImageCache.set(pointKey, imagePath)
          return imagePath
        }
      }

      resolvedImageCache.set(pointKey, centerImage)
      return centerImage
    }

    const updateImageFromPoint = async (px: number, py: number) => {
      const requestId = ++activeRequestId
      const resolvedImage = await resolveClosestImage(px, py)

      if (!mounted || requestId !== activeRequestId) return
      setCurrentImage(resolvedImage)
    }

    const preloader = new Image()
    preloader.onload = () => {
      if (!mounted) return
      availabilityCache.set(centerImage, true)
      resolvedImageCache.set(centerPointKey, centerImage)
      setCurrentImage(centerImage)
      setIsLoading(false)
      setError(null)
    }
    preloader.onerror = () => {
      if (!mounted) return
      availabilityCache.set(centerImage, false)
      setError(new Error("Failed to load face-looker images"))
      setIsLoading(false)
    }
    preloader.src = centerImage

    const updateFromPointer = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      const normalizedX = (x / rect.width) * 2 - 1
      const normalizedY = -((y / rect.height) * 2 - 1)

      const px = Math.round((normalizedX * P_MAX) / STEP) * STEP
      const py = Math.round((normalizedY * P_MAX) / STEP) * STEP

      const clampedPx = Math.max(P_MIN, Math.min(P_MAX, px))
      const clampedPy = Math.max(P_MIN, Math.min(P_MAX, py))
      const pointKey = getPointKey(clampedPx, clampedPy)

      if (pointKey === lastRequestedPointKey) return

      lastRequestedPointKey = pointKey
      void updateImageFromPoint(clampedPx, clampedPy)
    }

    const resetToCenterImage = () => {
      activeRequestId += 1
      lastRequestedPointKey = centerPointKey
      setCurrentImage(centerImage)
    }

    const handleMouseMove = (e: MouseEvent) => updateFromPointer(e.clientX, e.clientY)
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return
      updateFromPointer(e.touches[0].clientX, e.touches[0].clientY)
    }
    const handleWindowLeave = () => resetToCenterImage()
    const handleTouchEnd = () => resetToCenterImage()

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    window.addEventListener("mouseleave", handleWindowLeave)
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      mounted = false
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("mouseleave", handleWindowLeave)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [containerRef, basePath])

  return { currentImage, isLoading, error }
}
