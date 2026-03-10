import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ConeBeanCTProject() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-tju-navy text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block text-tju-lightblue text-sm font-medium mb-2 uppercase tracking-wider">
                Imaging Technology
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Computer Vision enhanced Advanced Cone Beam CT for Intraoperative Guidance
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Using our expertise with 4D-CT and a machine learning approach to motion modelling to improve current
                image-guided bronchoscopy guidance.
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-43-35-0bq2vo9X7FHzJrO9mfpHEmxsUM1Ep3.png"
                alt="Cone Beam CT Project"
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
              Cone Beam Computed Tomography (CBCT) is a valuable imaging technique used in various medical procedures,
              particularly in radiation therapy and interventional procedures. Our research focuses on enhancing CBCT
              with computer vision and machine learning techniques to improve intraoperative guidance during
              bronchoscopy procedures.
            </p>

            <h2 className="text-2xl font-bold text-tju-navy">The Challenge</h2>
            <p className="text-tju-gray">
              Current image-guided bronchoscopy systems face challenges in accurately tracking the bronchoscope's
              position within the complex bronchial tree, especially when dealing with respiratory motion and tissue
              deformation. This can lead to navigation errors and reduced procedural efficiency.
            </p>

            <h2 className="text-2xl font-bold text-tju-navy">Our Approach</h2>
            <p className="text-tju-gray">We are developing an advanced system that combines:</p>
            <ul className="list-disc pl-6 space-y-2 text-tju-gray">
              <li>4D-CT imaging to capture respiratory motion patterns</li>
              <li>Machine learning algorithms to model and predict tissue deformation</li>
              <li>Real-time computer vision techniques to enhance bronchoscopic navigation</li>
              <li>Registration methods that align pre-procedure CT images with intraoperative bronchoscopic video</li>
            </ul>

            <h2 className="text-2xl font-bold text-tju-navy">Expected Outcomes</h2>
            <p className="text-tju-gray">Our enhanced CBCT system aims to:</p>
            <ul className="list-disc pl-6 space-y-2 text-tju-gray">
              <li>Improve the accuracy of bronchoscope tracking within the airways</li>
              <li>Reduce procedure time and increase diagnostic yield</li>
              <li>Enhance the physician's ability to reach peripheral lung lesions</li>
              <li>Provide more precise guidance for biopsy and treatment delivery</li>
            </ul>

            <h2 className="text-2xl font-bold text-tju-navy">Current Status</h2>
            <p className="text-tju-gray">
              This project is currently in the development and validation phase. We are working with clinical partners
              to test our system in simulated environments before moving to clinical trials.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
