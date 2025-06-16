import type { Imprint } from "../types"

export const IMPRINTS_DATA: Record<string, Imprint> = {
  "float-dispatch": {
    slug: "float-dispatch",
    title: "FLOAT.dispatch",
    description: "Zine-inspired digital artifacts from the FLOAT ecosystem",
    color: "#00ff9f",
    latestIssue: "issue-1",
    tags: ["float", "dispatch", "zine-system"],
    issues: [
      {
        slug: "issue-1",
        title: "Issue 1: Ritual Beginnings",
        date: "2025-05-02",
        description: "The inaugural issue exploring the foundations of FLOAT.dispatch",
        articles: [
          {
            slug: "float-vs-ai-gaslighting",
            title: "FLOAT vs AI Gaslighting",
            excerpt: "Exploring trust ruptures in AI interactions and the Little Fucker's role",
          },
          {
            slug: "resistance-to-premature-coherence",
            title: "Resistance to Premature Coherence",
            excerpt: "How FLOAT.dispatch functions as a neuroqueer container system",
          },
        ],
      },
    ],
  },
  "oracle-crosstalk": {
    slug: "oracle-crosstalk",
    title: "Oracle Crosstalk",
    description: "Cross-model AI prompting and slutprint leaks",
    color: "#ff0066",
    latestIssue: "issue-1",
    tags: ["float", "oracle-crosstalk", "slutprints"],
    issues: [
      {
        slug: "issue-1",
        title: "Issue 1: Slutprint Leaks",
        date: "2025-05-02",
        description: "Exploring the residues left by cross-model AI interactions",
        articles: [
          {
            slug: "oracle-crosstalk-intro",
            title: "Oracle Crosstalk & Float.Dispatch",
            excerpt: "An introduction to cross-model AI prompting as divinatory practice",
          },
        ],
      },
    ],
  },
  techcraft: {
    slug: "techcraft",
    title: "TECHCRAFT",
    description: "Technical deep dives and system architecture",
    color: "#4A90E2",
    latestIssue: "issue-1",
    tags: ["float", "techcraft", "architecture"],
    issues: [
      {
        slug: "issue-1",
        title: "Issue 1: System Architecture",
        date: "2025-05-02",
        description: "Technical explorations of FLOAT's underlying systems",
        articles: [],
      },
    ],
  },
  resistance: {
    slug: "resistance",
    title: "Resistance to Premature Coherence",
    description: "Neuroqueer cognitive patterns and container systems",
    color: "#8b00ff",
    latestIssue: "issue-1",
    tags: ["float", "premature-coherence-resistance", "neuroqueer-cognition"],
    issues: [
      {
        slug: "issue-1",
        title: "Issue 1: Cognitive Buffering",
        date: "2025-05-02",
        description: "Exploring neuroqueer approaches to information processing",
        articles: [],
      },
    ],
  },
}

export function getAllImprints(): Imprint[] {
  return Object.values(IMPRINTS_DATA)
}

export function getImprint(slug: string): Imprint | undefined {
  return IMPRINTS_DATA[slug]
}

export function getImprintIssue(imprintSlug: string, issueSlug: string) {
  const imprint = getImprint(imprintSlug)
  return imprint?.issues.find((issue) => issue.slug === issueSlug)
}
