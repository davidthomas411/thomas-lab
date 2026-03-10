"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import Link from "next/link"

// Define search result types
interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

export default function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = [
    {
      title: "Computer Vision enhanced Advanced Cone Beam CT",
      description: "Using 4D-CT and machine learning for bronchoscopy guidance",
      url: "/projects/computer-vision-enhanced-cone-beam-ct",
      category: "Projects",
    },
    {
      title: "Computer Vision assisted Collision Avoidance",
      description: "Patient-specific avatars for real-time 3D tracking",
      url: "/projects/computer-vision-collision-avoidance",
      category: "Projects",
    },
    {
      title: "Advanced Surface-Guided Radiation Therapy",
      description: "Low-cost RGB cameras and neural networks for patient tracking",
      url: "/projects/surface-guided-radiation-therapy",
      category: "Projects",
    },
    {
      title: "X-Ray Induced Acoustic CT (XACT) Dosimetry",
      description: "Novel contrast agent for real-time radiation dose measurements",
      url: "/projects/xact-dosimetry",
      category: "Projects",
    },
    {
      title: "Research as Art 2026 Recognition",
      description: "Dr. Mohamed Yousuf recognized in the 2026 Research as Art competition",
      url: "/news/research-as-art-2026",
      category: "News",
    },
    {
      title: "Second Place at AAPM Young Investigators Symposium",
      description:
        "Dr. Mohamed Yousuf earns second place at Delaware Valley Chapter AAPM Young Investigators Symposium",
      url: "/news/delaware-valley-aapm-young-investigators",
      category: "News",
    },
    {
      title: "Welcome Dr. Mohamed Yousuf",
      description: "Dr. Mohamed Yousuf joins the Thomas Lab as a post-doctoral fellow in May 2025",
      url: "/news/welcome-mohamed-yousuf",
      category: "News",
    },
    {
      title: "AAPM 2024 Awards",
      description: "Atharva Peshkar and Mohamed Eldib win awards for AAPM 2024",
      url: "/news/aapm-2024-awards",
      category: "News",
    },
    {
      title: "Benchmarking Trial",
      description: "Benchmarking trial for Computer Vision patient alignment technique",
      url: "/news/benchmarking-trial",
      category: "News",
    },
    {
      title: "Meet Our Team",
      description: "Learn about the researchers behind our innovative projects",
      url: "/team",
      category: "Pages",
    },
    {
      title: "3D Point Cloud Viewer",
      description: "Interactive visualization of 3D point cloud data",
      url: "/3d-viewer",
      category: "Tools",
    },
  ]

  // Handle search input changes
  const handleSearch = (query: string) => {
    setSearchQuery(query)

    if (query.trim() === "") {
      setResults([])
      return
    }

    setIsSearching(true)

    // Simulate search delay
    setTimeout(() => {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered)
      setIsSearching(false)
    }, 300)
  }

  // Clear search when dialog closes
  useEffect(() => {
    if (!open) {
      setSearchQuery("")
      setResults([])
    }
  }, [open])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search dialog on Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        onOpenChange(true)
      }

      // Close dialog on Escape
      if (e.key === "Escape" && open) {
        onOpenChange(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onOpenChange, open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden">
        <DialogHeader className="px-4 pt-4 pb-2">
          <DialogTitle className="text-lg font-medium flex items-center">
            <Search className="h-5 w-5 mr-2 text-jefferson-brightBlue" />
            Search
            <div className="ml-auto text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">ESC to close</div>
          </DialogTitle>
        </DialogHeader>

        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for projects, news, and more..."
              className="pl-10 pr-10 py-6 text-base"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => handleSearch("")}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto px-4 pb-4">
          {isSearching ? (
            <div className="py-8 text-center text-gray-500">
              <div className="animate-pulse">Searching...</div>
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y">
              {/* Group results by category */}
              {Array.from(new Set(results.map((r) => r.category))).map((category) => (
                <div key={category} className="py-3">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">{category}</h3>
                  <ul className="space-y-2">
                    {results
                      .filter((r) => r.category === category)
                      .map((result, index) => (
                        <li key={index}>
                          <Link
                            href={result.url}
                            className="block p-2 rounded-md hover:bg-gray-50 transition-colors"
                            onClick={() => onOpenChange(false)}
                          >
                            <div className="font-medium text-jefferson-deepBlue">{result.title}</div>
                            <div className="text-sm text-gray-500">{result.description}</div>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="py-8 text-center text-gray-500">No results found for "{searchQuery}"</div>
          ) : (
            <div className="py-4">
              <div className="text-sm text-gray-500 mb-3">Popular searches:</div>
              <div className="flex flex-wrap gap-2">
                {["SGRT", "Computer Vision", "XACT", "Dosimetry", "Collision Avoidance"].map((term) => (
                  <Button
                    key={term}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSearch(term)}
                    className="text-jefferson-deepBlue border-jefferson-brightBlue/30 hover:bg-jefferson-brightBlue/10"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
