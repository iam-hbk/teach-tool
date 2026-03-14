"use client"

import { useId, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { competencyGroups } from "@/lib/competencies"
import {
  createArcPath,
  createTextArcPath,
  getFontSize,
  polarToCartesian,
  splitTextIntoLines,
} from "@/components/competencies/wheel-utils"

type TooltipState = {
  title: string
  color: string
  x: number
  y: number
}

export function NavigationWheel() {
  const router = useRouter()
  const idPrefix = useId().replaceAll(":", "")
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null)
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)

  const segmentAngle = 360 / competencyGroups.length
  const segmentInnerRadius = 100
  const segmentOuterRadius = 145
  const subSegmentInnerRadius = 145
  const subSegmentOuterRadius = 290
  const segmentTextRadius = (segmentInnerRadius + segmentOuterRadius) / 2
  const subSegmentTextRadius =
    (subSegmentInnerRadius + subSegmentOuterRadius) / 2

  const subSegmentAnglesByGroup = useMemo(() => {
    return competencyGroups.map((group) => {
      const totalTextLength = group.subSegments.reduce(
        (total, subSegment) => total + subSegment.title.length,
        0
      )

      return group.subSegments.map((subSegment) => {
        return (subSegment.title.length / totalTextLength) * segmentAngle
      })
    })
  }, [segmentAngle])

  const showTooltip = (
    title: string,
    color: string,
    event: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setTooltip({
      title,
      color,
      x: rect.left + rect.width / 2,
      y: rect.top,
    })
  }

  return (
    <div className="relative mx-auto w-full max-w-[720px]">
      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 max-w-44 rounded-md px-3 py-2 text-center text-xs text-white shadow-lg"
          style={{
            backgroundColor: tooltip.color,
            left: tooltip.x,
            top: tooltip.y - 10,
            transform: "translate(-50%, -100%)",
          }}
        >
          {tooltip.title}
        </div>
      )}

      <svg viewBox="0 0 600 600" className="aspect-square h-auto w-full">
        <title>Competency navigation wheel</title>

        <g className="cursor-pointer">
          <circle
            cx="300"
            cy="300"
            r="100"
            fill="white"
            onClick={() => router.push("/competencies")}
          />
          <text
            x="300"
            y="270"
            textAnchor="middle"
            fontSize="34"
            fontWeight="600"
            onClick={() => router.push("/competencies")}
          >
            <tspan fill="#0783DB">T</tspan>
            <tspan fill="black">.</tspan>
            <tspan fill="#4EAA55">E</tspan>
            <tspan fill="black">.</tspan>
            <tspan fill="#D0411F">A</tspan>
            <tspan fill="black">.</tspan>
            <tspan fill="#6C4388">C</tspan>
            <tspan fill="black">.</tspan>
            <tspan fill="#525457">H</tspan>
          </text>
          <text
            x="300"
            y="292"
            textAnchor="middle"
            fontSize="20"
            onClick={() => router.push("/competencies")}
          >
            Academic
          </text>
          <text
            x="300"
            y="314"
            textAnchor="middle"
            fontSize="20"
            onClick={() => router.push("/competencies")}
          >
            Competencies
          </text>
          <text
            x="300"
            y="336"
            textAnchor="middle"
            fontSize="20"
            onClick={() => router.push("/competencies")}
          >
            Model
          </text>
        </g>

        {competencyGroups.map((group, groupIndex) => {
          const startAngle = groupIndex * segmentAngle
          const endAngle = (groupIndex + 1) * segmentAngle
          const segmentTextPathId = `${idPrefix}-segment-${groupIndex}`

          return (
            <g key={group.title}>
              <path
                d={createArcPath(
                  segmentInnerRadius,
                  segmentOuterRadius,
                  startAngle,
                  endAngle
                )}
                fill={hoveredSegment === groupIndex ? group.color : "white"}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredSegment(groupIndex)}
                onMouseLeave={() => setHoveredSegment(null)}
                onClick={() => router.push(group.link)}
              />

              <path
                id={segmentTextPathId}
                d={createTextArcPath(segmentTextRadius, startAngle, endAngle)}
                fill="none"
              />

              <text
                fill={hoveredSegment === groupIndex ? "white" : group.color}
                fontSize="16"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredSegment(groupIndex)}
                onMouseLeave={() => setHoveredSegment(null)}
              >
                <textPath
                  href={`#${segmentTextPathId}`}
                  startOffset="50%"
                  textAnchor="middle"
                  onClick={() => router.push(group.link)}
                >
                  {group.title}
                </textPath>
              </text>

              {group.subSegments.map((subSegment, subSegmentIndex) => {
                const currentGroupSubAngles =
                  subSegmentAnglesByGroup[groupIndex] ?? []
                const currentSubAngle =
                  currentGroupSubAngles[subSegmentIndex] ?? 0
                const subStartAngle =
                  startAngle +
                  currentGroupSubAngles
                    .slice(0, subSegmentIndex)
                    .reduce((acc, angle) => acc + angle, 0)
                const subEndAngle = subStartAngle + currentSubAngle

                const textPosition = polarToCartesian(
                  subSegmentTextRadius,
                  subStartAngle + currentSubAngle / 2
                )
                const lines = splitTextIntoLines(subSegment.title, 18)
                const rotation = subStartAngle + currentSubAngle / 2 - 90
                const fontSize = getFontSize(subSegment.title.length)

                return (
                  <g key={subSegment.title}>
                    <path
                      d={createArcPath(
                        subSegmentInnerRadius,
                        subSegmentOuterRadius,
                        subStartAngle,
                        subEndAngle
                      )}
                      fill={subSegment.color}
                      className="cursor-pointer transition-all duration-200 hover:opacity-90"
                      onClick={() => router.push(subSegment.link)}
                      onMouseEnter={(event) =>
                        showTooltip(subSegment.title, subSegment.color, event)
                      }
                      onMouseLeave={() => setTooltip(null)}
                    />

                    <text
                      x={textPosition.x}
                      y={textPosition.y}
                      textAnchor="middle"
                      fontSize={fontSize}
                      fill="white"
                      transform={`rotate(${rotation}, ${textPosition.x}, ${textPosition.y})`}
                      className="cursor-pointer"
                      onClick={() => router.push(subSegment.link)}
                      onMouseEnter={(event) =>
                        showTooltip(subSegment.title, subSegment.color, event)
                      }
                      onMouseLeave={() => setTooltip(null)}
                    >
                      {lines.map((line, lineIndex) => (
                        <tspan
                          key={`${subSegment.title}-${lineIndex}`}
                          x={textPosition.x}
                          dy={lineIndex === 0 ? "0" : "1.2em"}
                        >
                          {line}
                        </tspan>
                      ))}
                    </text>
                  </g>
                )
              })}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
