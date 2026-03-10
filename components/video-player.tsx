"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function VideoPlayer({ src, className = "" }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Event listeners for video state
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)
    const handleLoadedData = () => setIsLoading(false)
    const handleWaiting = () => setIsLoading(true)
    const handlePlaying = () => setIsLoading(false)

    video.addEventListener("play", handlePlay)
    video.addEventListener("playing", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)
    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("waiting", handleWaiting)
    video.addEventListener("playing", handlePlaying)

    // Preload the video
    video.preload = "auto"

    // Try to play the video
    const playPromise = video.play()

    // Handle autoplay failures
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error("Autoplay prevented:", error)
        // We'll still show the video with controls so user can play manually
      })
    }

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("playing", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("waiting", handleWaiting)
      video.removeEventListener("playing", handlePlaying)
    }
  }, [])

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video error:", e, "Source:", src)
    setHasError(true)
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
        <div className="h-full w-full flex items-center justify-center text-white">
          <p>Video could not be loaded</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
          onError={handleError}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}
