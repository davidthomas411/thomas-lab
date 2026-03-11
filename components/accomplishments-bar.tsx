"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Award, FileText, DollarSign, Calendar } from "lucide-react"
import FaceTracker from "@/components/face-tracker"

interface RelatedPerson {
  name: string
  blobFaceId: string
  fallbackImage?: string
}

interface Accomplishment {
  id: string
  title: string
  date: string
  icon: "award" | "conference" | "funding" | "research"
  color: string
  description: string
  relatedPeople?: RelatedPerson[]
}

export default function AccomplishmentsBar() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const accomplishments: Accomplishment[] = [
    {
      id: "varian-digital-twin-grant-funding-2026",
      title: "Varian investigator-initiated grant funding awarded",
      date: "March 2026",
      icon: "funding",
      color: "category-yellow",
      description:
        "Investigator-initiated funding from Varian (Siemens Healthineers) supports a new AI-driven patient digital twin project and brings total Thomas Lab funding to over $1M.",
      relatedPeople: [
        {
          name: "Dr. David Thomas",
          blobFaceId: "DT_1",
          fallbackImage:
            "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/faces/DT_1/gaze_px0p0_py0p0_256.webp",
        },
        {
          name: "Dr. Mohamed Yousuf",
          blobFaceId: "MY_1",
          fallbackImage:
            "https://media.licdn.com/dms/image/v2/D5603AQG62ixS2V_pHw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719113565942?e=2147483647&v=beta&t=2erO9UGYkk0z6L2Lv1ja3bzMo1EIh3u3pwMMj4jBdeI",
        },
      ],
    },
    {
      id: "delaware-valley-aapm-young-investigators",
      title: "Second place at AAPM Young Investigators Symposium",
      date: "March 2026",
      icon: "award",
      color: "category-red",
      description:
        "Awarded second place at the Delaware Valley Chapter AAPM Young Investigators Symposium for a talk on computer vision for SGRT.",
      relatedPeople: [
        {
          name: "Dr. Mohamed Yousuf",
          blobFaceId: "MY_1",
          fallbackImage:
            "https://media.licdn.com/dms/image/v2/D5603AQG62ixS2V_pHw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719113565942?e=2147483647&v=beta&t=2erO9UGYkk0z6L2Lv1ja3bzMo1EIh3u3pwMMj4jBdeI",
        },
      ],
    },
    {
      id: "research-as-art-2026",
      title: "Research as Art 2026 recognition",
      date: "February 2026",
      icon: "award",
      color: "category-red",
      description:
        "Recognized for a compelling visual entry in the 2026 Research as Art competition, highlighting the creative side of radiation therapy research.",
      relatedPeople: [
        {
          name: "Dr. Mohamed Yousuf",
          blobFaceId: "MY_1",
          fallbackImage:
            "https://media.licdn.com/dms/image/v2/D5603AQG62ixS2V_pHw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719113565942?e=2147483647&v=beta&t=2erO9UGYkk0z6L2Lv1ja3bzMo1EIh3u3pwMMj4jBdeI",
        },
      ],
    },
    {
      id: "welcome-mohamed-yousuf",
      title: "Welcome Dr. Mohamed Yousuf to the lab",
      date: "May 2025",
      icon: "conference",
      color: "category-blue",
      description:
        "Dr. Mohamed Yousuf joined the Thomas Lab as a post-doctoral fellow to advance computer vision and surface-guided radiation therapy research.",
      relatedPeople: [
        {
          name: "Dr. Mohamed Yousuf",
          blobFaceId: "MY_1",
          fallbackImage:
            "https://media.licdn.com/dms/image/v2/D5603AQG62ixS2V_pHw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719113565942?e=2147483647&v=beta&t=2erO9UGYkk0z6L2Lv1ja3bzMo1EIh3u3pwMMj4jBdeI",
        },
      ],
    },
    {
      id: "best-in-physics",
      title: "Best in Physics award at AAPM 2023",
      date: "May 12, 2023",
      icon: "award",
      color: "category-red",
      description:
        "Awarded to the top 15 abstracts out of 2200+ submissions, placing in the top 1% of all research presented at the conference.",
      relatedPeople: [
        {
          name: "Atharva Peshkar",
          blobFaceId: "AP_1",
          fallbackImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AP-1A8GH17Ky1dnNe2CSYI2FzabJvrQvK.png",
        },
      ],
    },
    {
      id: "aapm-2024-awards",
      title: "Atharva Peshkar and Mohamed Eldib win awards for AAPM 2024",
      date: "May 06, 2024",
      icon: "award",
      color: "category-red",
      description:
        "Both researchers recognized for outstanding contributions in medical physics, with awards for innovation and excellence.",
      relatedPeople: [
        {
          name: "Atharva Peshkar",
          blobFaceId: "AP_1",
          fallbackImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AP-1A8GH17Ky1dnNe2CSYI2FzabJvrQvK.png",
        },
        {
          name: "Mohamed Eldib",
          blobFaceId: "ME_1",
          fallbackImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ME.jfif-vkIYgE4ftdYPYB1Cl9zck90u0oIZU9.jpeg",
        },
      ],
    },
    {
      id: "new-project-funding",
      title: "Computer vision project funded by CU Anschutz Cancer Center",
      date: "October 16, 2023",
      icon: "funding",
      color: "category-yellow",
      description:
        "Secured funding for computer vision surface imaging breast DIBH project with very positive reviews from the Cancer Center.",
    },
  ]
  const activeItem = accomplishments[activeIndex]
  const featuredPerson = activeItem.relatedPeople?.[0] ?? {
    name: "Dr. David Thomas",
    blobFaceId: "DT_1",
    fallbackImage: "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/faces/DT_1/gaze_px0p0_py0p0_256.webp",
  }

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

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_240px] gap-5 items-stretch">
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2 text-white"
              aria-label="Previous accomplishment"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="overflow-hidden relative" style={{ height: "340px" }}>
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
                        <p className="text-gray-300">{item.description}</p>
                        {item.relatedPeople && item.relatedPeople.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.relatedPeople.map((person) => (
                              <div
                                key={`${item.id}-${person.blobFaceId}`}
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2 py-1 border border-white/15"
                              >
                                <FaceTracker
                                  blobFaceId={person.blobFaceId}
                                  fallbackImage={person.fallbackImage}
                                  alt={person.name}
                                  size={28}
                                  className="rounded-full ring-1 ring-white/40"
                                />
                                <span className="text-xs text-gray-200">{person.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
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

          <div className="h-[340px] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 flex flex-col items-center justify-center">
            <FaceTracker
              blobFaceId={featuredPerson.blobFaceId}
              fallbackImage={featuredPerson.fallbackImage}
              alt={featuredPerson.name}
              size={180}
              className="rounded-2xl ring-1 ring-white/25 shadow-md"
            />
            <div className="mt-3 text-center">
              <div className="text-sm font-semibold text-white">{featuredPerson.name}</div>
              <div className="text-xs text-gray-300">Featured in this update</div>
            </div>
          </div>
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
