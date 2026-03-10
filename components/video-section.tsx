"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VideoSection() {
  const [activeTab, setActiveTab] = useState("view1")
  const [videoStatus, setVideoStatus] = useState<Record<string, { loaded: boolean; error: boolean }>>({})

  const handleVideoError = (videoId: string) => {
    console.error(`Error loading video: ${videoId}`)
    setVideoStatus((prev) => ({
      ...prev,
      [videoId]: { ...prev[videoId], error: true },
    }))
  }

  const handleVideoLoaded = (videoId: string) => {
    console.log(`Video loaded successfully: ${videoId}`)
    setVideoStatus((prev) => ({
      ...prev,
      [videoId]: { ...prev[videoId], loaded: true },
    }))
  }

  // Define videos with direct URLs
  const videos = [
    {
      id: "view1",
      title: "RGB Camera View",
      description: "Real-time tracking of patient position and movement using RGB camera input.",
      src: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view1.mp4",
    },
    {
      id: "view2",
      title: "Depth Camera View",
      description: "Depth sensing data used for precise surface mapping and contour detection.",
      src: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view2.mp4",
    },
    {
      id: "view3",
      title: "Pose Tracking View",
      description: "SMPL-based modeling and pose estimation for precise radiation therapy targeting.",
      src: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view3.mp4",
    },
    {
      id: "view4",
      title: "Internal Anatomy Estimation",
      description: "Neural network-based estimation of internal anatomy from external surface data.",
      src: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view4.mp4",
    },
  ]

  return (
    <div className="mt-12 space-y-8">
      <Tabs defaultValue="view1" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          {videos.map((video) => (
            <TabsTrigger key={video.id} value={video.id}>
              {video.id.replace("view", "View ")}
            </TabsTrigger>
          ))}
        </TabsList>
        {videos.map((video) => (
          <TabsContent key={video.id} value={video.id} className="mt-6">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    src={video.src}
                    onError={() => handleVideoError(video.id)}
                    onLoadedData={() => handleVideoLoaded(video.id)}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {videoStatus[video.id]?.error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                      <div className="text-center p-4">
                        <p className="text-red-500 font-medium">Video failed to load</p>
                        <p className="text-sm text-gray-500 mt-2">{video.title}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="grid grid-cols-2 gap-6">
        {videos.map((video) => (
          <Card
            key={video.id}
            className={`cursor-pointer transition-all ${activeTab === video.id ? "ring-2 ring-primary" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}
            onClick={() => setActiveTab(video.id)}
          >
            <CardContent className="p-4">
              <div className="aspect-video overflow-hidden rounded-lg mb-3 relative">
                <video
                  className="h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay={activeTab === video.id}
                  src={video.src}
                  onError={() => handleVideoError(video.id)}
                  onLoadedData={() => handleVideoLoaded(video.id)}
                >
                  Your browser does not support the video tag.
                </video>
                {videoStatus[video.id]?.error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                    <div className="text-center p-4">
                      <p className="text-red-500 font-medium">Video failed to load</p>
                      <p className="text-sm text-gray-500 mt-2">{video.title}</p>
                    </div>
                  </div>
                )}
              </div>
              <h4 className="font-medium text-sm">{video.title}</h4>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
