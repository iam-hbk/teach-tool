import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function AssessmentMethodsAndActivitiesPage() {
  return (
    <ArticlePage title="ASSESSMENT COMPETENCIES">
      <ArticleSection title="Assessment Methods and Activities">
        <h3 className="font-semibold text-foreground">INTRODUCTION</h3>
        <p>
          Using a variety of assessment methods and activities is essential in
          university teaching, as it allows lecturers to evaluate a broader
          range of student knowledge, skills, and competencies. Different
          approaches-such as exams, projects, presentations, and practical
          tasks-cater to diverse learning styles and provide students with
          multiple opportunities to demonstrate their understanding in
          meaningful ways.
        </p>
        <p>
          This diversity also promotes deeper learning, critical thinking, and
          the application of knowledge in real-world contexts. However,
          universities may face challenges in implementing varied assessment
          methods, including increased workload for lecturers, ensuring
          consistency and fairness across different formats, managing large
          class sizes, and providing timely, high-quality feedback.
        </p>
        <p>
          Despite these challenges, a well-designed, balanced assessment
          strategy significantly enhances the quality of teaching and learning.
          Assessment methods include the activities assessors use to determine
          students&apos; competencies (UJ Policy - Assessment). Assessments
          should be fit for purpose and be followed by constructive feedback to
          support the learning process. There are numerous ways that one can
          assess whether students have learnt.
        </p>
      </ArticleSection>

      <ArticleSection title="In terms of your assessment methods, have you considered the following: Checklist">
        <ul className="list-disc space-y-3 pl-5">
          <li>
            Are your assessment practices based on established best practice and
            contemporary research, and are aligned with the assessment practices
            and procedures required by the NQF? (UJ Policy: Assessment)
          </li>
          <li>Do you use Bloom&apos;s taxonomy?</li>
          <li>Are you allowing creativity?</li>
          <li>
            What are considered the best formats of summative assessment such
            as:
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Essay examinations;</li>
              <li>Oral assessments;</li>
              <li>
                Performance assessment (which includes the practicum,
                presentations and interviews; critical incidents; project;
                contracts; reflective journal; case study; portfolio
                assessment);
              </li>
              <li>
                Assessing in large classes (concept maps, Venn diagrams, 3
                minute essay; short answer examinations; gobbets; letter to a
                friend; close tests)
              </li>
              <li>Multiple choice test</li>
              <li>Online assessments</li>
              <li>Open book assessments</li>
            </ul>
          </li>
          <li>
            Do you use assessment to empower your students? (See Bain, 2010
            below)
          </li>
          <li>Do you provide effective feedback? (See Brown, 2011)</li>
          <li>
            Do you quality assure your methods and activities against the
            principles of assessment before you prepare your students for the
            assessment?
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="UJ Support Services">
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
        <p>Centre for Academic Technologies (CAT) - moodle@uj.ac.za</p>
      </ArticleSection>

      <ArticleSection title="Resources to consult">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Assessment &amp; Evaluation in Higher Education Journal can be
            accessed via this link:
            <Link
              href="https://www.tandfonline.com/journals/caeh20"
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-primary underline underline-offset-4"
            >
              https://www.tandfonline.com/journals/caeh20
            </Link>
          </li>
          <li>Innovative Assessment Practices in Tertiary Education Article</li>
          <li>
            Brown, S. (2004). Assessment for Learning and Teaching in Higher
            Education
          </li>
          <li>
            Brown, S.(2011) Feedback for learning: a workshop for Edinburgh
            Napier University
          </li>
          <li>
            Bain, J. (2010). Integrating student voice: assessment for
            empowerment. Practitioner Research in Higher Education, University
            of Cumbria, 4(1), 14-29. Assessment for empowerment.pdf
          </li>
          <li>
            best-and-innovative-practices-in-higher-education-assessment-(4).pdf
          </li>
          <li>
            Biggs, J. Teaching for Quality Learning at University. Assessing for
            learning quality: II Practice
          </li>
          <li>
            Oxford Brookes University: Selecting methods of assessment
            Assessment
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
