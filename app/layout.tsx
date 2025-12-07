import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raj Patel | Full Stack Developer - rajpatelbot",
  description:
    "Full Stack Developer specializing in React, Next.js, Express.js & TypeScript. Building high-performance, scalable web applications. rajpatelbot",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Express.js", "rajpatelbot", "Raj Patel"],
  authors: [{ name: "Raj Patel" }],
  openGraph: {
    title: "Raj Patel | Full Stack Developer",
    description:
      "Building high-performance, scalable, and user-friendly web applications with modern JavaScript technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Patel | Full Stack Developer",
    description:
      "Building high-performance, scalable, and user-friendly web applications with modern JavaScript technologies.",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Raj Patel",
              alternateName: "rajpatelbot",
              jobTitle: "Full Stack Developer",
              email: "rajpatel158g@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ahmedabad",
                addressCountry: "India",
              },
              knowsAbout: ["React", "Next.js", "TypeScript", "Express.js", "MongoDB", "PostgreSQL"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
