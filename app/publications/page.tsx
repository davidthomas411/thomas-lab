import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, TrendingUp, Calendar } from "lucide-react"
import { publications } from "./publications-data"
import { PublicationsList } from "./publications-list"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Publications | Thomas Lab",
  description: "Academic publications from the Thomas Lab research group at Thomas Jefferson University.",
}

export default function PublicationsPage() {
  // Get unique years and sort them in descending order
  const years = [...new Set(publications.map((pub) => pub.year))].sort(
    (a, b) => Number.parseInt(b) - Number.parseInt(a),
  )

  // Count publications by year
  const publicationsByYear = years.map((year) => ({
    year,
    count: publications.filter((pub) => pub.year === year).length,
  }))

  // Calculate total citations
  const totalCitations = publications.reduce((sum, pub) => sum + (pub.citations || 0), 0)

  // Calculate h-index (simplified)
  const citationCounts = publications.map((pub) => pub.citations || 0).sort((a, b) => b - a)

  let hIndex = 0
  for (let i = 0; i < citationCounts.length; i++) {
    if (citationCounts[i] >= i + 1) {
      hIndex = i + 1
    } else {
      break
    }
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <Breadcrumb />

      <div className="mb-8">
        <div className="bg-jefferson-deepBlue text-white rounded-lg p-8 mb-6 jefferson-clean-bg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Publications</h1>
          <p className="text-gray-300 max-w-3xl">
            Academic publications from the Thomas Lab research group, focusing on computer vision, medical imaging, and
            radiation therapy innovations.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <PublicationsList publications={publications} years={years} />
        </div>

        <div className="lg:w-1/4">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white dark:bg-jefferson-deepBlue/40 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-jefferson-deepBlue dark:text-jefferson-brightBlue">
                <TrendingUp className="mr-2 h-5 w-5" /> Publication Metrics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-sm">Total Publications</span>
                  <span className="font-medium text-jefferson-brightBlue">{publications.length}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-sm">Total Citations</span>
                  <span className="font-medium text-jefferson-brightBlue">{totalCitations}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-sm">h-index</span>
                  <span className="font-medium text-jefferson-brightBlue">{hIndex}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-sm">Most Recent</span>
                  <span className="font-medium text-jefferson-brightBlue">{years[0]}</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-jefferson-deepBlue/40 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-jefferson-deepBlue dark:text-jefferson-brightBlue">
                <Calendar className="mr-2 h-5 w-5" /> Publications by Year
              </h3>
              <div className="space-y-3">
                {publicationsByYear.slice(0, 8).map(({ year, count }) => (
                  <div key={year} className="flex justify-between text-sm">
                    <span>{year}</span>
                    <span className="font-medium">{count}</span>
                  </div>
                ))}
                {publicationsByYear.length > 8 && (
                  <div className="text-xs text-center text-muted-foreground">
                    + {publicationsByYear.length - 8} more years
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white dark:bg-jefferson-deepBlue/40 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-4 text-jefferson-deepBlue dark:text-jefferson-brightBlue">
                External Profiles
              </h3>
              <div className="space-y-3">
                <Link
                  href="https://scholar.google.com/citations?user=yenOlUcAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-jefferson-brightBlue hover:text-jefferson-deepBlue dark:hover:text-white transition-colors"
                >
                  Google Scholar <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
                <Link
                  href="https://pubmed.ncbi.nlm.nih.gov/?term=David+H+Thomas+radiation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-jefferson-brightBlue hover:text-jefferson-deepBlue dark:hover:text-white transition-colors"
                >
                  PubMed <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
                <Link
                  href="https://orcid.org/search/researchers?q=David%20Thomas%20radiation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-jefferson-brightBlue hover:text-jefferson-deepBlue dark:hover:text-white transition-colors"
                >
                  ORCID <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
