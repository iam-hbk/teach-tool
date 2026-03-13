import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function TutorsPage() {
  return (
    <ArticlePage title="Tutors">
      <ArticleSection title="Introduction">
        <p>
          Tutoring is a specialised activity under academic staff development
          and is one of the methods used in UJ&apos;s Teaching and Learning
          Policy to support meaningful learning experiences.
        </p>
        <p>
          UJ&apos;s Teaching and Learning Strategy positions tutorials as an
          important mechanism for collaborative interaction, reflection and
          application of core disciplinary concepts.
        </p>
        <p>
          Tutorials support the &ldquo;learning to be&rdquo; philosophy and can
          strengthen epistemic access for diverse student groups.
        </p>
      </ArticleSection>

      <ArticleSection title="Defining a tutor">
        <p>
          In UJ policy terms, a tutor is a senior student with a strong academic
          record and subject competence, including the knowledge, abilities and
          values needed to support students in their studies.
        </p>
        <p>
          Tutors are also expected to have developed psycho-social abilities to
          guide and support students effectively.
        </p>
      </ArticleSection>

      <ArticleSection title="Purpose of tutorial programmes">
        <p>
          Tutorial programmes create interactive learning environments that
          promote academic involvement and collaborative learning.
        </p>
        <p>
          Tutorials help students see knowledge as a jointly constructed,
          dynamic process and help them actively reflect on their own learning.
        </p>
      </ArticleSection>

      <ArticleSection title="Core components of tutoring">
        <ul className="list-disc pl-5">
          <li>
            <span className="font-medium text-foreground">Tutorial:</span> a
            rigorous tutoring session led by a tutor (group or one-on-one) to
            build discipline-specific and academic capabilities.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Tutor coordinator:
            </span>{" "}
            staff member responsible for tutor supervision and programme
            implementation in a faculty/department.
          </li>
          <li>
            <span className="font-medium text-foreground">Senior tutors:</span>{" "}
            selected postgraduate or senior students who support coordination,
            coaching and tutor administration.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Tutorial programme models">
        <ul className="list-disc pl-5">
          <li>
            <span className="font-medium text-foreground">
              Group tutorial sessions:
            </span>{" "}
            the standard tutorial format, usually compulsory, intended to extend
            and clarify content from larger classes.
          </li>
          <li>
            <span className="font-medium text-foreground">
              One-on-one tutoring:
            </span>{" "}
            individual consultations used as a controlled supplement to other
            tutoring modalities.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Online tutorial sessions:
            </span>
            electronic facilitation using technology-enhanced tools to support
            virtual learning communities.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Integrated models:
            </span>{" "}
            in selected contexts, tutors collaborate with lecturers in large
            classes (for example studio-style application sessions).
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Tutor development and training - roles and responsibilities">
        <p className="font-medium text-foreground">Lecturing staff</p>
        <p>
          Design, develop and deliver relevant tutorial programmes with the Unit
          for Tutor Development; select tutors; ensure ongoing training; run
          regular feedback and guidance meetings; and integrate tutorials into
          module teaching and learning.
        </p>

        <p className="font-medium text-foreground">Faculties and departments</p>
        <p>
          Manage tutorial administration and finances, official tutor
          appointments, quality assurance, and discipline-specific development
          needs.
        </p>

        <p className="font-medium text-foreground">
          Unit for Tutor Development
        </p>
        <p>
          Works with faculties/departments to provide expert support on tutorial
          programme design, development, implementation and tutor support.
        </p>

        <p className="font-medium text-foreground">
          Centre for Academic Technologies (CAT)
        </p>
        <p>
          Supports technology-enabled online tutorial delivery and associated
          tutor training for digital learning.
        </p>
      </ArticleSection>

      <ArticleSection title="Resources and contacts">
        <ul className="list-disc pl-5">
          <li>
            UJ tutor policy search:
            <Link
              href="https://ujac.sharepoint.com/_layouts/15/search.aspx/siteall?q=tutor%20policy"
              target="_blank"
              rel="noreferrer"
              className="ml-1 text-primary underline underline-offset-4"
            >
              UJ Intranet tutor policy results
            </Link>
          </li>
          <li>
            Contact at UJ: Dr Nelia Frade (Tutor Development Unit) -
            <Link
              href="mailto:neliaf@uj.ac.za"
              className="ml-1 text-primary underline underline-offset-4"
            >
              neliaf@uj.ac.za
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Journal articles">
        <ul className="list-disc pl-5">
          <li>
            Youde, A. (2020). Effective tutoring in blended learning
            environments for part-time, adult learners.
          </li>
          <li>
            Yale, A.T. (2019). The personal tutor-student relationship:
            expectations and experiences in higher education.
          </li>
          <li>
            Luck, C. (2010). Challenges faced by tutors in higher education.
          </li>
          <li>
            Walsh, C., Larsen, C. and Parry, D. (2009). Academic tutors at the
            frontline of student support.
          </li>
          <li>
            Topping, K.J. (1996). The effectiveness of peer tutoring in further
            and higher education.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Videos and additional references">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://www.youtube.com/watch?v=DvQ982Cw4uw"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Do&apos;s and Don&apos;ts of peer tutoring
            </Link>
          </li>
          <li>
            <Link
              href="https://www.youtube.com/watch?v=uaNgHUattMM"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Introduction to Tutoring in Higher Education
            </Link>
          </li>
          <li>
            Lochtie, D., McIntosh, E., Stork, A. and Walker, B. (2018).{" "}
            <em>Effective personal tutoring in higher education</em>.
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
