"use client"

import Link from "next/link"
import { Globe, Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import FaceTracker from "@/components/face-tracker"

interface TeamMemberProps {
  name: string
  role: string
  description: string
  image: string
  fullBio?: string
  profileUrl?: string
  blobFaceId?: string
  linkedinUrl?: string
  websiteUrl?: string
  githubUrl?: string
}

export default function TeamMember({
  name,
  role,
  description,
  image,
  profileUrl,
  blobFaceId,
  linkedinUrl,
  websiteUrl,
  githubUrl,
}: TeamMemberProps) {
  const hasLinks = Boolean(linkedinUrl || websiteUrl || githubUrl)
  const isProfileCard = Boolean(profileUrl)

  return (
    <Card
      className={`group relative flex h-full flex-col overflow-hidden border-2 border-transparent bg-white/95 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-jefferson-brightBlue hover:shadow-xl ${
        isProfileCard ? "cursor-pointer" : ""
      }`}
    >
      {profileUrl && (
        <Link
          href={profileUrl}
          className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jefferson-brightBlue/80 focus-visible:ring-offset-2"
          aria-label={`Open ${name} bio`}
        />
      )}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-jefferson-deepBlue/5 to-jefferson-brightBlue/10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-44 w-44 overflow-hidden rounded-full ring-4 ring-white shadow-xl transition-transform duration-300 group-hover:scale-105">
            {blobFaceId ? (
              <FaceTracker
                blobFaceId={blobFaceId}
                fallbackImage={image}
                alt={name}
                size={176}
                className="rounded-full"
              />
            ) : (
              <img src={image || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
            )}
          </div>
        </div>
      </div>
      <CardContent className="relative z-20 flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-jefferson-deepBlue">{name}</h3>
        <p className="mt-1 text-sm font-medium text-jefferson-brightBlue">{role}</p>
        {description && <p className="mt-3 text-sm leading-relaxed text-jefferson-slate">{description}</p>}

        <div className="mt-auto pt-4">
          {hasLinks && (
            <div className="flex flex-wrap gap-2">
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-jefferson-brightBlue/40 bg-jefferson-brightBlue/10 px-2.5 py-1.5 text-xs font-medium text-jefferson-deepBlue transition-colors hover:bg-jefferson-brightBlue/20"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  LinkedIn
                </a>
              )}
              {websiteUrl && (
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-jefferson-brightBlue/40 bg-jefferson-brightBlue/10 px-2.5 py-1.5 text-xs font-medium text-jefferson-deepBlue transition-colors hover:bg-jefferson-brightBlue/20"
                >
                  <Globe className="h-3.5 w-3.5" />
                  Website
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-jefferson-brightBlue/40 bg-jefferson-brightBlue/10 px-2.5 py-1.5 text-xs font-medium text-jefferson-deepBlue transition-colors hover:bg-jefferson-brightBlue/20"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
