import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Projects | Thomas Lab",
  description: "Explore our innovative research projects in radiation oncology.",
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
