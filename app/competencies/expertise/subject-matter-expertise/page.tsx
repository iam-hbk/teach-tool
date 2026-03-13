import Image from "next/image"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconSquare } from "@tabler/icons-react"

export default function SubjectMatterExpertisePage() {
  const checklistItems = [
    "Do you use the latest updated material in your subject area?",
    "Are you or your students that you are currently supervising or co-supervising conducting research in your subject area?",
    "Do you use the work of leading experts in your field?",
    "Are you developing both local and global expertise in this area?",
    "Have you contacted your local textbook publishers for the latest updated textbooks that you use in your course material?",
    "Are you following leading practitioners and researchers in the area in which you want to develop expertise?",
    "Have you considered writing opinion papers for your professional body around your SME?",
    "Have you considered presenting at academic and practitioner conferences?",
  ]

  return (
    <ArticlePage title="EXPERTISE COMPETENCIES">
      <ArticleSection title="SUBJECT MATTER EXPERTISE">
        <h3 className="font-semibold text-foreground">INTRODUCTION</h3>
        <p>
          As an academic, I learnt from one of my previous Head of Department
          Professor Theo Veldsman that it is good practice to operate on the
          guiding principle that the area in which you teach is aligned with the
          area in which you conduct research and is also further aligned to the
          area in which you consult (this is depicted in the diagram below).
          This allows you to develop EXPERTISE on three levels: research,
          teaching and consulting.
        </p>

        <Image
          src="/assets/expertise/subject-matter-000.png"
          alt="Expertise model showing teach, research, and consult relationship"
          width={490}
          height={393}
          className="mx-auto h-auto w-full max-w-md rounded-md"
        />

        <p>
          In this sub-competency, the focus is on enhancing and becoming a TEACH
          block - subject-matter expert. This can take several years. All
          academics begin their academic journey at a university or college,
          some work in the private and public sectors and eventually permanently
          or temporarily take up a role as lecturer in a higher education
          institution.
        </p>
      </ArticleSection>

      <ArticleSection title="WHY BECOME A SUBJECT MATTER EXPERT?">
        <p>
          Becoming a subject-matter expert on one or a few related domains in
          your field or discipline has many advantages, both on a personal and
          professional level. If you have a personal interest in specific topics
          within your field, you will probably enjoy teaching, researching and
          consulting in it much easier and more enjoyable.
        </p>

        <p>
          Teaching in an area where you are growing and becoming a subject
          matter expert allows you to streamline your focus, energy and
          resources on providing your students with the latest and most
          up-to-date information, which ultimately feeds into your research
          area/s and consulting work that you are allowed to do for corporates
          or other institutions. Building and enhancing your expertise allows
          you to strengthen your brand and make a focused contribution to the
          institution and department in which you work. It also allows a more
          focused contribution both on a national and international level.
        </p>

        <p>
          The question is &ldquo;What do you want to be known for in the
          academic arena?&rdquo;
        </p>
      </ArticleSection>

      <ArticleSection title="HOW DO I DEVELOP AND GROW MY SUBJECT MATTER EXPERTISE?">
        <p>
          Here are a few questions that you can use to check if you are growing
          as an expert in a subject area in your discipline.
        </p>
        <p>In terms of SME have you considered the following: Checklist</p>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-normal">
                  Checklist item
                </TableHead>
                <TableHead className="w-20 text-center">Self-check</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {checklistItems.map((item) => (
                <TableRow key={item}>
                  <TableCell className="whitespace-normal">{item}</TableCell>
                  <TableCell className="w-20 text-center align-top">
                    <IconSquare className="mx-auto mt-0.5 size-4" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ArticleSection>
    </ArticlePage>
  )
}
