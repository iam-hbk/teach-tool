import { cn } from "@/lib/utils"

type ArticlePageProps = {
  title: string
  children: React.ReactNode
  className?: string
}

export function ArticlePage({ title, children, className }: ArticlePageProps) {
  return (
    <article className={cn("mx-auto w-full max-w-4xl py-8", className)}>
      <h1 className="mb-8 text-3xl font-bold tracking-tight capitalize sm:text-4xl">
        {title}
      </h1>
      <div className="flex flex-col gap-6">{children}</div>
    </article>
  )
}

type ArticleSectionProps = {
  title: string
  children: React.ReactNode
}

export function ArticleSection({ title, children }: ArticleSectionProps) {
  return (
    <section className="rounded-xl border bg-card p-5 text-card-foreground">
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-3 text-sm leading-7 text-muted-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_li]:leading-7 [&_ol]:space-y-2 [&_ol]:pl-5 [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}
