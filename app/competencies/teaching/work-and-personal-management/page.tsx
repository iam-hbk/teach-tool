import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function WorkAndPersonalManagementPage() {
  return (
    <ArticlePage title="Work and Personal Management">
      <ArticleSection title="Introduction">
        <p>
          Academics at all levels often balance many responsibilities across
          teaching, research, supervision, administration, community engagement
          and career development.
        </p>
        <p>Typical pressure points include:</p>
        <ul className="list-disc pl-5">
          <li>Time and priority management across core academic roles</li>
          <li>
            Managing relationships with students, peers and administrators
          </li>
          <li>Sustaining postgraduate supervision over multi-year timelines</li>
          <li>Maintaining research output and promotion readiness</li>
          <li>Balancing professional and personal wellbeing goals</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Tips for managing academic responsibilities">
        <ol className="list-decimal pl-5">
          <li>
            <span className="font-medium text-foreground">
              Understand expectations at your level and the next level.
            </span>
            <p>
              Use the
              <Link
                href="https://utfs.io/f/5c09c38b-de6c-488e-9acf-eeec87b6af3f-uelbdl.pdf"
                target="_blank"
                rel="noreferrer"
                className="ml-1 text-primary underline underline-offset-4"
              >
                UJ Senate Approved Academic Workload Model
              </Link>
              to guide planning discussions with line managers.
            </p>
          </li>
          <li>
            <span className="font-medium text-foreground">
              Build a 3-5 year vision and annual SMART objectives.
            </span>
            <p>
              Review your vision board, performance contract, CV and promotion
              policy annually.
            </p>
          </li>
          <li>
            <span className="font-medium text-foreground">
              Align workload planning with UJ and departmental calendars.
            </span>
            <p>
              This helps structure teaching, research, supervision and personal
              priorities with less friction.
            </p>
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection title="Time and priority management resources">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://fellow.app/blog/management/what-priority-management-is-and-how-to-use-it/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              What Priority Management Is and How to Use It
            </Link>
          </li>
          <li>
            <Link
              href="https://fellow.app/blog/management/what-priority-management-is-and-how-to-use-it/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Effective Prioritization and Time Management Strategies
            </Link>
          </li>
          <li>
            <Link
              href="https://fellow.app/blog/management/what-priority-management-is-and-how-to-use-it/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Time Management Is Priority Management
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Academic career navigation resources">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://www.ed.ac.uk/careers/students/postgraduates/phd-students/discover-what-s-out-there/an-academic-career"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              An academic career (University of Edinburgh)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.universityaffairs.ca/career-advice/career-advice-article/strategies-understanding-navigating-academic-underlife/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Navigating the academic underlife
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Recommended reading">
        <p>
          McDonnell, J.J. (2019). <em>Navigating an Academic Career</em>.
          American Geophysical Union.
        </p>
        <p>
          <Link
            href="https://www.entrepreneur.com/living/15-of-the-best-time-management-and-productivity-books-of/329378"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-4"
          >
            15 time management and productivity books
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="UJ centre for academic development">
        <p>
          The Centre for Academic Staff Development (CASD) supports staff
          development through programmes and workshops, including tutor
          development, portfolio development, module evaluations and scholarship
          of teaching and learning support.
        </p>
      </ArticleSection>
    </ArticlePage>
  )
}
