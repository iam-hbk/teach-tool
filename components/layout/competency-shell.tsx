import { CompetencyAppSidebar } from "@/components/layout/competency-app-sidebar"
import { CompetencyContentHeader } from "@/components/layout/competency-content-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

type CompetencyShellProps = {
  children: React.ReactNode
}

export function CompetencyShell({ children }: CompetencyShellProps) {
  return (
    <SidebarProvider>
      <CompetencyAppSidebar />
      <SidebarInset>
        <CompetencyContentHeader />
        <div className="px-4 pb-8 sm:px-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
