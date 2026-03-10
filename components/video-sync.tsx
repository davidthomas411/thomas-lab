"use client"

import { useEffect, useRef, useState } from "react"

export default function VideoSync() {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const video3Ref = useRef<HTMLVideoElement>(null)
  const video4Ref = useRef<HTMLVideoElement>(null)

  const [videoStatus, setVideoStatus] = useState<Record<number, { loaded: boolean; error: boolean }>>({})

  // Direct URLs to the videos in Blob storage
  const videoUrls = [
    "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view1.mp4",
    "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view1.mp4",
    "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view1.mp4",
    "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view1.mp4",
  ]

  const handleVideoError = (index: number) => {
    console.error(`Error loading video ${index}: ${videoUrls[index]}`)
    setVideoStatus((prev) => ({
      ...prev,
      [index]: { ...prev[index], error: true },
    }))
  }

  const handleVideoLoaded = (index: number) => {
    console.log(`Video ${index} loaded successfully: ${videoUrls[index]}`)
    setVideoStatus((prev) => ({
      ...prev,
      [index]: { ...prev[index], loaded: true },
    }))
  }

  useEffect(() => {
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current, video4Ref.current].filter(
      Boolean,
    ) as HTMLVideoElement[]

    // Function to sync all videos to the first one
    const syncVideos = () => {
      const mainVideo = videos[0]
      if (!mainVideo) return

      videos.slice(1).forEach((video) => {
        if (Math.abs(video.currentTime - mainVideo.currentTime) > 0.3) {
          video.currentTime = mainVideo.currentTime
        }

        if (mainVideo.paused) {
          video.pause()
        } else {
          video.play().catch(() => {
            // Autoplay might be blocked
          })
        }
      })
    }

    // Set up event listeners for syncing
    videos.forEach((video) => {
      video.addEventListener("play", syncVideos)
      video.addEventListener("seeked", syncVideos)
    })

    // Try to start all videos
    videos.forEach((video) => {
      video.play().catch(() => {
        // Autoplay might be blocked
      })
    })

    // Periodic sync (not perfect but helps)
    const syncInterval = setInterval(syncVideos, 2000)

    return () => {
      clearInterval(syncInterval)
      videos.forEach((video) => {
        video.removeEventListener("play", syncVideos)
        video.removeEventListener("seeked", syncVideos)
      })
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 dark:bg-gray-800 relative">
        <video
          ref={video1Ref}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={videoUrls[0]}
          onError={() => handleVideoError(0)}
          onLoadedData={() => handleVideoLoaded(0)}
        >
          Your browser does not support the video tag.
        </video>
        {videoStatus[0]?.error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center p-4">
              <p className="text-red-500 font-medium">Video failed to load</p>
              <p className="text-sm text-gray-500 mt-2">View 1</p>
            </div>
          </div>
        )}
      </div>
      <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 dark:bg-gray-800 relative">
        <video
          ref={video2Ref}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={videoUrls[1]}
          onError={() => handleVideoError(1)}
          onLoadedData={() => handleVideoLoaded(1)}
        >
          Your browser does not support the video tag.
        </video>
        {videoStatus[1]?.error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center p-4">
              <p className="text-red-500 font-medium">Video failed to load</p>
              <p className="text-sm text-gray-500 mt-2">View 2</p>
            </div>
          </div>
        )}
      </div>
      <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 dark:bg-gray-800 relative">
        <video
          ref={video3Ref}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={videoUrls[2]}
          onError={() => handleVideoError(2)}
          onLoadedData={() => handleVideoLoaded(2)}
        >
          Your browser does not support the video tag.
        </video>
        {videoStatus[2]?.error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center p-4">
              <p className="text-red-500 font-medium">Video failed to load</p>
              <p className="text-sm text-gray-500 mt-2">View 3</p>
            </div>
          </div>
        )}
      </div>
      <div className="aspect-video overflow-hidden rounded-xl border bg-gray-100 dark:bg-gray-800 relative">
        <video
          ref={video4Ref}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={videoUrls[3]}
          onError={() => handleVideoError(3)}
          onLoadedData={() => handleVideoLoaded(3)}
        >
          Your browser does not support the video tag.
        </video>
        {videoStatus[3]?.error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center p-4">
              <p className="text-red-500 font-medium">Video failed to load</p>
              <p className="text-sm text-gray-500 mt-2">View 4</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
