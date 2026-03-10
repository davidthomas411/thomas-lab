"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    setIsScrolling(true)

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    // Reset scrolling state after animation completes
    setTimeout(() => {
      setIsScrolling(false)
    }, 500)
  }

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""} ${isScrolling ? "scrolling" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      disabled={isScrolling}
    >
      <span className="sr-only">Back to top</span>
      <ChevronUp size={20} />
    </button>
  )
}
