"use client"

import { useState, useMemo } from "react"
import { PublicationItem } from "@/components/publication-item"
import { PublicationsFilter } from "@/components/publications-filter"
import type { Publication } from "./publications-data"

interface PublicationsListProps {
  publications: Publication[]
  years: string[]
}

export function PublicationsList({ publications, years }: PublicationsListProps) {
  const [filters, setFilters] = useState({ search: "", year: "" })

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      // Filter by search term
      const searchMatch =
        !filters.search ||
        pub.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        pub.authors.toLowerCase().includes(filters.search.toLowerCase()) ||
        (pub.journal && pub.journal.toLowerCase().includes(filters.search.toLowerCase())) ||
        (pub.tags && pub.tags.some((tag) => tag.toLowerCase().includes(filters.search.toLowerCase())))

      // Filter by year
      const yearMatch = !filters.year || pub.year === filters.year

      return searchMatch && yearMatch
    })
  }, [publications, filters])

  // Group publications by year
  const publicationsByYear = useMemo(() => {
    const grouped = filteredPublications.reduce(
      (acc, pub) => {
        if (!acc[pub.year]) {
          acc[pub.year] = []
        }
        acc[pub.year].push(pub)
        return acc
      },
      {} as Record<string, Publication[]>,
    )

    // Sort years in descending order
    return Object.entries(grouped).sort(([yearA], [yearB]) => Number.parseInt(yearB) - Number.parseInt(yearA))
  }, [filteredPublications])

  return (
    <div>
      <PublicationsFilter years={years} onFilterChange={setFilters} />

      {filteredPublications.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No publications found matching your filters.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {publicationsByYear.map(([year, pubs]) => (
            <div key={year}>
              <h2 className="text-2xl font-bold mb-4 sticky top-0 bg-background/95 py-2 z-10 backdrop-blur-sm">
                {year}{" "}
                <span className="text-sm font-normal text-muted-foreground ml-2">({pubs.length} publications)</span>
              </h2>
              <div className="space-y-4">
                {pubs.map((pub, index) => (
                  <PublicationItem key={`${year}-${index}`} {...pub} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
