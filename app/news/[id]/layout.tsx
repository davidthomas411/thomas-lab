import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News | Thomas Lab",
  description: "Latest news and achievements from the Thomas Lab.",
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
