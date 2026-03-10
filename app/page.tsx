import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import VideoPlayer from "@/components/video-player"
import AccomplishmentsBar from "@/components/accomplishments-bar"
import ScrollAnimation from "@/components/scroll-animation"
import { Suspense } from "react"
import SiteLayout from "@/components/site-layout"
import PointCloudViewer from "@/components/point-cloud-viewer"
import NewsletterSignup from "@/components/newsletter-signup"
import Acknowledgments from "@/components/acknowledgments"

// Loading fallback for video components
const VideoFallback = () => (
  <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-jefferson-deepBlue/50 flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-10 w-10 rounded-full bg-white/20"></div>
      <div className="mt-2 text-white/70 text-sm">Loading video...</div>
    </div>
  </div>
)

export default function Home() {
  // Use the new v02_view4 for the hero as requested
  const heroVideoUrl = "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/v02_view4.mp4"
  // Combined video for the multi-view demonstration
  const combinedVideoUrl = "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/views1-4.mp4"

  return (
    <SiteLayout>
      <section className="w-full py-8 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-5xl">
                Advanced Surface-Guided Radiation Therapy
              </h1>
              <p className="max-w-[600px] text-jefferson-brightBlue text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transforming surface guided radiation therapy with low-cost RGB cameras and neural networks for
                real-time patient tracking and internal anatomy estimation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-white text-white hover:bg-white hover:text-jefferson-deepBlue transition-colors font-semibold rounded-md"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-white/70 text-white/90 hover:border-white hover:text-white transition-colors font-semibold rounded-md"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation className="mx-auto w-full max-w-[500px]" delay={1}>
              <Suspense fallback={<VideoFallback />}>
                <VideoPlayer src={heroVideoUrl} />
              </Suspense>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <AccomplishmentsBar />

      <section id="overview" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <ScrollAnimation>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-jefferson-deepBlue">
                Project Overview
              </h2>
              <p className="max-w-[85%] leading-normal text-jefferson-slate sm:text-lg sm:leading-7 mt-4">
                Traditional surface-guided radiation therapy (SGRT) relies on fixed, expensive hardware with limited
                adaptability. Our approach replaces this with low-cost RGB cameras and neural networks, enabling
                real-time patient pose tracking and internal anatomy estimation from external surfaces.
              </p>
            </ScrollAnimation>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <ScrollAnimation>
              <FeatureCard
                icon="Target"
                title="Improved Access"
                description="Improves access to simulation-free treatment for ~50% of patients currently excluded"
                color="category-blue"
              />
            </ScrollAnimation>
            <ScrollAnimation delay={1}>
              <FeatureCard
                icon="Package"
                title="Reduced Clinic Visits"
                description="Leverages diagnostic CTs and video-based pose tracking to reduce clinic visits"
                color="category-yellow"
              />
            </ScrollAnimation>
            <ScrollAnimation delay={2}>
              <FeatureCard
                icon="Brain"
                title="Higher Precision"
                description="Models skeletal and soft tissue shifts using deformation models for higher precision"
                color="category-red"
              />
            </ScrollAnimation>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <ScrollAnimation>
              <p className="text-jefferson-slate">
                This innovation supports simulation-free workflows — eliminating the need for CT simulation in
                palliative treatment and reducing delays, burden, and cost.
              </p>
              <p className="text-jefferson-slate">
                This work builds on advanced computer vision techniques including SMPL-based modeling and pose
                estimation, applied in the context of real-world radiation oncology workflows.
              </p>
            </ScrollAnimation>
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-jefferson-deepBlue">Multi-View Demonstration</h3>
                <p className="text-jefferson-slate mt-2">
                  Simultaneous visualization of RGB, depth, pose tracking, and internal anatomy estimation
                </p>
              </div>
              <Suspense fallback={<VideoFallback />}>
                <VideoPlayer src={combinedVideoUrl} className="max-w-4xl mx-auto" />
              </Suspense>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="3d-viewer" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <ScrollAnimation>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-jefferson-deepBlue">
                3D Point Cloud Visualization
              </h2>
              <p className="max-w-[85%] leading-normal text-jefferson-slate sm:text-lg sm:leading-7 mt-4">
                Interactive 3D visualization for radiation therapy planning and analysis.
              </p>
            </ScrollAnimation>
          </div>

          <div className="mt-8 max-w-5xl mx-auto">
            <ScrollAnimation>
              <PointCloudViewer />
              <div className="mt-4 text-center">
                <Link href="/3d-viewer" className="jefferson-text-button">
                  View in full screen <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-jefferson-silver/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollAnimation>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-jefferson-deepBlue mb-6">
                Stay Updated
              </h2>
              <p className="text-jefferson-slate mb-6">
                Subscribe to our newsletter to receive the latest updates on our research, publications, and events. We
                regularly share insights on radiation therapy innovations, computer vision applications, and more.
              </p>
              <div className="max-w-md">
                <NewsletterSignup />
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-jefferson-deepBlue mb-2">Latest Publications</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-jefferson-brightBlue hover:underline">
                        Computer Vision for Patient Positioning in Radiation Therapy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-jefferson-brightBlue hover:underline">
                        Real-time Tracking of Internal Anatomy from Surface Motion
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-jefferson-brightBlue hover:underline">
                        Novel Contrast Agents for X-Ray Induced Acoustic CT
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-jefferson-deepBlue mb-2">Upcoming Events</h3>
                  <ul className="space-y-3">
                    <li className="text-jefferson-slate">
                      <span className="block text-jefferson-deepBlue font-medium">AAPM Annual Meeting</span>
                      July 14-18, 2024
                    </li>
                    <li className="text-jefferson-slate">
                      <span className="block text-jefferson-deepBlue font-medium">Research Symposium</span>
                      September 5, 2024
                    </li>
                    <li className="text-jefferson-slate">
                      <span className="block text-jefferson-deepBlue font-medium">
                        Workshop: AI in Radiation Therapy
                      </span>
                      October 12, 2024
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-silver">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <ScrollAnimation>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-jefferson-deepBlue">
                About the Team
              </h2>
              <p className="max-w-[85%] leading-normal text-jefferson-slate sm:text-lg sm:leading-7 mt-4">
                This research is led by Dr. David Thomas at the Thomas Lab, Jefferson Radiation Oncology. Our team
                includes experts in medical physics, computer science, and biomedical engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/team" className="jefferson-button w-full sm:w-auto">
                  Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/projects" className="jefferson-outline-button w-full sm:w-auto">
                  View Our Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Add the Acknowledgments section */}
      <Acknowledgments />
    </SiteLayout>
  )
}
