import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function TutorsPage() {
  return (
    <ArticlePage title="Tutor Usage">
      <ArticleSection title="Prepared by Adelaide Sheik">
        <h3 className="font-semibold text-foreground">Introduction</h3>
        <p>
          Have you ever considered how extra tutoring may improve the teaching
          and learning of your courses?
        </p>
        <p>
          Tutoring, a specialised activity under academic staff development, is
          one method that UJ&apos;s Teaching and Learning Policy uses to guide
          the creation of meaningful learning experiences for students.
        </p>
        <p>
          This Policy was created in the context of the UJ Teaching and Learning
          Policy and the related Teaching and Learning Strategy, embodying
          UJ&apos;s commitment to worldwide quality and prominence in teaching
          and learning.
        </p>
        <p>
          The Teaching and Learning Strategy identified tutorials as a key means
          of facilitating student learning by allowing collaborative interaction
          in a relatively safe learning environment and time for reflection on
          and applying core academic practices and concepts within the
          disciplines being studied. Tutorials, in particular, provide
          opportunities for the learning activities prioritised by the
          &apos;learning to be&apos; teaching philosophy, which contribute to
          the transformation of information into useable knowledge. Tutorials
          can develop epistemic access for all students by accommodating the
          significant variety in our student body.
        </p>
      </ArticleSection>

      <ArticleSection title="2. Defining - What is a tutor?">
        <p>
          Unless otherwise specified, the following definitions shall apply to
          UJ policy: A tutor is a senior student with a solid academic record
          with the subject and academic knowledge, abilities, and values
          necessary to support and lead students in their academic studies.
          Furthermore, a tutor must have well-developed psycho-socio abilities
          to aid and lead pupils in their studies.
        </p>
      </ArticleSection>

      <ArticleSection title="3. Purpose">
        <p>
          Tutorial programs create an interactive atmosphere that encourages
          students&apos; academic involvement and collaborative learning.
        </p>
        <p>
          Tutorials allow students to see that knowledge is a jointly built and
          dynamic process and to build and actively reflect on their own
          learning processes.
        </p>
      </ArticleSection>

      <ArticleSection title="4. Components of tutoring">
        <ul className="list-disc pl-5">
          <li>
            <span className="font-medium text-foreground">Tutorial</span> - A
            tutorial is described as a session of rigorous tutoring led by a
            tutor, either in a group setting or one-on-one. It seeks to foster
            an enabling learning environment that promotes the development of
            discipline-specific and academic abilities critical to student
            success.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Tutor Coordinator
            </span>{" "}
            - A tutor coordinator is a member of staff who is in charge of
            supervising tutors in a Faculty or department. Tutor coordinators
            are sometimes academics who are in charge of establishing tutorial
            programs.
          </li>
          <li>
            <span className="font-medium text-foreground">Senior Tutors</span> -
            Senior tutors are carefully selected postgraduate or, on occasion,
            senior students who support lecture faculty in several ways,
            including in the tutorial program, where they may, for example, take
            on the role of head tutor. This position requires supervision,
            coordination, coaching, and administration of Tutors.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="5. TUTORIAL PROGRAMME MODELS">
        <p>
          The following models are available for the implementation of tutorial
          programmes within faculties:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <span className="font-medium text-foreground">
              Group Tutorial Session
            </span>{" "}
            - The typical tutorial, which is normally required for students, is
            held in an organized group setting. The tutorials are conceived of
            as supplementing formal lectures and/or practicals in order to
            develop discipline-specific abilities further, hence facilitating
            students&apos; learning, clarification, and application of
            fundamental topics covered in bigger classes.
          </li>
        </ul>
        <p>
          Collaborative Learning and Supplemental Instruction are two
          educational theories that support group tutorials at UJ. Collaborative
          Learning is defined as students working together under the supervision
          of a tutor to accomplish assignments in methods that optimise peer
          learning. Supplemental Learning is student-driven, incorporates peer
          mentorship, and prioritises high-risk courses above high-risk pupils.
          Supplemental Learning is student driven, involves peer mentoring, and
          focuses on high-risk courses rather than high risk students.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <span className="font-medium text-foreground">
              One-on-one tutoring
            </span>{" "}
            - Departments may only use one-on-one tutoring (individual
            consultations) if suitable. Individual consultations should be used
            to supplement one of the other tutoring modalities, as a carefully
            controlled and supervised component of the Departmental tutoring
            program.
          </li>
          <li>
            <span className="font-medium text-foreground">
              On-line Tutorial Session (Electronic Facilitation)
            </span>
            - The University&apos;s commitment to technology-enhanced learning
            and ensuring that all students have handheld devices increasingly
            allows for online tutoring. In this virtual environment, tutors can
            use a variety of tools and techniques to help students learn. To
            create and sustain an online learning community, communication tools
            can be used.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Integrated models
            </span>{" "}
            - In rare circumstances, tutors may collaborate with a lecturer to
            teach a big class (such as a studio application session). Tutors
            work with individual students and/or groups of students as part of
            the lecture or studio session in this setting.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="5. Tutor Development and Training - ROLES AND RESPONSIBILITIES">
        <p className="font-medium text-foreground">Lecturing Staff</p>
        <p>
          Departmental lecturing staff are responsible for designing,
          developing, and delivering tutorial programs that are relevant to
          students&apos; learning and discipline-specific requirements in
          partnership with the Unit for Tutor Development. This includes
          selecting tutors for appointment, ensuring adequate and ongoing tutor
          training, both generic and subject-specific, holding regular meetings
          with tutors prior to tutorials for feedback and guidance, developing
          tutorial curricula, and fully integrating tutorials into the
          module&apos;s other modes of teaching and learning. Lecturers are
          invited to attend the Unit for Tutor Development&apos;s training
          programs, which are designed to provide them with tutor development
          approaches and skills. Regular engagement with the Unit for Tutor
          Development should be managed through a committee, especially in big
          Faculties.
        </p>

        <p className="font-medium text-foreground">Faculties</p>
        <p>
          Faculties (and/or Departments) are in charge of both the
          administrative and financial administration of the Faculty tutorial
          program, including the official hiring of tutors, the efficient use of
          available tutorial money, and quality assurance. Faculty-led tutoring
          will target discipline-specific development needs.
        </p>

        <p className="font-medium text-foreground">
          The Unit for Tutor Development
        </p>
        <p>
          The Unit for Tutor Development, located in the Academic Development
          Centre in the Division of Academic Development and Support, is in
          charge of ongoing collaboration with Faculty representatives and/or
          Departments, as well as providing expert guidance on the ongoing
          development and implementation of the tutorial program. This includes
          tutor development and assistance, as well as support for academics
          working in tutor.
        </p>

        <p className="font-medium text-foreground">
          The Centre for Academic Technologies (CAT)
        </p>
        <p>
          CAT is in charge of using technology to give online tutorial programs
          to Faculties and academic departments. Some tutors will require
          technology-assisted learning training to supplement the generic and
          specialized tutor training provided by the Unit for Tutor Development.
        </p>
      </ArticleSection>

      <ArticleSection title="6. Resources">
        <p className="font-medium text-foreground">Links to Videos</p>
        <p className="font-medium text-foreground">Links to UJ policies</p>
        <p>Policy on Tutoring and Tutors</p>
        <p className="font-medium text-foreground">Contacts at UJ</p>
        <p>
          - Dr Nelia Frade, Coordinator for the Tutor Development Unit.
          <br />
          email: Frade, Nelia
          <Link
            href="mailto:neliaf@uj.ac.za"
            className="ml-1 text-primary underline underline-offset-4"
          >
            neliaf@uj.ac.za
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="Journal articles">
        <ul className="list-disc pl-5">
          <li>
            Youde, A., 2020. I don&apos;t need peer support: effective tutoring
            in blended learning environments for part-time, adult learners.
            Higher Education Research &amp; Development, 39(5), pp.1040-1054.
          </li>
          <li>
            Yale, A.T., 2019. The personal tutor-student relationship: student
            expectations and experiences of personal tutoring in higher
            education. Journal of Further and Higher Education, 43(4),
            pp.533-544.
          </li>
          <li>
            Luck, C., 2010. Challenges faced by tutors in higher education.
            Psychodynamic Practice, 16(3), pp.273-287.
          </li>
          <li>
            Walsh, C., Larsen, C. and Parry, D., 2009. Academic tutors at the
            frontline of student support in a cohort of students succeeding in
            higher education. Educational Studies, 35(4), pp.405-424.
          </li>
          <li>
            Topping, K.J., 1996. The effectiveness of peer tutoring in further
            and higher education: A typology and review of the literature.
            Higher education, 32(3), pp.321-345.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Links to websites">
        <p>UJ Intranet</p>
        <Link
          href="https://ujac.sharepoint.com/_layouts/15/search.aspx/siteall?q=tutor%20policy"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-4"
        >
          https://ujac.sharepoint.com/_layouts/15/search.aspx/siteall?q=tutor%20policy
        </Link>
      </ArticleSection>

      <ArticleSection title="Other resources">
        <p className="font-medium text-foreground">
          Do&apos;s and Don&apos;ts of peer tutoring
        </p>
        <Link
          href="https://www.youtube.com/watch?v=DvQ982Cw4uw"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-4"
        >
          https://www.youtube.com/watch?v=DvQ982Cw4uw
        </Link>

        <p className="mt-2 font-medium text-foreground">
          Introduction to Tutoring in Higher Education
        </p>
        <Link
          href="https://www.youtube.com/watch?v=uaNgHUattMM"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-4"
        >
          https://www.youtube.com/watch?v=uaNgHUattMM
        </Link>
      </ArticleSection>

      <ArticleSection title="List of books">
        <p>
          Lochtie, D., McIntosh, E., Stork, A. and Walker, B., 2018. Effective
          personal tutoring in higher education. Critical Publishing.
        </p>
      </ArticleSection>
    </ArticlePage>
  )
}
