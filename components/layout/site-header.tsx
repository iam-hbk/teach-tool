"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { competencyGroups } from "@/lib/competencies"
import { ROUTES } from "@/lib/routes"
import { ThemeToggleButton } from "@/components/layout/theme-toggle-button"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { IconMenu2 } from "@tabler/icons-react"

const primaryLinks = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.resources, label: "Resources" },
  { href: ROUTES.forum, label: "Discussion Forum" },
  { href: "#footer", label: "Contact" },
]

export function SiteHeader() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href={ROUTES.home} className="flex items-center gap-3">
          <Image
            src="/assets/uj_logo.svg"
            alt="University of Johannesburg"
            width={148}
            height={44}
            className="h-11 w-auto"
            priority
          />
          <span className="hidden font-bold md:inline">
            Department of Industrial Psychology and People Management
          </span>
        </Link>

        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => router.push(ROUTES.competencies)}
              >
                Competencies
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-72 gap-1 p-2">
                  {competencyGroups.map((group) => (
                    <li key={group.title}>
                      <NavigationMenuLink asChild>
                        <Link href={group.link} className="block">
                          <span
                            className="text-sm font-semibold"
                            style={{ color: group.color }}
                          >
                            {group.title}
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {primaryLinks.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={link.href} className={cn("text-sm font-medium")}>
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <ThemeToggleButton />

          <div className="xl:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon-sm">
                  <IconMenu2 />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[90vw] overflow-y-auto sm:max-w-sm"
              >
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Browse core pages and competency areas.
                  </SheetDescription>
                </SheetHeader>
                <div className="px-4 pb-6">
                  <nav className="flex flex-col gap-1">
                    {primaryLinks.map((link) => (
                      <Button
                        key={link.label}
                        asChild
                        variant="ghost"
                        className="justify-start"
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </Button>
                    ))}
                  </nav>
                  <Separator className="my-4" />
                  <div className="flex flex-col gap-3">
                    {competencyGroups.map((group) => (
                      <div key={group.title} className="rounded-md border p-2">
                        <Link
                          href={group.link}
                          className="text-sm font-semibold"
                          style={{ color: group.color }}
                        >
                          {group.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
