"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Github, Mail, Menu, X, Search, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import TJULogo from "@/components/tju-logo"
import BackToTop from "@/components/back-to-top"
import PageTransition from "@/components/page-transition"
import Breadcrumb from "@/components/breadcrumb"
import SearchDialog from "@/components/search-dialog"
import CookieConsent from "@/components/cookie-consent"
import { useTheme } from "next-themes"

interface SiteLayoutProps {
  children: React.ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const isHomePage = pathname === "/"
  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`)

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("mobile-nav-open")
    } else {
      document.body.classList.remove("mobile-nav-open")
    }

    return () => {
      document.body.classList.remove("mobile-nav-open")
    }
  }, [mobileMenuOpen])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-50 w-full border-b border-white/10 bg-jefferson-deepBlue backdrop-blur supports-[backdrop-filter]:bg-jefferson-deepBlue/95 jefferson-clean-bg transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="container flex h-16 sm:h-20 md:h-24 items-center justify-between">
          <TJULogo />
          <nav className="hidden md:flex gap-6">
            {isHomePage ? (
              <a
                href="#overview"
                className="text-lg font-medium text-white hover:text-jefferson-brightBlue transition-colors"
              >
                Overview
              </a>
            ) : (
              <Link
                href="/#overview"
                className="text-lg font-medium text-white hover:text-jefferson-brightBlue transition-colors"
              >
                Overview
              </Link>
            )}
            <Link
              href="/projects"
              className={`text-lg font-medium transition-colors ${
                isActive("/projects") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/team"
              className={`text-lg font-medium transition-colors ${
                isActive("/team") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
              }`}
            >
              Team
            </Link>
            <Link
              href="/publications"
              className={`text-lg font-medium transition-colors ${
                isActive("/publications") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
              }`}
            >
              Publications
            </Link>
            <Link
              href="/news"
              className={`text-lg font-medium transition-colors ${
                isActive("/news") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
              }`}
            >
              News
            </Link>
            <Link
              href="/3d-viewer"
              className={`text-lg font-medium transition-colors ${
                isActive("/3d-viewer") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
              }`}
            >
              3D Viewer
            </Link>
            <Link
              href="/tech-stack"
              className={`text-lg font-medium transition-colors ${
                isActive("/tech-stack") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
              }`}
            >
              Tech Stack
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-jefferson-brightBlue hover:bg-white/10 hover:text-white transition-colors"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-jefferson-brightBlue hover:bg-white/10 hover:text-white transition-colors"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="border-white/20 text-jefferson-brightBlue hover:bg-white/10 hover:text-white transition-colors"
              asChild
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-white/20 text-jefferson-brightBlue hover:bg-white/10 hover:text-white transition-colors"
              asChild
            >
              <Link href="mailto:contact@thomas-lab.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              className="border-white/20 text-jefferson-brightBlue hover:bg-white/10 hover:text-white md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-jefferson-deepBlue border-t border-white/10 animate-fadeIn">
            <div className="container py-4 flex flex-col space-y-4">
              {isHomePage ? (
                <a
                  href="#overview"
                  className="text-lg font-medium text-white hover:text-jefferson-brightBlue transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Overview
                </a>
              ) : (
                <Link
                  href="/#overview"
                  className="text-lg font-medium text-white hover:text-jefferson-brightBlue transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Overview
                </Link>
              )}
              <Link
                href="/projects"
                className={`text-lg font-medium transition-colors py-2 ${
                  isActive("/projects") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/team"
                className={`text-lg font-medium transition-colors py-2 ${
                  isActive("/team") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/publications"
                className={`text-lg font-medium transition-colors py-2 ${
                  isActive("/publications") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Publications
              </Link>
              <Link
                href="/news"
                className={`text-lg font-medium transition-colors py-2 ${
                  isActive("/news") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/3d-viewer"
                className={`text-lg font-medium transition-colors py-2 ${
                  isActive("/3d-viewer") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                3D Viewer
              </Link>
              <Link
                href="/tech-stack"
                className={`text-lg font-medium transition-colors py-2 ${
                  isActive("/tech-stack") ? "text-jefferson-brightBlue" : "text-white hover:text-jefferson-brightBlue"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Tech Stack
              </Link>

              <div className="pt-4 border-t border-white/10">
                <Button
                  className="w-full jefferson-button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setSearchOpen(true)
                  }}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="main-content" className="flex-1">
        <div className="container px-4 md:px-6 pt-4">
          <Breadcrumb />
        </div>
        <PageTransition>{children}</PageTransition>
      </main>

      <footer className="w-full border-t py-12 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <TJULogo />
              <p className="mt-4 text-gray-300 max-w-md">
                Transforming radiation therapy through innovative computer vision and AI approaches for improved patient
                outcomes.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="mailto:contact@thomas-lab.com" className="text-gray-300 hover:text-white">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/publications" className="text-gray-300 hover:text-white transition-colors">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tech-stack" className="text-gray-300 hover:text-white transition-colors">
                    Technology Stack
                  </Link>
                </li>
                <li>
                  <Link href="/3d-viewer" className="text-gray-300 hover:text-white transition-colors">
                    3D Viewer
                  </Link>
                </li>
                <li>
                  <Link href="/publications" className="text-gray-300 hover:text-white transition-colors">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm text-gray-300">
                  © {new Date().getFullYear()} Thomas Lab | Jefferson Radiation Oncology
                </p>
                <div className="flex gap-4 mt-2">
                  <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                  <Link href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                    Accessibility
                  </Link>
                </div>
              </div>

              <div className="md:text-right">
                <p className="text-xs text-gray-400">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <CookieConsent />
    </div>
  )
}
