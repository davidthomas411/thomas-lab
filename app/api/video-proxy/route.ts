import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url")

  if (!url) {
    return new NextResponse("Missing URL parameter", { status: 400 })
  }

  try {
    const response = await fetch(url)

    if (!response.ok) {
      return new NextResponse(`Failed to fetch video: ${response.statusText}`, {
        status: response.status,
      })
    }

    // Get the response body as a readable stream
    const body = response.body
    if (!body) {
      return new NextResponse("No response body", { status: 500 })
    }

    // Create a new response with the video stream
    const newResponse = new NextResponse(body)

    // Copy all headers from the original response
    response.headers.forEach((value, key) => {
      newResponse.headers.set(key, value)
    })

    // Set CORS headers to allow cross-origin access
    newResponse.headers.set("Access-Control-Allow-Origin", "*")
    newResponse.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS")
    newResponse.headers.set("Access-Control-Allow-Headers", "Content-Type")

    return newResponse
  } catch (error) {
    console.error("Error proxying video:", error)
    return new NextResponse(`Error proxying video: ${error instanceof Error ? error.message : String(error)}`, {
      status: 500,
    })
  }
}
