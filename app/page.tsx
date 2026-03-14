import Image from "next/image"
import Link from "next/link"

import { NavigationWheel } from "@/components/competencies/navigation-wheel"
import { PageShell } from "@/components/layout/page-shell"
import { SectionBlock } from "@/components/layout/section-block"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { ROUTES } from "@/lib/routes"

const roles = [
  "Lecturer",
  "Senior lecturer",
  "Associate Professor",
  "Professor",
]

const cards = [
  {
    title: "Learning Resources",
    description:
      "Access references, useful links, and supporting material to close competency gaps.",
    href: ROUTES.resources,
  },
  {
    title: "Self Assessment",
    description:
      "Use competency themes to review your skills, knowledge, and personal attributes.",
    href: ROUTES.competencies,
  },
  {
    title: "Discussion Forum",
    description:
      "Engage peers on teaching practice, professional development, and implementation ideas.",
    href: ROUTES.forum,
  },
  {
    title: "Track Progress",
    description:
      "Monitor how your competency development evolves across the T-E-A-C-H model areas.",
    href: ROUTES.competencies,
  },
]

export default function HomePage() {
  return (
    <PageShell>
      <SectionBlock className="pt-8 sm:pt-12">
        <div className="relative overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.14),transparent_45%),radial-gradient(circle_at_85%_15%,hsl(var(--chart-2)/0.12),transparent_42%),linear-gradient(to_bottom_right,hsl(var(--background)),hsl(var(--muted)/0.35),hsl(var(--background)))] p-6 sm:p-8">
          <div className="pointer-events-none absolute -top-20 -left-24 size-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-20 size-72 rounded-full bg-chart-2/10 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-muted-foreground">
                T-E-A-C-H Academic Competency Tool
              </p>
              <h1 className="text-3xl leading-tight font-semibold sm:text-4xl">
                The model provides a quick scan of the critical competencies
                required for an academic on all levels.
              </h1>
              <div className="inline-flex w-fit items-center rounded-full bg-background/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
                For
                <TypingAnimation
                  as="span"
                  words={roles}
                  className="ml-2 font-semibold text-foreground"
                  duration={65}
                  pauseDelay={1200}
                  loop
                />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Button asChild>
                  <Link href="#how-it-works">How it works</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={ROUTES.competencies}>Explore competencies</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/teach_logo_light.svg"
                alt="T-E-A-C-H logo"
                width={420}
                height={220}
                className="h-auto w-full max-w-md drop-shadow-sm"
                priority
              />
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock id="how-it-works">
        <Card>
          <CardHeader>
            <CardTitle>How Does It Work?</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            The model offers a comprehensive evaluation of essential
            competencies for academics at all career stages (Lecturer to
            Professor), complemented by a self-checklist for assessing skills,
            knowledge, and personal attributes. It provides resources like
            links, contact information, literature, UJ policies, and videos to
            address competency gaps, support professional development,
            performance management, and promotion applications.
          </CardContent>
        </Card>
      </SectionBlock>

      <SectionBlock className="pt-0">
        <div className="rounded-3xl border bg-card p-4 sm:p-6">
          <h2 className="mb-4 text-center text-xl font-semibold sm:text-2xl">
            Explore The Competency Wheel
          </h2>
          <NavigationWheel />
        </div>
      </SectionBlock>

      <SectionBlock className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <Card key={card.title}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
                <Button asChild variant="link" className="w-fit px-0">
                  <Link href={card.href}>View section</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionBlock>
    </PageShell>
  )
}
