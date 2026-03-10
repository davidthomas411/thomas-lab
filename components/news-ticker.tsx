"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

interface NewsItem {
  id: string
  title: string
  date: string
}

export default function NewsTicker() {
  const [isPaused, setIsPaused] = useState(false)
  const tickerRef = useRef<HTMLDivElement>(null)

  const newsItems: NewsItem[] = [
    {
      id: "research-as-art-2026",
      title: "Dr. Mohamed Yousuf recognized in the 2026 Research as Art competition",
      date: "February 2026",
    },
    {
      id: "delaware-valley-aapm-young-investigators",
      title: "Dr. Mohamed Yousuf wins second place at AAPM Young Investigators Symposium",
      date: "March 2026",
    },
    {
      id: "welcome-mohamed-yousuf",
      title: "Welcome Dr. Mohamed Yousuf to the Thomas Lab as a post-doctoral fellow",
      date: "May 2025",
    },
    {
      id: "aapm-2024-awards",
      title: "Atharva Peshkar and Mohamed Eldib win awards for AAPM 2024",
      date: "May 06, 2024",
    },
    {
      id: "benchmarking-trial",
      title: "Benchmarking trial begins for Computer Vision patient alignment technique",
      date: "February 03, 2024",
    },
    {
      id: "new-project-funding",
      title: "Computer vision surface imaging breast DIBH project funded by CU Anschutz Cancer Center",
      date: "October 16, 2023",
    },
    {
      id: "best-in-physics",
      title: "Atharva Peshkar awarded 'BEST IN PHYSICS' at AAPM 2023",
      date: "May 12, 2023",
    },
  ]

  // Duplicate the items to create a seamless loop
  const duplicatedItems = [...newsItems, ...newsItems]

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  const scrollLeft = () => {
    if (tickerRef.current) {
      tickerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (tickerRef.current) {
      tickerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    if (isPaused || !tickerRef.current) return

    const tickerElement = tickerRef.current
    let animationId: number
    let lastTimestamp = 0
    const speed = 0.05 // pixels per millisecond

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const elapsed = timestamp - lastTimestamp
      lastTimestamp = timestamp

      if (!isPaused) {
        tickerElement.scrollLeft += speed * elapsed

        // Reset scroll position when we've scrolled through the first set of items
        if (tickerElement.scrollLeft >= tickerElement.scrollWidth / 2) {
          tickerElement.scrollLeft = 0
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isPaused])

  return (
    <div className="bg-tju-navy border-b border-white/10">
      <div className="container mx-auto px-4 py-2 flex items-center">
        <div className="mr-4 font-bold text-tju-lightblue whitespace-nowrap">NEWS:</div>
        <div
          ref={tickerRef}
          className="flex-1 overflow-hidden relative"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <div className="flex space-x-8 py-1">
            {duplicatedItems.map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                href={`/news/${item.id}`}
                className="text-white hover:text-tju-lightblue transition-colors whitespace-nowrap flex items-center"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-tju-lightblue mr-2"></span>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center ml-4 space-x-2">
          <button
            onClick={togglePause}
            className="p-1 hover:bg-white/10 rounded-full text-white"
            aria-label={isPaused ? "Play news ticker" : "Pause news ticker"}
          >
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
          </button>
          <button
            onClick={scrollLeft}
            className="p-1 hover:bg-white/10 rounded-full text-white"
            aria-label="Scroll news left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={scrollRight}
            className="p-1 hover:bg-white/10 rounded-full text-white"
            aria-label="Scroll news right"
          >
            <ChevronRight size={16} />
          </button>
          <Link
            href="/news"
            className="ml-2 text-xs uppercase tracking-wider text-white hover:text-tju-lightblue transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  )
}
