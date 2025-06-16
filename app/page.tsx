import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Hash, Network } from "lucide-react"
import { getAllImprints } from "@/lib/data/imprints"

export default function Home() {
  const imprints = getAllImprints()

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 border-b border-[#00ff9f]/30 pb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00ff9f] mb-2 glitch-text">
            FLOAT <span className="text-[#ff0066]">Imprints</span>
          </h1>
          <p className="text-lg font-mono opacity-80">Neuroqueer ritual publishing system</p>
        </header>

        <div className="flex flex-col md:flex-row gap-6">
          <aside className="md:w-64 mb-6 md:mb-0">
            <div className="bg-black/40 p-4 rounded-lg border border-[#8b00ff]/30 backdrop-blur-sm sticky top-4">
              <h2 className="text-xl font-mono text-[#00ff9f] mb-4 flex items-center">
                <Network className="mr-2 h-5 w-5" /> Rotfield
              </h2>
              <Link href="/rotfield">
                <Button
                  variant="outline"
                  className="w-full mb-4 bg-black/50 border-[#00ff9f]/50 text-[#00ff9f] hover:bg-[#00ff9f]/20"
                >
                  View Rotfield
                </Button>
              </Link>

              <h3 className="text-lg font-mono text-[#8b00ff] mb-2 flex items-center">
                <Hash className="mr-2 h-4 w-4" /> ZK Door
              </h3>
              <div className="space-y-2">
                {["ritual-stack", "neuroqueer-cognition", "little-fucker", "oracle-crosstalk"].map((tag) => (
                  <Link
                    href={`/tags/${tag}`}
                    key={tag}
                    className="block text-sm py-1 px-2 rounded bg-black/30 border border-[#8b00ff]/20 hover:bg-[#8b00ff]/20 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {imprints.map((imprint, index) => (
                <Link href={`/imprints/${imprint.slug}`} key={imprint.slug}>
                  <Card
                    className={`h-full bg-black/40 border-[${imprint.color}]/30 hover:border-[${imprint.color}] transition-all duration-300 backdrop-blur-sm overflow-hidden
                      ${index % 2 === 0 ? "transform hover:-rotate-1" : "transform hover:rotate-1"}`}
                  >
                    <CardContent className="p-5 relative">
                      <div className="absolute top-2 right-2 text-[#ff0066] font-mono text-xs">
                        Latest: Issue {imprint.latestIssue.split("-")[1]}
                      </div>
                      <h2 className="text-2xl font-bold mb-2" style={{ color: imprint.color }}>
                        {imprint.title}
                      </h2>
                      <p className="text-sm font-mono text-[#f5f5f5]/70 mb-3">{imprint.description}</p>
                    </CardContent>
                    <CardFooter className="px-5 py-3 bg-black/50 border-t border-[#00ff9f]/20 flex gap-2 flex-wrap">
                      {imprint.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs bg-[#8b00ff]/20 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
