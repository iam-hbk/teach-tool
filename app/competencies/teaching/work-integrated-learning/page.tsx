import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function WorkIntegratedLearningPage() {
  return (
    <ArticlePage title="Work Integrated Learning">
      <ArticleSection title="Introduction">
        <p>
          If you need to include a Work-Integrated Learning (WIL) component in
          your module, start by understanding the WIL concept and the role it
          plays in curriculum design.
        </p>
      </ArticleSection>

      <ArticleSection title="What is work-integrated learning?">
        <p>
          WIL is an umbrella term for curricular, pedagogic and assessment
          practices that integrate formal learning with workplace concerns
          across disciplines.
        </p>
      </ArticleSection>

      <ArticleSection title="Purpose of work-integrated learning">
        <p>
          WIL enhances student learning and contributes to graduateness,
          employability and civic responsibility through modalities such as
          project-based learning, practicum placements, service learning and
          simulated learning.
        </p>
      </ArticleSection>

      <ArticleSection title="Resources and policy context">
        <p>
          UJ’s Work-Integrated Education policy (2022) positions WIL as one of
          several learning-in- action modalities.
        </p>
        <ul className="list-disc pl-5">
          <li>Work-integrated learning (WIL)</li>
          <li>Problem-based learning (PBL)</li>
          <li>Community-based learning (CBL)</li>
          <li>Project-based learning (PjBL)</li>
          <li>
            Simulations, teaching practice, service learning and internships
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Additional resources">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://webapps.dhet.gov.za/iWIL"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              DHET iWIL
            </Link>
          </li>
          <li>
            <Link
              href="https://www.universityworldnews.com/post.php?story=20220412102705795"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Work-integrated learning and graduate unemployment (University
              World News)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.ijwil.org"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              International Journal of Work-Integrated Learning
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Books and journal articles">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://utfs.io/f/6f370b50-1eb6-4528-a1f5-8a9231583d09-45abpl.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              UJ WIE Policy (2022)
            </Link>
          </li>
          <li>
            <Link
              href="https://utfs.io/f/35fd7238-db77-4b04-8bbc-68d1b5c41471-sixt1j.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Comparative study of cooperative education and WIL
            </Link>
          </li>
          <li>
            <Link
              href="https://utfs.io/f/a43b6829-ccc9-4519-9979-77ebe293e543-alq5ii.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Work Integrated Learning for Student Career Prospects
            </Link>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
