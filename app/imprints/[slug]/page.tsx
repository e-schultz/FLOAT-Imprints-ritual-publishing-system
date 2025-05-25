import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// This would normally be fetched from an API or imported from MDX files
const imprints = {
  "float-dispatch": {
    title: "FLOAT.dispatch",
    description: "Zine-inspired digital artifacts from the FLOAT ecosystem",
    color: "#00ff9f",
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
    title: "Oracle Crosstalk",
    description: "Cross-model AI prompting and slutprint leaks",
    color: "#ff0066",
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
    title: "TECHCRAFT",
    description: "Technical deep dives and system architecture",
    color: "#4A90E2",
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
    title: "Resistance to Premature Coherence",
    description: "Neuroqueer cognitive patterns and container systems",
    color: "#8b00ff",
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

export function generateStaticParams() {
  return Object.keys(imprints).map((slug) => ({ slug }))
}

export default function ImprintPage({ params }: { params: { slug: string } }) {
  const imprint = imprints[params.slug]

  if (!imprint) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-[#00ff9f] hover:text-[#00ff9f]/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Imprints
        </Link>

        <header className="mb-8 pb-4 border-b" style={{ borderColor: `${imprint.color}30` }}>
          <h1 className="text-4xl font-bold mb-2" style={{ color: imprint.color }}>
            {imprint.title}
          </h1>
          <p className="text-lg font-mono opacity-80">{imprint.description}</p>
        </header>

        <div className="space-y-12">
          {imprint.issues.map((issue) => (
            <section key={issue.slug} className="mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: imprint.color }}>
                {issue.title}
              </h2>
              <p className="text-sm font-mono mb-6 text-[#f5f5f5]/70">
                Published: {issue.date} • {issue.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {issue.articles.length > 0 ? (
                  issue.articles.map((article) => (
                    <Link href={`/imprints/${params.slug}/${issue.slug}/${article.slug}`} key={article.slug}>
                      <Card
                        className={`h-full bg-black/40 border-[${imprint.color}]/30 hover:border-[${imprint.color}] transition-all duration-300 backdrop-blur-sm`}
                      >
                        <CardContent className="p-5">
                          <h3 className="text-xl font-bold mb-2" style={{ color: imprint.color }}>
                            {article.title}
                          </h3>
                          <p className="text-sm text-[#f5f5f5]/70">{article.excerpt}</p>
                        </CardContent>
                        <CardFooter
                          className="px-5 py-3 bg-black/50 border-t"
                          style={{ borderColor: `${imprint.color}20` }}
                        >
                          <span className="text-xs font-mono" style={{ color: imprint.color }}>
                            Read article →
                          </span>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-2 bg-black/40 border border-[#f5f5f5]/20 rounded-lg p-6 text-center">
                    <p className="text-[#f5f5f5]/60 font-mono">No articles published in this issue yet.</p>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
