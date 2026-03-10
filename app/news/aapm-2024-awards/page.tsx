import Link from "next/link"
import { ArrowLeft, Calendar, Award, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

export default function AAPM2024AwardsArticle() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tju-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <div className="inline-block text-tju-lightblue text-sm font-medium mb-2 uppercase tracking-wider">
                Awards
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AAPM 2024 Awards!</h1>
              <div className="flex items-center text-gray-300 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>May 06, 2024</span>
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
                  src="/placeholder.svg?height=400&width=600&text=AAPM+2024+Awards"
                  alt="AAPM 2024 Awards"
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
                <div className="h-12 w-12 rounded-full bg-category-red flex items-center justify-center text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-tju-navy m-0">Prestigious Recognition</h2>
                  <p className="text-tju-gray m-0">Two researchers honored for excellence in medical physics</p>
                </div>
              </div>

              <p className="text-tju-gray">
                I'd like to share my congratulations to our physics/computer science trainees Atharva Peshkar (PhD
                student) and Mohamed Eldib (post-doc fellow) who have both won awards for their research at this year's
                AAPM 2024 annual meeting:
              </p>

              <h3 className="text-xl font-bold text-tju-navy">Science Council Session Award</h3>
              <p className="text-tju-gray">
                Atharva has been selected as a winner of the Science Council Session 'Innovations in Medical Physics'
                award for his work on 'avatar guided RT' - "This award recognizes outstanding scientific abstracts on a
                topic identified by the Science Council as being at the frontier of medical physics."
              </p>
              <p className="text-tju-gray">
                <strong>Title:</strong> "Analysis of the Accuracy of Computer Vision Assisted Surface-Guided Radiation
                Therapy"
              </p>

              <h3 className="text-xl font-bold text-tju-navy">Blue Ribbon Poster</h3>
              <p className="text-tju-gray">
                Eldib has been selected for a Blue Ribbon Poster for his work designing and testing a novel contrast
                agent for MV x-rays – "Blue Ribbon is awarded to the highest scored and most interesting posters."
              </p>
              <p className="text-tju-gray">
                <strong>Title:</strong> "Development of Vaporizable Exoskeletal Droplets with Gold Nanoparticles for Use
                As a Theragnostic Contrast Agent for Radiation Therapy"
              </p>

              <p className="text-tju-gray">
                If you are attending the conference in LA in July, please stop by the either the Science Council Session
                or the Blue Ribbon Poster area, and show support for them both at the award ceremony.
              </p>

              <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-tju-navy mb-2">About AAPM</h3>
                <p className="text-tju-gray mb-0">
                  The American Association of Physicists in Medicine (AAPM) is a scientific and professional
                  organization dedicated to ensuring accuracy, safety, and quality in the use of radiation in medical
                  procedures such as medical imaging and radiation therapy. The annual meeting brings together thousands
                  of medical physicists, researchers, and clinicians to share the latest advances in the field.
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
