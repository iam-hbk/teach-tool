import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function PlanningConductingAndManagingAssessmentsPage() {
  return (
    <ArticlePage title="ASSESSMENT COMPETENCIES">
      <ArticleSection title="Plan, Conduct, and Manage the Assessment Process">
        <h3 className="font-semibold text-foreground">INTRODUCTION</h3>
        <p>
          Planning assessment is essential in teaching practice because it
          ensures that assessments are aligned with learning outcomes and that
          students are evaluated fairly and consistently. Proper planning also
          impacts student learning by providing clarity on expectations, which
          helps students focus their efforts and engage more meaningfully with
          the course content.
        </p>
        <p>
          Conducting assessments effectively is equally important, as it allows
          lecturers to accurately measure student understanding and skills
          rather than merely assessing rote memorisation. Fairness during the
          assessment process is maintained through the use of clear rubrics,
          standardised criteria, and moderation processes to ensure consistency.
        </p>
        <p>
          Managing the assessment process is crucial, as it supports timely
          feedback, efficient marking, and proper record-keeping, all of which
          contribute to student development and institutional accountability.
          Feedback plays a critical role by guiding students on how to improve
          and deepening their learning beyond the assessment itself.
        </p>
        <p>
          Despite challenges such as time constraints, large class sizes, and
          maintaining consistency, effective systems and careful planning help
          to address these issues. Ultimately, assessment contributes to overall
          academic quality by ensuring that standards are upheld and that
          graduates meet the
        </p>
      </ArticleSection>

      <ArticleSection title="When you manage your assessment process: Checklist">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Are your assessment processes reliable, valid, transparent and fair?
            (UJ Policy: Assessment)
          </li>
          <li>
            Are the tasks that you require students to do feasible (practicable)
            in relation to available financial resources, facilities, equipment
            and time? (UJ Policy: Assessment)
          </li>
          <li>
            Have you made allowances for both formative and summative
            assessments? (UJ Policy: Assessment)
          </li>
          <li>
            Have you consulted the various UJ policies regarding Assessment
            Processes &amp; Invigilation:
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>UJ Assessment regulations</li>
              <li>Assessment Standard Operating Principles for Faculties</li>
              <li>
                Addressing security risks: setting, printing, handling and
                storage of assessments
              </li>
              <li>
                Alteration of assessment and final assessment opportunity marks
              </li>
              <li>
                Access control and telephonic or radio contact at final
                assessment opportunity venues
              </li>
              <li>Invigilation</li>
              <li>
                Rules that govern the committing of offences and/or
                transgressions of assessment
              </li>
            </ul>
          </li>
          <li>
            Do you know what to do if a student commits plagiarism? At a
            programme, department and faculty level? What is your role and
            responsibility?
          </li>
          <li>
            Do you know what to do if a student is found cheating in an
            examination venue? At a programme, department and faculty level?
            What is your role and responsibility?
          </li>
          <li>
            Are your assessment practices based on established best practice and
            contemporary research and are aligned with the assessment practices
            and procedures required by the NQF? (UJ Policy: Assessment)
          </li>
          <li>
            Do you review your assessment processes for continuous improvement?
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="RESOURCE UNITS FOR ASSESSMENT">
        <p>
          UJ Support Divisions: The Division for Teaching Excellence at UJ can
          be contacted via these links:
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
