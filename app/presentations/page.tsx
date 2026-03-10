import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mic, FileText } from "lucide-react"
import SiteLayout from "@/components/site-layout"
import ScrollAnimation from "@/components/scroll-animation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { abstractPresentations, invitedLectures, presentationsSource } from "./presentations-data"

export const metadata: Metadata = {
  title: "Presentations | Thomas Lab",
  description:
    "Invited lectures and refereed abstract presentations from Thomas Lab and Dr. David Thomas.",
}

function extractYear(text: string): number | null {
  const yearMatch = text.match(/\b(20\d{2}|19\d{2})\b/)
  return yearMatch ? Number.parseInt(yearMatch[1], 10) : null
}

const lectureGroups = [
  { title: "Local / Regional", entries: invitedLectures.localRegional },
  { title: "National", entries: invitedLectures.national },
  { title: "International", entries: invitedLectures.international },
  { title: "Intramural", entries: invitedLectures.intramural },
]

export default function PresentationsPage() {
  const nationalLectureGroup = lectureGroups.find((group) => group.title === "National")
  const secondaryLectureGroups = lectureGroups.filter((group) => group.title !== "National")

  const groupedAbstracts = abstractPresentations.reduce(
    (acc, entry) => {
      const year = extractYear(entry.text) ?? 0
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(entry)
      return acc
    },
    {} as Record<number, typeof abstractPresentations>,
  )

  const abstractYears = Object.keys(groupedAbstracts)
    .map((year) => Number.parseInt(year, 10))
    .sort((a, b) => b - a)

  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollAnimation className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Presentations</h1>
              <p className="max-w-[700px] text-jefferson-brightBlue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Invited lectures and refereed abstracts from the Thomas Lab portfolio, including local, national,
                international, and intramural talks.
              </p>
              <p className="text-sm text-gray-300">Source document: {presentationsSource}</p>
              <Link href="/" className="jefferson-outline-button inline-flex">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </ScrollAnimation>
            <ScrollAnimation className="mx-auto w-full max-w-[500px]" delay={1}>
              <Card className="jefferson-card text-white">
                <CardContent className="p-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">{lectureGroups.reduce((sum, group) => sum + group.entries.length, 0)}</div>
                    <div className="text-sm text-jefferson-brightBlue">Invited Lectures</div>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4 text-center">
                    <div className="text-2xl font-bold">{abstractPresentations.length}</div>
                    <div className="text-sm text-jefferson-brightBlue">Refereed Abstracts</div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-8">
          <ScrollAnimation className="flex items-center gap-3">
            <Mic className="h-6 w-6 text-jefferson-brightBlue" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-jefferson-deepBlue">Invited Lectures</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
            {nationalLectureGroup && (
              <ScrollAnimation delay={1}>
                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-xl text-jefferson-deepBlue dark:text-jefferson-brightBlue">
                      {nationalLectureGroup.title} ({nationalLectureGroup.entries.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal ml-5 space-y-3 text-sm leading-relaxed text-jefferson-slate dark:text-gray-200">
                      {nationalLectureGroup.entries.map((entry) => (
                        <li key={`${nationalLectureGroup.title}-${entry.id}`}>{entry.text}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            )}

            <div className="grid grid-cols-1 gap-6 lg:auto-rows-min">
              {secondaryLectureGroups.map((group, index) => (
                <ScrollAnimation key={group.title} delay={((index % 2) + 1) as 1 | 2}>
                  <Card className="border-gray-200 dark:border-gray-800">
                    <CardHeader>
                      <CardTitle className="text-xl text-jefferson-deepBlue dark:text-jefferson-brightBlue">
                        {group.title} ({group.entries.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="list-decimal ml-5 space-y-3 text-sm leading-relaxed text-jefferson-slate dark:text-gray-200">
                        {group.entries.map((entry) => (
                          <li key={`${group.title}-${entry.id}`}>{entry.text}</li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-silver">
        <div className="container px-4 md:px-6 space-y-8">
          <ScrollAnimation className="space-y-3">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-jefferson-brightBlue" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-jefferson-deepBlue">
                Conference Presentations & Abstracts
              </h2>
            </div>
            <p className="max-w-[900px] leading-normal text-jefferson-slate sm:text-lg sm:leading-7">
              Full list of refereed abstracts from the CV source document. Entries are grouped by detected year and
              shown from newest to oldest.
            </p>
          </ScrollAnimation>

          <div className="space-y-6">
            {abstractYears.map((year) => (
              <ScrollAnimation key={year}>
                <Card className="border-gray-200 dark:border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-xl text-jefferson-deepBlue dark:text-jefferson-brightBlue">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        <span>{year === 0 ? "Year Not Listed" : year}</span>
                        <span className="text-sm font-normal text-jefferson-slate dark:text-gray-300">
                          ({groupedAbstracts[year].length} entries)
                        </span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal ml-5 space-y-3 text-sm leading-relaxed text-jefferson-slate dark:text-gray-200">
                      {groupedAbstracts[year].map((entry) => (
                        <li key={`abstract-${entry.id}`}>{entry.text}</li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
