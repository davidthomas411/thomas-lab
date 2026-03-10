import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensure text remains visible during font loading
  preload: true,
})

export const metadata: Metadata = {
  title: "Thomas Lab | Advanced Surface-Guided Radiation Therapy",
  description:
    "Transforming surface guided radiation therapy (SGRT) with low-cost RGB cameras and neural networks for real-time patient tracking and internal anatomy estimation.",
  generator: "v0.dev",
  // Add more metadata for SEO
  keywords: "radiation therapy, SGRT, computer vision, medical physics, Thomas Jefferson University",
  authors: [{ name: "Thomas Lab", url: "https://thomas-lab.com" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thomas-lab.com",
    title: "Thomas Lab | Advanced Surface-Guided Radiation Therapy",
    description: "Transforming surface guided radiation therapy (SGRT) with low-cost RGB cameras and neural networks.",
    siteName: "Thomas Lab",
    images: [
      {
        url: "https://thomas-lab.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thomas Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Lab | Advanced Surface-Guided Radiation Therapy",
    description: "Transforming surface guided radiation therapy (SGRT) with low-cost RGB cameras and neural networks.",
    images: ["https://thomas-lab.com/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://gruc9opbjll8ofcl.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://gruc9opbjll8ofcl.public.blob.vercel-storage.com" />

        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Add structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ResearchOrganization",
              name: "Thomas Lab",
              url: "https://thomas-lab.com",
              logo: "https://thomas-lab.com/images/tju-logo.png",
              description:
                "Transforming surface guided radiation therapy (SGRT) with low-cost RGB cameras and neural networks for real-time patient tracking and internal anatomy estimation.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Philadelphia",
                addressRegion: "PA",
                addressCountry: "US",
              },
              sameAs: ["https://github.com/thomas-lab", "https://twitter.com/thomas_lab"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
