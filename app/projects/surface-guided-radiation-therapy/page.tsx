import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import SiteLayout from "@/components/site-layout"
import ScrollAnimation from "@/components/scroll-animation"

// Loading fallback for video components
const VideoFallback = () => (
  <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-jefferson-deepBlue/50 flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-10 w-10 rounded-full bg-white/20"></div>
      <div className="mt-2 text-white/70 text-sm">Loading video...</div>
    </div>
  </div>
)

export default function SGRTProject() {
  const videoUrl = "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/v02_view4.mp4"

  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <div className="inline-block text-jefferson-brightBlue text-sm font-medium mb-2 uppercase tracking-wider">
                Treatment Technology
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Advanced Surface-Guided Radiation Therapy
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transforming surface guided radiation therapy with low-cost RGB cameras and neural networks for
                real-time patient tracking and internal anatomy estimation.
              </p>
              <Button className="jefferson-outline-button" asChild>
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
            </ScrollAnimation>
            <ScrollAnimation className="mx-auto w-full max-w-[500px]" delay={1}>
              <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-jefferson-deepBlue/50">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-44-07-VS5BrHcB8Eui7BwyuXr6Pug55kYx03.png"
                  alt="Surface-Guided Radiation Therapy Project"
                  className="h-full w-full object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <ScrollAnimation>
              <h2 className="text-2xl font-bold text-jefferson-deepBlue">Project Overview</h2>
              <p className="text-jefferson-slate">
                Surface-Guided Radiation Therapy (SGRT) is an advanced technique that uses optical surface imaging to
                monitor patient positioning and motion during radiation treatment. Our research focuses on developing a
                next-generation SGRT system using low-cost RGB cameras and advanced neural networks.
              </p>
            </ScrollAnimation>

            <ScrollAnimation>
              <h2 className="text-2xl font-bold text-jefferson-deepBlue">The Challenge</h2>
              <p className="text-jefferson-slate">
                Traditional SGRT systems rely on expensive, proprietary hardware with limited adaptability. These
                systems often cannot account for internal anatomy movement based on external surface changes, leading to
                potential targeting inaccuracies during treatment.
              </p>
            </ScrollAnimation>

            <ScrollAnimation>
              <h2 className="text-2xl font-bold text-jefferson-deepBlue">Our Approach</h2>
              <p className="text-jefferson-slate">We are developing an innovative system that combines:</p>
              <ul className="list-disc pl-6 space-y-2 text-jefferson-slate">
                <li>Low-cost RGB cameras for external surface tracking</li>
                <li>Neural networks for real-time patient pose estimation</li>
                <li>Deformation models that correlate external surfaces with internal anatomy</li>
                <li>
                  Machine learning algorithms that predict internal organ movement based on external surface changes
                </li>
              </ul>
            </ScrollAnimation>

            <ScrollAnimation>
              <h2 className="text-2xl font-bold text-jefferson-deepBlue">Expected Outcomes</h2>
              <p className="text-jefferson-slate">Our advanced SGRT system aims to:</p>
              <ul className="list-disc pl-6 space-y-2 text-jefferson-slate">
                <li>Improve access to simulation-free treatment for ~50% of patients currently excluded</li>
                <li>Reduce the number of required clinic visits by leveraging diagnostic CTs</li>
                <li>Enhance treatment precision by modeling skeletal and soft tissue shifts</li>
                <li>Lower the cost of SGRT implementation, making it accessible to more clinics</li>
              </ul>
            </ScrollAnimation>

            <ScrollAnimation>
              <h2 className="text-2xl font-bold text-jefferson-deepBlue">Current Status</h2>
              <p className="text-jefferson-slate">
                This project is in active development with promising initial results. We have successfully demonstrated
                the feasibility of using RGB cameras for surface tracking and are now refining our neural network models
                for internal anatomy estimation.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
