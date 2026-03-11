import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import TeamMember from "@/components/team-member"
import SiteLayout from "@/components/site-layout"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"

export default function TeamPage() {
  const currentMembers = [
    {
      name: "Dr. David Thomas, PhD, MS",
      role: "Associate Professor, Enterprise Director of Quality & Safety",
      description:
        "Lab PI leading translational AI, computer vision, and quality/safety innovation in radiation oncology.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DT-pZT10sennsexjbrxDbGFRAtrxEOD7P.webp",
      profileUrl: "/team/david-thomas",
      blobFaceId: "DT_1",
      linkedinUrl: "https://www.linkedin.com/in/david-thomas-b0550b39",
      githubUrl: "https://github.com/davidthomas411",
      websiteUrl: "https://thomas-lab.com",
    },
    {
      name: "Dr. Mohamed Yousuf",
      role: "Postdoctoral Fellow",
      description:
        "Postdoctoral Fellow developing AI-driven, marker-less 3D and digital twin methods for precision radiation oncology.",
      fullBio:
        "As a Postdoctoral Fellow in the Thomas Lab at Thomas Jefferson University, Dr. Mohamed Yousuf bridges complex engineering and practical clinical applications in medical data. He earned his Ph.D. in Electrical and Computer Engineering from the University of Louisville. His current research develops deep-learning tools for radiation oncology, including marker-less 3D modeling for SGRT, digital twin methods to track internal organ motion, and optimization strategies for VMAT workflows. He is a named investigator on a departmental grant and has been recognized with Thomas Jefferson University's 2026 Research as Art award and second place at the 2026 Delaware Valley Chapter AAPM Young Investigators Symposium.",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQG62ixS2V_pHw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719113565942?e=2147483647&v=beta&t=2erO9UGYkk0z6L2Lv1ja3bzMo1EIh3u3pwMMj4jBdeI",
      profileUrl: "/team/mohamed-yousuf",
      blobFaceId: "MY_1",
      linkedinUrl: "https://www.linkedin.com/in/m7mdashraf/",
      websiteUrl: "https://mohamedyousuf1.github.io/",
      githubUrl: "https://github.com/mohamedyousuf1",
    },
    {
      name: "Atharva Peshkar",
      role: "PhD Student, University of Colorado Boulder",
      description:
        "Researching AI-enhanced computer vision methods for patient alignment and surface-guided radiotherapy.",
      fullBio:
        "Hi, I'm Atharva Peshkar, a first year PhD student in the Department of Computer Science at the University of Colorado Boulder. I'm working on a project focused on computer vision assisted alignment for stereotactic body radiation therapy (SBRT). This involves developing an Artificial Intelligence (AI) enhanced computer-vision (CV) patient setup technique to improve the accuracy of surface-guided RT (SGRT) for abdominal SBRT. Through my research, I aim to bring the power of computer vision into the realm of medicine, unlocking new possibilities for diagnosis and treatment. Outside the lab, you'll often find me exploring scenic hiking trails around Boulder and experimenting with flavors in the kitchen.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AP-1A8GH17Ky1dnNe2CSYI2FzabJvrQvK.png",
      blobFaceId: "AP_1",
      profileUrl: "/team/atharva-peshkar",
    },
  ]

  const previousMembers = [
    {
      name: "Mohamed Eldib",
      role: "Former Postdoctoral Fellow",
      description:
        "Contributed to translational medical physics research and AI-enabled radiation oncology projects.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ME.jfif-vkIYgE4ftdYPYB1Cl9zck90u0oIZU9.jpeg",
      blobFaceId: "ME_1",
    },
    {
      name: "William Frantz",
      role: "PhD Student",
      description:
        "First year Ph.D. student at the University of Colorado Boulder in the Biomedical Engineering Program.",
      image: "/images/WillFranz.png",
      blobFaceId: "WF_1",
    },
    {
      name: "Brian Shaver",
      role: "Senior Bioengineering student",
      description: "Senior Bioengineering student in the BS/MS program at CU Denver",
      image: "/images/BrianShaver.png",
      blobFaceId: "BS_1",
    },
    {
      name: "Farnoush Forghani-Arani, Ph.D.",
      role: "Former Postdoctoral Fellow",
      description:
        "Now Faculty Medical Physicist at Washington University in St. Louis; previously a medical physics resident there.",
      image: "/images/farnoush-forghani-arani.jpg",
      blobFaceId: "FF_1",
    },
    {
      name: "Melton Parham",
      role: "Former PhD Student",
      description: "Contributed to collaborative lab research projects.",
      image: "/placeholder.svg?height=300&width=300&text=MP",
      blobFaceId: "MP_1",
    },
  ]

  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h1>
              <p className="max-w-[600px] text-jefferson-brightBlue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our lab brings together experts in medical physics, computer science, and biomedical engineering to
                advance radiation oncology through innovative research.
              </p>
              <Link href="/" className="jefferson-outline-button inline-flex">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </ScrollAnimation>
            <ScrollAnimation className="mx-auto w-full max-w-[500px]" delay={1}>
              <Card className="jefferson-card text-white">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Thomas Lab</h2>
                    <p className="text-jefferson-brightBlue">Department of Radiation Oncology</p>
                    <p className="text-gray-300">Jefferson University</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-jefferson-deepBlue">
                Current Lab Members
              </h2>
              <p className="max-w-[85%] leading-normal text-jefferson-slate sm:text-lg sm:leading-7">
                Our team of researchers, students, and staff working on cutting-edge radiation oncology research.
              </p>
            </ScrollAnimation>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {currentMembers.map((member, index) => (
              <ScrollAnimation key={index} delay={(index % 3) as 1 | 2 | 3}>
                <TeamMember
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  fullBio={member.fullBio}
                  image={member.image}
                  profileUrl={member.profileUrl}
                  blobFaceId={member.blobFaceId}
                  linkedinUrl={member.linkedinUrl}
                  websiteUrl={member.websiteUrl}
                  githubUrl={member.githubUrl}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-silver">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-jefferson-deepBlue">
                Previous Lab Members
              </h2>
              <p className="max-w-[85%] leading-normal text-jefferson-slate sm:text-lg sm:leading-7">
                Former team members who have contributed to our research and moved on to new opportunities.
              </p>
            </ScrollAnimation>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {previousMembers.map((member, index) => (
              <ScrollAnimation key={index} delay={(index % 3) as 1 | 2 | 3}>
                <TeamMember
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  image={member.image}
                  blobFaceId={member.blobFaceId}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
