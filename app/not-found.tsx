import Link from "next/link"
import { Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-9xl font-bold text-jefferson-deepBlue mb-4">404</h1>
            <h2 className="text-2xl font-bold text-jefferson-deepBlue mb-2">Page Not Found</h2>
            <p className="text-jefferson-slate mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="jefferson-button">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  <Search className="mr-2 h-4 w-4" />
                  Search Site
                </Link>
              </Button>
            </div>

            <div className="mt-12">
              <p className="text-sm text-jefferson-slate mb-2">Looking for something specific?</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Link href="/projects" className="text-jefferson-brightBlue hover:underline">
                  Projects
                </Link>
                <span className="text-gray-300">•</span>
                <Link href="/team" className="text-jefferson-brightBlue hover:underline">
                  Team
                </Link>
                <span className="text-gray-300">•</span>
                <Link href="/news" className="text-jefferson-brightBlue hover:underline">
                  News
                </Link>
                <span className="text-gray-300">•</span>
                <Link href="/contact" className="text-jefferson-brightBlue hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Thomas Lab | Jefferson Radiation Oncology
            </p>
            <Link href="/" className="text-sm text-jefferson-brightBlue hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
