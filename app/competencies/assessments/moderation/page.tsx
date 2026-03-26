import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { IconDownload } from "@tabler/icons-react"

export default function ModerationPage() {
  return (
    <ArticlePage title="ASSESSMENT COMPETENCIES">
      <ArticleSection title="Moderation">
        <h3 className="font-semibold text-foreground">Introduction</h3>
        <p>What is moderation?</p>
        <p>
          Moderation is a process of making judgements on quality and results of
          assessment with the purpose of confirming assessment judgements. It
          ensures that the assessment of any outcomes as described by the NQF
          standards and qualifications is fair, valid, and reliable and
          practicable.
        </p>
        <p>
          The purpose of moderators is outlined in the Assessment standard
          operating principles for faculties (Source: Criteria and Guidelines
          for Assessment of NQF Registered Unit Standards and Qualifications).
        </p>
      </ArticleSection>

      <ArticleSection title="Checklist">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Are you aware of the responsibilities of moderators? (see UJ
            Assessment Policy)
          </li>
          <li>
            Are aware of the university&apos;s requirements regarding the
            moderation process?
          </li>
          <li>
            Please ensure that both your internal and external moderators
            complete the relevant moderator forms (See under resources)
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Resources to consult">
        <ul className="space-y-2">
          <li>
            <Link
              href="/assets/assessments/assessment-standard-operating-procudure-senate-approved-16-november-2022.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
            >
              <IconDownload className="size-4" />
              assessment standard operating principles for faculties
            </Link>
          </li>
          <li>
            <Link
              href="/assets/assessments/assessment-policy.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
            >
              <IconDownload className="size-4" />
              UJ Assessment Policy
            </Link>
          </li>
          <li>
            <Link
              href="https://www.saqa.org.za"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Criteria and Guidelines for Assessment of NQF Registered Unit
              Standards and Qualifications - www.saqa.org.za
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="UJ Support Divisions">
        <p>
          The Division for Teaching Excellence at UJ can be contacted via these
          links:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link
              href="https://www.uj.ac.za/teaching-and-learning/division-for-teaching-excellence/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              https://www.uj.ac.za/teaching-and-learning/division-for-teaching-excellence/
            </Link>
          </li>
          <li>
            <Link
              href="https://www.uj.ac.za/teaching-and-learning/division-for-teaching-excellence/staff/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              https://www.uj.ac.za/teaching-and-learning/division-for-teaching-excellence/staff/
            </Link>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
