import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CollisionAvoidanceProject() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tju-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block text-tju-lightblue text-sm font-medium mb-2 uppercase tracking-wider">
                Safety Technology
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Computer Vision assisted Collision Avoidance for Radiation Therapy
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Computer vision combined with a novel skin-mesh model allows patient specific 'avatars' to detect and
                track patient positioning in real-time 3D during treatment.
              </p>
              <Button className="tju-outline-button" asChild>
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
            </div>
            <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border border-white/10 bg-tju-blue/50">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-42-53-kSq1RHeiw2bqYFXS2GVLAUdeLSOtNM.png"
                alt="Collision Avoidance Project"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-2xl font-bold text-tju-navy">Project Overview</h2>
            <p className="text-tju-gray">
              Collision avoidance is a critical safety concern in radiation therapy, where the linear accelerator gantry
              and other treatment components move around the patient. Our research focuses on developing an advanced
              computer vision system that creates patient-specific 3D models to prevent collisions during treatment.
            </p>

            <h2 className="text-2xl font-bold text-tju-navy">The Challenge</h2>
            <p className="text-tju-gray">
              Traditional collision avoidance systems rely on fixed safety margins and simplified patient models, which
              can be overly restrictive and may not account for patient-specific anatomy or positioning changes during
              treatment. This can lead to suboptimal treatment plans or unnecessary treatment interruptions.
            </p>

            <h2 className="text-2xl font-bold text-tju-navy">Our Approach</h2>
            <p className="text-tju-gray">We are developing a novel system that combines:</p>
            <ul className="list-disc pl-6 space-y-2 text-tju-gray">
              <li>Computer vision algorithms to capture the patient's external contour</li>
              <li>A deformable skin-mesh model that creates a patient-specific 'avatar'</li>
              <li>Real-time tracking of patient positioning during treatment</li>
              <li>Predictive collision detection that simulates gantry and couch movements before they occur</li>
            </ul>

            <h2 className="text-2xl font-bold text-tju-navy">Expected Outcomes</h2>
            <p className="text-tju-gray">Our collision avoidance system aims to:</p>
            <ul className="list-disc pl-6 space-y-2 text-tju-gray">
              <li>Enhance patient safety by preventing treatment machine collisions</li>
              <li>Enable more optimal treatment plans by reducing overly conservative safety margins</li>
              <li>Improve treatment workflow efficiency by reducing false collision warnings</li>
              <li>Provide real-time monitoring of patient position to detect potential safety issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-tju-navy">Current Status</h2>
            <p className="text-tju-gray">
              This project has completed initial validation in a clinical environment and is now being implemented in
              selected treatment rooms. We are collecting data on system performance and refining the algorithms based
              on clinical feedback.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
