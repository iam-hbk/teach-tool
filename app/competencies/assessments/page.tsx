import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { competencyGroups } from "@/lib/competencies"

export default function AssessmentsPage() {
  const group = competencyGroups.find((item) => item.title === "Assessments")

  return (
    <ArticlePage title="Assessments">
      <ArticleSection title="Overview">
        <p>
          Assessment competency focuses on designing, delivering and
          quality-assuring fair, standards-aligned evaluation practices.
        </p>
      </ArticleSection>

      <div className="grid gap-4 md:grid-cols-2">
        {group?.subSegments.map((segment) => (
          <Card key={segment.title}>
            <CardHeader>
              <CardTitle className="text-base" style={{ color: segment.color }}>
                {segment.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href={segment.link}
                className="text-sm text-primary underline underline-offset-4"
              >
                Open section
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </ArticlePage>
  )
}
