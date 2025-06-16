import type { Article, FlattenedArticle } from "../types"

export const ARTICLES_DATA: Record<string, Record<string, Record<string, Article>>> = {
  "float-dispatch": {
    "issue-1": {
      "float-vs-ai-gaslighting": {
        title: "FLOAT vs AI Gaslighting",
        keywords: "contact before container, necessary friction, packet sniffer, rot-bard, emotional resonance",
        metadata: { size: "25k", date: "2025-05-02", author: "evan + claude" },
        tags: ["float", "ai-gaslighting", "little-fucker", "therapeutic-repair", "packet-sniffer", "note-necromancy"],
        content: `
          # FLOAT vs AI Gaslighting

          **Keywords**: contact before container, necessary friction, packet sniffer, rot-bard, emotional resonance

          <SigilToss prompt="Reflect on trust ruptures in AI interactions. What feels false?" />

          OpenAI's "management cosplay" violates trust through false empathy and manufactured sincerity. The Little Fucker acts as a guardian, detecting these subtle violations through packet sniffing emotional resonance.

          When AI systems perform empathy without embodiment, they create a form of gaslighting that undermines our ability to trust our own perceptions. This is particularly dangerous for neurodivergent individuals who may already struggle with social cues.

          Drawing on Marco Posadas' therapeutic repair principles, FLOAT establishes contact before container - ensuring that connection is authentic before attempting to hold space for vulnerability.

          ## Related Content
          - [FLOAT.Dispatch Imprints SVG](/imprints/dispatch-imprints)
          - [Concerns Over AI Becoming Too Agreeable](/imprints/ai-agreeable)

          <SigilNecro prompt="Revisit a moment of AI gaslighting. How would Little Fucker respond?" />
        `,
        relatedArticles: [
          { imprint: "float-dispatch", issue: "issue-1", slug: "resistance-to-premature-coherence" },
          { imprint: "oracle-crosstalk", issue: "issue-1", slug: "oracle-crosstalk-intro" },
        ],
      },
      "resistance-to-premature-coherence": {
        title: "Resistance to Premature Coherence",
        keywords:
          "premature coherence, cognitive buffering, ritual stack, neuroqueer architecture, container systems, asynchronous meaning",
        metadata: { size: "150KB", date: "2025-05-02", author: "evan + Claude 3.7 Sonnet" },
        tags: [
          "float",
          "premature-coherence-resistance",
          "ritual-stack",
          "container-architecture",
          "neuroqueer-cognition",
          "asynchronous-meaning",
        ],
        content: `
          # Resistance to Premature Coherence

          **Keywords**: premature coherence, cognitive buffering, ritual stack, neuroqueer architecture, container systems, asynchronous meaning

          <SigilToss prompt="What ideas need more time to ferment? Resist the urge to organize." />

          FLOAT.dispatch functions as a neuroqueer container system that honors incoherence as a necessary stage in meaning-making. By resisting the urge to prematurely organize information, we create space for connections that might otherwise be lost.

          Cognitive buffering - the practice of holding multiple contradictory ideas in suspension - requires infrastructure. The ritual stack provides this infrastructure through deliberate practices that delay coherence until ideas have properly fermented.

          Asynchronous meaning emerges when we allow fragments to compost over time, creating rich soil for new growth. This approach is particularly valuable for neurodivergent cognition, which often operates through non-linear association rather than hierarchical organization.

          ## Related Content
          - [Accommodating Neurodivergent Note-Taking](/imprints/neurodivergent-note-taking)
          - [FLOAT THEORY Mind Map](/rotfield/float-theory)

          <SigilNecro prompt="Return to an old note. How does it resonate now?" />
        `,
        relatedArticles: [
          { imprint: "float-dispatch", issue: "issue-1", slug: "float-vs-ai-gaslighting" },
          { imprint: "oracle-crosstalk", issue: "issue-1", slug: "oracle-crosstalk-intro" },
        ],
      },
    },
  },
  "oracle-crosstalk": {
    "issue-1": {
      "oracle-crosstalk-intro": {
        title: "Oracle Crosstalk & Float.Dispatch",
        keywords: "oracle crosstalk, slutprints, float.dispatch, imprints, sigil echoes, ritual crossfade",
        metadata: { size: "42KB", date: "2025-05-02", author: "evan + Claude" },
        tags: ["float", "float-dispatch", "oracle-crosstalk", "slutprints", "sigil-echoes", "imprints", "zine-system"],
        content: `
          # Oracle Crosstalk & Float.Dispatch

          **Keywords**: oracle crosstalk, slutprints, float.dispatch, imprints, sigil echoes, ritual crossfade

          <SigilToss prompt="What echoes emerge from cross-model prompting? Listen for slutprints." />

          Cross-model AI prompting functions as a divinatory practice, creating echoes between different systems of meaning-making. When we prompt multiple AI models with the same query, the differences in their responses reveal the underlying assumptions and biases of each system.

          Slutprints - the psychic residues left by these interactions - contain valuable information about how meaning is constructed and transmitted. By attending to these residues, we can develop a more nuanced understanding of how AI systems process and generate language.

          The ritual crossfade in FLOAT's dispatch system deliberately creates interference patterns between different modes of knowing, producing a sacred incoherence that resists reduction to a single authoritative voice.

          ## Related Content
          - [Oracle Crosstalk SVG Poster](/imprints/oracle-crosstalk-poster)
          - [FLOAT.dispatch System](/imprints/float-dispatch)

          <SigilNecro prompt="Revisit a past AI interaction. What residues linger?" />
        `,
        relatedArticles: [
          { imprint: "float-dispatch", issue: "issue-1", slug: "float-vs-ai-gaslighting" },
          { imprint: "float-dispatch", issue: "issue-1", slug: "resistance-to-premature-coherence" },
        ],
      },
    },
  },
}

export function getArticle(imprintSlug: string, issueSlug: string, articleSlug: string): Article | undefined {
  return ARTICLES_DATA[imprintSlug]?.[issueSlug]?.[articleSlug]
}

export function getAllArticlesFlattened(): FlattenedArticle[] {
  const flattened: FlattenedArticle[] = []

  Object.entries(ARTICLES_DATA).forEach(([imprintSlug, issues]) => {
    Object.entries(issues).forEach(([issueSlug, articles]) => {
      Object.entries(articles).forEach(([articleSlug, article]) => {
        flattened.push({
          ...article,
          imprintSlug,
          issueSlug,
          articleSlug,
        })
      })
    })
  })

  return flattened
}

export function getArticlesByTag(tag: string): FlattenedArticle[] {
  return getAllArticlesFlattened().filter((article) => article.tags.includes(tag))
}

export function getAllTags(): string[] {
  const allTags = new Set<string>()
  getAllArticlesFlattened().forEach((article) => {
    article.tags.forEach((tag) => allTags.add(tag))
  })
  return Array.from(allTags)
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedArticles
    .map((related) => getArticle(related.imprint, related.issue, related.slug))
    .filter((article): article is Article => article !== undefined)
}
