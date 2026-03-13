import { competencyGroups } from "@/lib/competencies"

export type CompetencySearchEntry = {
  title: string
  href: string
  group: string
  keywords: string[]
}

export const competencySearchIndex: CompetencySearchEntry[] =
  competencyGroups.flatMap((group) => {
    const groupEntry: CompetencySearchEntry = {
      title: group.title,
      href: group.link,
      group: group.title,
      keywords: [group.title, "competency", "teach"],
    }

    const subEntries = group.subSegments.map((sub) => ({
      title: sub.title,
      href: sub.link,
      group: group.title,
      keywords: [sub.title, group.title, "competency", "teach"],
    }))

    return [groupEntry, ...subEntries]
  })
