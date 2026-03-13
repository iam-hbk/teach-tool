import { CompetencyShell } from "@/components/layout/competency-shell"

export default function CompetenciesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <CompetencyShell>{children}</CompetencyShell>
}
