import { Geist_Mono, Outfit } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { SiteChrome } from "@/components/layout/site-chrome"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "T-E-A-C-H",
  description:
    "The T-E-A-C-H model is a tool for developing and implementing effective teaching strategies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        outfit.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <SiteChrome>{children}</SiteChrome>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
