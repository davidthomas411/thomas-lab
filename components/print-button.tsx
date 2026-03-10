"use client"

import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrintButton({ className = "" }: { className?: string }) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <Button variant="outline" size="sm" className={`flex items-center ${className}`} onClick={handlePrint}>
      <Printer className="h-4 w-4 mr-2" />
      Print
    </Button>
  )
}
