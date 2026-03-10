import { ArrowLeft } from "lucide-react"
import NewsCard from "@/components/news-card"
import ScrollAnimation from "@/components/scroll-animation"
import SiteLayout from "@/components/site-layout"
import Link from "next/link"

function parseNewsDate(value: string): number {
  const direct = Date.parse(value)
  if (!Number.isNaN(direct)) return direct

  const monthYearMatch = value.match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (monthYearMatch) {
    const fallback = Date.parse(`${monthYearMatch[1]} 1, ${monthYearMatch[2]}`)
    if (!Number.isNaN(fallback)) return fallback
  }

  return 0
}

export default function NewsPage() {
  const newsItems = [
    {
      id: "varian-digital-twin-grant-funding-2026",
      title: "Investigator-Initiated Varian Funding for AI Digital Twin Project",
      date: "March 2026",
      excerpt:
        "The lab received investigator-initiated funding from Varian (Siemens Healthineers) for a new AI-driven digital twin project, bringing total lab funding to over $1M.",
      image: "/placeholder.svg?height=400&width=600&text=Varian+Digital+Twin+Funding+2026",
      category: "funding",
    },
    {
      id: "research-as-art-2026",
      title: "Research as Art 2026 recognition",
      date: "February 2026",
      excerpt:
        "Dr. Mohamed Yousuf was recognized in the 2026 Research as Art competition for a creative visualization of radiation therapy research.",
      image: "/placeholder.svg?height=400&width=600&text=Research+as+Art+2026",
      category: "awards",
    },
    {
      id: "delaware-valley-aapm-young-investigators",
      title: "Second Place at AAPM Young Investigators Symposium",
      date: "March 2026",
      excerpt:
        "Dr. Mohamed Yousuf earned second place at the Delaware Valley Chapter AAPM Young Investigators Symposium.",
      image: "/placeholder.svg?height=400&width=600&text=Young+Investigators+Award",
      category: "awards",
    },
    {
      id: "welcome-mohamed-yousuf",
      title: "Welcome Dr. Mohamed Yousuf to the lab",
      date: "May 2025",
      excerpt:
        "We are excited to welcome Dr. Mohamed Yousuf as a post-doctoral fellow working with Dr. David Thomas.",
      image: "/placeholder.svg?height=400&width=600&text=Welcome+Mohamed+Yousuf",
      category: "research",
    },
    {
      id: "aapm-2024-awards",
      title: "AAPM 2024 Awards!",
      date: "May 06, 2024",
      excerpt:
        "Congratulations to Atharva Peshkar and Mohamed Eldib who have both won awards for their research at AAPM 2024.",
      image: "/placeholder.svg?height=400&width=600&text=AAPM+2024+Awards",
      category: "awards",
    },
    {
      id: "benchmarking-trial",
      title: "Benchmarking Trial begins",
      date: "February 03, 2024",
      excerpt:
        "We've started the process of benchmarking our Computer Vision patient alignment technique against the current gold standard.",
      image: "/placeholder.svg?height=400&width=600&text=Benchmarking+Trial",
      category: "research",
    },
    {
      id: "new-project-funding",
      title: "New project funding!",
      date: "October 16, 2023",
      excerpt:
        "Our computer vision surface imaging breast DIBH project has been funded by the CU Anschutz Cancer Center.",
      image: "/placeholder.svg?height=400&width=600&text=Project+Funding",
      category: "funding",
    },
    {
      id: "aapm-2023-success",
      title: "AAPM!",
      date: "August 02, 2023",
      excerpt:
        "Successful AAPM 2023 meeting this year in Houston, with lots of interest in Atharva and William's presentations.",
      image: "/placeholder.svg?height=400&width=600&text=AAPM+2023",
      category: "conference",
    },
    {
      id: "med-phys-slam",
      title: "Med Phys Slam winner!",
      date: "June 22, 2023",
      excerpt: "Atharva Peshkar has won first prize in the AAPM Rocky Mountain Chapter 'Med Phys Slam' competition.",
      image: "/placeholder.svg?height=400&width=600&text=Med+Phys+Slam",
      category: "awards",
    },
    {
      id: "aapm-2023-presentations",
      title: "Students accepted to present at AAPM 2023",
      date: "May 12, 2023",
      excerpt:
        "Congratulations to William Frantz and Atharva as their work has been accepted for oral presentations at AAPM.",
      image: "/placeholder.svg?height=400&width=600&text=AAPM+Presentations",
      category: "conference",
    },
    {
      id: "best-in-physics",
      title: "Best in Physics award!",
      date: "May 12, 2023",
      excerpt: "Atharva Peshkar has been awarded 'BEST IN PHYSICS' for his first submission to AAPM.",
      image: "/placeholder.svg?height=400&width=600&text=Best+in+Physics",
      category: "awards",
    },
  ]
  const sortedNewsItems = [...newsItems].sort((a, b) => parseNewsDate(b.date) - parseNewsDate(a.date))

  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Lab News & Achievements</h1>
              <p className="max-w-[600px] text-jefferson-brightBlue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest news, awards, publications, and achievements from the Thomas Lab.
              </p>
              <Link href="/" className="jefferson-outline-button inline-flex">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </ScrollAnimation>
            <ScrollAnimation className="mx-auto w-full max-w-[500px]" delay={1}>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-jefferson-deepBlue/50 rounded-lg p-4 flex items-center justify-center text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">11+</div>
                    <div className="text-sm text-jefferson-brightBlue">News Updates</div>
                  </div>
                </div>
                <div className="aspect-square bg-jefferson-deepBlue/50 rounded-lg p-4 flex items-center justify-center text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">5+</div>
                    <div className="text-sm text-jefferson-brightBlue">Major Awards</div>
                  </div>
                </div>
                <div className="aspect-square bg-jefferson-deepBlue/50 rounded-lg p-4 flex items-center justify-center text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">2+</div>
                    <div className="text-sm text-jefferson-brightBlue">Conferences</div>
                  </div>
                </div>
                <div className="aspect-square bg-jefferson-deepBlue/50 rounded-lg p-4 flex items-center justify-center text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">2+</div>
                    <div className="text-sm text-jefferson-brightBlue">Funded Projects</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-jefferson-deepBlue">
                Latest Updates
              </h2>
              <p className="max-w-[85%] leading-normal text-jefferson-slate sm:text-lg sm:leading-7 mt-4">
                Explore our recent achievements, awards, and research milestones.
              </p>
            </ScrollAnimation>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {sortedNewsItems.map((item, index) => (
              <ScrollAnimation key={item.id} delay={(index % 3) as 1 | 2 | 3}>
                <NewsCard
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  excerpt={item.excerpt}
                  image={item.image}
                  category={item.category}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
