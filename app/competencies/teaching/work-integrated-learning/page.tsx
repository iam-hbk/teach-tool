import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { IconDownload, IconInfoCircle } from "@tabler/icons-react"

export default function WorkIntegratedLearningPage() {
  return (
    <ArticlePage title="Work Intergrated Learning">
      <ArticleSection title="Introduction">
        <p>
          So, you are tasked with including a{" "}
          <b>Work-Integrated Learning (WIL) </b>
          component in your module; what do you do? The first thing is to
          understand WIL and its purpose in any curriculum. So...
        </p>
      </ArticleSection>

      <ArticleSection title="What is work-integrated learning?">
        <p>
          &ldquo;WIL is used as an umbrella term to describe curricular,
          pedagogic and assessment practices across a range of academic
          disciplines that integrate formal learning and workplace concerns. The
          integration of theory and practice in student learning can occur
          through a range of WIL approaches, apart from formal or informal work
          placements. (CHE- Work Integrated Learning: Good Practice Guide, 2011,
          p. 4)
        </p>
      </ArticleSection>

      <ArticleSection title="What is the purpose of work-integrated learning?">
        <p>
          &ldquo;WIL is primarily intended to enhance student learning, and to
          this end, several innovative curricular, pedagogical and assessment
          forms have developed in response to concerns about graduateness,
          employability and civic responsibility; examples include
          action-learning, apprenticeships, cooperative education, experiential
          learning, inquiry learning, inter-professional learning, practicum
          placements, problem-based learning, project-based learning, scenario
          learning, service-learning, team-based learning, virtual or simulated
          WIL learning, work-based learning, work experience, workplace
          learning, and so on.&rdquo; (CHE- Work Integrated Learning: Good
          Practice Guide, 2011, p. 4)
        </p>
      </ArticleSection>

      <ArticleSection title="Resources - work-integrated learning">
        <p>
          Work-integrated learning is regarded as a modality under
          Work-Integrated Education (WIE). Please refer to policy under
          <Link
            className="ml-1 text-primary underline"
            href="#books-journal-article"
          >
            Books/Guides/Journal Articles
          </Link>
        </p>
        <p>
          UJ&apos;s 2022 Policy on <b>Work-Integrated Education (WIE)</b>{" "}
          indicates that it is &ldquo;embedded in a range of career-orientated
          programmes, allows for the acquisition of knowledge, skills and
          behaviours by means of blended lectures and practical work,
          complemented by contextualised and well-structured authentic
          modalities of learning in action.&rdquo; (p. 1) The UJ Policy further
          indicates that WIE &ldquo;is a wide and inclusive concept which
          embraces different modalities of learning in action, and is commonly
          referred to as work integrated learning or WIL globally. Some of the
          main modalities are:
        </p>
        <ul className="mx-auto my-4 max-w-max list-none space-y-1 text-primary">
          <li className="rounded-md border border-primary/40 bg-muted px-3 py-2">
            Work-integrated learning (WIL)
          </li>
          <li className="rounded-md border border-primary/40 bg-muted px-3 py-2">
            Problem-based learning (PBL)
          </li>
          <li className="rounded-md border border-primary/40 bg-muted px-3 py-2">
            Community based learning (CBL)
          </li>
          <li className="rounded-md border border-primary/40 bg-muted px-3 py-2">
            Project-based learning (PjBL)
          </li>
          <li className="rounded-md border border-primary/40 bg-muted px-3 py-2">
            Simulations
          </li>
          <li className="rounded-md border border-primary/40 bg-muted px-3 py-2">
            Teaching practice (TP)
          </li>
          <li className="rounded-md border border-primary/40 bg-muted px-3 py-2">
            Service learning (SL)and
          </li>
          <li className="rounded-md border border-primary/40 bg-muted px-3 py-2">
            Internships. &ldquo;(p. 2)
          </li>
        </ul>
        <p>
          These modalities which allow for the practice of knowledge in
          different fields of study, support the &lsquo;learning to be&rsquo;
          philosophy of teaching. The &lsquo;learning to be&rsquo; teaching
          philosophy is defined in the UJ Policy on Teaching and Learning
          (approved, 2016), as follows:
        </p>
        <p className="mx-4 italic">
          <em className="font-bold text-accent">
            &ldquo;Learning to be&rdquo;{" "}
          </em>
          A view of higher education that conceptualises learning as becoming a
          practitioner of a knowledge and professional domain. Learning to be
          presupposes learning the practices of the knowledge domain (discipline
          or profession), which include principles, dispositions, attributes,
          competencies, activities, skills, procedures and values. It also
          requires learning how to best utilise the conceptual frameworks and/or
          theories of the domain, as well as the practices of inquiry, to
          identify and solve problems or interpret and address everyday issues.
        </p>
        <div className="mt-2 flex items-center gap-2 text-primary">
          <IconInfoCircle className="size-5" />
          Here are a few resources below
        </div>
      </ArticleSection>

      <ArticleSection title="Resources">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://webapps.dhet.gov.za/iWIL"
              target="_blank"
              className="text-primary underline"
            >
              https://webapps.dhet.gov.za/iWIL
            </Link>
          </li>
          <li>
            <Link
              href="https://www.universityworldnews.com/post.php?story=20220412102705795"
              target="_blank"
              className="text-primary underline"
            >
              Work-integrated learning to help with graduate unemployment; Edwin
              Naidu 14 April 2022
            </Link>
          </li>
          <li>
            <Link
              href="www.ijwil.org"
              target="_blank"
              className="text-primary underline"
            >
              International Journal of Work-Integrated Learning ISSN: 2538-1032
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Books/Guides/Journal Articles">
        <div id="books-journal-article" />
        <ul className="list-disc pl-5">
          <li>
            <span>UJ WIE Policy on Work-Integrated Education (WIE) (2022)</span>
            <Link
              href="https://utfs.io/f/6f370b50-1eb6-4528-a1f5-8a9231583d09-45abpl.pdf"
              target="_blank"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" />
              Download
            </Link>
          </li>
          <li>
            <span>
              A comparative study of cooperative education and workintegrated
              learning in Germany, South Africa, and Namibia
            </span>
            <Link
              href="https://utfs.io/f/35fd7238-db77-4b04-8bbc-68d1b5c41471-sixt1j.pdf"
              target="_blank"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" />
              Download
            </Link>
          </li>
          <li>
            <span>
              A multiple case design for the investigation of information
              management processes for work-integrated learning
            </span>
            <Link
              href="https://utfs.io/f/680a94f9-136a-4f75-8cda-0d2e4881c797-jm1bbl.pdf"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" />
              Download
            </Link>
          </li>
          <li>
            <span>
              Becoming a teacher Research on the work-integrated learning of
              student teachers NWU
            </span>
            <Link
              href="https://utfs.io/f/92fe6b6e-5f0a-4f68-807f-df4cbced8482-lyepr2.pdf"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" />
              Download
            </Link>
          </li>
          <li>
            <span>
              Work Integrated Learning for Student Career Prospects Govender
              &amp; Wait 2017
            </span>
            <Link
              href="https://utfs.io/f/a43b6829-ccc9-4519-9979-77ebe293e543-alq5ii.pdf"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" />
              Download
            </Link>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
