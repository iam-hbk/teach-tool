import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { competencyGroups } from "@/lib/competencies"

export default function TeachingCompetencyPage() {
  const teaching = competencyGroups.find((group) => group.title === "Teaching")

  return (
    <ArticlePage title="Teaching">
      <ArticleSection title="Overview">
        <p>
          This section covers teaching competency areas used in the T-E-A-C-H
          model. Use the links below or the sidebar to navigate each topic.
        </p>
      </ArticleSection>

      <div className="grid gap-4 md:grid-cols-2">
        {teaching?.subSegments.map((segment) => (
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
