import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function SouthAfricanUniversitiesPage() {
  return (
    <ArticlePage title="HIGHER EDUCATION CONTEXT COMPETENCIES">
      <ArticleSection title="Collaborating with other South African Universities">
        <p>
          {
            "An academic lecturer’s work in teaching and research extends beyond their own institution, fostering collaboration across higher education institutions in South Africa. Through joint research projects, co-supervision of postgraduate students, and shared teaching initiatives, lecturers help build a national academic network that strengthens knowledge production and resource sharing. This is especially important in a context marked by unequal access to funding, infrastructure, and expertise across institutions."
          }
        </p>
        <p>
          {
            "In research, collaboration enables academics to pool expertise, access broader datasets, and address complex national challenges-such as inequality, unemployment, education reform, and public health-from multidisciplinary and multi-institutional perspectives. In teaching, partnerships enable more inclusive, contextually relevant curriculum development while expanding opportunities for student mobility, exposure, and learning across institutions."
          }
        </p>
        <p>
          {
            "The collective effort of academics across universities helps to elevate the overall quality and impact of the higher education sector. By working together rather than in isolation, institutions can contribute more effectively to national priorities, including skills development, innovation, and social transformation."
          }
        </p>
        <p>
          {
            "Ultimately, this collaborative academic ecosystem supports South Africa’s broader socio-economic goals: producing graduates who are better prepared for the workforce, generating research that informs policy and drives development, and promoting equity within the higher education landscape. In this way, lecturers become key contributors not only to their institutions, but to the collective advancement and upliftment of the country as a whole."
          }
        </p>
      </ArticleSection>

      <ArticleSection title="In terms of your teaching and research and other leadership and administrative responsibilities: Checklist">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            How are your current teaching and research activities enabling
            collaboration with academics or students from other South African
            Higher Education institutions?
          </li>
          <li>
            What opportunities do you see for expanding joint research,
            co-supervision, or shared teaching initiatives to further support
            the national higher education system and uplift communities?
          </li>
          <li>
            In what ways can you strengthen partnerships with other universities
            to enhance the quality, relevance, and impact of your teaching and
            research?
          </li>
          <li>
            How does your collaborative work across institutions contribute to
            addressing South Africa&apos;s key socio-economic challenges, such
            as inequality, skills development, and innovation?
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
