import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DOVASAMA - Modern Data Infrastructure for Solana",
  description:
    "Real-time blockchain data APIs, zero-knowledge privacy, and X402 micropayments for Solana builders. Production-ready infrastructure for DeFi, trading, and analytics.",
  generator: "x",
 icons: {
    icon: '/dovasama-logo.png', // pastikan file ini ada di folder /public
  },
}


export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
