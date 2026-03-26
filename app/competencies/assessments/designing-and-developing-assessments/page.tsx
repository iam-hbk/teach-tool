import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { IconDownload } from "@tabler/icons-react"

export default function DesigningAndDevelopingAssessmentsPage() {
  const resourceDocuments = [
    {
      title: "Work-integrated Education policy",
      href: "/assets/assessments/uj-work-integrated-education-2022.pdf",
    },
    {
      title: "Academic Programme Policy Senate Approved 10 June 2021",
      href: "/assets/assessments/academic-programme-policy-senate-approved-10-june-2021.pdf",
    },
    {
      title: "Academic regulations which are published annually",
      href: "/assets/assessments/academic-regulations-2026.pdf",
    },
    {
      title: "UJ Assessment Policy",
      href: "/assets/assessments/assessment-policy.pdf",
    },
    {
      title: "Plagiarism Policy",
      href: "/assets/assessments/uj-plagiarism-policy.pdf",
    },
    {
      title: "Language Policy",
      href: "/assets/assessments/uj-language-policy.pdf",
    },
    {
      title: "AI Guidelines",
      href: "/assets/assessments/uj-ai-guidelines-staff.pdf",
    },
    {
      title: "Guidelines for Integrated Assessment SAQA (2005)",
      href: "/assets/assessments/saqa-guidelines-for-integrated-assessment.pdf",
    },
    {
      title: "Higher Education Qualification Sub-framework (HEQSF)",
      href: "/assets/assessments/higher-education-qualifications-sub-framework-heqsf-2014.pdf",
    },
    {
      title: "Draft HEQSF Reviewed Final Report 21 August 2022 Final",
      href: "/assets/assessments/draft-heqsf-reviewed-final-report-21-august-2022-final.pdf",
    },
    {
      title: "Protection of Personal Information Act 4 of 2013",
      href: "/assets/assessments/protection-of-personal-information-act.pdf",
    },
    {
      title: "University's Code for Academic and Research Ethics",
      href: "/assets/assessments/code-for-academic-and-research-ethics.pdf",
    },
    {
      title: "Assessment standard operating principles for faculties",
      href: "/assets/assessments/assessment-standard-operating-procudure-senate-approved-16-november-2022.pdf",
    },
    {
      title: "UJ AI Guidelines for Students (2023)",
      href: "/assets/assessments/uj-ai-guidelines-students-2023.pdf",
    },
    {
      title: "UJ AI Practice Guide (2023)",
      href: "/assets/assessments/uj-ai-practice-guide-2023.pdf",
    },
  ]

  return (
    <ArticlePage title="ASSESSMENT COMPETENCIES">
      <ArticleSection title="Designing and Developing Outcomes-based Assessment">
        <h3 className="font-semibold text-foreground">INTRODUCTION</h3>
        <p>
          When we talk about assessment at a university, many students
          immediately think about tests, exams, and marks. But assessment is
          actually much more than that. Assessment at the University of
          Johannesburg (UJ) is defined as &ldquo;the process of identifying,
          gathering and interpreting evidence against a defined competence to
          make a judgement about a student&apos;s achievement&rdquo;
          (uj_assessment-policy-senate-approved-16-november-2022, p. 1).
        </p>
        <p>
          Let&apos;s explore what assessment really does in a university
          environment and why it is such an important part of a learning
          journey.
        </p>
        <p>
          First, assessment helps us measure learning. Universities design
          courses with specific learning outcomes in mind-what students should
          know, understand, or be able to do by the end of a module. At UJ, the
          achievement of learning outcomes is measured using assessment
          criteria, which &ldquo;are transparent statements of assessment tasks
          used to ascertain whether a student has achieved the learning
          outcomes&rdquo;(uj_assessment-policy-senate-approved-16-november-2022,
          p. 1).
        </p>
        <p>
          Through assignments, presentations, projects, and exams, lecturers can
          see whether these outcomes have been achieved. In other words,
          assessment helps answer the question: What have students actually
          learned?
        </p>
        <p>
          Second, assessment is a powerful learning tool. Think about the
          feedback you receive on an assignment. That feedback helps you
          understand what you did well and what you can improve next time. This
          type of assessment-often called formative assessment-supports learning
          as it happens. It allows students to reflect, adjust their approach,
          and develop stronger academic skills over time. Both formative and
          continuous assessment are used at UJ.
        </p>
        <p>
          Another important purpose of assessment is certification. Universities
          need to confirm that students have reached the required level of
          knowledge and competence before they move to the next level or
          graduate. Summative assessments, such as final exams or major
          projects, provide formal evidence that students have met the
          programme&apos;s academic standards.
        </p>
        <p>
          Assessment also plays a role in motivating students to engage with
          their studies. Let&apos;s be honest-knowing that an assignment or test
          is coming up often encourages students to read the material, attend
          lectures, and participate in discussions. In this way, assessment can
          stimulate consistent engagement with the learning process.
        </p>
        <p>
          From the lecturer&apos;s perspective, assessment is also a valuable
          teaching tool. Assessment results can indicate whether students
          understand the material or are struggling with certain concepts. If
          many students perform poorly on a particular section, it may signal
          that the topic needs to be explained differently or reinforced in
          future teaching.
        </p>
        <p>
          Finally, assessment helps universities maintain academic standards and
          accountability. Higher education institutions must demonstrate to
          accreditation bodies, professional organisations, and society that
          their graduates have achieved the necessary competencies. Assessment
          provides the evidence that these standards are being met.
        </p>
        <p>
          So, assessment at university is not simply about assigning marks. It
          is a multifaceted process that supports learning, encourages
          engagement, improves teaching, certifies achievement, and ensures the
          quality of higher education.
        </p>
      </ArticleSection>

      <ArticleSection title="Policy and Guideline Documents to Consult">
        <ul className="grid gap-3 sm:grid-cols-2">
          {resourceDocuments.map((document) => (
            <li
              key={document.title}
              className="rounded-lg border bg-background p-3"
            >
              <Link
                href={document.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-start gap-2 text-sm text-primary underline underline-offset-4"
              >
                <IconDownload className="mt-0.5 size-4 shrink-0" />
                <span>{document.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p>
          National documents include SAQA level descriptors for the SA NQF
          (2012).
        </p>
      </ArticleSection>

      <ArticleSection title="Questions to Ask When Designing and Developing Assessments">
        <p>
          When designing and developing assessments for your students, ask
          yourself the following questions to ensure they align with the listed
          institutional and national policy documents.
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <span className="font-medium text-foreground">
              Work Integrated Education Policy:
            </span>{" "}
            How do your assessment methods evaluate students&apos; ability to
            apply disciplinary knowledge and professional skills during
            work-integrated learning experiences?
          </li>
          <li>
            <span className="font-medium text-foreground">
              UJ Teaching and Learning Policy:
            </span>{" "}
            In what ways do your assessment practices support student-centred
            learning, constructive alignment, and meaningful feedback as
            emphasised in the university&apos;s teaching and learning policy?
          </li>
          <li>
            <span className="font-medium text-foreground">
              Academic Regulations (published annually):
            </span>{" "}
            How do you ensure that your assessment design, grading practices,
            and moderation processes comply with the university&apos;s current
            academic regulations?
          </li>
          <li>
            <span className="font-medium text-foreground">
              Guidelines for Continuous Assessment:
            </span>{" "}
            How do you structure continuous assessments in your module to
            provide regular feedback and multiple opportunities for students to
            demonstrate learning?
          </li>
          <li>
            <span className="font-medium text-foreground">
              University&apos;s Code of Academic and Research Ethics:
            </span>{" "}
            How do you design assessments that encourage ethical scholarship and
            responsible research practices among students?
          </li>
          <li>
            <span className="font-medium text-foreground">
              Plagiarism Policy:
            </span>{" "}
            What assessment strategies do you use to minimise plagiarism and
            promote original academic work by students?
          </li>
          <li>
            <span className="font-medium text-foreground">
              Language Policy:
            </span>{" "}
            How do you ensure that your assessment instructions, criteria, and
            feedback are clear, inclusive, and accessible in line with the
            university&apos;s language policy?
          </li>
          <li>
            <span className="font-medium text-foreground">AI Guidelines:</span>{" "}
            &ldquo;Taking advantage of exciting opportunities to try out new
            tools and activities should be accompanied by careful consideration
            of current and future ethical, social and educational limitations to
            the use of generative AI.&rdquo; (STAFF GUIDE: GENERATIVE ARTIFICIAL
            INTELLIGENCE IN TEACHING, LEARNING AND RESEARCH) How do you use
            generative AI carefully on an ethical, social and educational level
            in designing and developing assessments?
          </li>
          <li>
            <span className="font-medium text-foreground">
              Guidelines for Integrated Assessment (2005) - South African
              Qualifications Authority:
            </span>{" "}
            How do your assessments integrate theoretical knowledge, practical
            skills, and applied competence to demonstrate holistic student
            learning?
          </li>
          <li>
            <span className="font-medium text-foreground">
              Higher Education Qualification Sub-Framework (HEQSF) - South
              African Qualifications Authority:
            </span>{" "}
            How do you ensure that your assessments are aligned with the
            expected cognitive complexity and learning outcomes of the
            qualification level?
          </li>
          <li>
            <span className="font-medium text-foreground">
              Protection of Personal Information Act - Protection of Personal
              Information Act:
            </span>{" "}
            What measures do you take to ensure that student assessment records,
            feedback, and personal information are stored and shared in
            compliance with POPIA?
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

      <ArticleSection title="Other Resources">
        <p>
          Dos, donts and don&apos;t knows - Reponding to AI in assessment in
          Universities: A Practical Guide for Lecturers - Prepared by the
          University of Cape Town and the University of Stellenbsoch.
        </p>
      </ArticleSection>
    </ArticlePage>
  )
}
