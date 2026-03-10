"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Award, FileText, DollarSign, Calendar } from "lucide-react"

interface Accomplishment {
  id: string
  title: string
  date: string
  icon: "award" | "conference" | "funding" | "research"
  color: string
}

export default function AccomplishmentsBar() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const accomplishments: Accomplishment[] = [
    {
      id: "best-in-physics",
      title: "Best in Physics award at AAPM 2023",
      date: "May 12, 2023",
      icon: "award",
      color: "category-red",
    },
    {
      id: "aapm-2024-awards",
      title: "Atharva Peshkar and Mohamed Eldib win awards for AAPM 2024",
      date: "May 06, 2024",
      icon: "award",
      color: "category-red",
    },
    {
      id: "new-project-funding",
      title: "Computer vision project funded by CU Anschutz Cancer Center",
      date: "October 16, 2023",
      icon: "funding",
      color: "category-yellow",
    },
    {
      id: "med-phys-slam",
      title: "First prize in AAPM Rocky Mountain Chapter 'Med Phys Slam'",
      date: "June 22, 2023",
      icon: "award",
      color: "category-red",
    },
    {
      id: "benchmarking-trial",
      title: "Benchmarking trial begins for Computer Vision technique",
      date: "February 03, 2024",
      icon: "research",
      color: "category-blue",
    },
  ]

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "award":
        return <Award className="h-6 w-6" />
      case "conference":
        return <FileText className="h-6 w-6" />
      case "funding":
        return <DollarSign className="h-6 w-6" />
      case "research":
        return <FileText className="h-6 w-6" />
      default:
        return <Award className="h-6 w-6" />
    }
  }

  const getColor = (color: string) => {
    switch (color) {
      case "category-red":
        return "bg-jefferson-red text-white"
      case "category-blue":
        return "bg-jefferson-brightBlue text-jefferson-deepBlue"
      case "category-yellow":
        return "bg-jefferson-voltGreen text-jefferson-deepBlue"
      default:
        return "bg-jefferson-brightBlue text-jefferson-deepBlue"
    }
  }

  const scrollLeft = () => {
    resetAutoplayTimer()
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    } else {
      setActiveIndex(accomplishments.length - 1)
    }
  }

  const scrollRight = () => {
    resetAutoplayTimer()
    if (activeIndex < accomplishments.length - 1) {
      setActiveIndex(activeIndex + 1)
    } else {
      setActiveIndex(0)
    }
  }

  const resetAutoplayTimer = () => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current)
    }

    if (autoplay) {
      autoplayTimeoutRef.current = setTimeout(() => {
        scrollRight()
      }, 8000) // 8 seconds per slide
    }
  }

  useEffect(() => {
    resetAutoplayTimer()
    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current)
      }
    }
  }, [activeIndex, autoplay])

  const handleDotClick = (index: number) => {
    resetAutoplayTimer()
    setActiveIndex(index)
  }

  return (
    <div className="bg-gradient-to-r from-jefferson-deepBlue to-jefferson-deepBlue/80 py-8 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Recent Accomplishments</h2>
          <a href="/news" className="jefferson-text-button">
            View All News
          </a>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2 text-white"
            aria-label="Previous accomplishment"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="overflow-hidden relative" style={{ height: "280px" }}>
            <div className="h-full">
              {accomplishments.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col justify-between border border-white/10 mx-12">
                    <div>
                      <div className="flex items-center mb-4">
                        <div
                          className={`h-12 w-12 rounded-full ${getColor(item.color)} flex items-center justify-center`}
                        >
                          {getIcon(item.icon)}
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center text-gray-300 text-sm">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-300">
                        {item.id === "best-in-physics"
                          ? "Awarded to the top 15 abstracts out of 2200+ submissions, placing in the top 1% of all research presented at the conference."
                          : item.id === "aapm-2024-awards"
                            ? "Both researchers recognized for outstanding contributions in medical physics, with awards for innovation and excellence."
                            : item.id === "new-project-funding"
                              ? "Secured funding for computer vision surface imaging breast DIBH project with very positive reviews from the Cancer Center."
                              : item.id === "med-phys-slam"
                                ? "Won first prize in the competition and represented the Rocky Mountain Chapter at the AAPM annual meeting in Houston."
                                : "Started benchmarking our Computer Vision patient alignment technique against the current gold standard IR-marker motion tracking."}
                      </p>
                    </div>
                    <div className="mt-6">
                      <a href={`/news/${item.id}`} className="jefferson-outline-button">
                        Read Full Story
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2 text-white"
            aria-label="Next accomplishment"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-6">
          {accomplishments.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full mx-1 transition-all ${
                index === activeIndex ? "bg-jefferson-brightBlue scale-110" : "bg-white/30"
              }`}
              aria-label={`Go to accomplishment ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
