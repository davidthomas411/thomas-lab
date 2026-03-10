import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
}

interface RelatedProjectsProps {
  currentProjectId: string
  className?: string
}

export default function RelatedProjects({ currentProjectId, className = "" }: RelatedProjectsProps) {
  // All projects data
  const allProjects: Project[] = [
    {
      id: "computer-vision-enhanced-cone-beam-ct",
      title: "Computer Vision enhanced Advanced Cone Beam CT",
      description: "Using 4D-CT and machine learning for bronchoscopy guidance.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-43-35-0bq2vo9X7FHzJrO9mfpHEmxsUM1Ep3.png",
      category: "imaging",
    },
    {
      id: "computer-vision-collision-avoidance",
      title: "Computer Vision assisted Collision Avoidance",
      description: "Patient-specific avatars for real-time 3D tracking during treatment.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-42-53-kSq1RHeiw2bqYFXS2GVLAUdeLSOtNM.png",
      category: "safety",
    },
    {
      id: "surface-guided-radiation-therapy",
      title: "Advanced Surface-Guided Radiation Therapy",
      description: "Low-cost RGB cameras and neural networks for patient tracking.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-44-07-VS5BrHcB8Eui7BwyuXr6Pug55kYx03.png",
      category: "treatment",
    },
    {
      id: "xact-dosimetry",
      title: "X-Ray Induced Acoustic CT (XACT) Dosimetry",
      description: "Novel contrast agent for real-time radiation dose measurements.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-05-04_18-47-29-sTpQKAqUyZNIjtM35Wnokb58jQH6n2.png",
      category: "imaging",
    },
  ]

  // Get current project
  const currentProject = allProjects.find((p) => p.id === currentProjectId)

  // Filter to get related projects (same category, excluding current)
  const relatedProjects = currentProject
    ? allProjects.filter((p) => p.category === currentProject.category && p.id !== currentProjectId)
    : []

  // If no related projects in same category, show other projects
  const projectsToShow =
    relatedProjects.length > 0 ? relatedProjects : allProjects.filter((p) => p.id !== currentProjectId)

  // Limit to 3 projects
  const limitedProjects = projectsToShow.slice(0, 3)

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-jefferson-deepBlue mb-6">Related Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {limitedProjects.map((project) => (
          <div key={project.id} className="group">
            <Link href={`/projects/${project.id}`} className="block">
              <div className="aspect-video overflow-hidden rounded-lg mb-3">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-jefferson-deepBlue group-hover:text-jefferson-brightBlue transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-jefferson-slate mt-1 line-clamp-2">{project.description}</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/projects" className="jefferson-text-button inline-flex items-center">
          View All Projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
