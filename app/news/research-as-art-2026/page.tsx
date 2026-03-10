import Link from "next/link"
import { ArrowLeft, Calendar, Award, Share2 } from "lucide-react"
import SiteLayout from "@/components/site-layout"
import ScrollAnimation from "@/components/scroll-animation"

export default function ResearchAsArt2026Article() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <div className="inline-block text-jefferson-brightBlue text-sm font-medium mb-2 uppercase tracking-wider">
                Awards
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Research as Art 2026 Recognition
              </h1>
              <div className="flex items-center text-gray-300 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>February 2026</span>
              </div>
              <Link href="/news" className="jefferson-outline-button inline-flex">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </ScrollAnimation>
            <ScrollAnimation className="mx-auto w-full max-w-[500px]" delay={1}>
              <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-jefferson-deepBlue/50">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Research+as+Art+2026"
                  alt="Research as Art 2026"
                  className="h-full w-full object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollAnimation className="prose prose-lg max-w-none">
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 rounded-full bg-jefferson-red flex items-center justify-center text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-jefferson-deepBlue m-0">Creativity in Research</h2>
                  <p className="text-jefferson-slate m-0">
                    Celebrating scientific communication through visual storytelling
                  </p>
                </div>
              </div>

              <p className="text-jefferson-slate">
                Congratulations to Dr. Mohamed Yousuf for receiving recognition in the 2026 Research as Art
                competition. The entry showcased the visual side of advanced radiation therapy research and highlighted
                how technical work can be communicated to broader audiences.
              </p>

              <p className="text-jefferson-slate">
                This achievement reflects the lab&apos;s commitment to combining scientific rigor with clear, engaging
                communication.
              </p>

              <div className="my-8 p-6 bg-jefferson-silver rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-jefferson-deepBlue mb-2">Announcement</h3>
                <p className="text-jefferson-slate mb-0">
                  View Dr. Yousuf&apos;s announcement post on{" "}
                  <a
                    href="https://www.linkedin.com/posts/m7mdashraf_check-out-the-2026-research-as-art-exhibit-activity-7427542292246208512-CZI4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAgVnHUBc1udUPnr41BMni6WNpbpGN1FnvU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-jefferson-brightBlue hover:underline"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </div>

              <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <span className="text-sm text-jefferson-slate mr-2">Share:</span>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Share on social media">
                      <Share2 className="h-4 w-4 text-jefferson-deepBlue" />
                    </button>
                  </div>
                </div>
                <Link href="/news" className="jefferson-text-button">
                  View All News
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
