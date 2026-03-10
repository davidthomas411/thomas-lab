import Link from "next/link"
import { ArrowLeft, Calendar, Award, Share2 } from "lucide-react"
import SiteLayout from "@/components/site-layout"
import ScrollAnimation from "@/components/scroll-animation"

export default function BestInPhysicsArticle() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <div className="inline-block text-jefferson-brightBlue text-sm font-medium mb-2 uppercase tracking-wider">
                Awards
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Best in Physics award!</h1>
              <div className="flex items-center text-gray-300 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>May 12, 2023</span>
              </div>
              <Link href="/news" className="jefferson-outline-button inline-flex">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </ScrollAnimation>
            <ScrollAnimation className="mx-auto w-full max-w-[500px]" delay={1}>
              <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-jefferson-deepBlue/50">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Best+in+Physics"
                  alt="Best in Physics Award"
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
                  <h2 className="text-xl font-bold text-jefferson-deepBlue m-0">Top 1% of Submissions</h2>
                  <p className="text-jefferson-slate m-0">Recognized for excellence in medical physics research</p>
                </div>
              </div>

              <p className="text-jefferson-slate">
                Exciting news on our Computer Vision project to share: our CU Boulder Computer Science graduate student
                Atharva Peshkar has been awarded &quot;BEST IN PHYSICS&quot; for his very first submission to AAPM
                (annual conference for the American Association of Physics in Medicine).
              </p>

              <p className="text-jefferson-slate">
                Best in Physics is awarded to the top 15 abstracts (5 from each category) out of typically &gt;2200
                submissions, so Atharva&apos;s abstract was scored in the top &lt;1% of submissions, and he&apos;ll
                present at a special session for the award.
              </p>

              <p className="text-jefferson-slate">
                This speaks to the potential and excitement of this work in our field, as well as Atharva&apos;s hard
                work so far. It certainly bodes well for us to secure funding to move the project further along!
              </p>

              <div className="my-8 p-6 bg-jefferson-silver rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-jefferson-deepBlue mb-2">About the Research</h3>
                <p className="text-jefferson-slate mb-0">
                  Atharva&apos;s research focuses on computer vision applications in radiation therapy, specifically
                  developing novel approaches to improve patient positioning and tracking during treatment. His
                  award-winning abstract demonstrated significant improvements in accuracy and efficiency compared to
                  current clinical standards.
                </p>
              </div>

              <h3 className="text-xl font-bold text-jefferson-deepBlue">Impact on the Field</h3>
              <p className="text-jefferson-slate">
                This recognition highlights the innovative nature of our lab&apos;s approach to combining computer
                science with medical physics. The techniques developed by Atharva have the potential to improve
                treatment accuracy, reduce setup time, and ultimately enhance patient outcomes in radiation therapy.
              </p>

              <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <span className="text-sm text-jefferson-slate mr-2">Share:</span>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Share on Twitter">
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
