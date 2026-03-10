"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import ProjectCard from "@/components/project-card"
import SiteLayout from "@/components/site-layout"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const projects = [
    {
      id: "computer-vision-enhanced-cone-beam-ct",
      title: "Computer Vision enhanced Advanced Cone Beam CT for Intraoperative Guidance",
      description:
        "Using our expertise with 4D-CT and a machine learning approach to motion modelling to improve current image-guided bronchoscopy guidance.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-43-35-0bq2vo9X7FHzJrO9mfpHEmxsUM1Ep3.png",
      category: "imaging",
    },
    {
      id: "computer-vision-collision-avoidance",
      title: "Computer Vision assisted Collision Avoidance for Radiation Therapy",
      description:
        "Computer vision combined with a novel skin-mesh model allows patient specific 'avatars' to detect and track patient positioning in real-time 3D during treatment.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-42-53-kSq1RHeiw2bqYFXS2GVLAUdeLSOtNM.png",
      category: "safety",
    },
    {
      id: "surface-guided-radiation-therapy",
      title: "Advanced Surface-Guided Radiation Therapy",
      description:
        "Transforming surface guided radiation therapy with low-cost RGB cameras and neural networks for real-time patient tracking and internal anatomy estimation.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-44-07-VS5BrHcB8Eui7BwyuXr6Pug55kYx03.png",
      category: "treatment",
    },
    {
      id: "xact-dosimetry",
      title: "X-Ray Induced Acoustic CT (XACT) Dosimetry",
      description:
        "Developing a novel contrast agent for X-Ray Induced Acoustic CT (XACT) dosimetry, providing real-time in-vivo 3D calibrated radiation dose measurements.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-47-29-sTpQKAqUyZNIjtM35Wnokb58jQH6n2.png",
      category: "imaging",
    },
  ]

  // Filter projects based on active filter
  const filteredProjects = activeFilter ? projects.filter((project) => project.category === activeFilter) : projects

  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Research Projects</h1>
              <p className="max-w-[600px] text-jefferson-brightBlue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our interests lie at the interface of Engineering and Life Sciences and the implementation of signal
                processing, statistics, mathematics and physics, to provide the next generation of diagnostic and novel
                therapeutic techniques.
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
                    <h2 className="text-2xl font-bold">Research Focus Areas</h2>
                    <p className="text-jefferson-brightBlue">
                      We are interested in the use of optical, acoustic and X-Ray technologies to illuminate a broad
                      spectrum of mechanisms, which span from molecular imaging of the cell to quantitative anatomical
                      imaging and in-vivo dosimetry.
                    </p>
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
                Current Projects
              </h2>
              <p className="max-w-[85%] leading-normal text-jefferson-slate sm:text-lg sm:leading-7">
                Explore our innovative research projects across key areas of focus in radiation oncology.
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <Button
                  variant={activeFilter === null ? "default" : "outline"}
                  onClick={() => setActiveFilter(null)}
                  className={activeFilter === null ? "bg-jefferson-deepBlue text-white" : ""}
                >
                  All Projects
                </Button>
                <Button
                  variant={activeFilter === "imaging" ? "default" : "outline"}
                  onClick={() => setActiveFilter("imaging")}
                  className={activeFilter === "imaging" ? "bg-jefferson-brightBlue text-white" : ""}
                >
                  Imaging
                </Button>
                <Button
                  variant={activeFilter === "treatment" ? "default" : "outline"}
                  onClick={() => setActiveFilter("treatment")}
                  className={activeFilter === "treatment" ? "bg-jefferson-red text-white" : ""}
                >
                  Treatment
                </Button>
                <Button
                  variant={activeFilter === "safety" ? "default" : "outline"}
                  onClick={() => setActiveFilter("safety")}
                  className={activeFilter === "safety" ? "bg-jefferson-voltGreen text-jefferson-deepBlue" : ""}
                >
                  Safety
                </Button>
              </div>
            </ScrollAnimation>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-jefferson-slate">No projects found matching the selected filter.</p>
            </div>
          ) : (
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <ScrollAnimation key={project.id} delay={(index % 2) as 1}>
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    category={project.category}
                  />
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  )
}
