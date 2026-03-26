import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { IconDownload } from "@tabler/icons-react"

export default function PersonalGrowthPage() {
  return (
    <ArticlePage title="COMMITMENT COMPETENCIES">
      <ArticleSection title="Personal Growth">
        <p>
          Personal growth plays a vital role in the life of a university
          lecturer, regardless of whether one is an early-career academic or a
          full professor. It involves continuous reflection, learning, and
          adaptation to evolving teaching practices, research demands, and
          student needs.
        </p>
        <p>
          Engaging in personal and professional development not only enhances
          subject expertise but also strengthens teaching effectiveness,
          resilience, and the ability to contribute meaningfully to the academic
          community.
        </p>
        <p>
          By intentionally investing in your own growth, you will remain
          relevant and innovative, and be better equipped to support student
          success while advancing your career.
        </p>
      </ArticleSection>

      <ArticleSection title="Reflective questions for yourself">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            When last did I actively reflect on and update my teaching practices
            to better support student learning?
          </li>
          <li>
            In what ways have I grown professionally in the past year, and where
            do I still need development?
          </li>
          <li>
            How am I balancing my teaching, research, and personal well-being to
            sustain long-term growth?
          </li>
          <li>
            What new skills or knowledge areas should I pursue to remain
            relevant in my discipline?
          </li>
          <li>
            How intentionally am I setting goals for both my personal
            development and academic career progression?
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Resources">
        <ul className="space-y-2">
          <li>
            Bethany Smith &amp; Lynne Wyness (07 Aug 2024): What makes
            professional teacher development in universities effective? Lessons
            from an international systematised review, Professional Development
            in Education, DOI: 10.1080/19415257.2024.2386666
          </li>
          <li>
            <Link
              href="/assets/commitment/what-makes-professional-teacher-development-in-universities-effective.pdf"
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

      <ArticleSection title="UJ Support Division">
        <p>
          The Centre for Academic Staff Development (CASD) plays an essential
          role in providing opportunities for staff (who are disciplinary
          experts) and tutors to develop their educational expertise in order to
          become better facilitators of learning. It does this by offering the
          following:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Postgraduate Diploma in Higher Education - a formal qualification
            for academics in the post-school environment
          </li>
          <li>
            Academic Preparation Programme - a semester-long programme for staff
            new to UJ
          </li>
          <li>
            Professional Development Workshops - provide opportunities for
            academics to develop in various areas of teaching and learning
          </li>
          <li>
            Tutor Development - a College Reading and Learning Association
            (CRLA) approved tutor training programme for tutors and senior
            tutors
          </li>
          <li>
            Teaching Portfolio Development - support for applicants seeking
            promotion and/or teaching awards
          </li>
          <li>
            Scholarship of Teaching and Learning (SOTL) - support for the
            development of research in Teaching and Learning
          </li>
          <li>
            Teaching and Module Evaluations - administration of evaluations, and
            support for academic staff emerging from feedback obtained
          </li>
          <li>
            Peer evaluation - support for academic staff undertaking peer
            evaluations
          </li>
          <li>
            Development of Academic Heads of Department - workshops for newly
            appointed Heads of Department
          </li>
        </ul>
        <p>
          Here is the link to CASD:
          <Link
            href="https://www.uj.ac.za/about/impact/africa-impact/continuous-professional-development"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            https://www.uj.ac.za/about/impact/africa-impact/continuous-professional-development
          </Link>
        </p>
        <p>Under this link, you can also gain access to the following:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>UJ Teaching and Learning Policy</li>
          <li>
            Framework for the Professional Development of Academic Staff as
            Teachers
          </li>
          <li>Peer Evaluation Framework</li>
          <li>Academic Workload Model</li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
