import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function DepartmentalPage() {
  return (
    <ArticlePage title="HIGHER EDUCATION CONTEXT COMPETENCIES">
      <ArticleSection title="Departmental">
        <p>
          {
            "An academic lecturer or professor is not just a content expert but a strategic contributor to the department’s vision. Through teaching, research, and community engagement, they actively translate departmental goals into lived practice-whether by designing curricula that meet evolving industry needs, supervising research that advances knowledge, or fostering student success and retention. Their everyday decisions-what to teach, how to teach, and what to research-quietly but powerfully shape the department’s reputation, performance, and future direction. In this way, each academic becomes both a custodian and a driver of the department’s goals and objectives."
          }
        </p>
      </ArticleSection>

      <ArticleSection title="How are all your: Checklist">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            academic responsibilities contributing towards the achievement of
            your department&apos;s strategic intent?
          </li>
          <li>
            teaching and learning initiatives aligned to the Learning &amp;
            Teaching Goals of your department?
          </li>
          <li>
            Are you working towards aligning your teaching, research and
            evidenced based consulting?
          </li>
          <li>
            How does your role and your work tasks help to deliver both
            operational and strategic goals of your department?
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
