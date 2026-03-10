import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen } from "lucide-react"
import Link from "next/link"

interface PublicationProps {
  title: string
  authors: string
  journal?: string
  publisher?: string
  year: string
  volume?: string
  pages?: string
  url?: string
  tags?: string[]
  citations?: number
}

export function PublicationItem({
  title,
  authors,
  journal,
  publisher,
  year,
  volume,
  pages,
  url,
  tags,
  citations,
}: PublicationProps) {
  // Highlight the lab director's name
  const highlightedAuthors = authors.replace(
    /David Thomas|David H Thomas|DH Thomas/g,
    '<span class="font-semibold text-jefferson-brightBlue">David Thomas</span>',
  )

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow border-gray-200 dark:border-gray-800">
      <CardContent className="pt-4">
        <h3 className="text-lg font-semibold mb-1 text-jefferson-deepBlue dark:text-white">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2" dangerouslySetInnerHTML={{ __html: highlightedAuthors }} />

        <div className="text-sm mb-3">
          {journal && <span className="italic">{journal}</span>}
          {volume && <span>, vol. {volume}</span>}
          {publisher && <span>, {publisher}</span>}
          {pages && <span>, pp. {pages}</span>}
          <span className="ml-2 font-medium text-jefferson-brightBlue">{year}</span>
          {citations && citations > 0 && (
            <span className="ml-2 text-jefferson-deepBlue dark:text-jefferson-brightBlue">
              <span className="inline-flex items-center">
                <BookOpen className="h-3 w-3 mr-1" />
                {citations} {citations === 1 ? "citation" : "citations"}
              </span>
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap gap-2 mb-2">
            {tags?.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs bg-jefferson-deepBlue/5 text-jefferson-deepBlue dark:bg-jefferson-brightBlue/10 dark:text-jefferson-brightBlue border-jefferson-deepBlue/20 dark:border-jefferson-brightBlue/20"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {url && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs text-jefferson-brightBlue hover:text-jefferson-deepBlue dark:hover:text-white transition-colors"
            >
              View Publication <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
