"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)

  // Create breadcrumb items with proper formatting
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`
    const isLast = index === pathSegments.length - 1

    // Format the segment text to be more readable
    const formattedSegment = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    return {
      href,
      label: formattedSegment,
      isLast,
    }
  })

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-gray-500 mb-4">
      <ol className="flex items-center space-x-1">
        <li>
          <Link
            href="/"
            className="text-jefferson-brightBlue hover:text-jefferson-deepBlue transition-colors flex items-center"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" aria-hidden="true" />
            {item.isLast ? (
              <span className="font-medium text-jefferson-deepBlue" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-jefferson-brightBlue hover:text-jefferson-deepBlue transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Also export as default for backward compatibility
export default Breadcrumb
