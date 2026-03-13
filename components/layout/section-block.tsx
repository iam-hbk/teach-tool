import { cn } from "@/lib/utils"

type SectionBlockProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

export function SectionBlock({ id, children, className }: SectionBlockProps) {
  return (
    <section id={id} className={cn("py-10 sm:py-14 lg:py-16", className)}>
      {children}
    </section>
  )
}
