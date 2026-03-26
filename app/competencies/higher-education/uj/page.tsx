import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function UniversityOfJohannesburgPage() {
  return (
    <ArticlePage title="HIGHER EDUCATION CONTEXT COMPETENCIES">
      <ArticleSection title="University of Johannesburg">
        <p>
          {
            "At the University of Johannesburg, the role of an academic lecturer is deeply intertwined with both research and teaching, forming the core of the institution’s mission and impact."
          }
        </p>
        <p>
          {
            "In terms of teaching, lecturers are central to shaping student success through curriculum design, classroom facilitation, and academic support. Their role goes beyond content delivery-they are responsible for developing critical thinkers, supporting diverse student needs, and creating inclusive, innovative learning environments. The university actively invests in this through structures like its teaching development programmes, which aim to strengthen academics as effective facilitators of learning and improve student outcomes."
          }
        </p>
        <p>
          {
            "Equally important is research, where lecturers contribute to knowledge production, innovation, and societal transformation. At UJ, research is not isolated-it is often socially engaged and aligned with national priorities such as equity, transformation, and addressing historical inequalities in higher education. Academics are expected to produce high-quality research outputs, supervise postgraduate students, and contribute to policy-relevant and impactful scholarship."
          }
        </p>
        <p>
          {
            "What makes this role particularly significant is the integration of teaching and research: lecturers use their research to inform their teaching, ensuring that students engage with current, relevant knowledge, while teaching itself becomes a site of inquiry and innovation (e.g., scholarship of teaching and learning)."
          }
        </p>
        <p>
          {
            "In essence, at UJ, an academic lecturer is not just a teacher or a researcher, but a knowledge creator, mentor, and change agent, contributing directly to the university’s goals of academic excellence, transformation, and societal impact."
          }
        </p>
      </ArticleSection>

      <ArticleSection title="UJ Strategic Plan 2035">
        <p>
          {
            "The University of Johannesburg’s current Strategic Plan - UJ Strategic Plan 2035 - guides and frames our activities at all levels of the organisation. It provides the roadmap to achieving our vision and gives effect to our mission."
          }
        </p>
        <p className="font-medium text-foreground">Our vision</p>
        <p>
          {
            "To be an international University of choice, anchored in Africa and the global south, dynamically shaping a sustainable future."
          }
        </p>
        <p className="font-medium text-foreground">Our mission</p>
        <p>
          {
            "To transform and serve humanity through innovation and the collective and collaborative pursuit of knowledge."
          }
        </p>
        <p className="font-medium text-foreground">Our values</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Impact: Positive societal impact is the key purpose that drives our
            collective and collaborative academic and organisational activities.
            Making a difference is what we stand for.
          </li>
          <li>
            Innovation: Pushing boundaries in knowledge generation, in
            technology, in the way we teach and learn, in the way we do
            research, and in the way we collaborate, defines the way we do
            things to achieve our societal impact and sustainability vision. We
            reinvent the future.
          </li>
          <li>
            Inclusivity: Harnessing difference and diversity, applying multiple
            perspectives to solving problems, caring for others, and
            collaboration in pursuit of a shared vision, characterise our
            institutional ethos. We see inclusivity as strength.
          </li>
          <li>
            Integrity: Honesty, transparency, accountability, openness,
            fairness, social justice, and a commitment to truth, underpin all
            our endeavours. We earn trust through integrity.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Our Impact">
        <p>
          {
            "Everything we do at UJ is intended to make a positive impact on society, the economy, cultural life, public policy, health, and the environment. Our societal impact will ensure the sustainability of our communities, our city, our country, our continent, and our planet. Working together, we will transform our students’ lives through quality education, unlock and maximise the potential of our staff to thrive, apply our energies to developing new generations of influential people, and dedicate our knowledge and time to solving difficult problems for a better and more sustainable world."
          }
        </p>
      </ArticleSection>

      <ArticleSection title="Our strategic core areas">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Education: At UJ, we provide our students with a holistic world-
            class educational experience that extends beyond formal teaching and
            learning, to prepare them to be curious and resilient critical
            thinkers who make a positive impact on the world. UJ will lead with
            education that is based on fundamental principles of quality
            teaching and learning in an innovative way that is adaptable and
            flexible, and fit for future needs. Our teaching and learning will
            be infused with relevant research and underpinned by care, relevance
            and social responsiveness.
          </li>
          <li>
            Research and Innovation: We will build on UJ&apos;s success in
            becoming a leading international research university, anchored in
            Africa and the global south, focused on finding, offering and
            spearheading novel and purposeful solutions to the major challenges
            of our time and of the future. Through the creative use of evolving
            technologies, our groundbreaking research will contribute to living
            sustainably in an increasingly digital future.
          </li>
          <li>
            Purposeful Collaborative: Our leadership at all levels will be open,
            accessible, responsive, enabling, and intuitively forward-looking.
            Our organisational culture will foster a sense of belonging and be
            characterised by care for everyone in the university community,
            supporting their growth, development and sustained well-being.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Our strategic themes">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Societal Impact and Sustainability: As a university immersed in its
            society, the economy, and the environment, UJ will take a holistic
            approach to addressing the challenges of our time and of the future
            and to furthering societal impact and sustainability, from an
            African and global south perspective.
          </li>
          <li>
            Global Footprint and Partnerships: As a university in Africa and the
            global south, UJ will be at the forefront of generating and applying
            knowledge to the solution of local and global societal and
            sustainability issues.
          </li>
          <li>
            Technology for the Future: We will be a university that builds on
            our 4IR strategy to employ technology in a people-centred, humane
            and ethical way, to cultivate the next generation of minds as we
            move towards a world of increasing digital complexity.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="As your work at UJ, occasionally assess and reassess the following: Checklist">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            How does your teaching and research practice align with and actively
            contribute to the strategic vision and goals of University of
            Johannesburg?
          </li>
          <li>
            How do you see your role evolving in the future to further
            strengthen your contribution to UJ&apos;s long-term strategic
            objectives and institutional growth?
          </li>
          <li>
            In what ways do your current academic activities-such as curriculum
            development, postgraduate supervision, and research outputs-support
            UJ&apos;s priorities around transformation, innovation, and societal
            impact?
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Visit UJ's Website">
        <p>
          VISIT UJ&apos;s Website to see its Strategic Plan and the 2035 UJ
          Strategic Plan:
          <Link
            href="https://www.uj.ac.za/about/strategic-plan/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            https://www.uj.ac.za/about/strategic-plan/
          </Link>
        </p>
      </ArticleSection>
    </ArticlePage>
  )
}
