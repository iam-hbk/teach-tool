"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  TWheelSegment,
  TWheelSubSegment,
  wheelData as segments,
} from "@/utils/data";
import { useCallback } from "react";
import {
  Wheel,
  SVG,
  SubSegmentPath,
  SegmentPath,
  SegmentText,
} from "./wheel_parts";
import {
  createArcPath,
  createTextArcPath,
  getFontSize,
  splitTextIntoLines,
  polarToCartesian,
} from "./wheel_utils";
import Image from "next/image";

const NavigationWheel = () => {
  // Create a router instance
  const router = useRouter();
  // Calculate the angles for segments and subsegments
  const segmentCount = useMemo(() => segments.length, []);
  const segmentAngle = useMemo(() => 360 / segmentCount, [segmentCount]);

  // Define radius values for segments and sub-segments
  const segmentInnerRadius = 100;
  const segmentOuterRadius = 145;
  const subSegmentInnerRadius = 145;
  const subSegmentOuterRadius = 290;

  const segmentTextRadius = useMemo(
    () => (segmentInnerRadius + segmentOuterRadius) / 2,
    [],
  );

  const subSegmentTextRadius = useMemo(
    () => (subSegmentInnerRadius + subSegmentOuterRadius) / 2,
    [],
  );
  // Calculate the total text length for each segment
  const getTotalTextLength = useCallback((segment: TWheelSegment) => {
    return segment.subSegments.reduce(
      (totalLength, subSegment) => totalLength + subSegment.title.length,
      0,
    );
  }, []);

  // Calculate the subsegment angle for each subsegment proportionally to their text length
  const getSubSegmentAngle = useCallback(
    (segment: TWheelSegment, subSegment: TWheelSubSegment) => {
      const totalTextLength = getTotalTextLength(segment);
      return (subSegment.title.length / totalTextLength) * segmentAngle;
    },
    [segmentAngle, getTotalTextLength],
  );

  // Function to handle click event and navigate to the given URL
  const handleClick = (url: string) => router.push(url);

  // Create a state variable to store the hovered subsegment
  const [hoveredSubSegment, setHoveredSubSegment] = useState<any>(undefined);

  // Define mouse enter and leave event handlers for subsegments
  const handleMouseEnter = useCallback(
    (segmentIndex: number, subSegmentIndex: number) => {
      setHoveredSubSegment({ segmentIndex, subSegmentIndex });
    },
    [],
  );
  const handleMouseLeave = useCallback(() => {
    setHoveredSubSegment(null);
  }, []);
  // Function to calculate the new radius values for sub-segments when hovered
  const getHoveredRadiusValues = (isHovered: any) => {
    const hoverScale = 1.1; // Change this value to adjust the hover effect size
    return {
      innerRadius: isHovered
        ? subSegmentInnerRadius * hoverScale
        : subSegmentInnerRadius,
      outerRadius: isHovered
        ? subSegmentOuterRadius * hoverScale
        : subSegmentOuterRadius,
    };
  };
  // Add state for the hovered segment
  const [hoveredSegment, setHoveredSegment] = useState(null);

  // Define mouse enter and leave event handlers for segments
  const handleMainSegmentMouseEnter = useCallback((segmentIndex: any) => {
    setHoveredSegment(segmentIndex);
    // (document.getElementById("search-modal") as HTMLDialogElement).showModal();
  }, []);

  const handleMainSegmentMouseLeave = useCallback(() => {
    setHoveredSegment(null);
    // (document.getElementById("search-modal") as HTMLDialogElement).close();
  }, []);

  const showTooltip = (
    subsegment: TWheelSubSegment,
    event:
      | React.MouseEvent<SVGPathElement, MouseEvent>
      | React.MouseEvent<SVGTextElement, MouseEvent>,
  ) => {
    const toolTip = document.createElement("div");
    toolTip.classList.add("tooltip");

    // Create the tooltip content
    const tooltipContent = document.createElement("span");
    tooltipContent.style.color = "white";
    tooltipContent.style.padding = "5px";
    tooltipContent.style.fontSize = "14px";
    tooltipContent.innerHTML = subsegment.title;
    toolTip.appendChild(tooltipContent);

    // Position the tooltip near the mouse position
    toolTip.style.backgroundColor = subsegment.color;
    toolTip.style.position = "absolute";
    toolTip.style.left = `${event.clientX + 10}px`; // Offset to avoid cursor overlap
    toolTip.style.top = `${event.clientY + 10}px`;
    toolTip.style.zIndex = "1000";
    toolTip.style.width = "130px";
    toolTip.style.textAlign = "center";
    toolTip.style.minHeight = "50px";
    toolTip.style.height = "fit-content";
    toolTip.style.borderRadius = "5px";
    toolTip.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.3)";
    toolTip.style.display = "flex";
    toolTip.style.alignItems = "center";
    toolTip.style.justifyContent = "center";

    // Append tooltip to the body
    document.body.appendChild(toolTip);
  };
  // Function to remove tooltip
  const removeTooltip = () => {
    const toolTip = document.querySelectorAll<HTMLDivElement>(".tooltip");
    toolTip.forEach((tooltip) => tooltip.remove());
  };

  // Function to calculate the rotation center for text
  const calculateRotationCenter = (startAngle: number, endAngle: number) => {
    const midAngle = (startAngle + endAngle) / 2;
    return polarToCartesian(segmentTextRadius, midAngle);
  };

  // Render the navigation wheel component
  return (
    <Wheel>
      <SVG viewBox="-70 10 720 620">
        {/* Draw the central circle with "TEACH" text */}
        <circle cx="300" cy="300" r="100" fill="white" />
        {/* Text for TEACH in the circle */}
        <text
          x={230}
          y="270"
          fill="#0783DB"
          textAnchor="middle"
          font-size="34"
          // font-weight="bold"
        >
          T
        </text>
        <text
          x={245}
          y="270"
          fill="black"
          textAnchor="middle"
          font-size="34"
          // font-weight="bold"
        >
          .
        </text>
        <text
          x={262}
          y="270"
          fill="#4EAA55"
          textAnchor="middle"
          font-size="34"
          // font-weight="bold"
        >
          E
        </text>
        <text
          x={277}
          y="270"
          fill="black"
          textAnchor="middle"
          font-size="34"
          // font-weight="bold"
        >
          .
        </text>
        <text
          x={297}
          y="270"
          fill="#D0411F"
          textAnchor="middle"
          font-size="34"
          // font-weight="bold"
        >
          A
        </text>
        <text
          x={316}
          y="270"
          fill="balck"
          textAnchor="middle"
          font-size="34"
          // font-weight="bold"
        >
          .
        </text>
        <text
          x={333}
          y="270"
          fill="#6C4388"
          textAnchor="middle"
          font-size="34"
          // font-weight="bold"
        >
          C
        </text>
        <text
          x={350}
          y="270"
          fill="balck"
          textAnchor="middle"
          font-size="34"
          // font-weight="bold"
        >
          .
        </text>
        <text
          x={370}
          y="270"
          fill="#525457"
          textAnchor="middle"
          font-size="34"
          // font-weight="bold"
        >
          H
        </text>

        <text x="300" y="290" textAnchor="middle" dy=".2em" fontSize="20">
          Academic
        </text>
        <text x="300" y="310" textAnchor="middle" dy=".2em" fontSize="20">
          Competencies
        </text>
        <text x="300" y="330" textAnchor="middle" dy=".2em" fontSize="20">
          Model
        </text>
        {/* Loop through segments to create the outer layer */}
        {segments.map((segment, index) => {
          const startAngle = index * segmentAngle;
          const endAngle = (index + 1) * segmentAngle;
          const isHovered = hoveredSegment === index;

          //rotation center for text
          const { x: rotationCenterX, y: rotationCenterY } =
            calculateRotationCenter(startAngle, endAngle);

          const midAngle = (startAngle + endAngle) / 2;
          const shouldRotate = midAngle > 90 && midAngle < 270;
          // const textRotation = calculateTextRotation(startAngle, endAngle);
          //   console.log("[SEGMENT]:", segment.title, startAngle, endAngle);
          return (
            <g key={index}>
              {/* Draw each segment with its color and title */}
              <SegmentPath
                d={createArcPath(
                  segmentInnerRadius,
                  segmentOuterRadius,
                  startAngle,
                  endAngle,
                )}
                fill={isHovered ? segment.color : "white"}
                onClick={() => handleClick(segment.link)}
                // onMouseEnter={() => handleMainSegmentMouseEnter(index)}
                // onMouseLeave={handleMainSegmentMouseLeave}
                className={isHovered ? "hovered" : ""}
              />
              <path
                id={`textPath-${index}`}
                d={createTextArcPath(segmentTextRadius, startAngle, endAngle)}
                fill="none"
              />
              <SegmentText
                fontSize="16"
                fill={segment.color}
                onMouseEnter={() => handleMainSegmentMouseEnter(index)}
                onMouseLeave={handleMainSegmentMouseLeave}
              >
                <textPath
                  href={`#textPath-${index}`}
                  startOffset="50%"
                  textAnchor="middle"
                  transform="scale(-1, 1)"
                  onMouseEnter={() =>
                    console.log("[sssss]", startAngle, shouldRotate, endAngle)
                  }
                  onClick={() => handleClick(segment.link)}
                >
                  {segment.title}
                </textPath>
              </SegmentText>
              {/* Loop through subsegments to create the inner layer */}
              {segment.subSegments.map((subSegment, subIndex) => {
                const isHovered =
                  hoveredSubSegment &&
                  hoveredSubSegment.segmentIndex === index &&
                  hoveredSubSegment.subSegmentIndex === subIndex;

                const { innerRadius, outerRadius } =
                  getHoveredRadiusValues(isHovered);

                const subSegmentAngle = getSubSegmentAngle(segment, subSegment);
                const subStartAngle =
                  startAngle +
                  segment.subSegments
                    .slice(0, subIndex)
                    .reduce(
                      (accumulatedAngle, sub) =>
                        accumulatedAngle + getSubSegmentAngle(segment, sub),
                      0,
                    );
                const subEndAngle = subStartAngle + subSegmentAngle;

                const textPosition = polarToCartesian(
                  subSegmentTextRadius,
                  subStartAngle + subSegmentAngle / 2,
                );
                const lines = splitTextIntoLines(subSegment.title, 18); // Change the maximum length as needed

                const rotation = subStartAngle + subSegmentAngle / 2 - 90;
                const fontSize = getFontSize(subSegment.title.length);
                return (
                  <g key={subIndex}>
                    {/* Draw each subsegment with its title */}
                    <SubSegmentPath
                      d={createArcPath(
                        innerRadius,
                        outerRadius,
                        subStartAngle,
                        subEndAngle,
                      )}
                      fill={subSegment.color}
                      onClick={() => {
                        handleClick(subSegment.link);
                        removeTooltip();
                      }}
                      onMouseEnter={(e) => {
                        handleMouseEnter(index, subIndex);
                        showTooltip(subSegment, e);
                      }}
                      onMouseLeave={() => {
                        handleMouseLeave();
                        removeTooltip();
                      }}
                    />
                    <text
                      x={textPosition.x}
                      y={textPosition.y}
                      textAnchor="middle"
                      dy=".3em"
                      fontSize={fontSize}
                      fill="white"
                      transform={`rotate(${rotation}, ${textPosition.x}, ${textPosition.y})`}
                      onClick={() => {
                        handleClick(subSegment.link);
                        removeTooltip();
                      }}
                      onMouseEnter={(e) => {
                        handleMouseEnter(index, subIndex);
                        showTooltip(subSegment, e);
                      }}
                      onMouseLeave={() => {
                        handleMouseLeave();
                        removeTooltip();
                      }}
                    >
                      {/* {subSegment.title} */}
                      {lines.map((line, lineIndex) => (
                        <tspan
                          key={lineIndex}
                          x={textPosition.x}
                          dy={lineIndex === 0 ? "0" : "1.2em"}
                        >
                          {line}
                        </tspan>
                      ))}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
      </SVG>
    </Wheel>
  );
};

export default NavigationWheel;
