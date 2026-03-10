import { Calendar, Award, FileText, DollarSign } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface NewsCardProps {
  id: string
  title: string
  date: string
  excerpt: string
  image: string
  category: string
}

export default function NewsCard({ id, title, date, excerpt, image, category }: NewsCardProps) {
  // Determine category color and icon
  let categoryColor = ""
  let CategoryIcon = FileText

  switch (category) {
    case "awards":
      categoryColor = "category-red"
      CategoryIcon = Award
      break
    case "conference":
      categoryColor = "category-blue"
      CategoryIcon = FileText
      break
    case "funding":
      categoryColor = "category-yellow"
      CategoryIcon = DollarSign
      break
    case "research":
      categoryColor = "category-blue"
      CategoryIcon = FileText
      break
    default:
      categoryColor = "category-blue"
      CategoryIcon = FileText
  }

  const borderColor =
    categoryColor === "category-blue"
      ? "border-t-jefferson-brightBlue"
      : categoryColor === "category-yellow"
        ? "border-t-jefferson-voltGreen"
        : "border-t-jefferson-red"

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg border-t-4 ${borderColor} h-full flex flex-col`}>
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
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
        <div className="flex items-center text-sm text-jefferson-slate mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <p className="text-sm text-jefferson-slate mb-4 flex-1">{excerpt}</p>
        <a href={`/news/${id}`} className="jefferson-text-button mt-auto">
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </CardContent>
    </Card>
  )
}
