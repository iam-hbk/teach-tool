"use client"

import { useId, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { competencyGroups } from "@/lib/competencies"
import { useIsMobile } from "@/hooks/use-mobile"
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
  const isMobile = useIsMobile()
  const idPrefix = useId().replaceAll(":", "")
  const centerGradientId = `${idPrefix}-center-gradient`
  const wheelGlowId = `${idPrefix}-wheel-glow`
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null)
  const [hoveredSubSegment, setHoveredSubSegment] = useState<string | null>(
    null
  )
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)

  const segmentAngle = 360 / competencyGroups.length
  const segmentInnerRadius = 100
  const segmentOuterRadius = 145
  const subSegmentInnerRadius = 145
  const subSegmentOuterRadius = 290
  const segmentTextRadius = (segmentInnerRadius + segmentOuterRadius) / 2
  const subSegmentTextRadius =
    (subSegmentInnerRadius + subSegmentOuterRadius) / 2 + 10

  const subSegmentAnglesByGroup = useMemo(() => {
    return competencyGroups.map((group) => {
      const baseWeight = 12
      const minAngle = Math.min(10, segmentAngle / 2)

      const weightedLengths = group.subSegments.map((subSegment) => {
        return subSegment.title.length + baseWeight
      })

      const totalWeight = weightedLengths.reduce(
        (total, weight) => total + weight,
        0
      )

      const rawAngles = weightedLengths.map((weight) => {
        return (weight / totalWeight) * segmentAngle
      })

      const adjustedAngles = rawAngles.map((angle) => {
        return Math.max(angle, minAngle)
      })

      const adjustedTotal = adjustedAngles.reduce(
        (total, angle) => total + angle,
        0
      )

      if (adjustedTotal <= segmentAngle) {
        return adjustedAngles
      }

      const overflow = adjustedTotal - segmentAngle
      const flexibleTotal = adjustedAngles.reduce((total, angle) => {
        return total + Math.max(angle - minAngle, 0)
      }, 0)

      if (flexibleTotal <= 0) {
        return adjustedAngles
      }

      return adjustedAngles.map((angle) => {
        const flexiblePart = Math.max(angle - minAngle, 0)
        const reduction = (flexiblePart / flexibleTotal) * overflow
        return angle - reduction
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

  const handleKeyAction = (
    event: React.KeyboardEvent<SVGElement>,
    action: () => void
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      action()
    }
  }

  return (
    <div className="group relative mx-auto w-full max-w-[720px] overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,hsl(var(--background)),hsl(var(--muted)/0.35))] p-3 sm:p-4">
      <div className="pointer-events-none absolute top-4 left-5 h-16 w-16 rounded-full border border-primary/35" />
      <div className="pointer-events-none absolute right-4 bottom-4 h-20 w-20 rounded-full border border-chart-2/30" />

      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 max-w-56 rounded-lg border border-white/20 px-3 py-2 text-center text-xs text-white shadow-xl backdrop-blur-sm"
          style={{
            backgroundColor: tooltip.color,
            left: tooltip.x,
            top: tooltip.y - 10,
            transform: "translate(-50%, -100%)",
          }}
        >
          <p className="font-semibold tracking-wide">{tooltip.title}</p>
          <p className="pt-0.5 text-[10px] tracking-[0.12em] text-white/80 uppercase">
            open competency
          </p>
        </div>
      )}

      <svg
        viewBox="0 0 600 600"
        className="relative z-10 aspect-square h-auto w-full drop-shadow-[0_24px_36px_hsl(var(--foreground)/0.2)]"
      >
        <title>Competency navigation wheel</title>

        <defs>
          <radialGradient id={centerGradientId} cx="50%" cy="35%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.98" />
            <stop offset="70%" stopColor="white" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F1F3F5" stopOpacity="0.92" />
          </radialGradient>
          <filter id={wheelGlowId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="10"
              floodColor="hsl(var(--foreground))"
              floodOpacity="0.18"
            />
          </filter>
        </defs>

        <circle
          cx="300"
          cy="300"
          r="288"
          fill="none"
          stroke="hsl(var(--border))"
          strokeOpacity="0.6"
          strokeWidth="1"
          strokeDasharray="2 7"
          className="origin-center motion-safe:animate-[spin_70s_linear_infinite]"
        />
        <circle
          cx="300"
          cy="300"
          r="152"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="3 6"
          className="origin-center motion-safe:animate-[spin_45s_linear_infinite_reverse]"
        />

        <g className="cursor-pointer" filter={`url(#${wheelGlowId})`}>
          <circle
            cx="300"
            cy="300"
            r="100"
            fill={`url(#${centerGradientId})`}
            stroke="hsl(var(--border))"
            strokeWidth="1.25"
            role="button"
            tabIndex={0}
            onClick={() => router.push("/competencies")}
            onKeyDown={(event) =>
              handleKeyAction(event, () => router.push("/competencies"))
            }
          />
          <text
            x="300"
            y="270"
            textAnchor="middle"
            fontSize="34"
            fontWeight="600"
            style={{ letterSpacing: "0.04em" }}
            role="button"
            tabIndex={0}
            onClick={() => router.push("/competencies")}
            onKeyDown={(event) =>
              handleKeyAction(event, () => router.push("/competencies"))
            }
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
            fontSize="18"
            fill="hsl(var(--foreground))"
            fontWeight="500"
            role="button"
            tabIndex={0}
            onClick={() => router.push("/competencies")}
            onKeyDown={(event) =>
              handleKeyAction(event, () => router.push("/competencies"))
            }
          >
            Academic
          </text>
          <text
            x="300"
            y="314"
            textAnchor="middle"
            fontSize="18"
            fill="hsl(var(--foreground))"
            fontWeight="500"
            role="button"
            tabIndex={0}
            onClick={() => router.push("/competencies")}
            onKeyDown={(event) =>
              handleKeyAction(event, () => router.push("/competencies"))
            }
          >
            Competencies
          </text>
          <text
            x="300"
            y="336"
            textAnchor="middle"
            fontSize="18"
            fill="hsl(var(--foreground))"
            fontWeight="500"
            role="button"
            tabIndex={0}
            onClick={() => router.push("/competencies")}
            onKeyDown={(event) =>
              handleKeyAction(event, () => router.push("/competencies"))
            }
          >
            Model
          </text>
        </g>

        <g
          className={
            isMobile
              ? "origin-center"
              : "origin-center [animation-play-state:running] group-hover:[animation-play-state:paused] motion-safe:animate-[spin_95s_linear_infinite]"
          }
        >
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
                  stroke={group.color}
                  strokeOpacity={hoveredSegment === groupIndex ? 0.5 : 0.18}
                  strokeWidth={hoveredSegment === groupIndex ? 2 : 1}
                  className="cursor-pointer transition-all duration-200"
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredSegment(groupIndex)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  onFocus={() => setHoveredSegment(groupIndex)}
                  onBlur={() => setHoveredSegment(null)}
                  onClick={() => router.push(group.link)}
                  onKeyDown={(event) =>
                    handleKeyAction(event, () => router.push(group.link))
                  }
                />

                <path
                  id={segmentTextPathId}
                  d={createTextArcPath(segmentTextRadius, startAngle, endAngle)}
                  fill="none"
                />

                <text
                  fill={hoveredSegment === groupIndex ? "white" : group.color}
                  fontSize="16"
                  fontWeight={hoveredSegment === groupIndex ? 600 : 500}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setHoveredSegment(groupIndex)}
                  onMouseLeave={() => setHoveredSegment(null)}
                  onFocus={() => setHoveredSegment(groupIndex)}
                  onBlur={() => setHoveredSegment(null)}
                  onClick={() => router.push(group.link)}
                  onKeyDown={(event) =>
                    handleKeyAction(event, () => router.push(group.link))
                  }
                >
                  <textPath
                    href={`#${segmentTextPathId}`}
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {group.title}
                  </textPath>
                </text>

                {group.subSegments.map((subSegment, subSegmentIndex) => {
                  const subSegmentKey = `${groupIndex}-${subSegmentIndex}`
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
                  const lines = splitTextIntoLines(subSegment.title, 16)
                  const rotation = subStartAngle + currentSubAngle / 2 - 90
                  const arcLength =
                    (Math.PI * subSegmentTextRadius * currentSubAngle) / 180
                  const longestLine = lines.reduce((longest, line) => {
                    return Math.max(longest, line.length)
                  }, 0)
                  const idealFontSize = getFontSize(subSegment.title.length)
                  const widthConstrainedFontSize = longestLine
                    ? (arcLength * 1.12) / (longestLine * 0.52)
                    : idealFontSize
                  const fontSize = Math.max(
                    10.5,
                    Math.min(idealFontSize, widthConstrainedFontSize)
                  )

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
                        stroke="white"
                        strokeOpacity={
                          hoveredSubSegment === subSegmentKey ? 0.55 : 0.22
                        }
                        strokeWidth={
                          hoveredSubSegment === subSegmentKey ? 1.8 : 1
                        }
                        opacity={
                          hoveredSubSegment &&
                          hoveredSubSegment !== subSegmentKey
                            ? 0.74
                            : 1
                        }
                        className="cursor-pointer transition-all duration-200"
                        role="button"
                        tabIndex={0}
                        onClick={() => router.push(subSegment.link)}
                        onMouseEnter={(event) => {
                          setHoveredSubSegment(subSegmentKey)
                          showTooltip(subSegment.title, subSegment.color, event)
                        }}
                        onMouseLeave={() => {
                          setHoveredSubSegment(null)
                          setTooltip(null)
                        }}
                        onFocus={() => setHoveredSubSegment(subSegmentKey)}
                        onBlur={() => {
                          setHoveredSubSegment(null)
                          setTooltip(null)
                        }}
                        onKeyDown={(event) =>
                          handleKeyAction(event, () =>
                            router.push(subSegment.link)
                          )
                        }
                      />

                      <text
                        x={textPosition.x}
                        y={textPosition.y}
                        textAnchor="middle"
                        fontSize={fontSize}
                        fill={
                          hoveredSubSegment &&
                          hoveredSubSegment !== subSegmentKey
                            ? "rgba(255,255,255,0.82)"
                            : "white"
                        }
                        fontWeight={
                          hoveredSubSegment === subSegmentKey ? 600 : 500
                        }
                        transform={`rotate(${rotation}, ${textPosition.x}, ${textPosition.y})`}
                        className="cursor-pointer"
                        style={{ transition: "all 200ms ease" }}
                        role="button"
                        tabIndex={0}
                        onClick={() => router.push(subSegment.link)}
                        onMouseEnter={(event) => {
                          setHoveredSubSegment(subSegmentKey)
                          showTooltip(subSegment.title, subSegment.color, event)
                        }}
                        onMouseLeave={() => {
                          setHoveredSubSegment(null)
                          setTooltip(null)
                        }}
                        onFocus={() => setHoveredSubSegment(subSegmentKey)}
                        onBlur={() => {
                          setHoveredSubSegment(null)
                          setTooltip(null)
                        }}
                        onKeyDown={(event) =>
                          handleKeyAction(event, () =>
                            router.push(subSegment.link)
                          )
                        }
                      >
                        {lines.map((line, lineIndex) => (
                          <tspan
                            key={`${subSegment.title}-${lineIndex}`}
                            x={textPosition.x}
                            dy={lineIndex === 0 ? "0" : "1.05em"}
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
        </g>
      </svg>
    </div>
  )
}
