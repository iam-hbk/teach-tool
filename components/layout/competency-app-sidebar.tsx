"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { competencyGroups } from "@/lib/competencies"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function CompetencyAppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="h-12 justify-center border-b px-3">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/assets/teach_logo.svg"
            alt="TEACH"
            width={120}
            height={36}
            className="h-4 w-auto"
            priority
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Competencies</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {competencyGroups.map((group) => {
                const groupActive =
                  pathname === group.link ||
                  pathname.startsWith(`${group.link}/`)

                return (
                  <SidebarMenuItem key={group.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={groupActive}
                      className="data-[active=true]:bg-primary/12 data-[active=true]:font-semibold data-[active=true]:text-foreground data-[active=true]:ring-1 data-[active=true]:ring-primary/25"
                    >
                      <Link href={group.link}>
                        <span style={{ color: group.color }}>
                          {group.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      {group.subSegments.map((sub) => (
                        <SidebarMenuSubItem key={sub.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={pathname === sub.link}
                            className="data-[active=true]:bg-primary/10 data-[active=true]:font-medium data-[active=true]:text-foreground"
                          >
                            <Link href={sub.link}>
                              <span>{sub.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
