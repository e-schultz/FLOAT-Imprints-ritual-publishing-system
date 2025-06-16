export const IMPRINT_COLORS = {
  "float-dispatch": "#00ff9f",
  "oracle-crosstalk": "#ff0066",
  techcraft: "#4A90E2",
  resistance: "#8b00ff",
} as const

export const CORE_COLORS = {
  "float-green": "#00ff9f",
  "glitch-red": "#ff0066",
  "ritual-purple": "#8b00ff",
  "terminal-black": "#1a1a1a",
  "off-white": "#f5f5f5",
} as const

export type ImprintSlug = keyof typeof IMPRINT_COLORS

export function getImprintColor(slug: string): string {
  return IMPRINT_COLORS[slug as ImprintSlug] || CORE_COLORS["float-green"]
}

export function getImprintColorWithOpacity(slug: string, opacity: number): string {
  const color = getImprintColor(slug)
  return `${color}${Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0")}`
}
