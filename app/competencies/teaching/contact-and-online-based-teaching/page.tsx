import Image from "next/image"
import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function ContactAndOnlineBasedTeachingPage() {
  return (
    <ArticlePage title="Contact and Online-Based Teaching">
      <ArticleSection title="Introduction">
        <p>
          UJ follows a blended learning approach. In policy terms, blended
          learning combines contact learning with distance-based online support.
        </p>
        <p>
          Read:
          <Link
            href="https://utfs.io/f/fd544439-bdd8-4498-8755-9daca923dce3-om5bcs.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            UJ Academic Programme Policy
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title="What supports good contact and online lecturing?">
        <p>
          UJ’s Teaching and Learning Policy applies to all teaching modes. Use
          it as a baseline for planning contact, hybrid and online sessions.
        </p>
        <p>
          Policy link:
          <Link
            href="https://utfs.io/f/a7e6763f-20f3-4ad1-abd7-4df9ca16671c-yoo0ok.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            UJ Teaching and Learning Policy
          </Link>
          .
        </p>

        <p className="font-medium text-foreground">
          7 aspects considered essential for student learning
        </p>
        <Image
          src="/assets/teaching-contact-online-based-teaching-7-concepts.png"
          alt="7 aspects essential for student learning"
          width={680}
          height={360}
          className="h-auto w-full rounded-md border"
        />

        <p className="font-medium text-foreground">
          Learner-centred teaching dimensions
        </p>
        <ul className="list-disc pl-5">
          <li>The balance of power</li>
          <li>The function of content</li>
          <li>The role of the teacher</li>
          <li>The responsibility of learning</li>
          <li>The purposes and processes of evaluation</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Reflective checklist for lecturing practice">
        <ul className="list-disc pl-5">
          <li>Are students actively engaged in learning?</li>
          <li>Am I building on students’ prior knowledge and experience?</li>
          <li>
            Do my practices cater for learner diversity and confidence building?
          </li>
          <li>Do I make key learning outcomes explicit?</li>
          <li>Do I connect teaching and research actively?</li>
          <li>Do I gather feedback and adjust teaching accordingly?</li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Additional resources">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="http://tll.mit.edu/help/teaching-materials"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              MIT Teaching and Learning Laboratory
            </Link>
          </li>
          <li>
            <Link
              href="https://teachingandlearninginhighered.org"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Derek Bok Centre for Teaching and Learning (Harvard)
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Books and guides">
        <ul className="list-disc pl-5">
          <li>
            Marshall, S. (2020). A Handbook for Teaching and Learning in Higher
            Education.
          </li>
          <li>
            Entwistle, N.J. (2000). Approaches to Studying and Levels of
            Understanding.
          </li>
          <li>
            <Link
              href="https://utfs.io/f/5622d401-6215-480d-80ac-2ca42fe01df2-samw3k.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Weimer, M. (2002). Learner-Centered Teaching
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="UJ resources and support">
        <ul className="list-disc pl-5">
          <li>
            Centre for Academic Technologies (CAT):
            <Link
              href="mailto:catonline@uj.ac.za"
              className="ml-1 text-primary underline underline-offset-4"
            >
              catonline@uj.ac.za
            </Link>
          </li>
          <li>
            Division of Teaching Excellence (DoTE):
            <Link
              href="mailto:dote@uj.ac.za"
              className="ml-1 text-primary underline underline-offset-4"
            >
              dote@uj.ac.za
            </Link>
          </li>
        </ul>
      </ArticleSection>
    </ArticlePage>
  )
}
