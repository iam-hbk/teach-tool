"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { competencySearchIndex } from "@/lib/competency-search"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { IconSearch } from "@tabler/icons-react"

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  const tagName = target.tagName.toLowerCase()
  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    target.isContentEditable
  )
}

export function CompetencySearchDialog() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const groupedEntries = useMemo(() => {
    return competencySearchIndex.reduce<
      Record<string, typeof competencySearchIndex>
    >((acc, entry) => {
      acc[entry.group] = acc[entry.group]
        ? [...acc[entry.group], entry]
        : [entry]
      return acc
    }, {})
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((prev) => !prev)
      }

      if (
        event.key === "/" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.shiftKey &&
        !event.altKey &&
        !isTypingTarget(event.target)
      ) {
        event.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="hidden sm:flex"
        onClick={() => setOpen(true)}
      >
        <IconSearch data-icon="inline-start" />
        Search competencies
        <span className="text-xs text-muted-foreground">
          ({competencySearchIndex.length})
        </span>
        <kbd className="ml-2 rounded border px-1.5 py-0.5 text-[10px]">/</kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search competencies"
        description="Jump to competency groups and sections"
      >
        <Command>
          <CommandInput placeholder="Search competencies..." />
          <CommandList>
            <CommandEmpty>No competency results found.</CommandEmpty>
            {Object.entries(groupedEntries).map(([group, entries]) => (
              <CommandGroup key={group} heading={group}>
                {entries.map((entry) => (
                  <CommandItem
                    key={entry.href}
                    value={`${entry.title} ${entry.group} ${entry.keywords.join(" ")}`}
                    onSelect={() => {
                      router.push(entry.href)
                      setOpen(false)
                    }}
                  >
                    <span>{entry.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
