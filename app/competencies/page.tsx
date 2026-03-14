import Link from "next/link"

import { NavigationWheel } from "@/components/competencies/navigation-wheel"
import { PageShell } from "@/components/layout/page-shell"
import { SectionBlock } from "@/components/layout/section-block"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { competencyGroups } from "@/lib/competencies"

export default function CompetenciesPage() {
  return (
    <PageShell>
      <SectionBlock>
        <div className="flex flex-col gap-3">
          <Badge variant="secondary" className="w-fit">
            T-E-A-C-H Framework
          </Badge>
          <h1 className="text-3xl font-semibold">Competencies</h1>
          <p className="max-w-3xl text-muted-foreground">
            Use the sidebar for detailed navigation, or jump directly from the
            overview cards below. Every competency group and sub-competency
            route is available.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock className="pt-0">
        <div className="rounded-3xl border bg-card p-4 sm:p-6">
          <h2 className="mb-4 text-center text-xl font-semibold sm:text-2xl">
            Competency Wheel
          </h2>
          <NavigationWheel />
        </div>
      </SectionBlock>

      <SectionBlock className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {competencyGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle style={{ color: group.color }}>
                  {group.title}
                </CardTitle>
                <CardDescription>
                  {group.subSegments.length} sub-competencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
                  {group.subSegments.slice(0, 4).map((sub) => (
                    <li key={sub.title} className="truncate">
                      {sub.title}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-between">
                <Button asChild size="sm" variant="outline">
                  <Link href={group.link}>View group</Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link href={group.subSegments[0]?.link ?? group.link}>
                    Start first topic
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </SectionBlock>
    </PageShell>
  )
}
