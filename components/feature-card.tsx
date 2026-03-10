import { Target, Package, Brain, Shield, Heart, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  color?: string
}

export default function FeatureCard({ icon, title, description, color = "category-blue" }: FeatureCardProps) {
  const getIcon = (iconName: string) => {
    const iconClasses = `h-10 w-10 ${
      color === "category-blue"
        ? "text-jefferson-brightBlue"
        : color === "category-yellow"
          ? "text-jefferson-voltGreen"
          : "text-jefferson-red"
    }`

    switch (iconName) {
      case "Target":
        return <Target className={iconClasses} />
      case "Package":
        return <Package className={iconClasses} />
      case "Brain":
        return <Brain className={iconClasses} />
      case "Shield":
        return <Shield className={iconClasses} />
      case "Heart":
        return <Heart className={iconClasses} />
      case "BarChart":
        return <BarChart className={iconClasses} />
      default:
        return <Target className={iconClasses} />
    }
  }

  const borderColor =
    color === "category-blue"
      ? "border-t-jefferson-brightBlue"
      : color === "category-yellow"
        ? "border-t-jefferson-voltGreen"
        : "border-t-jefferson-red"

  return (
    <Card className={`flex flex-col items-center text-center p-6 space-y-4 border-t-4 ${borderColor} shadow-md`}>
      {getIcon(icon)}
      <CardContent className="p-0 space-y-2">
        <h3 className="text-xl font-bold text-jefferson-deepBlue">{title}</h3>
        <p className="text-sm text-jefferson-slate">{description}</p>
      </CardContent>
    </Card>
  )
}
