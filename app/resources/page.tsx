import { PageShell } from "@/components/layout/page-shell"
import { SectionBlock } from "@/components/layout/section-block"

export default function ResourcesPage() {
  return (
    <PageShell>
      <SectionBlock>
        <h1 className="text-3xl font-semibold">Resources</h1>
        <p className="mt-2 text-muted-foreground">
          Resource migration starts in the next content batches.
        </p>
      </SectionBlock>
    </PageShell>
  )
}
