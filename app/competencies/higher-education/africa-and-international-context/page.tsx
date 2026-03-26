import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function AfricaAndInternationalContextPage() {
  return (
    <ArticlePage title="HIGHER EDUCATION CONTEXT COMPETENCIES">
      <ArticleSection title="Collaborating With African & International Universities">
        <p>
          {
            "Collaboration between academic lecturers and staff at the University of Johannesburg and other African and international higher education institutions is both a strategic necessity and a core driver of institutional excellence. It directly aligns with, and actively advances, the university’s 2035 Strategic Vision, which positions UJ as a globally recognised, pan-African institution that is innovative, inclusive, and impactful."
          }
        </p>
        <p>
          {
            "A central pillar of UJ’s 2035 vision is global excellence with African relevance. By collaborating with institutions across the continent and internationally, lecturers enrich teaching and research with diverse epistemologies, perspectives, and methodologies. This strengthens curriculum relevance while embedding African scholarship within global academic discourse-ensuring that UJ is not only consuming global knowledge but also shaping it."
          }
        </p>
        <p>
          {
            "In terms of teaching, partnerships enable internationalised curricula and pedagogical innovation. Collaborative teaching initiatives, such as joint modules, virtual exchanges, and co-supervision of postgraduate students, provide UJ students with exposure to global perspectives without losing local contextual grounding. This supports the strategic vision of producing graduates who are globally competent, socially conscious, and responsive to complex, real-world challenges."
          }
        </p>
        <p>
          {
            "From a research perspective, collaboration directly contributes to UJ’s ambition of becoming a research-intensive university with meaningful societal impact. Many of the challenges prioritised in the university’s strategy-such as inequality, sustainability, and technological advancement-require cross-border, interdisciplinary solutions. Working with partners across Africa and globally enhances research output, increases access to funding, and strengthens innovation ecosystems. These collaborations also align with broader continental and global frameworks such as the African Union Agenda 2063 and the United Nations Sustainable Development Goals, both of which emphasise partnership-driven development."
          }
        </p>
        <p>
          {
            "Another key dimension of the 2035 Strategic Vision is capacity development and transformation. Collaborative networks enable staff development through knowledge exchange, joint research supervision, and mobility opportunities. Importantly, strengthening partnerships within Africa supports equitable knowledge production and reduces historical imbalances in global academia, reinforcing UJ’s commitment to transformation and decolonisation of knowledge."
          }
        </p>
        <p>
          {
            "Furthermore, these collaborations enhance UJ’s global standing and reputation, a priority within the 2035 vision. Strategic international partnerships contribute to increased research visibility, higher citation impact, and stronger global rankings. They also attract international students, scholars, and funding opportunities, positioning UJ as a hub of intellectual exchange and innovation."
          }
        </p>
        <p>
          {
            "Ultimately, collaboration across African and international higher education institutions is not just beneficial-it is integral to realising UJ’s 2035 Strategic Vision. It enables the university to act as a bridge between Africa and the world, fostering knowledge that is both globally competitive and locally meaningful, while contributing to socio-economic development at national, continental, and global levels."
          }
        </p>
      </ArticleSection>

      <ArticleSection title="In terms of your teaching and research and other leadership and administrative responsibilities: Checklist">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            At the University of Johannesburg, how are you intentionally
            building collaborative teaching or research partnerships across the
            African continent that bring African knowledge systems into
            conversation with global scholarship?
          </li>
          <li>
            In what ways are your current collaborations with international
            higher education institutions reshaping your teaching, research
            focus, or student opportunities-and how do these partnerships
            contribute to UJ&apos;s vision of global excellence with African
            relevance?
          </li>
          <li>
            If we looked at your work through a global lens, how are you
            leveraging networks, co-publications, or joint postgraduate
            supervision to ensure that your scholarship not only reaches
            international audiences but also makes a meaningful impact within
            Africa?
          </li>
          <li>
            Do you consider UJ&apos;s Strategic Plan 2035 as you plan and
            prepare your future teaching and research goals?
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="UJ Links">
        <Link
          href="https://ujac-my.sharepoint.com/personal/strategicplan2035_uj_ac_za"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-4"
        >
          https://ujac-my.sharepoint.com/personal/strategicplan2035_uj_ac_za
        </Link>
      </ArticleSection>
    </ArticlePage>
  )
}
