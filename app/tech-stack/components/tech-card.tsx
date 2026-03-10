import Link from "next/link"
import { Github, ExternalLink, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TechCardProps {
  title: string
  description: string
  link: string | null
  github: string | null
  tags: string[]
  isNew?: boolean
}

export function TechCard({ title, description, link, github, tags, isNew = false }: TechCardProps) {
  return (
    <div className="bg-blue-900/30 border border-blue-800/50 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center">
            <span className="font-semibold">{title}</span>
            {isNew && (
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-green-500 text-white rounded-full">NEW</span>
            )}
          </div>
          <div className="flex space-x-2">
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Github size={20} />
              </Link>
            )}
            {link && (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
              </Link>
            )}
            {!link && !github && <Lock size={20} className="text-blue-500/70" />}
          </div>
        </div>
        <p className="text-blue-200 text-sm mt-1">{description}</p>
      </div>
      <div className="p-4 pt-2">
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} className="bg-blue-800/50 text-blue-100 hover:bg-blue-700/50 border-transparent">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
