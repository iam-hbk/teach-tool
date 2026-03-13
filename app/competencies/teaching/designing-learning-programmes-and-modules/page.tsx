import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { IconDownload } from "@tabler/icons-react"

export default function DesigningLearningProgrammesAndModulesPage() {
  return (
    <ArticlePage title="Designing Learning Programmes & Modules">
      <ArticleSection title="Introduction">
        <p>
          Are you tasked with developing a new academic programme or making
          amendments to an already existing academic programme? If so, it may
          seem like a daunting task, but there are recommended steps that you
          can follow to help you.
        </p>
        <p>
          The decision to embark on developing a new programme usually begins at
          the departmental level, therefore it is important that you work
          alongside your departmental team and your HOD, thereafter your CBE
          Dean and School Director, the Centre for Academic Planning and Quality
          Promotion (CAPQP) and the CBE Programme Committee to obtain the
          necessary advice and support needed to undertake programme
          development, approval processes and eventually implementation.
        </p>
        <p>
          Use CAPQP&apos;s
          <Link
            href="https://utfs.io/f/6d7ddbcf-12b6-4a78-a19c-ba240c3465e4-i7yyqp.pdf"
            target="_blank"
            className="ml-1 text-primary underline"
          >
            Programme Manual
          </Link>{" "}
          which provides the UJ steps of the Programme Development process from
          start to completion.
        </p>
        <p>
          In addition, read the{" "}
          <b>Academic Programme Policy Senate Approved 10 June 2021.pdf</b> to
          become acquainted with what an academic programme is and its
          requirements for approval.
        </p>
        <p>
          Here are some of the requirements as per the Academic Programme
          Policy:
        </p>
        <ul className="m-2 list-inside list-image-[url(/assets/checkmark.svg)] space-y-2">
          <li>HEQSF and the Minimum Admission Requirements</li>
          <li>
            Should comply with the requirements of the relevant statutory and /
            or non-statutory professional bodies.
          </li>
          <li>
            Should align to the vision, mission, values, and strategic
            objectives of the University.
          </li>
          <li>
            Should align with faculty/College strategic plans and be based on
            established and contemporary research.
          </li>
          <li>
            Must be coherently designed to ensure constructive alignment of the
            curriculum in terms of the purpose of the programme, exit-level
            outcomes, assessment criteria, the learning content of modules,
            module learning outcomes, and teaching, learning and assessment
            opportunities and strategies.
            <ul className="ml-8 list-disc">
              <li>
                A learning guide, per module is required and must comply with
                the UJ Teaching and Learning Policy and the Policy on Learning
                Support Materials.
              </li>
            </ul>
          </li>
          <li>
            As the programme is housed within a public higher education
            institution, the University is restricted to NQF levels 5 to 10 in
            accordance with the Higher Education Act 101 of 1997.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="What is an academic programme?">
        <p>
          &ldquo;A programme / learning programme is a purposeful and structured
          set of learning experiences (i.e., the teaching, learning and
          assessment activities) that lead to a qualification (degree, diploma,
          or certificate). (e.g., BA is the qualification, but BA graduates will
          have differing learning programmes depending on the subjects
          chosen)&rdquo;(p.9).
          <b>Academic Programme Policy Senate Approved 10 June 2021.pdf</b>
        </p>
        <p>
          The UJ Academic Programme Policy further indicates that &ldquo;An
          academic programme comprises a defined number of modules: it must have
          a core component and may have fundamental and/or elective components)
          each providing their own learning outcomes, and assessment criteria
          aligned to the purpose and exit-level outcomes of the programme. The
          modules comprising a programme must be placed on an appropriate NQF
          level and allocated credit values related to the complexity and
          demands of that NQF level, as well as the outcomes and content of the
          module&rdquo; (p.4).
        </p>
      </ArticleSection>

      <ArticleSection title="What is a module?">
        <p>
          A module is &ldquo;a predetermined unit of teaching and learning
          (building block) within a programme with an institutionally determined
          credit value and duration (sometimes referred to as a subject or
          course)&rdquo; (UJ Policy on Learning Resources).
        </p>
        <p>
          The modules comprising a programme must be placed on an appropriate
          NQF level and allocated credit values related to the complexity and
          demands of that NQF level, as well as the outcomes and content of the
          module.
        </p>
        <p>
          Other considerations in programme and module development as mentioned
          in the UJ Academic Programme Policy include the duration of subsidised
          programmes, contact time, modes of teaching and learning, assessment
          strategies as well as the accumulation of credits towards a
          qualification (Credit Accumulation and Transfer- CAT).
        </p>
        <p>
          When constructing an academic programme, use the principles as
          outlined in the UJ Policy on Learning Resources (can be found on the
          UJ sharepoint) to guide the process.
        </p>
      </ArticleSection>

      <ArticleSection title="How to develop a learning guide">
        <p>
          According to the UJ Policy on Teaching and Learning, a{" "}
          <span className="text-accent">learning guide</span> is &ldquo;a
          module-specific learning facilitation tool serving as a
          &lsquo;map&rsquo; for the students. It contains organisational as well
          as learning facilitation components (p. 2).
        </p>
        <p>
          Consult the UJ Policy on Learning Resources to ensure that you meet
          all the necessary requirements when you develop a learning guide. Also
          include your departmental, school and CBE&apos;s requirements when
          developing your learning guides.
        </p>
      </ArticleSection>

      <ArticleSection title="UJ Policies for designing learning programmes & modules (these can be found on the UJ sharepoint)">
        <ul className="list-disc pl-5">
          <li>
            <span> University&apos;s Teaching and Learning Policy</span>
            <Link
              href="https://utfs.io/f/3915ea3b-eaaf-446a-9ca3-576093e7bf0b-yoo0ok.pdf"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" /> Download
            </Link>
          </li>
          <li>Academic Calendar as approved by Senate</li>
          <li>
            Lecturing Timetable as approved by the University Timetable
            Committee
          </li>
          <li>
            UJ Online Policy Framework and Distance Education Policy (for Online
            programmes)
          </li>
          <li>
            <span>UJ Assessment Policy</span>
            <Link
              href="https://utfs.io/f/6b157fe2-158a-4c21-b0b8-f623f85c3e69-fq22mm.pdf"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" /> Download
            </Link>
          </li>
          <li>UJ Policy on Learning Resources</li>
          <li>
            <span>UJ Short Learning Programme (SLP)</span>
            <Link
              href="https://utfs.io/f/723029f5-6f5d-4513-9d5c-c4d21ff49b1b-g0il5i.pdf"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" /> Download
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Where can I obtain assistance with designing and developing learning programmes and modules at UJ?">
        <p>
          The Centre for Academic Planning and Quality Promotion (CAPQP) will
          assist with the following{" "}
          <span className="text-accent underline">
            academic planning functions
          </span>{" "}
          around your new academic programme or amendments to a current academic
          programme:
        </p>
        <ul className="ml-8 list-disc">
          <li>Quality assurance</li>
          <li>Regulatory matters</li>
          <li>Professional body accreditations</li>
          <li>DHET, CHE, SAQA processes</li>
          <li>Internal programme approvals</li>
          <li>Programme amendment</li>
          <li>Curriculum transformation</li>
        </ul>
        <p>
          Please consult their
          <Link
            href="https://utfs.io/f/6d7ddbcf-12b6-4a78-a19c-ba240c3465e4-i7yyqp.pdf"
            target="_blank"
            className="mx-1 text-primary underline"
          >
            Programme Manual
          </Link>
          and their
          <Link
            href="https://utfs.io/f/dcda45fa-5daa-49fe-92e5-b0256ef7d45a-u0itus.pdf"
            target="_blank"
            className="mx-1 text-primary underline"
          >
            Guidelines for Curriculum Transformation
          </Link>
          . Their contact email is
          <Link
            href="mailto:capqp@uj.ac.za"
            className="ml-1 text-primary underline"
          >
            capqp@uj.ac.za
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="Additional resources">
        <p>
          <Link
            href="https://ctl.wustl.edu/resources/designing-a-course/"
            target="_blank"
            className="text-primary underline"
          >
            Designing a course
          </Link>{" "}
          (Washington University in St. Louis, USA, Centre for Teaching and
          Learning)
        </p>
      </ArticleSection>
    </ArticlePage>
  )
}
