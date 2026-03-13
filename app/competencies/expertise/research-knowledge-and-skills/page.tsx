import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function ResearchKnowledgeAndSkillsPage() {
  return (
    <ArticlePage title="EXPERTISE COMPETENCIES">
      <ArticleSection title="SUB -COMPETENCY: Research Methodology Knowledge and Skills">
        <h3 className="font-semibold text-foreground">INTRODUCTION</h3>
        <p>
          A strong foundation in research methodology is a critical component of
          a university lecturer&apos;s expertise, enabling them to teach,
          supervise, and mentor postgraduate students effectively. Lecturers
          with advanced methodological knowledge contribute not only to the
          development of high-quality student research but also to the overall
          academic reputation and research output of their department and
          institution. By guiding rigorous and ethically sound research
          projects, they help strengthen the quality of higher education, foster
          innovation, and build the next generation of scholars and
          professionals. In a broader context, lecturers&apos; expertise in
          research methodology supports national educational goals by producing
          competent graduates capable of addressing societal challenges and
          contributing to the country&apos;s development through knowledge
          creation, critical thinking, and applied research.
        </p>
      </ArticleSection>

      <ArticleSection title="QUESTIONS TO CONSIDER WHEN ENHANCING AND DEVELOPING THIS SUB-COMPETENCY:">
        <ul className="list-disc pl-5">
          <li>
            Do you have strong knowledge of research methodologies when
            supervising postgraduate students?
          </li>
          <li>
            Does your understanding of research methods influence your ability
            to guide students in their research projects?
          </li>
          <li>
            How confident are you in applying different research methodologies
            when teaching postgraduate students?
          </li>
          <li>
            How do any gaps in your research methodology knowledge affect your
            ability to support students in designing their studies?
          </li>
          <li>
            Does familiarity with both qualitative and quantitative methods
            helped to enhance your ability to advise diverse postgraduate
            research projects?
          </li>
          <li>
            Do you continuously update your research methodology skills to align
            with evolving academic standards and practices to improve the
            quality and rigor of your postgraduate student research outcomes?
          </li>
          <li>
            Do you have knowledge and understanding of how to apply for NRF and
            other research grants?
          </li>
          <li>Do you take note of the latest DHET-accredited journals?</li>
          <li>
            Do you regularly update your Research Profile on Google Scholar,
            Research Gate etc?
          </li>
          <li>
            Do you regularly attend all relevant Research workshops at UJ that
            is applicable to your area of research methodologies that you and
            your students use?
          </li>
          <li>
            Do you encourage your students to attend online and in-person
            research workshops, and do you send them?
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="UJ CENTRES THAT PROVIDE SUPPORT (Taken from the UJ Sharepoint):">
        <p>
          STATKON offer free quantitative and statistics consultations
          <Link
            href="https://www.uj.ac.za/postgraduate-school/Pages/statistical-consultation-services.aspx"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            https://www.uj.ac.za/postgraduate-school/Pages/statistical-consultation-services.aspx
          </Link>
          .
        </p>
        <p>
          The library hosts helpful training sessions related to the information
          side of research:
          <Link
            href="https://www.uj.ac.za/library/library-services/Pages/online-training.aspx"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            https://www.uj.ac.za/library/library-services/Pages/online-training.aspx
          </Link>
          . The library also has resources to support research:
          <Link
            href="https://www.uj.ac.za/library/research-support/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            https://www.uj.ac.za/library/research-support/
          </Link>
          . The library also has an array of amazing research methodology
          textbooks that are available in e-book and hard copies.
        </p>
        <p>
          The postgraduate school offers regular training opportunities. Keep an
          eye on their website:
          <Link
            href="https://www.uj.ac.za/postgraduate-school/research-capacity-development/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            https://www.uj.ac.za/postgraduate-school/research-capacity-development/
          </Link>
          . The RCD can also be contacted at supervisioncourse@uj.ac.za for
          enquiries.
        </p>
        <p>
          The Research Development &amp; Support Division
          (research@listsrv.uj.ac.za) hosts a number of workshops on research.
        </p>
        <p>
          You can also apply to complete the Research Methodology Online Course
          run by the Department of Industrial Psychology &amp; People
          Management.
        </p>
        <p>
          Apply Now:
          <Link
            href="https://www.uj.ac.za/university-courses/short-learning-programme-in-research-methodology-online/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            https://www.uj.ac.za/university-courses/short-learning-programme-in-research-methodology-online/
          </Link>
        </p>
        <p>Use Application Token: IPPMCEP</p>
        <p>
          Email supporting documents to:
          <Link
            href="mailto:agnesma@uj.ac.za"
            className="ml-1 text-primary underline underline-offset-4"
          >
            agnesma@uj.ac.za
          </Link>
          (include student number in subject)
        </p>
        <p>
          For queries, contact: Agnes Maloka | Email:
          <Link
            href="mailto:agnesma@uj.ac.za"
            className="ml-1 text-primary underline underline-offset-4"
          >
            agnesma@uj.ac.za
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="OTHER RESOURCES THAT CAN HELP TO ENHANCE YOUR RESEARCH METHODOLOGY SKILLS SET:">
        <ul className="list-disc pl-5">
          <li>
            Gillettt, A., Hammind, A., &amp; Martala, M. (2009). Inside track.
            Successful academic writing. Edinburgh Gate: Pearson.
          </li>
          <li>
            Pallant, J. (2020). SPSS survival manual. A step by step buide to
            data analysis using IBM SPSS (7th ed.). New York, NY: Open
            University Press.
          </li>
          <li>
            Kumar, R. (2019). Research Methodology. A step-by-step guide for
            beginners. 5th ed. SAGE.
          </li>
          <li>
            Saunders, M., Lewis, P., &amp; Thornhill, A. (2023). Research
            Methods for Business Students. Research methods for business
            students (9th ed.). Harlow: Pearson.
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
