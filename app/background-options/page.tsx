import SiteLayout from "@/components/site-layout"
import BackgroundShowcase from "@/components/background-showcase"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BackgroundOptionsPage() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Background Options</h1>
            <p className="max-w-[600px] text-jefferson-brightBlue md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore different background styles for the website. Click on an option to preview it.
            </p>
            <Link href="/" className="jefferson-outline-button inline-flex">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <BackgroundShowcase />

          <div className="mt-16 space-y-8">
            <h2 className="text-2xl font-bold text-jefferson-deepBlue">How to Use</h2>
            <p className="text-jefferson-slate">
              To apply any of these backgrounds to a section of your website, simply add the corresponding class name to
              the section element. For example:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>{`<section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-wave-bg">
  {/* Your content here */}
</section>`}</code>
            </pre>

            <h3 className="text-xl font-bold text-jefferson-deepBlue">Implementation Notes</h3>
            <ul className="list-disc pl-6 space-y-2 text-jefferson-slate">
              <li>All backgrounds are designed to work well with white text</li>
              <li>The animated gradient is more resource-intensive and should be used sparingly</li>
              <li>For the best visual effect, maintain adequate padding in sections with patterned backgrounds</li>
              <li>All patterns are subtle enough to not interfere with text readability</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
