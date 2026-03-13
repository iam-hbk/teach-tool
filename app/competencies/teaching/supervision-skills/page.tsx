import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { IconDownload, IconInfoCircle } from "@tabler/icons-react"

export default function SupervisionSkillsPage() {
  return (
    <ArticlePage title="Postgraduate Supervision">
      <ArticleSection title="Introduction">
        <p>
          You might be beginning your journey as a supervisor or have many years
          of supervision experience of postgraduate students (Honours, Masters
          and PhD students). Whatever level of experience you may have in
          postgraduate supervision, there is always room to grow and enhance
          your skills as a supervisor. Let us begin...
        </p>
      </ArticleSection>

      <ArticleSection title="What is postgraduate supervision & Co-supervision?">
        <p>
          According to the <b>CBE Student Supervisor Agreement Form</b> the:
        </p>
        <p>
          <b className="text-primary">&ldquo;Supervisor&rdquo;</b> means the
          person appointed by the University to give professional and academic
          guidance to a student registered for a postgraduate research project
          under his/her name and to ensure the provision of adequate financial,
          spatial and infrastructural support for the research project before
          enrolment. <b className="text-primary">&ldquo;Co-Supervisor&rdquo;</b>{" "}
          means a person who is not necessarily on the staff of the University
          and who, in consultation with the supervisor, is appointed to give
          assistance and guidance to a student in those areas where the
          supervisor is not sufficiently familiar with the full scope of the
          field to be covered in the project, where the project is
          multidisciplinary or for purposes of mentorship.
        </p>
      </ArticleSection>

      <ArticleSection title="Responsibilities of the supervisor and co-supervisor">
        <p>
          To fully understand your role as a research supervisor or a
          co-supervisor, it is advisable that you read the{" "}
          <span className="text-accent">
            {" "}
            CBE Student Supervisor Agreement Form
          </span>
          , which{" "}
          <span className="text-accent">
            outlines the student&apos;s responsibilities and legitimate
            expectations by the supervisor, co-supervisor and the student.
          </span>
        </p>
      </ArticleSection>

      <ArticleSection title="What CBE requirements must be met by an academic employee to supervise and co-supervise Masters and PhD students?">
        <p>
          The CBE Higher Degrees Committee Standard Operating Procedures{" "}
          <span className="text-primary underline">CBE HDC SOP Oct 2020</span>{" "}
          (this can be found on the UJ SharePoint) indicates the requirements
          that need to be met by academics that would allow them to supervise
          the research of Masters and PhD students. This document also provides
          guidelines on external assessors and assessments.
        </p>
      </ArticleSection>

      <ArticleSection title="The supervision process">
        <p>
          The supervision process must be followed strictly according to the
          university, college and departmental processes. If students&apos;
          research is prolonged due to supervisors not providing timely feedback
          and not following the processes stipulated by the university and the
          college, financial ramifications for both students, supervisors, and
          departments could occur.
        </p>
        <p>
          Prof Thea Tselepis (Department of Business Management) and Prof Adri
          Drostkie (Director of the School of Management) in the CBE have
          developed a Postgraduate Research Toolkit for the School of Management
          <Link
            href="https://utfs.io/f/b39ffd87-8d5d-467b-8061-5be265d53eaa-4pknv2.pdf"
            target="_blank"
            className="mx-1 text-primary underline"
          >
            Proposed toolkit for postgrad in SOM June 2023.pdf
          </Link>{" "}
          that has several linked documents and tools to support the research
          journey <b>after the proposal is accepted.</b> This toolkit is
          invaluable to ensure that you, as a supervisor, co-supervisor and your
          student follow all the necessary procedures and processes to complete
          their studies. Please use the proposed toolkit to ensure you meet your
          role expectations as a supervisor. Furthermore, the UJ Higher Degrees
          Policy
          <Link
            href="https://utfs.io/f/1a67ad14-3eec-4d3c-afcf-81ba268a9054-dpmjhl.pdf"
            target="_blank"
            className="mx-1 inline-block text-primary underline"
          >
            higher-degrees.pdf
          </Link>
          should also be used. <b>This policy</b> governs all processes leading
          to the award of higher degrees at the University of Johannesburg,
          ensuring that our higher degrees meet local and international
          expectations of academic and procedural rigour and integrity.
        </p>
        <p>
          According to this policy, &ldquo;This document must be read in
          conjunction with, among others, the Higher Degrees Administration, the
          Student Supervisor Relationship Policy, the Plagiarism Policy, the
          Policy on Authorship, and the University&apos;s Academic Regulations,
          specifically those sections of the Regulations dealing with
          master&apos;s and doctoral degrees&rdquo; (p. 2). (All of these
          policies can be found on the UJ Sharepoint).
        </p>
      </ArticleSection>

      <ArticleSection title="Building your supervision capability and experience (Taken from the postgraduate school)">
        <p>
          The UJ Postgraduate School offers regular workshops as well as a
          diploma in Postgraduate Research Supervision:{" "}
          <Link
            href="https://www.uj.ac.za/postgraduate-school/research-capacity-development/postgraduate-diploma-in-research-supervision/"
            target="_blank"
            className="text-primary underline"
          >
            https://www.uj.ac.za/postgraduate-school/research-capacity-development/postgraduate-diploma-in-research-supervision/
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="About Postgraduate Diploma in Research Supervision (Taken from the Postgraduate School)">
        <p>
          The University of Johannesburg&apos;s Postgraduate School, in
          partnership with the Faculty of Education, invites you to apply for
          the Postgraduate Diploma in Research Supervision Qualification code
          E5PRSQ. The purpose of this programme is to contribute to the further
          professionalisation of academic staff. Professionalise them by
          developing the knowledge, skills, and dispositions required to
          successfully supervise postgraduate students from registration to
          graduation.
        </p>
        <p>
          The programme consists of seven modules, of which six should be
          completed for the diploma. They modules are: Postgraduate Research
          Supervision (compulsory); Academic Literacies in Research Supervision;
          Research Ethics in Postgraduate Supervision; Assessment of
          Postgraduate Research; Supervision of Qualitative Research Design;
          Supervision of Quantitative Research Design and; Current and Emerging
          Issues in Postgraduate Supervision.
        </p>
        <p>
          If you have any questions, you can email Tebogo Mokgokong, RCD
          Coordinator of the programme in the Postgraduate School, at
          <Link
            href="mailto:supervisioncourse@uj.ac.za"
            className="ml-1 text-primary underline"
          >
            supervisioncourse@uj.ac.za
          </Link>
        </p>
        <p>
          You are also encouraged to co-supervise with more experienced
          colleagues with good throughput and quality outcomes with their
          postgraduate students.
        </p>
      </ArticleSection>

      <ArticleSection title="UJ Centres that provide support (Taken from the UJ Sharepoint):">
        <p>
          <Link
            href="https://www.uj.ac.za/postgraduate-school/Pages/statistical-consultation-services.aspx"
            target="_blank"
            className="text-primary underline"
          >
            STATKON
          </Link>{" "}
          offer free quantitative and statistics consultations.
        </p>
        <p>
          The <b>library</b> hosts helpful training sessions related to
          <Link
            href="https://www.uj.ac.za/library/library-services/Pages/online-training.aspx"
            target="_blank"
            className="ml-1 text-primary underline"
          >
            The information side of research.
          </Link>
          The library also has resources to
          <Link
            href="https://www.uj.ac.za/library/research-support/"
            target="_blank"
            className="ml-1 text-primary underline"
          >
            support research.
          </Link>
        </p>
        <p>
          The <b>postgraduate school</b> offers regular training opportunities.
          Keep an eye on
          <Link
            href="https://www.uj.ac.za/postgraduate-school/research-capacity-development/"
            target="_blank"
            className="ml-1 text-primary underline"
          >
            their website.
          </Link>
          The RCD can also be contacted at
          <Link
            href="mailto:supervisioncourse@uj.ac.za"
            target="_blank"
            className="ml-1 text-primary underline"
          >
            supervisioncourse@uj.ac.za
          </Link>
          for enquiries.
        </p>
      </ArticleSection>

      <ArticleSection title="Additional resources">
        <span>
          Here are some great articles that can assist you in enhancing your
          postgraduate research supervision skills
        </span>
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://www.timeshighereducation.com/campus/research-supervision-working-individual-front-you"
              target="_blank"
              className="inline-flex items-center gap-1 underline"
            >
              Research supervision: working with the individual in front of you
            </Link>
          </li>
          <li>
            <span>Alternative approaches to postgraduate supervision</span>
            <Link
              href="https://utfs.io/f/aa3e7fd6-daaa-4184-bdc5-b418599d2e31-audwgs.pdf"
              target="_blank"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" /> Download
            </Link>
          </li>
          <li>
            <span>Co supervision in postgraduate training.</span>
            <Link
              href="https://utfs.io/f/e0973532-4cbb-4458-b5aa-ea233fecdadc-ctli5h.pdf"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" /> Download
            </Link>
          </li>
          <li>
            <span>
              Postgrad supervision An agreed conceptual view of good practice
              article
            </span>
            <Link
              href="https://utfs.io/f/21b72bbc-924a-4635-97b2-630cc6652ab7-5574ea.pdf"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" /> Download
            </Link>
          </li>
        </ul>
        <div className="mt-2 flex items-center gap-2 text-primary">
          <IconInfoCircle className="size-5" />
          Here are a few resources below
        </div>
      </ArticleSection>
    </ArticlePage>
  )
}
