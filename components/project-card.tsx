import { ArrowRight, Shield, Target, Zap, Brain } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export default function ProjectCard({ id, title, description, image, category }: ProjectCardProps) {
  // Determine category color and icon
  let categoryColor = ""
  let CategoryIcon = Target

  switch (category) {
    case "safety":
      categoryColor = "category-blue"
      CategoryIcon = Shield
      break
    case "treatment":
      categoryColor = "category-red"
      CategoryIcon = Zap
      break
    case "imaging":
      categoryColor = "category-yellow"
      CategoryIcon = Brain
      break
    default:
      categoryColor = "category-blue"
      CategoryIcon = Target
  }

  const borderColor =
    categoryColor === "category-blue"
      ? "border-l-jefferson-brightBlue"
      : categoryColor === "category-yellow"
        ? "border-l-jefferson-voltGreen"
        : "border-l-jefferson-red"

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg border-l-4 ${borderColor}`}>
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <CategoryIcon
            className={`h-5 w-5 ${
              categoryColor === "category-blue"
                ? "text-jefferson-brightBlue"
                : categoryColor === "category-yellow"
                  ? "text-jefferson-voltGreen"
                  : "text-jefferson-red"
            }`}
          />
          <span
            className={`text-xs font-medium uppercase ${
              categoryColor === "category-blue"
                ? "text-jefferson-brightBlue"
                : categoryColor === "category-yellow"
                  ? "text-jefferson-voltGreen"
                  : "text-jefferson-red"
            }`}
          >
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-jefferson-deepBlue mb-2">{title}</h3>
        <p className="text-sm text-jefferson-slate mb-4">{description}</p>
        <a href={`/projects/${id}`} className="jefferson-button">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  )
}
