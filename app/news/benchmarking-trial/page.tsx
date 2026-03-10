import Link from "next/link"
import { ArrowLeft, Calendar, FileText, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

export default function BenchmarkingTrialArticle() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tju-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <div className="inline-block text-tju-lightblue text-sm font-medium mb-2 uppercase tracking-wider">
                Research
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benchmarking Trial begins</h1>
              <div className="flex items-center text-gray-300 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>February 03, 2024</span>
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
                  src="/placeholder.svg?height=400&width=600&text=Benchmarking+Trial"
                  alt="Benchmarking Trial"
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
                <div className="h-12 w-12 rounded-full bg-category-blue flex items-center justify-center text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-tju-navy m-0">Research Progress</h2>
                  <p className="text-tju-gray m-0">Validating our computer vision approach against gold standards</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-tju-navy">Marker based IR Tracking</h3>
              <p className="text-tju-gray">
                We've started the process of benchmarking our Computer Vision patient alignment technique against the
                current gold standard - IR-marker motion tracking.
              </p>

              <p className="text-tju-gray">
                In a 20 heathy-volunteer study, we will quantify and benchmark our AI technique using optical only
                imaging. Each volunteer will participate in a gold standard marker-based motion capture collection in
                the Interdisciplinary Movement Science Laboratory on the Anschutz Medical Campus.
              </p>

              <h3 className="text-xl font-bold text-tju-navy">Study Methodology</h3>
              <p className="text-tju-gray">
                We record whole-body motion during replication of clinical breast RT positioning during free breathing,
                thoracic DIBH, and abdominal DIBH. Motion will be captured using 3-D position data from reflective
                markers measured from 10 infrared cameras (Fs = 100 Hz) (the gold standard for motion tracking).
              </p>

              <p className="text-tju-gray">
                Simultaneously, we will acquire artificial intelligence (AI) human pose tracking using 6-10 synchronized
                cameras. The accuracy of our technique will be quantified against the motion capture gold-standard, and
                the optimum positioning and minimum number of cameras required to match current state of the art
                positioning accuracy will be identified.
              </p>

              <p className="text-tju-gray">
                In a second optical-only imaging study, the volunteers will be imaged with current state-of-the-art
                surface guided imaging, with simultaneous AI human pose tracking will be recorded, and the resulting
                measurements compared.
              </p>

              <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-tju-navy mb-2">Research Impact</h3>
                <p className="text-tju-gray mb-0">
                  This benchmarking study is a critical step in validating our computer vision approach for clinical
                  use. By directly comparing our method against the current gold standard, we can quantify the accuracy,
                  precision, and reliability of our technique. This data will be essential for regulatory approval and
                  clinical implementation, potentially leading to more accessible and effective patient positioning
                  systems for radiation therapy.
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
