import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"

export default function YourTeachingPhilosophyPage() {
  return (
    <ArticlePage title="Teaching Philosophy">
      <ArticleSection title="Introduction">
        <p>
          You may be asking:{" "}
          <strong>&ldquo;What is a teaching philosophy?&rdquo;</strong> or{" "}
          <strong>
            &ldquo;How do I write one for my teaching portfolio and promotion
            application?&rdquo;
          </strong>
          . This section, together with the resources listed, is designed to
          help you build a strong teaching philosophy statement that reflects
          who you are as a teacher.
        </p>
      </ArticleSection>

      <ArticleSection title="What is a teaching philosophy?">
        <p>
          According to Lamberti (2010), a teaching philosophy reveals your
          teaching strategies, teaching style and teaching goals. It helps
          create a clear picture of you as a teacher.
        </p>
        <p>To understand your own philosophy, ask:</p>
        <ul className="list-disc pl-5">
          <li>What are my professional beliefs and values?</li>
          <li>How have my views on teaching and learning developed?</li>
          <li>
            How do I translate my views on teaching and learning into practice?
          </li>
        </ul>
        <p>
          Additional prompts are available from the MIT Teaching and Learning
          Lab:
          <Link
            href="https://tll.mit.edu/teaching-resources/faculty-applications/teaching-philosophy-statements/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-primary underline underline-offset-4"
          >
            Teaching Philosophy Statements
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection title="Purpose of the teaching philosophy statement">
        <p>
          A teaching philosophy statement influences how you view your students
          and how you teach. It captures your general beliefs and approach to
          teaching and learning.
        </p>
      </ArticleSection>

      <ArticleSection title="Resources for developing a teaching philosophy">
        <p>
          The Division for Teaching Excellence (DoTE) at UJ runs workshops on
          teaching philosophy development. Contact:
          <Link
            href="mailto:dote@uj.ac.za"
            className="ml-1 text-primary underline underline-offset-4"
          >
            dote@uj.ac.za
          </Link>
          .
        </p>
        <p className="font-medium text-foreground">
          Links from leading universities
        </p>
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://tll.mit.edu/teaching-resources/faculty-applications/teaching-philosophy-statements/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Massachusetts Institute of Technology (MIT)
            </Link>
          </li>
          <li>
            <Link
              href="https://cft.vanderbilt.edu/guides-sub-pages/teaching-statements/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Vanderbilt University - Center for Teaching
            </Link>
          </li>
          <li>
            <Link
              href="https://crlt.umich.edu/tstrategies/tstpum"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              University of Michigan (CRLT examples)
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Books and guides">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="http://www.ucalgary.ca/taylorinstitute/resources"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Teaching Philosophies and Teaching Dossiers Guide (Kenny et al.,
              2018)
            </Link>
          </li>
          <li>
            <Link
              href="https://utfs.io/f/7e3ee8ad-84c7-4fdb-ae78-cdc5cac4d1bd-6mzpz.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Writing a Teaching Philosophy Statement (Trinity College Dublin)
            </Link>
          </li>
          <li>
            <Link
              href="https://utfs.io/f/00d74661-cd79-4c33-96f4-80aac88cbd11-w84ma7.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline underline-offset-4"
            >
              Writing a Teaching Philosophy Statement - An evidence-based
              approach
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Video">
        <div className="relative overflow-hidden rounded-lg border pb-[56.25%]">
          <iframe
            title="Teaching philosophy video"
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/tbqS25mHCiM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </ArticleSection>
    </ArticlePage>
  )
}
