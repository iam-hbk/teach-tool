import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { IconDownload } from "@tabler/icons-react"

export default function ColleaguesPage() {
  return (
    <ArticlePage title="COMMITMENT COMPETENCIES">
      <ArticleSection title="Relationships with Colleagues and Peers">
        <p>
          Healthy work relationships in a university setting are a bit like good
          Wi-Fi-when they work well, everything runs smoothly; when they
          don&apos;t, even simple tasks become unnecessarily frustrating. As a
          lecturer, your colleagues are not just people you share a corridor
          with; they are collaborators in teaching, research, and the broader
          academic project.
        </p>
        <p>
          Positive relationships built on respect, trust, and open communication
          make it easier to coordinate modules, align assessments, share
          resources, and support one another during high-pressure periods in the
          academic calendar.
        </p>
        <p>
          At the departmental level, where collaboration is most frequent,
          strong collegiality is especially important. Working closely with
          colleagues on curriculum design, moderation, and student support
          requires a shared sense of purpose and mutual accountability. When
          relationships are healthy, there is greater willingness to exchange
          ideas, offer constructive feedback, and step in when challenges arise.
        </p>
        <p>
          It also creates a more supportive environment for early-career
          academics who may rely on mentorship and guidance from more
          experienced colleagues.
        </p>
        <p>
          Across broader institutional levels, collegial relationships
          contribute to a culture of professionalism and collective
          responsibility. Universities function best when academics move beyond
          silos and engage as part of a scholarly community. In the South
          African higher education context-where institutions often navigate
          resource constraints, transformation imperatives, and diverse student
          needs-collaboration and collegial support become even more critical.
        </p>
        <p>
          Ultimately, healthy relationships with colleagues enhance not only
          individual well-being and job satisfaction but also the quality of
          teaching, research, and service delivered by the department. And, on a
          practical note, it certainly makes those long meetings and busy
          semesters far more manageable when you&apos;re working with people you
          respect and get along with.
        </p>
      </ArticleSection>

      <ArticleSection title="Self reflection questions on your level of collegiality">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            To what extent do I actively collaborate with my colleagues in
            planning, teaching, and assessment, rather than working in
            isolation?
          </li>
          <li>
            How open am I to receiving constructive feedback from colleagues,
            and do I respond in a way that strengthens professional
            relationships?
          </li>
          <li>
            In what ways do I contribute to a supportive and respectful
            departmental environment, especially during periods of high workload
            or stress?
          </li>
          <li>
            Do I make an effort to share knowledge, resources, and good
            practices with others, or do I tend to keep these to myself?
          </li>
          <li>
            How effectively do I communicate with colleagues across different
            roles and levels, and do my interactions promote trust, clarity, and
            mutual respect?
          </li>
          <li>
            How often do I attend work social gatherings to get to know others
            in my department, faculty and greater institution?
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Article for reflection">
        <p>
          Kyambade, M., Nkurunziza, G., Sewante, L., Namatovu, A., &amp;
          Tushabe, M. (2024). Servant leadership and healthy work relationships
          in university context: a moderated mediation analysis of psychological
          safety and socially responsible leadership. Cogent Education, 11(1).
        </p>
        <p>
          DOI:
          <Link
            href="https://doi.org/10.1080/2331186X.2024.2418802"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            https://doi.org/10.1080/2331186X.2024.2418802
          </Link>
        </p>
        <Link
          href="/assets/commitment/servant-leadership-and-healthy-work-relationships.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
        >
          <IconDownload className="size-4" />
          Download attached article
        </Link>
      </ArticleSection>
    </ArticlePage>
  )
}
