"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  // Set to false to disable the cookie consent banner
  const [showBanner, setShowBanner] = useState(false)

  // Disabled for now - cookie consent is turned off
  // useEffect(() => {
  //   // Check if user has already consented
  //   const hasConsented = localStorage.getItem("cookieConsent")
  //   if (!hasConsented) {
  //     // Show banner after a short delay
  //     const timer = setTimeout(() => {
  //       setShowBanner(true)
  //     }, 1500)

  //     return () => clearTimeout(timer)
  //   }
  // }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setShowBanner(false)
  }

  const handleClose = () => {
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-gray-200 shadow-lg animate-slideUp">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <h3 className="text-jefferson-deepBlue font-bold text-lg mb-1">Cookie Consent</h3>
            <p className="text-jefferson-slate text-sm">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
              clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 min-w-[280px]">
            <Button
              variant="outline"
              className="text-jefferson-slate border-jefferson-slate/30"
              onClick={handleDecline}
            >
              Decline
            </Button>
            <Button className="jefferson-button" onClick={handleAccept}>
              Accept All
            </Button>
          </div>

          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
            aria-label="Close cookie consent banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
