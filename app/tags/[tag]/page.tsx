import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowLeft, Hash } from "lucide-react"

// This would normally be fetched from an API or imported from MDX files
const articles = {
  "float-dispatch": {
    "issue-1": {
      "float-vs-ai-gaslighting": {
        title: "FLOAT vs AI Gaslighting",
        keywords: "contact before container, necessary friction, packet sniffer, rot-bard, emotional resonance",
        date: "2025-05-02",
        author: "evan + claude",
        tags: ["float", "ai-gaslighting", "little-fucker", "therapeutic-repair", "packet-sniffer", "note-necromancy"],
      },
      "resistance-to-premature-coherence": {
        title: "Resistance to Premature Coherence",
        keywords: "premature coherence, cognitive buffering, ritual stack, neuroqueer architecture",
        date: "2025-05-02",
        author: "evan + Claude 3.7 Sonnet",
        tags: [
          "float",
          "premature-coherence-resistance",
          "ritual-stack",
          "container-architecture",
          "neuroqueer-cognition",
          "asynchronous-meaning",
        ],
      },
    },
  },
  "oracle-crosstalk": {
    "issue-1": {
      "oracle-crosstalk-intro": {
        title: "Oracle Crosstalk & Float.Dispatch",
        keywords: "oracle crosstalk, slutprints, float.dispatch, imprints, sigil echoes",
        date: "2025-05-02",
        author: "evan + Claude",
        tags: ["float", "float-dispatch", "oracle-crosstalk", "slutprints", "sigil-echoes", "imprints", "zine-system"],
      },
    },
  },
}

// Flatten articles for tag filtering
const flattenedArticles = []
Object.entries(articles).forEach(([imprintSlug, issues]) => {
  Object.entries(issues).forEach(([issueSlug, articlesInIssue]) => {
    Object.entries(articlesInIssue).forEach(([articleSlug, article]) => {
      flattenedArticles.push({
        ...article,
        imprintSlug,
        issueSlug,
        articleSlug,
      })
    })
  })
})

// Get all unique tags
const allTags = Array.from(new Set(flattenedArticles.flatMap((article) => article.tags)))

// Get imprint color based on slug
const imprintColors = {
  "float-dispatch": "#00ff9f",
  "oracle-crosstalk": "#ff0066",
  techcraft: "#4A90E2",
  resistance: "#8b00ff",
}

export function generateStaticParams() {
  return allTags.map((tag) => ({ tag }))
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tag = params.tag

  // Filter articles by tag
  const filteredArticles = flattenedArticles.filter((article) => article.tags.includes(tag))

  if (filteredArticles.length === 0) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-[#00ff9f] hover:text-[#00ff9f]/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Imprints
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#8b00ff] mb-2 flex items-center">
            <Hash className="mr-2 h-6 w-6" />
            {tag}
          </h1>
          <p className="text-[#f5f5f5]/70">
            Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} tagged with #{tag}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              href={`/imprints/${article.imprintSlug}/${article.issueSlug}/${article.articleSlug}`}
              key={`${article.imprintSlug}-${article.issueSlug}-${article.articleSlug}`}
            >
              <Card
                className="h-full bg-black/40 border hover:border-opacity-100 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                style={{ borderColor: `${imprintColors[article.imprintSlug] || "#00ff9f"}30` }}
              >
                <CardContent className="p-5 relative">
                  <div className="absolute top-2 right-2 text-[#ff0066] font-mono text-xs">{article.date}</div>
                  <h2
                    className="text-xl font-bold mb-2"
                    style={{ color: imprintColors[article.imprintSlug] || "#00ff9f" }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-sm font-mono text-[#f5f5f5]/70 mb-3">{article.keywords}</p>
                  <div className="text-xs text-[#8b00ff]">by {article.author}</div>
                </CardContent>
                <CardFooter className="px-5 py-3 bg-black/50 border-t border-[#00ff9f]/20 flex gap-2 flex-wrap">
                  {article.tags
                    .filter((t) => t !== tag)
                    .slice(0, 3)
                    .map((t) => (
                      <Link href={`/tags/${t}`} key={t}>
                        <span className="text-xs bg-[#8b00ff]/20 px-2 py-1 rounded hover:bg-[#8b00ff]/30 transition-colors">
                          #{t}
                        </span>
                      </Link>
                    ))}
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
