import Link from "next/link"
import Image from "next/image"

interface TJULogoProps {
  className?: string
}

export default function TJULogo({ className = "" }: TJULogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Link href="/" className="flex items-center relative">
        <div className="relative h-11 sm:h-12 w-[220px] sm:w-[280px] overflow-hidden">
          <Image
            src="/images/tju-logo-full.png"
            alt="Thomas Jefferson University"
            fill
            className="object-contain object-left"
            priority
            sizes="280px"
          />
        </div>
      </Link>
    </div>
  )
}
