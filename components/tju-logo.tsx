import Link from "next/link"
import Image from "next/image"

interface TJULogoProps {
  className?: string
  isScrolled?: boolean
}

export default function TJULogo({ className = "", isScrolled = false }: TJULogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Link href="/" className="flex items-center relative">
        <div
          className={`relative h-11 sm:h-12 overflow-hidden transition-all duration-500 ease-out ${
            isScrolled ? "w-0 opacity-0 -translate-x-2" : "w-[220px] sm:w-[280px] opacity-100 translate-x-0"
          }`}
        >
          <Image
            src="/images/tju-logo-full.png"
            alt="Thomas Jefferson University"
            fill
            className="object-contain object-left"
            priority
            sizes="280px"
          />
        </div>

        <div
          className={`relative overflow-hidden transition-all duration-500 ease-out ${
            isScrolled ? "w-10 h-10 sm:w-12 sm:h-12 opacity-100 translate-x-0" : "w-0 h-0 opacity-0 translate-x-2"
          }`}
        >
          <Image
            src="/images/jefferson-j-logo.svg"
            alt="Jefferson University"
            fill
            className="object-contain"
            priority
            sizes="48px"
          />
        </div>
      </Link>
    </div>
  )
}
