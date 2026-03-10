import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import LastUpdated from "@/components/last-updated"
import SocialShare from "@/components/social-share"
import PrintButton from "@/components/print-button"
import RelatedProjects from "@/components/related-projects"
import SiteLayout from "@/components/site-layout"
import ScrollAnimation from "@/components/scroll-animation"

export default function XACTDosimetryProject() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <div className="inline-block text-jefferson-brightBlue text-sm font-medium mb-2 uppercase tracking-wider">
                Imaging Technology
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                X-Ray Induced Acoustic CT (XACT) Dosimetry
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Developing a novel contrast agent for X-Ray Induced Acoustic CT (XACT) dosimetry, providing real-time
                in-vivo 3D calibrated radiation dose measurements.
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-47-29-sTpQKAqUyZNIjtM35Wnokb58jQH6n2.png"
                  alt="XACT Dosimetry - X-Ray Induced Acoustic CT visualization process"
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
              <LastUpdated date="2024-05-04" />
              <div className="flex items-center gap-4">
                <SocialShare title="X-Ray Induced Acoustic CT (XACT) Dosimetry" />
                <PrintButton />
              </div>
            </div>

            <ScrollAnimation className="space-y-8">
              <h2 className="text-2xl font-bold text-jefferson-deepBlue">Project Overview</h2>
              <p className="text-jefferson-slate">
                X-Ray Induced Acoustic Computed Tomography (XACT) is an emerging imaging modality that combines the
                principles of X-ray absorption and acoustic wave detection. Our research focuses on developing novel
                contrast agents for XACT to enable real-time, in-vivo 3D radiation dose measurements during radiation
                therapy.
              </p>

              <h2 className="text-2xl font-bold text-jefferson-deepBlue">The Challenge</h2>
              <p className="text-jefferson-slate">
                Current radiation dosimetry methods have significant limitations: they either provide point
                measurements, require post-treatment analysis, or cannot be used in-vivo. This makes real-time adaptive
                radiation therapy challenging, as clinicians cannot directly observe the actual dose distribution within
                the patient during treatment.
              </p>

              <h2 className="text-2xl font-bold text-jefferson-deepBlue">Our Approach</h2>
              <p className="text-jefferson-slate">We are developing a groundbreaking system that combines:</p>
              <ul className="list-disc pl-6 space-y-2 text-jefferson-slate">
                <li>Novel nanoparticle-based contrast agents that enhance the XACT signal</li>
                <li>Acoustic detection arrays optimized for clinical implementation</li>
                <li>Advanced reconstruction algorithms for real-time 3D dose visualization</li>
                <li>Integration with treatment planning systems for adaptive radiation therapy</li>
              </ul>

              <div className="bg-jefferson-deepBlue/5 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-jefferson-deepBlue mb-4">Technical Innovation</h3>
                <p className="text-jefferson-slate mb-4">
                  Our approach uses gold nanoparticles encapsulated in a vaporizable exoskeletal structure. When exposed
                  to radiation, these particles:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-jefferson-slate">
                  <li>Absorb radiation energy efficiently due to the high atomic number of gold</li>
                  <li>Convert this energy to heat, causing rapid thermal expansion</li>
                  <li>Generate detectable acoustic waves that can be captured by ultrasound transducers</li>
                  <li>Enable 3D reconstruction of the radiation dose distribution in real-time</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-jefferson-deepBlue">Expected Outcomes</h2>
              <p className="text-jefferson-slate">Our XACT dosimetry system aims to:</p>
              <ul className="list-disc pl-6 space-y-2 text-jefferson-slate">
                <li>Provide real-time 3D visualization of radiation dose distribution</li>
                <li>Enable adaptive radiation therapy based on actual delivered dose</li>
                <li>Improve treatment accuracy and reduce normal tissue complications</li>
                <li>Serve as a quality assurance tool for complex radiation treatments</li>
              </ul>

              <h2 className="text-2xl font-bold text-jefferson-deepBlue">Current Status</h2>
              <p className="text-jefferson-slate">
                This project is currently in the early experimental phase. We have successfully synthesized and tested
                several candidate contrast agents in phantom studies and are now preparing for pre-clinical testing.
              </p>

              <div className="mt-12 pt-6 border-t border-gray-200">
                <RelatedProjects currentProjectId="xact-dosimetry" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
