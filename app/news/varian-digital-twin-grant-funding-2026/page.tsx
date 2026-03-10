import Link from "next/link"
import { ArrowLeft, Calendar, DollarSign, Share2 } from "lucide-react"
import SiteLayout from "@/components/site-layout"
import ScrollAnimation from "@/components/scroll-animation"

export default function VarianDigitalTwinGrantFunding2026Article() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <div className="inline-block text-jefferson-brightBlue text-sm font-medium mb-2 uppercase tracking-wider">
                Funding
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Grant Funding (03/2026): Investigator-Initiated Varian Support for AI Digital Twins
              </h1>
              <div className="flex items-center text-gray-300 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 2026</span>
              </div>
              <Link href="/news" className="jefferson-outline-button inline-flex">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to News
              </Link>
            </ScrollAnimation>
            <ScrollAnimation className="mx-auto w-full max-w-[500px]" delay={1}>
              <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-jefferson-deepBlue/50">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Varian+Digital+Twin+Funding+2026"
                  alt="Varian Digital Twin Funding"
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
                <div className="h-12 w-12 rounded-full bg-jefferson-voltGreen flex items-center justify-center text-jefferson-deepBlue">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-jefferson-deepBlue m-0">New Investigator-Initiated Funding</h2>
                  <p className="text-jefferson-slate m-0">Varian (Siemens Healthineers), March 2026</p>
                </div>
              </div>

              <p className="text-jefferson-slate">
                The Thomas Lab has received investigator-initiated research funding from Varian (Siemens
                Healthineers) to support a new project developing AI-driven digital twins of patients during radiation
                therapy.
              </p>

              <p className="text-jefferson-slate">
                This takes total lab funding to over $1M. The project goal is to use camera-based computer vision and
                modern AI models to build a real-time digital representation of patient anatomy during treatment.
                Digital twins can continuously track body position and motion to help ensure radiation is delivered
                safely and precisely.
              </p>

              <p className="text-jefferson-slate">
                We also expect this core technology to have broader applications in medicine and education, including
                clinical training and simulation.
              </p>

              <div className="my-8 p-6 bg-jefferson-silver rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-jefferson-deepBlue mb-2">
                  Abstract: Depth from Vision: Computer Vision for Anatomy-Aware SGRT
                </h3>
                <p className="text-jefferson-slate">
                  Our project evaluates the first TJU in-house-developed artificial intelligence (AI) algorithm
                  designed to reduce treatment-related side effects in cancer patients. Surface-guided radiotherapy
                  (SGRT) is used in breast cancer treatment to reduce radiation exposure to the heart and lungs by
                  tracking patient position and breathing during treatment.
                </p>
                <p className="text-jefferson-slate">
                  However, SGRT is inconsistently used due to high equipment costs, limited robustness, and reduced
                  positioning confidence. Approximately 40% of otherwise eligible patients cannot currently be treated
                  using SGRT systems. We have developed a novel AI and computer vision method that combines standard
                  cameras with a neural network to guide patient positioning during radiotherapy.
                </p>
                <p className="text-jefferson-slate">
                  This low-cost approach aims to improve positioning accuracy and broaden SGRT applicability to a more
                  diverse patient population. The proposed system uses multi-camera video acquired during routine CT
                  simulation and treatment to reconstruct patient motion and guide positioning during radiotherapy.
                </p>
                <p className="text-jefferson-slate mb-0">
                  These data will be used to evaluate agreement between the proposed approach and existing clinical
                  SGRT systems in measuring patient motion. Results from this work will support expansion of reliable
                  SGRT use across the Jefferson enterprise and inform future multi-site clinical studies.
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
