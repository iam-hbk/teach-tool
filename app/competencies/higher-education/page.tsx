import Link from "next/link"

import {
  ArticlePage,
  ArticleSection,
} from "@/components/competencies/article-page"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { competencyGroups } from "@/lib/competencies"

export default function HigherEducationPage() {
  const group = competencyGroups.find(
    (item) => item.title === "Higher Education"
  )

  return (
    <ArticlePage title="Higher Education">
      <ArticleSection title="Overview">
        <p>
          This competency addresses institutional, national and international
          higher-education context needed for academic practice.
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
