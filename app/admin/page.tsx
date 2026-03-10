"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Upload } from "lucide-react"
import { uploadVideo, listVideos, deleteVideo } from "../actions/blob-actions"
import Link from "next/link"

interface BlobVideo {
  url: string
  pathname: string
  size: number
  uploadedAt: string
}

export default function AdminPage() {
  const [videos, setVideos] = useState<BlobVideo[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchVideos()
  }, [])

  async function fetchVideos() {
    setIsLoading(true)
    const result = await listVideos()
    if (result.blobs) {
      setVideos(result.blobs)
    }
    setIsLoading(false)
  }

  async function handleUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsUploading(true)
    setMessage("")

    const form = event.currentTarget
    const formData = new FormData(form)

    const result = await uploadVideo(formData)

    if (result.error) {
      setMessage(`Error: ${result.error}`)
    } else if (result.success) {
      setMessage("Video uploaded successfully!")
      form.reset()
      fetchVideos()
    }

    setIsUploading(false)
  }

  async function handleDelete(url: string) {
    if (confirm("Are you sure you want to delete this video?")) {
      const result = await deleteVideo(url)
      if (result.success) {
        setVideos(videos.filter((video) => video.url !== url))
        setMessage("Video deleted successfully!")
      } else {
        setMessage(`Error: ${result.error}`)
      }
    }
  }

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Video Management</h1>
        <Button asChild variant="outline">
          <Link href="/">Back to Site</Link>
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upload New Video</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file">Select Video File</Label>
                <Input id="file" name="file" type="file" accept="video/mp4,video/webm,video/ogg" required />
                <p className="text-sm text-muted-foreground">Recommended: MP4 format, less than 50MB</p>
              </div>
              <Button type="submit" disabled={isUploading} className="w-full">
                {isUploading ? "Uploading..." : "Upload Video"}
                <Upload className="ml-2 h-4 w-4" />
              </Button>
              {message && (
                <p className={`text-sm ${message.includes("Error") ? "text-destructive" : "text-green-600"}`}>
                  {message}
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Uploaded Videos</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p>Loading videos...</p>
            ) : videos.length === 0 ? (
              <p>No videos uploaded yet.</p>
            ) : (
              <div className="space-y-4">
                {videos.map((video) => (
                  <div key={video.url} className="flex items-center justify-between border-b pb-2">
                    <div className="flex-1">
                      <p className="font-medium truncate">{video.pathname.replace("videos/", "")}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(video.uploadedAt).toLocaleDateString()} • {(video.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(video.url)} title="Delete video">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
