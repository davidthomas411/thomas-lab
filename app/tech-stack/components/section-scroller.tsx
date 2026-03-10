"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function SectionScroller() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Safely get the section parameter
    const section = searchParams?.get("section")
    if (!section) return

    // Map sections to tabs
    const sectionToTabMap: Record<string, string> = {
      mocap: "mocap",
      easymocap: "mocap",
      depth: "depth-from-image",
      "video-depth-anything": "depth-from-image",
      body: "body-models",
      smpl: "body-models",
      skeleton: "skeleton",
      osso: "skeleton",
      skel: "skeleton",
      "soft-tissue": "soft-tissue",
      hit: "soft-tissue",
      "3d": "3d-reconstruction",
      mast3r: "3d-reconstruction",
      vggt: "3d-reconstruction",
      pipelines: "pipelines",
      hsmr: "pipelines",
      pose2sim: "pipelines",
    }

    const tabToActivate = sectionToTabMap[section.toLowerCase()] || "mocap"

    // Activate the tab with a slight delay to ensure DOM is ready
    setTimeout(() => {
      const tabTrigger = document.querySelector(`[data-state="inactive"][value="${tabToActivate}"]`)
      if (tabTrigger) {
        ;(tabTrigger as HTMLElement).click()
      }

      // Scroll to the section if needed
      setTimeout(() => {
        const sectionElement = document.getElementById(section)
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    }, 100)
  }, [searchParams])

  return null
}
