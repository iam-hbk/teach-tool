import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { IconDownload } from "@tabler/icons-react"

export default function OrganisationIndustryPage() {
  return (
    <ArticlePage title="COMMITMENT COMPETENCIES">
      <ArticleSection title="Relationship with Organisation/Industry">
        <p>
          Connection and collaboration with organisations and industry are
          essential aspects of a university lecturer&apos;s role, as they bridge
          the gap between academic knowledge and real-world application.
        </p>
        <p>
          Engaging with industry partners ensures that teaching remains
          relevant, current, and responsive to evolving professional practices,
          technologies, and labour market demands. This connection allows
          lecturers to continuously update their curriculum, incorporate
          practical examples, and design learning experiences that prepare
          students not only to succeed academically but also to function
          effectively in their chosen professions.
        </p>
        <p>
          For lecturers, active collaboration with industry demonstrates a clear
          commitment to their discipline. It reflects an understanding that
          knowledge is dynamic and that maintaining disciplinary relevance
          requires ongoing engagement beyond the university. Whether through
          research partnerships, consultancy work, professional networks, or
          participation in industry forums, such involvement enhances a
          lecturer&apos;s expertise and credibility.
        </p>
        <p>
          It also contributes to the generation of new knowledge that is both
          theoretically sound and practically applicable.
        </p>
        <p>
          Equally important is how this collaboration benefits students. When
          lecturers maintain strong industry links, they are better positioned
          to create opportunities for work-integrated learning, internships,
          guest lectures, and exposure to current industry challenges. This
          enriches the student learning experience and improves graduate
          employability.
        </p>
        <p>
          It signals to students that their lecturer is invested not only in
          their academic success but also in their professional futures.
          Students gain insights into workplace expectations, professional
          standards, and emerging trends, which help them transition more
          confidently into the world of work.
        </p>
        <p>
          In the South African higher education context, such collaboration is
          particularly significant given the need to address skills gaps,
          unemployment, and socio-economic inequalities. By fostering strong
          relationships with organisations and industry, lecturers help produce
          graduates who are relevant, adaptable, and capable of making
          meaningful contributions to society.
        </p>
        <p>
          Ultimately, this engagement reflects a lecturer&apos;s commitment to
          excellence in teaching, to the advancement of their discipline, and to
          the holistic development of their students.
        </p>
      </ArticleSection>

      <ArticleSection title="In terms of your relationships with industry: Checklist">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Are you involved in consulting and another capacity within industry?
          </li>
          <li>Have you connected with industry experts?</li>
          <li>
            Have you used industry experts as guest lecturers and contributors
            to your module?
          </li>
          <li>
            Have you considered using your industry networks to create possible
            WIL, internship and research opportunities for your undergraduate
            and postgraduate students?
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Articles for reflection">
        <ul className="space-y-3">
          <li>
            Khan, I. M., Edwards, E., Ianicelli, B. M., Ahmed, W., Hardey, M.,
            &amp; Eremionkhale, G. (2025). University-industry collaboration for
            academic success and employability: a connectivist perspective.
            Studies in Higher Education, 1-21.
            <Link
              href="https://doi.org/10.1080/03075079.2025.2545606"
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-primary underline underline-offset-4"
            >
              https://doi.org/10.1080/03075079.2025.2545606
            </Link>
          </li>
          <li>
            Dilrabo Jonbekova, Gulfiya Kuchumova, Tatyana Kim, Dinara
            Mukhamejanova, Dilbar Gimranova, Yerkin Abdildin, Dinara
            Alimkhanova, Motivations, benefits, and challenges of
            university-industry partnerships in Kazakhstan, International
            Journal of Educational Research, Volume 130, 2025, 102486, ISSN
            0883-0355,
            <Link
              href="https://doi.org/10.1016/j.ijer.2024.102486"
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-primary underline underline-offset-4"
            >
              https://doi.org/10.1016/j.ijer.2024.102486
            </Link>
            .
          </li>
          <li>
            <Link
              href="/assets/commitment/university-industry-collaboration-for-academic-success-and-employability.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
            >
              <IconDownload className="size-4" />
              Download University-industry collaboration article
            </Link>
          </li>
          <li>
            <Link
              href="/assets/commitment/motivations-benefits-challenges-university-industry-partnerships.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
            >
              <IconDownload className="size-4" />
              Download Motivations, benefits, and challenges article
            </Link>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
