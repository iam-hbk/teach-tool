import Link from "next/link"

import { PageShell } from "@/components/layout/page-shell"
import { SectionBlock } from "@/components/layout/section-block"
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
import Image from "next/image"

export default function CompetenciesPage() {
  const firstTopicLink = competencyGroups[0]?.subSegments[0]?.link

  return (
    <PageShell>
      <SectionBlock className="pb-6 sm:pb-8">
        <div className="mx-auto max-w-4xl space-y-5">
          <div className="space-y-3">
            <h1 className="flex max-w-[22ch] flex-row items-baseline gap-2 text-3xl leading-tight font-semibold sm:text-4xl">
              <Image
                src="/assets/teach_logo.svg"
                alt="TEACH"
                width={120}
                height={46}
                className="h-6 w-auto"
                priority
              />
              competency guide
            </h1>
            <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
              Use this index as your starting point. Each domain contains
              practical topic pages you can study in order or access directly,
              depending on your immediate teaching needs.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="h-full border-border/80 bg-[linear-gradient(180deg,hsl(var(--card)),hsl(var(--muted)/0.22))]">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Start here</CardTitle>
                <CardDescription>
                  Recommended path for first-time readers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li>1. Open a domain below and read its overview page.</li>
                  <li>2. Work through topic pages relevant to your role.</li>
                  <li>3. Note areas that need development support.</li>
                  <li>4. Use resources and forum sections to close gaps.</li>
                </ol>
              </CardContent>
              <CardFooter className="mt-auto gap-2">
                <Button asChild size="sm">
                  <Link
                    href={
                      firstTopicLink ??
                      competencyGroups[0]?.link ??
                      "/competencies"
                    }
                  >
                    Open first topic
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href="/resources">View resources</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full border-border/80">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  How this guide is organized
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Domain pages provide orientation. Topic pages provide detailed
                competency expectations, context, and development guidance. You
                can navigate by sidebar or from the domain cards.
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock className="pt-2 sm:pt-4">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Explore by competency group
            </h2>
            <p className="text-sm text-muted-foreground">
              All topics are also available through the sidebar for detailed
              drilling.
            </p>
          </div>
          <p className="hidden font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase sm:block">
            {competencyGroups.length} groups
          </p>
        </div>

        <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
          {competencyGroups.map((group) => (
            <Card
              key={group.title}
              className="flex h-full flex-col border-border/80 bg-card shadow-[0_14px_34px_-34px_hsl(var(--foreground)/0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/35"
            >
              <CardHeader className="gap-3 pb-3">
                <div
                  className="h-1.5 w-14 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <CardTitle
                  className="min-h-12 leading-tight"
                  style={{ color: group.color }}
                >
                  {group.title}
                </CardTitle>
                <CardDescription>
                  {group.subSegments.length} sub-competencies
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="flex min-h-32 flex-col gap-1.5 text-sm text-muted-foreground">
                  {group.subSegments.slice(0, 5).map((sub) => (
                    <li key={sub.title} className="truncate">
                      - {sub.title}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto grid grid-cols-2 gap-2">
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href={group.link}>View group</Link>
                </Button>
                <Button asChild size="sm" variant="ghost" className="w-full">
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
