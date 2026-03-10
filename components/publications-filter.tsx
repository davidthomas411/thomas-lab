"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, SlidersHorizontal, X } from "lucide-react"

interface PublicationsFilterProps {
  years: string[]
  onFilterChange: (filters: { search: string; year: string }) => void
}

export function PublicationsFilter({ years, onFilterChange }: PublicationsFilterProps) {
  const [search, setSearch] = useState("")
  const [year, setYear] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    onFilterChange({ search: e.target.value, year })
  }

  const handleYearChange = (value: string) => {
    setYear(value)
    onFilterChange({ search, year: value })
  }

  const handleClearFilters = () => {
    setSearch("")
    setYear("")
    onFilterChange({ search: "", year: "" })
  }

  return (
    <div className="mb-6 space-y-4 bg-white dark:bg-jefferson-deepBlue/40 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search publications..."
            value={search}
            onChange={handleSearchChange}
            className="pl-9 border-gray-300 dark:border-gray-700 focus:border-jefferson-brightBlue focus:ring-jefferson-brightBlue"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="sm:w-10 border-jefferson-brightBlue text-jefferson-brightBlue hover:bg-jefferson-brightBlue/10"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {isFilterOpen && (
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="w-full sm:w-1/3">
            <Select value={year} onValueChange={handleYearChange}>
              <SelectTrigger className="border-gray-300 dark:border-gray-700">
                <SelectValue placeholder="Filter by year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All years</SelectItem>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearFilters}
            className="flex items-center text-jefferson-brightBlue hover:text-jefferson-deepBlue hover:bg-jefferson-brightBlue/10"
          >
            <X className="mr-1 h-4 w-4" /> Clear filters
          </Button>
        </div>
      )}
    </div>
  )
}
