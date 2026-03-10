"use client"

import { useState } from "react"
import { Twitter, Facebook, Linkedin, Link2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialShareProps {
  title: string
  url?: string
  className?: string
}

export default function SocialShare({ title, url, className = "" }: SocialShareProps) {
  const [copied, setCopied] = useState(false)

  // Get the current URL if not provided
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")

  // Encode the title and URL for sharing
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(shareUrl)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy URL: ", err)
    }
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="text-sm text-gray-500 mr-2">Share:</span>

      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 rounded-full"
        onClick={() => window.open(shareLinks.twitter, "_blank")}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-4 w-4 text-[#1DA1F2]" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 rounded-full"
        onClick={() => window.open(shareLinks.facebook, "_blank")}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4 text-[#4267B2]" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 rounded-full"
        onClick={() => window.open(shareLinks.linkedin, "_blank")}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4 text-[#0077B5]" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 rounded-full"
        onClick={copyToClipboard}
        aria-label={copied ? "URL copied" : "Copy URL"}
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Link2 className="h-4 w-4 text-gray-500" />}
      </Button>
    </div>
  )
}
