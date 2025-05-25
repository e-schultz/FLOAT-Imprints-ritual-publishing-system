import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would normally be imported from MDX files
// For this example, we'll use a static data structure
const articles = {
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

export function generateStaticParams() {
  const params = []

  Object.entries(articles).forEach(([imprintSlug, issues]) => {
    Object.entries(issues).forEach(([issueSlug, articlesInIssue]) => {
      Object.keys(articlesInIssue).forEach((articleSlug) => {
        params.push({
          slug: imprintSlug,
          issue: issueSlug,
          articleSlug: articleSlug,
        })
      })
    })
  })

  return params
}

export default function ArticlePage({ params }: { params: { slug: string; issue: string; articleSlug: string } }) {
  const article = articles[params.slug]?.[params.issue]?.[params.articleSlug]

  if (!article) {
    notFound()
  }

  // Get imprint color based on slug
  const imprintColors = {
    "float-dispatch": "#00ff9f",
    "oracle-crosstalk": "#ff0066",
    techcraft: "#4A90E2",
    resistance: "#8b00ff",
  }

  const imprintColor = imprintColors[params.slug] || "#00ff9f"

  // Get related articles
  const relatedArticles = article.relatedArticles
    .map((related) => articles[related.imprint]?.[related.issue]?.[related.slug])
    .filter(Boolean)

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href={`/imprints/${params.slug}`}
          className="inline-flex items-center hover:opacity-80 mb-6"
          style={{ color: imprintColor }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Imprint
        </Link>

        <article
          className="bg-black/40 border rounded-lg p-6 md:p-8 backdrop-blur-sm mb-8"
          style={{ borderColor: `${imprintColor}30` }}
        >
          <header className="mb-6 pb-4 border-b" style={{ borderColor: `${imprintColor}20` }}>
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tags.map((tag) => (
                <Link
                  href={`/tags/${tag}`}
                  key={tag}
                  className="text-xs bg-[#8b00ff]/20 px-2 py-1 rounded hover:bg-[#8b00ff]/30 transition-colors"
                >
                  <span className="text-[#8b00ff]">#</span>
                  {tag}
                </Link>
              ))}
            </div>
            <div className="text-sm font-mono text-[#f5f5f5]/60 mb-1">
              {article.metadata.date} • {article.metadata.size} • by {article.metadata.author}
            </div>
          </header>

          <div className="mdx-content prose prose-invert max-w-none prose-headings:text-[#00ff9f] prose-a:text-[#8b00ff] prose-strong:text-[#00ff9f]">
            <div
              dangerouslySetInnerHTML={{
                __html: article.content
                  .replace(
                    /<SigilToss prompt="(.*?)" \/>/g,
                    '<div class="sigil-container my-6 p-4 border border-[#00ff9f]/30 bg-black/30 rounded-lg"><span class="sigil text-xl mr-2">{∴}</span><span class="font-mono text-[#00ff9f]"><strong>Ritual Pause</strong>: $1</span></div>',
                  )
                  .replace(
                    /<SigilNecro prompt="(.*?)" \/>/g,
                    '<div class="sigil-container my-6 p-4 border border-[#8b00ff]/30 bg-black/30 rounded-lg"><span class="sigil text-xl mr-2">{⊡}</span><span class="font-mono text-[#8b00ff]"><strong>Necro Prompt</strong>: $1</span></div>',
                  ),
              }}
            />
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-mono mb-4" style={{ color: imprintColor }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedArticles.map((related, index) => (
                <Link
                  href={`/imprints/${article.relatedArticles[index].imprint}/${article.relatedArticles[index].issue}/${article.relatedArticles[index].slug}`}
                  key={index}
                >
                  <div
                    className="bg-black/40 border rounded-lg p-4 hover:border-opacity-100 transition-all"
                    style={{ borderColor: `${imprintColors[article.relatedArticles[index].imprint] || "#00ff9f"}30` }}
                  >
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: imprintColors[article.relatedArticles[index].imprint] || "#00ff9f" }}
                    >
                      {related.title}
                    </h3>
                    <p className="text-sm text-[#f5f5f5]/70 line-clamp-2">{related.keywords}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
