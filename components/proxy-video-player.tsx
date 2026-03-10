"use client"

import { useState, useRef, useEffect } from "react"
import { Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProxyVideoPlayer({ src, className = "" }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)
  const [errorDetails, setErrorDetails] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  // Create a proxy URL that will be handled by our API route
  const proxyUrl = `/api/video-proxy?url=${encodeURIComponent(src)}`

  // Extract video ID from URL for poster image
  const videoId = src.split("/").pop()?.split(".")[0] || "video"
  const posterUrl = `/images/posters/${videoId}_poster.jpg`

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
    }

    const handleError = () => {
      setHasError(true)
      setIsLoading(false)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  const openDirectUrl = () => {
    window.open(src, "_blank")
  }

  return (
    <div
      className={`aspect-video overflow-hidden rounded-xl border border-white/10 bg-jefferson-deepBlue/30 relative ${className}`}
    >
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-jefferson-deepBlue/50 z-10">
          <Loader2 className="h-8 w-8 text-white animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className="h-full w-full flex flex-col items-center justify-center text-white p-4">
          <AlertCircle className="h-10 w-10 text-red-400 mb-2" />
          <p className="text-center mb-2">Video could not be loaded</p>
          <p className="text-xs text-center text-gray-300 mb-4 max-w-md">{errorDetails}</p>
          <Button size="sm" variant="outline" onClick={openDirectUrl}>
            Open Direct URL
          </Button>
        </div>
      ) : (
        <video ref={videoRef} className="h-full w-full object-cover" muted loop playsInline controls poster={posterUrl}>
          <source src={proxyUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
