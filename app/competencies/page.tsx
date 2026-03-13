import { PageShell } from "@/components/layout/page-shell"
import { SectionBlock } from "@/components/layout/section-block"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { competencyGroups } from "@/lib/competencies"

export default function CompetenciesPage() {
  return (
    <PageShell>
      <SectionBlock>
        <h1 className="text-3xl font-semibold">Competencies</h1>
        <p className="mt-2 text-muted-foreground">
          Choose a competency area from the sidebar to continue.
        </p>
      </SectionBlock>
      <SectionBlock className="pt-0">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {competencyGroups.map((group) => (
            <Card key={group.title}>
              <CardHeader>
                <CardTitle style={{ color: group.color }}>
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  {group.subSegments.slice(0, 3).map((sub) => (
                    <li key={sub.title}>{sub.title}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionBlock>
    </PageShell>
  )
}
