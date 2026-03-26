import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function CouncilOnHigherEducationAndSaqaPage() {
  return (
    <ArticlePage title="HIGHER EDUCATION CONTEXT COMPETENCIES">
      <ArticleSection title="Council of Higher Education (CHE) & South African Qualifications Authority (SAQA)">
        <p>
          {
            "The Council on Higher Education (CHE) and the South African Qualifications Authority (SAQA) ensure the quality, credibility, and registration of qualifications within South Africa's National Qualifications Framework (NQF). The CHE acts as the Quality Council for higher education (accrediting programmes and advising the Minister), while SAQA manages the NQF, ensuring qualifications are registered and internationally comparable."
          }
        </p>
      </ArticleSection>

      <ArticleSection title="Council on Higher Education (CHE) Role">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Quality Assurance: The CHE, through its Higher Education Quality
            Committee (HEQC), is responsible for auditing higher education
            institutions and accrediting programmes.
          </li>
          <li>
            Policy Advice: It advises the Minister of Higher Education and
            Training on policy matters, including the Higher Education
            Qualifications Sub-framework (HEQSF).
          </li>
          <li>
            Standards Development: The CHE develops standards for qualifications
            to ensure they align with the NQF, while upholding institutional
            autonomy.
          </li>
          <li>
            Monitoring and Research: It researches and monitors trends in higher
            education to improve quality.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="SAQA Role">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            NQF Management: SAQA oversees the development and implementation of
            the NQF, a single integrated framework for learning achievements.
          </li>
          <li>
            Registration of Qualifications: SAQA ensures that higher education
            qualifications and part-qualifications are registered and
            recognized.
          </li>
          <li>
            Foreign Qualification Evaluation: SAQA evaluates foreign
            qualifications to determine their South African equivalent.
          </li>
          <li>
            Professional Bodies: It recognizes professional bodies and registers
            professional designations.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Collaboration">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            CHE and SAQA work together on registering qualifications and
            managing the HEQSF, ensuring coherence and quality in the education
            system.
          </li>
          <li>
            They communicate together, as seen in Joint Communique 1 of 2025,
            regarding the reregistration of qualifications.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="CHE & SAQA Website Links">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <Link
              href="https://www.che.ac.za/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              https://www.che.ac.za/
            </Link>
          </li>
          <li>
            <Link
              href="https://saqa.org.za/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              https://saqa.org.za/
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="UJ Divisions that assist with">
        <p>
          Centre for Academic Planning and Quality Promotion (CAPQP) -
          <Link
            href="https://www.uj.ac.za/teaching-and-learning/division-for-teaching-excellence/centre-for-academic-planning-and-quality-promotion-capqp/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            https://www.uj.ac.za/teaching-and-learning/division-for-teaching-excellence/centre-for-academic-planning-and-quality-promotion-capqp/
          </Link>
        </p>
        <p>
          The functions of the Centre for Academic Planning and Quality
          Promotion (CAPQP) are twofold: academic planning and quality
          promotion.
        </p>
        <p className="font-medium text-foreground">Academic Planning</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            CAPQP promotes the strategic alignment of academic planning with the
            UJ mission and national requirements, i.e. the alignment of
            qualifications to the Higher Education Qualifications Sub Framework
            (HEQSF) and programme submissions to the DHET, CHE and SAQA.
            Academic Support in the planning, approval and good governance of
            qualifications is an integral part of academic planning at UJ.
          </li>
          <li>
            CAPQP provides support for the planning of new qualifications in
            line with the HEQSF, national and institutional policy, and supports
            the management and review of existing qualifications in line with
            institutional and national policy.
          </li>
        </ul>
        <p className="font-medium text-foreground">
          Academic Planning Functions
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Quality assurance</li>
          <li>Regulatory matters</li>
          <li>Professional body accreditations</li>
          <li>DHET, CHE, SAQA processes</li>
          <li>Internal programme approvals</li>
          <li>Programme amendment</li>
          <li>Curriculum transformation</li>
        </ul>
        <p className="font-medium text-foreground">Quality Promotion</p>
        <p>
          CAPQP is also responsible for facilitating programme quality reviews
          in the University. The development of review processes and manuals for
          faculties and academic development, service and support divisions is
          part and parcel of quality promotion at the University. Reviews
          address the HEQC focus areas and incorporate criteria pertinent to the
          UJ context.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>UJ Short Learning Programme (SLP) Policy</li>
          <li>UJ Academic Programme Policy</li>
          <li>UJ Teaching and Learning Policy</li>
          <li>UJ Work-Integrated Education (WIE) Policy</li>
        </ul>
        <p>
          Contact CAPQP via
          <Link
            href="https://www.uj.ac.za/teaching-and-learning/division-for-teaching-excellence/staff/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            https://www.uj.ac.za/teaching-and-learning/division-for-teaching-excellence/staff/
          </Link>
        </p>
      </ArticleSection>
    </ArticlePage>
  )
}
