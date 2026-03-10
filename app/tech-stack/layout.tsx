import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tech Stack | Thomas Lab",
  description: "The technology stack powering Thomas Lab's research and applications",
}

export default function TechStackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}
