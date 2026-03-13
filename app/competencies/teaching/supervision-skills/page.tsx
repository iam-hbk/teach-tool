import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function SupervisionSkillsPage() {
  return (
    <ArticlePage title="Postgraduate Supervision">
      <ArticleSection title="Introduction">
        <p>
          Whether you are new to supervision or already experienced with
          Honours, Masters and PhD supervision, there is always room to
          strengthen your supervision practice.
        </p>
      </ArticleSection>

      <ArticleSection title="What is supervision and co-supervision?">
        <p>
          According to the CBE Student Supervisor Agreement Form, the supervisor
          provides professional and academic guidance for the registered
          postgraduate research project.
        </p>
        <p>
          A co-supervisor supports areas where additional expertise is needed,
          where projects are multidisciplinary, or for mentorship purposes.
        </p>
      </ArticleSection>

      <ArticleSection title="Responsibilities of supervisors and co-supervisors">
        <p>
          Read the CBE Student Supervisor Agreement Form carefully. It outlines
          role expectations and responsibilities for supervisors, co-supervisors
          and students.
        </p>
      </ArticleSection>

      <ArticleSection title="CBE requirements for supervising Masters and PhD students">
        <p>
          The CBE Higher Degrees Committee Standard Operating Procedures (CBE
          HDC SOP Oct 2020) provides requirements for supervision eligibility
          and guidance on external assessors and assessment processes.
        </p>
      </ArticleSection>

      <ArticleSection title="The supervision process">
        <p>
          Supervision must follow university, college and departmental processes
          strictly. Delayed feedback and process gaps can have financial
          consequences for students, supervisors and departments.
        </p>
        <p>
          Useful references:
          <Link
            href="https://utfs.io/f/b39ffd87-8d5d-467b-8061-5be265d53eaa-4pknv2.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            Postgraduate Research Toolkit (School of Management)
          </Link>
          , and
          <Link
            href="https://utfs.io/f/1a67ad14-3eec-4d3c-afcf-81ba268a9054-dpmjhl.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            UJ Higher Degrees Policy
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title="Building supervision capability">
        <p>
          The UJ Postgraduate School offers regular workshops and a Postgraduate
          Diploma in Research Supervision:
          <Link
            href="https://www.uj.ac.za/postgraduate-school/research-capacity-development/postgraduate-diploma-in-research-supervision/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            programme details
          </Link>
          .
        </p>
        <p>
          For enquiries contact:
          <Link
            href="mailto:supervisioncourse@uj.ac.za"
            className="ml-1 text-primary underline underline-offset-4"
          >
            supervisioncourse@uj.ac.za
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title="UJ support centres">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://www.uj.ac.za/postgraduate-school/Pages/statistical-consultation-services.aspx"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              STATKON
            </Link>
            : free quantitative/statistics consultations.
          </li>
          <li>
            <Link
              href="https://www.uj.ac.za/library/library-services/Pages/online-training.aspx"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              UJ Library training resources
            </Link>
            .
          </li>
          <li>
            <Link
              href="https://www.uj.ac.za/postgraduate-school/research-capacity-development/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Postgraduate School RCD resources
            </Link>
            .
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Additional resources">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://www.timeshighereducation.com/campus/research-supervision-working-individual-front-you"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Research supervision: working with the individual in front of you
            </Link>
          </li>
          <li>
            <Link
              href="https://utfs.io/f/aa3e7fd6-daaa-4184-bdc5-b418599d2e31-audwgs.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Alternative approaches to postgraduate supervision (PDF)
            </Link>
          </li>
          <li>
            <Link
              href="https://utfs.io/f/e0973532-4cbb-4458-b5aa-ea233fecdadc-ctli5h.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Co supervision in postgraduate training (PDF)
            </Link>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
