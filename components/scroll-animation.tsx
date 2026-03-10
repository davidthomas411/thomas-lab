"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: 1 | 2 | 3
  threshold?: number
  once?: boolean
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip animation on mobile devices to improve performance
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, once])

  const delayClass = delay ? `scroll-animate-delay-${delay}` : ""

  return (
    <div ref={ref} className={`${className} ${isVisible ? "scroll-animate" : "opacity-0"} ${delayClass}`}>
      {children}
    </div>
  )
}
