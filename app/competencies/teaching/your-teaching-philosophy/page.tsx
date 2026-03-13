import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { IconDownload, IconInfoCircle } from "@tabler/icons-react"

export default function YourTeachingPhilosophyPage() {
  return (
    <ArticlePage title="TEACHING PHILOSOPHY">
      <ArticleSection title="Introduction">
        <p>
          You are probably sitting by your computer now, thinking{" "}
          <b>&ldquo;What is a teaching philosophy?&rdquo;</b> or{" "}
          <b>
            &ldquo;How am I going to write one for my teaching portfolio for my
            promotion application?&rdquo;
          </b>{" "}
          or you may be asking the question{" "}
          <b>
            &ldquo;I wrote a teaching philosophy for my last promotion
            application, how should I write my teaching philosophy statement for
            this next promotion application?&rdquo;
          </b>{" "}
          This section together with the resources listed will hopefully aid you
          to write an amazing teaching philosophy statement that speaks true to
          who you are as a teacher for your own personal development and
          promotion application. Let&apos;s begin...
        </p>
      </ArticleSection>

      <ArticleSection title="What is a Teaching Philosophy?">
        <p>
          According to Lamberti (2010), a teaching philosophy reveals your
          teaching strategies, style and goals and creates a picture of you are
          as a teacher.
        </p>
        <p>
          <em>
            To understand your own teaching philosophy, ask yourself the
            following questions:
          </em>
        </p>
        <div className="text-primary">
          <p>What are my professional beliefs and values?</p>
          <p>How have my views on teaching and learning developed?</p>
          <p>
            How do I translate into practice my views on teaching and learning?
          </p>
        </div>
        <p>
          Additional questions that can assist you in formulating your teaching
          philosophy statement can be found on the Massachusetts Institutes of
          Technology (MIT){" "}
          <Link
            href="https://tll.mit.edu/teaching-resources/faculty-applications/teaching-philosophy-statements/"
            target="_blank"
            className="text-primary underline"
          >
            Teaching and Learning Lab
          </Link>
        </p>
      </ArticleSection>

      <ArticleSection title="What is the purpose of a teaching philosophy statement?">
        <p>
          Your teaching philosophy statement basically influences your
          perspective of your students and the way you teach your students. It
          is a document that displays your general belief of how you approach
          your teaching.
        </p>
      </ArticleSection>

      <ArticleSection title="Resources - Developing a great teaching Philosophy statement">
        <p>
          Writing a Teaching Philosophy statement is perceived as a daunting
          task, so we have provided a few resources that can help get you
          started.{" "}
          <b className="font-bold">
            The Division for Teaching Excellence (DoTE)
          </b>{" "}
          at the University of Johannesburg runs great workshops on how to
          develop your Teaching Philosophy. Contact them at{" "}
          <Link className="text-primary underline" href="mailto:dote@uj.ac.za">
            dote@uj.ac.za
          </Link>{" "}
          to enquire about their next workshop.
        </p>
        <div className="mt-2 flex items-center gap-2 text-primary">
          <IconInfoCircle className="size-5" />
          Here are a few resources below
        </div>
      </ArticleSection>

      <ArticleSection title="Links on Teaching Philosophy Statements from Leading Universities">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="https://tll.mit.edu/teaching-resources/faculty-applications/teaching-philosophy-statements/"
              target="_blank"
              className="text-primary underline"
            >
              Massachusetts Institutes of Technology (MIT)
            </Link>
          </li>
          <li>
            <Link
              href="https://cft.vanderbilt.edu/guides-sub-pages/teaching-statements/"
              target="_blank"
              className="text-primary underline"
            >
              Vanderbilt University - Center for Teaching
            </Link>
          </li>
          <li>
            <Link
              href="https://crlt.umich.edu/tstrategies/tstpum"
              target="_blank"
              className="text-primary underline"
            >
              University of Michigan
            </Link>{" "}
            - this website from the CRLT Center for Research on Learning &
            Teaching University of Michigan provides examples of teaching
            philosophy statements across various disciplines
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Books/Guides">
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="http://www.ucalgary.ca/taylorinstitute/resources"
              target="_blank"
              className="text-primary underline"
            >
              Teaching Philosophies and Teaching Dossiers Guide. Calgary, AB:
              Taylor Institute for Teaching and Learning
            </Link>{" "}
            <span>
              - Kenny, N., Berenson, C., Jeffs, C., Nowell, L., &amp; Grant, K.
              (2018)
            </span>
            <Link
              href="https://utfs.io/f/f8ef22cb-ad83-40c5-b679-bbb2a4d5a903-6zimm5.pdf"
              target="_blank"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" /> Download
            </Link>
          </li>
          <li>
            <Link href="#" className="text-primary underline">
              Writing a Teaching Philosophy Statement
            </Link>{" "}
            <span>- Trinity College of Dublin, University of Dublin</span>
            <Link
              href="https://utfs.io/f/7e3ee8ad-84c7-4fdb-ae78-cdc5cac4d1bd-6mzpz.pdf"
              target="_blank"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" /> Download
            </Link>
          </li>
          <li>
            <Link href="#" className="text-primary underline">
              Writing a Teaching Philosophy Statement - An evidence based
              approach
            </Link>{" "}
            <span>
              - Medina &amp; Draugalis (2013) - University of Oklahoma{" "}
            </span>
            <Link
              href="https://utfs.io/f/00d74661-cd79-4c33-96f4-80aac88cbd11-w84ma7.pdf"
              className="ml-2 inline-flex items-center gap-1 text-primary underline"
            >
              <IconDownload className="size-4" /> Download
            </Link>
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection title="Videos">
        <div className="relative overflow-hidden rounded-md border pb-[60%] sm:max-w-xl">
          <iframe
            style={{
              left: 0,
              top: 0,
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
            src="https://www.youtube.com/embed/tbqS25mHCiM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Teaching philosophy video"
          />
        </div>
      </ArticleSection>
    </ArticlePage>
  )
}
