"use client"

import { usePathname } from "next/navigation"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"

type SiteChromeProps = {
  children: React.ReactNode
}

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname()
  const isCompetenciesRoute =
    pathname === "/competencies" || pathname.startsWith("/competencies/")

  if (isCompetenciesRoute) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  )
}
