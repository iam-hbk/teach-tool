"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment } from "react"

import { competencyGroups } from "@/lib/competencies"
import { CompetencySearchDialog } from "@/components/layout/competency-search-dialog"
import { ThemeToggleButton } from "@/components/layout/theme-toggle-button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarTrigger } from "@/components/ui/sidebar"

function titleCase(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

function createRouteTitleMap() {
  const map = new Map<string, string>()
  map.set("/competencies", "Competencies")

  for (const group of competencyGroups) {
    map.set(group.link, group.title)
    for (const sub of group.subSegments) {
      map.set(sub.link, sub.title)
    }
  }

  return map
}

export function CompetencyContentHeader() {
  const pathname = usePathname()
  const titleMap = createRouteTitleMap()
  const segments = pathname.split("/").filter(Boolean)

  const crumbs = segments.map((_, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`
    const fallbackTitle = titleCase(segments[index] ?? "")

    return {
      href,
      title: titleMap.get(href) ?? fallbackTitle,
    }
  })

  return (
    <div className="sticky top-0 z-20 flex h-12 items-center justify-between border-b bg-background/95 px-3 backdrop-blur">
      <div className="flex min-w-0 items-center gap-2">
        <SidebarTrigger />

        <Breadcrumb>
          <BreadcrumbList>
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1

              return (
                <Fragment key={crumb.href}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={crumb.href}>{crumb.title}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </Fragment>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggleButton />
        <CompetencySearchDialog />
      </div>
    </div>
  )
}
