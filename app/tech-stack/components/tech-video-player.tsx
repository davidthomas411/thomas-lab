"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Loader2 } from "lucide-react"

interface TechVideoPlayerProps {
  src: string
  caption?: string
  className?: string
}

export default function TechVideoPlayer({ src, caption, className = "" }: TechVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleLoadedData = () => setIsLoading(false)
    const handleWaiting = () => setIsLoading(true)
    const handlePlaying = () => setIsLoading(false)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("waiting", handleWaiting)
    video.addEventListener("playing", handlePlaying)

    // Try to play the video
    video.play().catch(() => {
      // Autoplay might be blocked
      console.log("Autoplay prevented")
    })

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("waiting", handleWaiting)
      video.removeEventListener("playing", handlePlaying)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-blue-950/50">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-blue-950/70 z-10">
          <Loader2 className="h-10 w-10 text-blue-300 animate-spin" />
        </div>
      )}

      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${className}`}
        style={{ objectPosition: className.includes("object-top") ? "center top" : "center center" }}
        muted
        loop
        playsInline
        src={src}
      >
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-blue-950/80 to-transparent">
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="bg-blue-600/80 hover:bg-blue-500 text-white p-2 rounded-full transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          {caption && <span className="text-sm text-blue-200">{caption}</span>}
        </div>
      </div>
    </div>
  )
}
