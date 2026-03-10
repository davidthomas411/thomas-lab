"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface BackgroundOption {
  name: string
  className: string
  description: string
}

export default function BackgroundShowcase() {
  const [selectedBg, setSelectedBg] = useState<string>("jefferson-clean-bg")

  const backgroundOptions: BackgroundOption[] = [
    {
      name: "Clean Gradient",
      className: "jefferson-clean-bg",
      description: "A smooth gradient from deep blue to a slightly lighter blue.",
    },
    {
      name: "Wave Pattern",
      className: "jefferson-wave-bg",
      description: "Subtle wave pattern at the bottom of the background.",
    },
    {
      name: "Dot Pattern",
      className: "jefferson-dots-bg",
      description: "Small dots creating a subtle texture across the background.",
    },
    {
      name: "Noise Texture",
      className: "jefferson-noise-bg",
      description: "Subtle noise texture for a more organic feel.",
    },
    {
      name: "Diagonal Pattern",
      className: "jefferson-diagonal-bg",
      description: "Geometric diagonal pattern for a more structured look.",
    },
    {
      name: "Gradient Mesh",
      className: "jefferson-mesh-bg",
      description: "Light grid lines creating a mesh effect.",
    },
    {
      name: "Animated Gradient",
      className: "jefferson-animated-bg",
      description: "Slowly shifting colors for a dynamic background.",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {backgroundOptions.map((option) => (
          <Button
            key={option.className}
            variant={selectedBg === option.className ? "default" : "outline"}
            className="h-auto py-2 px-3 flex flex-col items-center text-center"
            onClick={() => setSelectedBg(option.className)}
          >
            <span className="font-medium">{option.name}</span>
          </Button>
        ))}
      </div>

      <div
        className={`${selectedBg} rounded-xl p-8 text-white min-h-[300px] flex flex-col justify-center items-center`}
      >
        <h3 className="text-2xl font-bold mb-4">
          Background Preview: {backgroundOptions.find((o) => o.className === selectedBg)?.name}
        </h3>
        <p className="text-center max-w-md">{backgroundOptions.find((o) => o.className === selectedBg)?.description}</p>
        <div className="mt-6">
          <code className="bg-black/20 px-3 py-1 rounded-md text-sm">className="{selectedBg}"</code>
        </div>
      </div>
    </div>
  )
}
