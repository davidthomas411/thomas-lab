import Link from "next/link"
import { ArrowLeft, Calendar, Award, Share2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"

export default function MedPhysSlam() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tju-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <div className="inline-block text-tju-lightblue text-sm font-medium mb-2 uppercase tracking-wider">
                Awards
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Med Phys Slam winner!</h1>
              <div className="flex items-center text-gray-300 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>June 22, 2023</span>
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
                  src="/placeholder.svg?height=400&width=600&text=Med+Phys+Slam"
                  alt="Med Phys Slam"
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
                  <h2 className="text-xl font-bold text-tju-navy m-0">Communication Excellence</h2>
                  <p className="text-tju-gray m-0">Recognizing the ability to explain complex research clearly</p>
                </div>
              </div>

              <p className="text-tju-gray">
                Please join me in once again congratulating our CU Boulder Computer Science graduate student Atharva
                Peshkar, who has won first prize in the AAPM Rocky Mountain Chapter 'Med Phys Slam' competition. Atharva
                will represent our local chapter at the AAPM annual meeting in Houston.
              </p>

              <p className="text-tju-gray">
                The Slam competition will be on Sunday 7/23 at 4pm – if you are attending the conference, please stop by
                the session and cheer on Atharva!
              </p>

              <div className="my-8 aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Sn8N0qlpQ_M"
                  title="Atharva Peshkar Med Phys Slam"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <p className="text-tju-gray">Well done, Atharva!</p>

              <h3 className="text-xl font-bold text-tju-navy">About the Med Phys Slam</h3>
              <p className="text-tju-gray">
                The Med Phys Slam is a competition where participants have just 3 minutes to present their research in
                an engaging, accessible way that can be understood by people without a background in medical physics.
                Competitors are judged on their ability to communicate complex scientific concepts clearly and
                engagingly.
              </p>

              <p className="text-tju-gray">
                This competition highlights the importance of science communication and the ability to translate
                technical research into language that resonates with broader audiences, including patients, healthcare
                administrators, and policymakers.
              </p>

              <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-tju-navy mb-2">Atharva's Research</h3>
                <p className="text-tju-gray mb-4">
                  Atharva's presentation focused on his work developing computer vision techniques for improving patient
                  positioning during radiation therapy. His approach uses AI to create patient-specific "avatars" that
                  can track movement in real-time, potentially improving treatment accuracy and patient safety.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=Sn8N0qlpQ_M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tju-lightblue hover:text-tju-navy font-medium inline-flex items-center"
                >
                  Watch Atharva's presentation
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
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
