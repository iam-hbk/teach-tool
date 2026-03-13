import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

type TopicPlaceholderProps = {
  title: string
  group: string
}

export function TopicPlaceholder({ title, group }: TopicPlaceholderProps) {
  return (
    <ArticlePage title={title}>
      <ArticleSection title="Overview">
        <p>
          This {group} section has been scaffolded for route and information
          architecture parity.
        </p>
        <p>
          Full content migration for this topic is planned in the next
          competency content batch.
        </p>
      </ArticleSection>
    </ArticlePage>
  )
}
