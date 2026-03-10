import Link from "next/link"
import { ArrowLeft, Calendar, DollarSign, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

export default function NewProjectFundingArticle() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tju-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <div className="inline-block text-tju-lightblue text-sm font-medium mb-2 uppercase tracking-wider">
                Funding
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">New project funding!</h1>
              <div className="flex items-center text-gray-300 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>October 16, 2023</span>
              </div>
              <Button className="tju-outline-button" asChild>
                <Link href="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to News
                </Link>
              </Button>
            </ScrollAnimation>
            <ScrollAnimation className="mx-auto w-full max-w-[500px]" delay={1}>
              <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-tju-blue/50">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Project+Funding"
                  alt="Project Funding"
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
                <div className="h-12 w-12 rounded-full bg-category-yellow flex items-center justify-center text-tju-navy">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-tju-navy m-0">Grant Success</h2>
                  <p className="text-tju-gray m-0">CU Anschutz Cancer Center funds innovative research project</p>
                </div>
              </div>

              <p className="text-tju-gray">
                Excited to announce that our computer vision surface imaging breast DIBH project has been funded by the
                CU Anschutz Cancer Center, with very positive reviews all round.
              </p>

              <blockquote className="border-l-4 border-tju-lightblue pl-4 italic text-tju-gray">
                "In an ongoing cross-institutional collaboration with the Department of Computer Science at CU Boulder
                and the Department of Bioengineering at CU Anschutz, we are using artificial intelligence (AI) and
                computer vision to improve real time patient alignment and tracking for breast cancer patients. This
                project, "Computer vision enhanced breast DIBH-RT", will allow improved protection of the heart and
                lungs, lowering the risk of cardiac and lung toxicity and reducing the risk of heart disease and lung
                cancer."
              </blockquote>

              <h3 className="text-xl font-bold text-tju-navy">Project Overview</h3>
              <p className="text-tju-gray">
                In this project we will develop, optimize, and quantify the clinical improvement from a pipeline for a
                patient-specific anatomical and posable skin surface model based on computer vision to enable
                'Avatar-guided DIBH-RT'. The integrated approaches of this study require specific expertise in radiation
                therapy, biomechanical modelling, and computer vision (a sub-discipline of artificial intelligence).
              </p>

              <p className="text-tju-gray">
                This research collaboration will build logically on our prior biomechanical motion tracking (Gaffney
                Lab), computer vision research (Gurari Lab) and tumor tracking research (Thomas Lab) to develop an
                'Avatar-guided DIBH-RT'.
              </p>

              <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-tju-navy mb-2">About DIBH-RT</h3>
                <p className="text-tju-gray mb-0">
                  Deep Inspiration Breath Hold Radiation Therapy (DIBH-RT) is a technique used during radiation
                  treatment for breast cancer. By having the patient take a deep breath and hold it during radiation
                  delivery, the heart is moved away from the chest wall, reducing radiation exposure to the heart and
                  lungs. Our computer vision approach aims to make this technique more precise and accessible.
                </p>
              </div>

              <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <span className="text-sm text-tju-gray mr-2">Share:</span>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Share on Twitter">
                      <Share2 className="h-4 w-4 text-tju-navy" />
                    </button>
                  </div>
                </div>
                <Link
                  href="/news"
                  className="text-tju-lightblue hover:text-tju-navy font-medium text-sm inline-flex items-center transition-colors"
                >
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
    </>
  )
}
