"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setMessage("Thank you for subscribing to our newsletter!")
      setEmail("")
    }, 1500)
  }

  return (
    <div className="bg-jefferson-deepBlue/5 rounded-lg p-6 border border-jefferson-deepBlue/10">
      <div className="flex items-center mb-4">
        <Mail className="h-5 w-5 text-jefferson-brightBlue mr-2" />
        <h3 className="text-lg font-bold text-jefferson-deepBlue">Stay Updated</h3>
      </div>

      <p className="text-jefferson-slate mb-4 text-sm">
        Subscribe to our newsletter for the latest research updates, publications, and events.
      </p>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <p className="text-green-800 text-sm">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              disabled={status === "loading"}
            />
            {status === "error" && (
              <div className="flex items-center mt-2 text-red-600 text-xs">
                <AlertCircle className="h-3 w-3 mr-1" />
                {message}
              </div>
            )}
          </div>

          <Button type="submit" className="w-full jefferson-button" disabled={status === "loading"}>
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>

          <p className="text-xs text-jefferson-slate/80">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      )}
    </div>
  )
}
