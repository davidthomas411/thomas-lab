import Link from "next/link"
import { ArrowLeft, User } from "lucide-react"
import SiteLayout from "@/components/site-layout"
import ScrollAnimation from "@/components/scroll-animation"
import FaceTracker from "@/components/face-tracker"

const profileImageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AP-1A8GH17Ky1dnNe2CSYI2FzabJvrQvK.png"

export default function AtharvaPeshkarPage() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12 items-start">
            <ScrollAnimation className="space-y-4">
              <div className="flex justify-center lg:justify-start">
                <FaceTracker
                  blobFaceId="AP_1"
                  fallbackImage={profileImageUrl}
                  alt="Atharva Peshkar"
                  size={280}
                  className="rounded-xl border border-white/10 bg-jefferson-deepBlue/40"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation className="space-y-5" delay={1}>
              <div className="inline-block text-jefferson-brightBlue text-sm font-medium uppercase tracking-wider">
                Team Member
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Atharva Peshkar</h1>
              <p className="text-jefferson-brightBlue text-lg">PhD Student</p>
              <p className="text-gray-200 max-w-3xl">
                Atharva is a first-year PhD student in the Department of Computer Science at the University of
                Colorado Boulder, working on AI-enabled computer vision for radiation oncology.
              </p>
              <Link href="/team" className="jefferson-outline-button inline-flex">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <ScrollAnimation className="prose prose-lg max-w-none">
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 rounded-full bg-jefferson-brightBlue flex items-center justify-center text-jefferson-deepBlue">
                  <User className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-jefferson-deepBlue m-0">Bio & Research Focus</h2>
                  <p className="text-jefferson-slate m-0">Computer vision and AI for SGRT</p>
                </div>
              </div>

              <p className="text-jefferson-slate">
                Atharva&apos;s research is focused on computer vision-assisted alignment for stereotactic body
                radiation therapy (SBRT). His work develops AI-enhanced patient setup methods designed to improve the
                accuracy and robustness of surface-guided radiotherapy (SGRT), particularly for abdominal SBRT.
              </p>

              <p className="text-jefferson-slate">
                By combining practical clinical workflow needs with modern computer vision methods, his work aims to
                improve treatment precision while broadening access to advanced image-guided radiation therapy tools.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
