"use client"

import { useRef } from "react"
import { useGazeTracking } from "@/hooks/use-gaze-tracking"

interface FaceTrackerProps {
  blobFaceId: string
  fallbackImage?: string
  className?: string
  alt?: string
  size?: number
}

export default function FaceTracker({
  blobFaceId,
  fallbackImage,
  className = "",
  alt = "Team member",
  size = 220,
}: FaceTrackerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const basePath = `https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/faces/${blobFaceId}`
  const { currentImage, isLoading, error } = useGazeTracking(containerRef, basePath)

  if (error) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ width: size, height: size }}>
        <img
          src={fallbackImage || "/placeholder.svg"}
          alt={alt}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-gray-100 ${className}`}
      style={{ width: size, height: size }}
    >
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100/80">
          <div className="h-7 w-7 rounded-full border-4 border-jefferson-brightBlue border-t-transparent animate-spin" />
        </div>
      )}
      {currentImage && (
        <img
          src={currentImage}
          alt={alt}
          className="w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  )
}
