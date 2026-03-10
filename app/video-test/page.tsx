"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, AlertCircle, CheckCircle, Info } from "lucide-react"

export default function VideoTestPage() {
  const [results, setResults] = useState<
    Record<
      string,
      {
        status: string
        error?: string
        contentType?: string
        contentLength?: string
        playable?: boolean
        playError?: string
      }
    >
  >({})
  const [loading, setLoading] = useState(true)
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})

  // List of video URLs to test
  const videoUrls = [
    "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view1.mp4",
    "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view2.mp4",
    "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view3.mp4",
    "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/view4.mp4",
  ]

  useEffect(() => {
    const testVideos = async () => {
      const newResults: Record<string, any> = {}

      for (const url of videoUrls) {
        try {
          const response = await fetch(url, { method: "HEAD" })
          if (response.ok) {
            newResults[url] = {
              status: "Available",
              contentType: response.headers.get("Content-Type"),
              contentLength: response.headers.get("Content-Length"),
              error: undefined,
            }
          } else {
            newResults[url] = {
              status: "Error",
              error: `HTTP ${response.status}: ${response.statusText}`,
            }
          }
        } catch (error) {
          newResults[url] = {
            status: "Error",
            error: error instanceof Error ? error.message : String(error),
          }
        }
      }

      setResults(newResults)
      setLoading(false)
    }

    testVideos()
  }, [])

  const handleVideoError = (url: string, e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget
    setResults((prev) => ({
      ...prev,
      [url]: {
        ...prev[url],
        playable: false,
        playError: video.error ? `Error ${video.error.code}: ${video.error.message}` : "Unknown error",
      },
    }))
  }

  const handleVideoLoaded = (url: string) => {
    setResults((prev) => ({
      ...prev,
      [url]: {
        ...prev[url],
        playable: true,
      },
    }))
  }

  const forceDownload = async (url: string) => {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const blob = await response.blob()
      const filename = url.split("/").pop() || "video.mp4"

      const a = document.createElement("a")
      a.href = URL.createObjectURL(blob)
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } catch (error) {
      console.error("Download failed:", error)
      alert(`Download failed: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  const testDirectPlay = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Video URL Test</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Troubleshooting Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <p className="font-medium">Browser Information:</p>
                <p className="text-sm text-gray-600">{navigator.userAgent}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-md">
                <h3 className="font-medium mb-2">Common Issues:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>CORS policy blocking video playback</li>
                  <li>Unsupported video codec or format</li>
                  <li>Incorrect Content-Type header</li>
                  <li>Video file corruption</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-md">
                <h3 className="font-medium mb-2">Recommended Actions:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Try direct download to verify file integrity</li>
                  <li>Test in different browsers</li>
                  <li>Check browser console for errors</li>
                  <li>Try direct URL in a new tab</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="flex items-center justify-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
          <p>Testing video URLs...</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {videoUrls.map((url, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  {results[url]?.status === "Available" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  )}
                  Video {index + 1}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 break-all">
                      <strong>URL:</strong> {url}
                    </p>
                    <p
                      className={`font-medium ${results[url]?.status === "Available" ? "text-green-600" : "text-red-600"}`}
                    >
                      Status: {results[url]?.status}
                    </p>
                    {results[url]?.error && <p className="text-red-500 mt-2">{results[url].error}</p>}
                  </div>

                  {results[url]?.status === "Available" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p>
                            <strong>Content-Type:</strong>
                          </p>
                          <p
                            className={
                              results[url]?.contentType?.includes("video") ? "text-green-600" : "text-yellow-600"
                            }
                          >
                            {results[url]?.contentType || "Not available"}
                          </p>
                        </div>
                        <div>
                          <p>
                            <strong>Content-Length:</strong>
                          </p>
                          <p>
                            {results[url]?.contentLength
                              ? `${Math.round((Number.parseInt(results[url]?.contentLength) / 1024 / 1024) * 100) / 100} MB`
                              : "Not available"}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Test Playback:</h3>
                        <video
                          ref={(el) => (videoRefs.current[url] = el)}
                          className="w-full max-h-[200px] object-cover border rounded-md"
                          controls
                          muted
                          src={url}
                          onError={(e) => handleVideoError(url, e)}
                          onLoadedData={() => handleVideoLoaded(url)}
                        >
                          Your browser does not support the video tag.
                        </video>

                        {results[url]?.playError && (
                          <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                            <p>
                              <strong>Playback Error:</strong> {results[url]?.playError}
                            </p>
                          </div>
                        )}

                        {results[url]?.playable && (
                          <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm">
                            <p>Video loaded successfully and is playable!</p>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" onClick={() => forceDownload(url)}>
                          Download Video
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => testDirectPlay(url)}>
                          Open Direct URL
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
