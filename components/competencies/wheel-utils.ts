const CENTER = 300
const PATH_PRECISION = 3

function formatPathNumber(value: number) {
  const factor = 10 ** PATH_PRECISION
  const rounded = Math.round(value * factor) / factor
  return Number.isInteger(rounded)
    ? String(rounded)
    : rounded.toFixed(PATH_PRECISION).replace(/\.?0+$/, "")
}

export function polarToCartesian(radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180

  return {
    x: CENTER + radius * Math.cos(angleInRadians),
    y: CENTER + radius * Math.sin(angleInRadians),
  }
}

export function createArcPath(
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
) {
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1
  const start = polarToCartesian(innerRadius, startAngle)
  const end = polarToCartesian(innerRadius, endAngle)
  const outerStart = polarToCartesian(outerRadius, startAngle)
  const outerEnd = polarToCartesian(outerRadius, endAngle)

  return `M ${formatPathNumber(start.x)},${formatPathNumber(start.y)} A ${formatPathNumber(innerRadius)},${formatPathNumber(innerRadius)} 0 ${largeArcFlag},1 ${formatPathNumber(end.x)},${formatPathNumber(end.y)} L ${formatPathNumber(outerEnd.x)},${formatPathNumber(outerEnd.y)} A ${formatPathNumber(outerRadius)},${formatPathNumber(outerRadius)} 0 ${largeArcFlag},0 ${formatPathNumber(outerStart.x)},${formatPathNumber(outerStart.y)} Z`
}

export function createTextArcPath(
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1
  const start = polarToCartesian(radius, startAngle)
  const end = polarToCartesian(radius, endAngle)

  return `M ${formatPathNumber(start.x)},${formatPathNumber(start.y)} A ${formatPathNumber(radius)},${formatPathNumber(radius)} 0 ${largeArcFlag},1 ${formatPathNumber(end.x)},${formatPathNumber(end.y)}`
}

export function getFontSize(textLength: number) {
  const maxLength = 20
  const minFontSize = 10
  const maxFontSize = 14

  if (textLength <= maxLength) {
    return maxFontSize
  }

  const fontSize =
    maxFontSize -
    ((textLength - maxLength) / maxLength) * (maxFontSize - minFontSize)

  return Math.max(fontSize, minFontSize)
}

export function splitTextIntoLines(text: string, maxLength: number) {
  const words = text.split(" ")
  if (words.length === 0) {
    return []
  }

  const lines: string[] = []
  let currentLine = words[0] ?? ""

  for (let index = 1; index < words.length; index += 1) {
    const word = words[index] ?? ""
    if (currentLine.length + word.length + 1 <= maxLength) {
      currentLine += ` ${word}`
    } else {
      lines.push(currentLine)
      currentLine = word
    }
  }

  lines.push(currentLine)
  return lines
}
