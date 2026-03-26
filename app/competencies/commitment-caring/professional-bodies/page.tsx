import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { IconDownload } from "@tabler/icons-react"

export default function ProfessionalBodiesPage() {
  return (
    <ArticlePage title="COMMITMENT COMPETENCIES">
      <ArticleSection title="Collaborating and adhering to Professional Bodies">
        <p>
          Collaborating with and adhering to professional bodies is a critical
          dimension of academic life within the university fraternity, as it
          strengthens both disciplinary integrity and the quality of teaching,
          learning, and research.
        </p>
        <p>
          Professional bodies serve as custodians of standards, ethics, and best
          practices within specific fields, ensuring that academic programmes
          remain relevant, credible, and aligned with industry and societal
          needs.
        </p>
        <p>
          For lecturers, active engagement with these bodies supports continuous
          professional development by providing access to current research,
          meeting accreditation requirements, networking opportunities, and
          evolving pedagogical approaches. It also enhances their credibility
          and ensures that their teaching is informed by up-to-date disciplinary
          knowledge and professional expectations.
        </p>
        <p>
          For students, alignment with professional bodies contributes
          significantly to their academic and career readiness. Accredited
          programmes often carry greater recognition in the labour market, and
          students benefit from curricula that are designed to meet industry
          standards and competencies.
        </p>
        <p>
          Furthermore, exposure to professional ethics, codes of conduct, and
          real-world expectations helps shape students into responsible,
          competent graduates. In disciplines such as engineering, health
          sciences, law, and accounting, adherence to professional body
          requirements is often essential for licensure and practice, making
          this collaboration indispensable.
        </p>
        <p>
          Within the broader university context, particularly in the South
          African higher education landscape, working closely with professional
          bodies also supports transformation, quality assurance, and
          responsiveness to national development goals. It fosters partnerships
          between academia and industry, encourages work-integrated learning
          opportunities, and ensures that both lecturers and students remain
          connected to the realities of professional practice.
        </p>
        <p>
          Ultimately, such collaboration promotes a culture of excellence,
          accountability, and lifelong learning across academic disciplines.
        </p>
      </ArticleSection>

      <ArticleSection title="In terms of your relationship with your respective professional body: Checklist">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Are you registered with your respective professional body governing
            your discipline?
          </li>
          <li>
            Do you attend training programmes run by your respective
            professional body?
          </li>
          <li>Have you integrated their standards into your modules?</li>
          <li>Do you seek their guidance when developing curriculum?</li>
          <li>Do you make students aware of these professional bodies?</li>
          <li>
            Do you encourage your students to join these professional bodies?
          </li>
          <li>Do you contribute to the work of the professional body?</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Articles to read on the role of professional bodies at universities">
        <ul className="space-y-3">
          <li>
            <Link
              href="https://usaf.ac.za/professional-bodies-are-co-determining-with-universities-the-attributes-graduates-need-to-serve-society"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              https://usaf.ac.za/professional-bodies-are-co-determining-with-universities-the-attributes-graduates-need-to-serve-society
            </Link>
          </li>
          <li>
            Musimuni Dowelani &amp; Faith Dowelani, Curriculum development in
            South Africa: the role of professional bodies. 6th International
            Conference on Higher Education Advances (HEAd&apos;20) Universitat
            Politecnica de Valencia, Valencia, 2020 DOI:
            <Link
              href="http://dx.doi.org/10.4995/HEAd20.2020.11188"
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-primary underline underline-offset-4"
            >
              http://dx.doi.org/10.4995/HEAd20.2020.11188
            </Link>
          </li>
          <li>
            <Link
              href="/assets/commitment/curriculum-development-in-sa-role-of-professional-bodies.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
            >
              <IconDownload className="size-4" />
              Download attached article
            </Link>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
