"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  role: string
  description: string
  image: string
  fullBio?: string
}

export default function TeamMember({ name, role, description, image, fullBio }: TeamMemberProps) {
  const [expanded, setExpanded] = useState(false)
  const hasLongBio = fullBio && fullBio.length > 0

  // Check if the image is a URL or a local path
  const isExternalImage = image.startsWith("http")

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-t-4 border-t-jefferson-brightBlue">
      <div className="aspect-square overflow-hidden bg-gray-100">
        {isExternalImage ? (
          // For external images (Blob URLs)
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        ) : (
          // For local images
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-jefferson-deepBlue">{name}</h3>
        <p className="text-sm text-jefferson-brightBlue font-medium mt-1">{role}</p>
        {description && (
          <div className="mt-3 text-sm text-jefferson-slate">
            {expanded && hasLongBio ? <p>{fullBio}</p> : <p>{description}</p>}
            {hasLongBio && (
              <button className="jefferson-text-button mt-2" onClick={() => setExpanded(!expanded)}>
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
