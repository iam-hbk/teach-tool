import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function CollegeFacultyPage() {
  return (
    <ArticlePage title="HIGHER EDUCATION CONTEXT COMPETENCIES">
      <ArticleSection title="College or Faculty">
        <p>
          {
            "Within a South African and broader African university context, a lecturer or professor plays a pivotal role in bringing Faculty or College goals to life by aligning their teaching, research, and engagement with pressing societal needs. Beyond the classroom, they contribute to transformation agendas, decolonisation of curricula, and the advancement of contextually relevant knowledge that speaks to African realities. By mentoring diverse student cohorts, driving impactful research, and collaborating across disciplines and communities, academics become key agents in achieving institutional goals-shaping not only academic excellence but also social justice, innovation, and sustainable development across the continent."
          }
        </p>
      </ArticleSection>

      <ArticleSection title="In terms of your teaching and research and other leadership and administrative responsibilities: Checklist">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Are you supporting all your College or Faculty goals in terms of
            your teaching and research endeavours?
          </li>
          <li>Do you regularly attend Faculty or College Board Meetings?</li>
          <li>
            How do you see your specific academic and research expertise
            aligning with and advancing your Faculty or College&apos;s strategic
            goals and priorities?
          </li>
          <li>
            In what ways can your teaching, supervision, and research experience
            be leveraged to address key societal, industry, or community needs
            identified by your Faculty or College?
          </li>
          <li>
            What unique contributions or initiatives would you like to introduce
            or strengthen within your Faculty or College to enhance its impact,
            relevance, and academic excellence?
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
