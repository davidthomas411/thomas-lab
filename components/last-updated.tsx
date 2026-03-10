"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface LastUpdatedProps {
  date?: string // Optional date string in ISO format
  className?: string
}

export default function LastUpdated({ date, className = "" }: LastUpdatedProps) {
  const [formattedDate, setFormattedDate] = useState<string>("")

  useEffect(() => {
    // If date is provided, use it; otherwise use the current date
    const dateToFormat = date ? new Date(date) : new Date()

    // Format the date
    const formatted = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(dateToFormat)

    setFormattedDate(formatted)
  }, [date])

  return (
    <div className={`flex items-center text-sm text-gray-500 ${className}`}>
      <Clock className="h-3.5 w-3.5 mr-1" />
      <span>Last updated: {formattedDate}</span>
    </div>
  )
}
