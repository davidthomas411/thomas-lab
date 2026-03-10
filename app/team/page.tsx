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
        "Lab PI at the Bodine Center for Cancer Treatment, leading research combining AI and computer vision.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DT-pZT10sennsexjbrxDbGFRAtrxEOD7P.webp",
    },
    {
      name: "Mohamed Eldib",
      role: "Current Postdoctoral Fellow",
      description:
        "Postdoctoral fellow in the Department of Radiation Oncology at the University of Colorado since March 2021.",
      fullBio:
        "Mohamed Eldib is a postdoctoral fellow in the Department of Radiation Oncology at the University of Colorado since March 2021. In 2011, he received his B.S. degree in Systems and Biomedical Engineering from Cairo University in Egypt. In 2019, he received his Ph.D. degree in Biomedical Engineering from Kyung Hee University in S. Korea with the best thesis award. He worked for the Radiological Sciences Dept. at the University of California (UCI) as a postdoctoral fellow, where his research focused on the development of X-Ray Induced Acoustic CT (XACT) and Proton Induced Acoustic Imaging (PAI) for radiological imaging and radiation oncology. Also, he has contributions in developing advanced algorithms for CT artifacts correction such as ring artifacts, motion artifacts, and metal artifacts, in addition, CT geometry calibration. His research at Anschutz Medical Campus focused on developing a 2D anti-scatter grid to improve CBCT images visualization without compromising the image features. Eldib's current research at David Thomas Lab focuses on developing a novel contrast agent for X-Ray Induced Acoustic CT (XACT) dosimetry, with the aim of providing real-time in-vivo 3D calibrated radiation dose measurements for adaptive radiation therapy treatments.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ME.jfif-vkIYgE4ftdYPYB1Cl9zck90u0oIZU9.jpeg",
    },
    {
      name: "William Frantz",
      role: "PhD Student",
      description:
        "First year Ph.D. student at the University of Colorado Boulder in the Biomedical Engineering Program.",
      image: "/images/WillFranz.png",
    },
    {
      name: "Atharva Peshkar",
      role: "PhD Student",
      description:
        "First year PhD student in the Department of Computer Science at the University of Colorado Boulder.",
      fullBio:
        "Hi, I'm Atharva Peshkar, a first year PhD student in the Department of Computer Science at the University of Colorado Boulder. I'm working on a project focused on computer vision assisted alignment for stereotactic body radiation therapy (SBRT). This involves developing an Artificial Intelligence (AI) enhanced computer-vision (CV) patient setup technique to improve the accuracy of surface-guided RT (SGRT) for abdominal SBRT. Through my research, I aim to bring the power of computer vision into the realm of medicine, unlocking new possibilities for diagnosis and treatment. Outside the lab, you'll often find me exploring scenic hiking trails around Boulder and experimenting with flavors in the kitchen.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AP-1A8GH17Ky1dnNe2CSYI2FzabJvrQvK.png",
    },
    {
      name: "Brian Shaver",
      role: "Senior Bioengineering student",
      description: "Senior Bioengineering student in the BS/MS program at CU Denver",
      image: "/images/BrianShaver.png",
    },
  ]

  const previousMembers = [
    {
      name: "Farnoush Forghani-Arani, Ph.D.",
      role: "Previous Post doc",
      description:
        "Current Position: Medical Physics Resident, Washington University in St. Louis Now: Faculty Medical Physicist at Washington University in St. Louis.",
      image: "/placeholder.svg?height=300&width=300&text=FF",
    },
    {
      name: "Melton Parham",
      role: "PhD Student",
      description: "",
      image: "/placeholder.svg?height=300&width=300&text=MP",
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
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {currentMembers.map((member, index) => (
              <ScrollAnimation key={index} delay={(index % 3) as 1 | 2 | 3}>
                <TeamMember
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  fullBio={member.fullBio}
                  image={member.image}
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
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
