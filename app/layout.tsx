import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Tenderloin Coffee | San Francisco Coffee Shop",
    template: "%s | Tenderloin Coffee"
  },
  description: "Experience the finest coffee in San Francisco's Tenderloin district. Fresh brews, cozy atmosphere, and exceptional service.",
  keywords: ["coffee shop", "san francisco coffee", "tenderloin", "cafe", "specialty coffee", "local coffee shop"],
  authors: [{ name: "Tenderloin Coffee" }],
  creator: "Tenderloin Coffee",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tenderloin-coffee.com",
    title: "Tenderloin Coffee",
    description: "Premium Coffee Shop in San Francisco",
    siteName: "Tenderloin Coffee"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-xl font-bold">Tenderloin Coffee</a>
              <div className="hidden md:flex space-x-6">
                <a href="#menu" className="hover:text-neutral-600">Menu</a>
                <a href="#location" className="hover:text-neutral-600">Location</a>
                <a href="#contact" className="hover:text-neutral-600">Contact</a>
              </div>
              <a href="tel:5715256131" className="hidden md:block hover:text-neutral-600">(571) 525-6131</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
