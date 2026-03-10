import Link from "next/link"
import { ArrowLeft, ExternalLink, User, Globe, Github } from "lucide-react"
import SiteLayout from "@/components/site-layout"
import ScrollAnimation from "@/components/scroll-animation"

const linkedInProfileUrl = "https://www.linkedin.com/in/m7mdashraf/"
const linkedInPostUrl =
  "https://www.linkedin.com/posts/m7mdashraf_check-out-the-2026-research-as-art-exhibit-activity-7427542292246208512-CZI4"
const personalWebsiteUrl = "https://mohamedyousuf1.github.io/"
const githubProfileUrl = "https://github.com/mohamedyousuf1"
const linkedInProfileImage =
  "https://media.licdn.com/dms/image/v2/D5603AQG62ixS2V_pHw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719113565942?e=2147483647&v=beta&t=2erO9UGYkk0z6L2Lv1ja3bzMo1EIh3u3pwMMj4jBdeI"

export default function MohamedYousufPage() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12 items-start">
            <ScrollAnimation className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-xl border border-white/10 bg-jefferson-deepBlue/40">
                <img
                  src={linkedInProfileImage}
                  alt="Dr. Mohamed Yousuf"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2">
                <a
                  href={linkedInProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jefferson-outline-button inline-flex w-full justify-center"
                >
                  LinkedIn Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a
                  href={personalWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jefferson-outline-button inline-flex w-full justify-center"
                >
                  Personal Website
                  <Globe className="ml-2 h-4 w-4" />
                </a>
                <a
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jefferson-outline-button inline-flex w-full justify-center"
                >
                  GitHub
                  <Github className="ml-2 h-4 w-4" />
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation className="space-y-5" delay={1}>
              <div className="inline-block text-jefferson-brightBlue text-sm font-medium uppercase tracking-wider">
                Team Member
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dr. Mohamed Yousuf</h1>
              <p className="text-jefferson-brightBlue text-lg">Postdoctoral Fellow, Thomas Lab</p>
              <p className="text-gray-200 max-w-3xl">
                Dr. Mohamed Yousuf is a Postdoctoral Fellow in the Thomas Lab within the Radiation Oncology Department
                at Thomas Jefferson University. He earned his Ph.D. in Electrical and Computer Engineering from the
                University of Louisville and focuses on translating advanced AI into clinically practical radiation
                oncology tools.
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
                  <p className="text-jefferson-slate m-0">Current overview, projects, and profile links</p>
                </div>
              </div>

              <p className="text-jefferson-slate">
                As a Postdoctoral Fellow at Jefferson, Dr. Mohamed Yousuf bridges the gap between complex engineering
                and practical clinical applications in medical data. His current work centers on deep-learning tools
                for radiation oncology, including a novel marker-less 3D modeling system for Surface Guided Radiation
                Therapy (SGRT), digital twin approaches for tracking internal organ motion, and optimization of VMAT
                procedures.
              </p>

              <p className="text-jefferson-slate">
                He serves as a named investigator on a recent departmental grant and has been recognized for his
                innovative work with the Thomas Jefferson University Research as Art award (2026) and second place at
                the Delaware Valley Chapter AAPM Young Investigators Symposium (2026). His long-term goal is to push
                the boundaries of AI to improve the accuracy of cancer treatment and diagnostic imaging.
              </p>

              <div className="my-8 p-6 bg-jefferson-silver rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-jefferson-deepBlue mb-2">Profile Links</h3>
                <ul className="text-jefferson-slate mb-0 space-y-2">
                  <li>
                    <a
                      href={personalWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-jefferson-brightBlue hover:underline"
                    >
                      Website: mohamedyousuf1.github.io
                    </a>
                  </li>
                  <li>
                    <a
                      href={githubProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-jefferson-brightBlue hover:underline"
                    >
                      GitHub: github.com/mohamedyousuf1
                    </a>
                  </li>
                  <li>
                    <a
                      href={linkedInProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-jefferson-brightBlue hover:underline"
                    >
                      Profile: linkedin.com/in/m7mdashraf
                    </a>
                  </li>
                  <li>
                    <a
                      href={linkedInPostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-jefferson-brightBlue hover:underline"
                    >
                      Research as Art post
                    </a>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
