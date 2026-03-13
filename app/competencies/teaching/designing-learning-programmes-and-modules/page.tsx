import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function LearningProgrammesPage() {
  return (
    <ArticlePage title="Designing Learning Programmes and Modules">
      <ArticleSection title="Introduction">
        <p>
          Developing a new programme, or amending an existing one, starts at
          departmental level and requires coordination with your HOD, school and
          college leadership, CAPQP and programme committee structures.
        </p>
        <p>
          Start with CAPQP’s
          <Link
            href="https://utfs.io/f/6d7ddbcf-12b6-4a78-a19c-ba240c3465e4-i7yyqp.pdf"
            target="_blank"
            rel="noreferrer"
            className="mx-1 text-primary underline underline-offset-4"
          >
            Programme Manual
          </Link>
          and the Academic Programme Policy (Senate Approved 10 June 2021).
        </p>
      </ArticleSection>

      <ArticleSection title="Key policy requirements">
        <ul className="list-disc pl-5">
          <li>Alignment with HEQSF and minimum admission requirements.</li>
          <li>
            Compliance with relevant statutory/professional body requirements.
          </li>
          <li>
            Alignment with university vision, mission and strategic priorities.
          </li>
          <li>
            Alignment with college/faculty strategy and current research
            context.
          </li>
          <li>
            Constructive alignment across programme purpose, outcomes,
            assessment criteria, module outcomes, and teaching/learning
            opportunities.
          </li>
          <li>Learning guide required per module in line with UJ policy.</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="What is an academic programme?">
        <p>
          A programme is a purposeful, structured set of learning experiences
          (teaching, learning and assessment) that leads to a qualification.
        </p>
        <p>
          Programmes include core components, and where applicable
          fundamental/elective components, each with defined outcomes and
          assessment criteria.
        </p>
      </ArticleSection>

      <ArticleSection title="What is a module?">
        <p>
          A module is a predetermined unit of teaching and learning within a
          programme, with an institutional credit value and duration.
        </p>
        <p>
          Module credits and NQF level must match complexity, outcomes and
          content requirements.
        </p>
      </ArticleSection>

      <ArticleSection title="How to develop a learning guide">
        <p>
          In UJ policy terms, a learning guide is a module-specific facilitation
          map for students, containing both organisational and learning
          facilitation components.
        </p>
        <p>
          Use UJ policy requirements plus departmental/school/college
          requirements when preparing learning guides.
        </p>
      </ArticleSection>

      <ArticleSection title="UJ policies and references">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://utfs.io/f/3915ea3b-eaaf-446a-9ca3-576093e7bf0b-yoo0ok.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              University Teaching and Learning Policy
            </Link>
          </li>
          <li>
            <Link
              href="https://utfs.io/f/6b157fe2-158a-4c21-b0b8-f623f85c3e69-fq22mm.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              UJ Assessment Policy
            </Link>
          </li>
          <li>
            <Link
              href="https://utfs.io/f/723029f5-6f5d-4513-9d5c-c4d21ff49b1b-g0il5i.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              UJ Short Learning Programme policy
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Where to get assistance at UJ">
        <p>
          CAPQP supports quality assurance, accreditation pathways,
          DHET/CHE/SAQA processes, internal approvals, amendments and curriculum
          transformation.
        </p>
        <p>
          Contact:
          <Link
            href="mailto:capqp@uj.ac.za"
            className="ml-1 text-primary underline underline-offset-4"
          >
            capqp@uj.ac.za
          </Link>
          .
        </p>
        <p>
          Also consult:
          <Link
            href="https://utfs.io/f/dcda45fa-5daa-49fe-92e5-b0256ef7d45a-u0itus.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            Guidelines for Curriculum Transformation
          </Link>
          .
        </p>
      </ArticleSection>
    </ArticlePage>
  )
}
