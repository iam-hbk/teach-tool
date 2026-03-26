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
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[linear-gradient(125deg,hsl(var(--background))_0%,hsl(var(--muted)/0.6)_45%,hsl(var(--background))_100%)] p-6 shadow-[0_32px_80px_-48px_hsl(var(--primary)/0.75)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsl(var(--primary)/0.2),transparent_40%),radial-gradient(circle_at_80%_15%,hsl(var(--chart-2)/0.22),transparent_38%),linear-gradient(to_top,hsl(var(--primary)/0.08),transparent_35%)]" />
          <div className="pointer-events-none absolute top-8 right-8 h-28 w-28 rounded-full border border-primary/35" />
          <div className="pointer-events-none absolute top-12 right-12 h-28 w-28 rounded-full border border-chart-2/35" />

          <div className="relative grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col gap-5 pt-2 duration-700 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-4">
              <p className="w-fit rounded-full border border-primary/25 bg-background/70 px-4 py-1 text-xs font-semibold tracking-[0.22em] text-primary uppercase backdrop-blur-sm">
                TEACH Academic Compass
              </p>
              <h1 className="max-w-[18ch] text-3xl leading-[1.08] font-semibold text-balance sm:text-4xl lg:text-5xl">
                Navigate your teaching growth with a living competency map.
              </h1>
              <p className="max-w-[54ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
                Designed for reflective academics, this model surfaces what to
                strengthen next across teaching practice, assessment, expertise,
                care, and higher education context.
              </p>
              <div className="inline-flex w-fit items-center bg-background/75 text-sm text-muted-foreground backdrop-blur-sm">
                Built for
                <TypingAnimation
                  as="span"
                  words={roles}
                  className="ml-2 font-semibold text-foreground"
                  duration={65}
                  pauseDelay={1200}
                  loop
                />
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <Button asChild>
                  <Link href={ROUTES.competencies}>Start self-assessment</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#how-it-works">How it works</Link>
                </Button>
              </div>
              <div className="grid w-full max-w-xl grid-cols-3 gap-2 pt-2 text-center text-xs sm:text-sm">
                <div className="rounded-xl border border-border/80 bg-background/75 px-3 py-3 backdrop-blur-sm">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                    domains
                  </p>
                  <p className="pt-1 text-lg font-semibold">5</p>
                </div>
                <div className="rounded-xl border border-border/80 bg-background/75 px-3 py-3 backdrop-blur-sm">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                    sub-areas
                  </p>
                  <p className="pt-1 text-lg font-semibold">25+</p>
                </div>
                <div className="rounded-xl border border-border/80 bg-background/75 px-3 py-3 backdrop-blur-sm">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                    pathways
                  </p>
                  <p className="pt-1 text-lg font-semibold">adaptive</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-175 delay-200 duration-700 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-4">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[conic-gradient(from_210deg_at_50%_50%,hsl(var(--chart-2)/0.2),hsl(var(--primary)/0.14),hsl(var(--chart-1)/0.2),hsl(var(--chart-2)/0.2))] blur-2xl" />
              <div className="rounded-[2rem] p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between px-2">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-primary uppercase">
                    click to explore
                  </span>
                </div>
                <NavigationWheel />
              </div>
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
