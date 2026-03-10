"use server"

import { put, list, del } from "@vercel/blob"
import { revalidatePath } from "next/cache"

export async function uploadVideo(formData: FormData) {
  const file = formData.get("file") as File

  if (!file) {
    return { error: "No file provided" }
  }

  try {
    // Create a path for the video based on its name
    const filename = file.name.replace(/\s+/g, "-").toLowerCase()
    const pathname = `videos/${filename}`

    // Upload the file to Vercel Blob
    const blob = await put(pathname, file, {
      access: "public",
      addRandomSuffix: false, // Use exact pathname
    })

    // Revalidate the paths that might display this video
    revalidatePath("/")
    revalidatePath("/admin")

    return { success: true, blob }
  } catch (error) {
    console.error("Error uploading video:", error)
    return { error: "Failed to upload video" }
  }
}

export async function listVideos() {
  try {
    const { blobs } = await list({ prefix: "videos/" })
    return { blobs }
  } catch (error) {
    console.error("Error listing videos:", error)
    return { error: "Failed to list videos", blobs: [] }
  }
}

export async function deleteVideo(url: string) {
  try {
    await del(url)
    revalidatePath("/")
    revalidatePath("/admin")
    return { success: true }
  } catch (error) {
    console.error("Error deleting video:", error)
    return { error: "Failed to delete video" }
  }
}
