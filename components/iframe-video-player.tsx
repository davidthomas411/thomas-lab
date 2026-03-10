"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function IframeVideoPlayer({ src, className = "" }: { src: string; className?: string }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`aspect-video overflow-hidden rounded-xl border border-white/10 relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-jefferson-deepBlue/50 z-10">
          <Loader2 className="h-8 w-8 text-white animate-spin" />
        </div>
      )}

      <iframe
        src={src}
        className="w-full h-full"
        allow="autoplay; encrypted-media"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  )
}
