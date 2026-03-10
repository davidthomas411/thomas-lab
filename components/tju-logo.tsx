import Link from "next/link"
import Image from "next/image"

export default function TJULogo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center">
        <Image
          src="/images/tju-logo-full.png"
          alt="Thomas Jefferson University"
          width={120}
          height={40}
          className="w-auto h-8 sm:h-10 md:h-12"
          priority
        />
        <span className="text-base sm:text-xl md:text-2xl font-bold text-white ml-2">Thomas Lab</span>
      </div>
    </Link>
  )
}
