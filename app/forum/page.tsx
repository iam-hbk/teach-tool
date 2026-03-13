import { PageShell } from "@/components/layout/page-shell"
import { SectionBlock } from "@/components/layout/section-block"

export default function ForumPage() {
  return (
    <PageShell>
      <SectionBlock>
        <h1 className="text-3xl font-semibold">Discussion Forum</h1>
        <p className="mt-2 text-muted-foreground">
          Forum content will be migrated after core competency pages.
        </p>
      </SectionBlock>
    </PageShell>
  )
}
