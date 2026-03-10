"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import VideoPlayer from "@/components/video-player"
import IframeVideoPlayer from "@/components/iframe-video-player"
import ProxyVideoPlayer from "@/components/proxy-video-player"

export default function VideoSolutionsPage() {
  const [selectedVideo, setSelectedVideo] = useState("view1")

  const videos = [
    { id: "view1", name: "View 1", url: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view1.mp4" },
    { id: "view2", name: "View 2", url: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view2.mp4" },
    { id: "view3", name: "View 3", url: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view3.mp4" },
    { id: "view4", name: "View 4", url: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view4.mp4" },
    {
      id: "v02_view4",
      name: "V02 View 4",
      url: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/v02_view4.mp4",
    },
    { id: "views1-4", name: "Views 1-4", url: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/views1-4.mp4" },
  ]

  const selectedVideoUrl = videos.find((v) => v.id === selectedVideo)?.url || videos[0].url

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Video Solutions</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Select Video</h2>
        <div className="flex flex-wrap gap-2">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video.id)}
              className={`px-3 py-1 rounded-md ${
                selectedVideo === video.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {video.name}
            </button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="standard">
        <TabsList className="mb-6">
          <TabsTrigger value="standard">Standard Player</TabsTrigger>
          <TabsTrigger value="iframe">Iframe Player</TabsTrigger>
          <TabsTrigger value="proxy">Proxy Player</TabsTrigger>
          <TabsTrigger value="direct">Direct URL</TabsTrigger>
        </TabsList>

        <TabsContent value="standard">
          <Card>
            <CardHeader>
              <CardTitle>Standard Video Player</CardTitle>
              <CardDescription>Uses the HTML5 video element with crossOrigin="anonymous"</CardDescription>
            </CardHeader>
            <CardContent>
              <VideoPlayer src={selectedVideoUrl} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="iframe">
          <Card>
            <CardHeader>
              <CardTitle>Iframe Video Player</CardTitle>
              <CardDescription>Loads the video in an iframe to bypass CORS restrictions</CardDescription>
            </CardHeader>
            <CardContent>
              <IframeVideoPlayer src={selectedVideoUrl} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="proxy">
          <Card>
            <CardHeader>
              <CardTitle>Proxy Video Player</CardTitle>
              <CardDescription>Uses a server-side proxy to fetch the video and add CORS headers</CardDescription>
            </CardHeader>
            <CardContent>
              <ProxyVideoPlayer src={selectedVideoUrl} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="direct">
          <Card>
            <CardHeader>
              <CardTitle>Direct URL</CardTitle>
              <CardDescription>Opens the video URL directly in a new tab</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg">
                <p className="mb-4 text-center">Click the button below to open the video URL directly in a new tab.</p>
                <a
                  href={selectedVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Open Video URL
                </a>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>CORS Issues Explained</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p>
              The error <code>ERR_BLOCKED_BY_RESPONSE.NotSameOriginAfterDefaultedToSameOriginByCoep</code> indicates
              that your browser is blocking the video due to Cross-Origin Resource Sharing (CORS) restrictions.
            </p>

            <h3>Solutions:</h3>

            <ol>
              <li>
                <strong>Configure CORS on Vercel Blob Storage:</strong> The best solution is to configure your Vercel
                Blob Storage to allow cross-origin requests from your website domain. This requires updating your Vercel
                Blob Storage configuration.
              </li>
              <li>
                <strong>Use a Server-Side Proxy:</strong> The "Proxy Player" tab demonstrates using a server-side proxy
                to fetch the video and add the necessary CORS headers.
              </li>
              <li>
                <strong>Host Videos on Your Own Domain:</strong> Upload the videos directly to your Next.js project's
                public directory to avoid cross-origin issues entirely.
              </li>
              <li>
                <strong>Use a Video Hosting Service:</strong> Services like YouTube, Vimeo, or Cloudinary handle CORS
                issues for you and provide embeddable players.
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
