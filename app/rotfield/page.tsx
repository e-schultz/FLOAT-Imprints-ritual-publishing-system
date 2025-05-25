"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// This would normally be fetched from an API or imported from MDX files
const nodes = [
  {
    id: 1,
    title: "FLOAT vs AI Gaslighting",
    x: 0.3,
    y: 0.2,
    slug: "float-vs-ai-gaslighting",
    tags: ["float", "ai-gaslighting"],
  },
  {
    id: 2,
    title: "Resistance to Premature Coherence",
    x: 0.7,
    y: 0.3,
    slug: "resistance-to-premature-coherence",
    tags: ["float", "premature-coherence-resistance"],
  },
  { id: 3, title: "Oracle Crosstalk", x: 0.5, y: 0.6, slug: "oracle-crosstalk", tags: ["float", "oracle-crosstalk"] },
  {
    id: 4,
    title: "Neurodivergent Note-Taking",
    x: 0.2,
    y: 0.7,
    slug: "neurodivergent-note-taking",
    tags: ["float", "neurodivergent"],
  },
  { id: 5, title: "FLOAT THEORY", x: 0.8, y: 0.8, slug: "float-theory", tags: ["float", "theory"] },
]

const edges = [
  { source: 1, target: 2 },
  { source: 1, target: 3 },
  { source: 2, target: 3 },
  { source: 2, target: 4 },
  { source: 3, target: 5 },
  { source: 4, target: 5 },
]

export default function RotfieldPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById("canvas-container")
      if (container) {
        setDimensions({
          width: container.clientWidth,
          height: Math.max(600, window.innerHeight * 0.7),
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Draw the canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height)

    // Set canvas size
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Draw edges
    ctx.strokeStyle = "rgba(139, 0, 255, 0.3)"
    ctx.lineWidth = 1

    edges.forEach((edge) => {
      const source = nodes.find((n) => n.id === edge.source)
      const target = nodes.find((n) => n.id === edge.target)

      if (source && target) {
        const sourceX = source.x * dimensions.width
        const sourceY = source.y * dimensions.height
        const targetX = target.x * dimensions.width
        const targetY = target.y * dimensions.height

        // Skip if either node is filtered out
        if (activeFilter && !source.tags.includes(activeFilter) && !target.tags.includes(activeFilter)) {
          return
        }

        ctx.beginPath()
        ctx.moveTo(sourceX, sourceY)

        // Create a slightly curved line
        const midX = (sourceX + targetX) / 2
        const midY = (sourceY + targetY) / 2 + 20 * Math.random() - 10

        ctx.quadraticCurveTo(midX, midY, targetX, targetY)
        ctx.stroke()

        // Draw dashed line overlay for glitchy effect
        ctx.save()
        ctx.strokeStyle = "rgba(0, 255, 159, 0.2)"
        ctx.setLineDash([5, 10])
        ctx.beginPath()
        ctx.moveTo(sourceX, sourceY)
        ctx.quadraticCurveTo(midX, midY, targetX, targetY)
        ctx.stroke()
        ctx.restore()
      }
    })

    // Draw nodes
    nodes.forEach((node) => {
      const x = node.x * dimensions.width
      const y = node.y * dimensions.height

      // Skip if node is filtered out
      if (activeFilter && !node.tags.includes(activeFilter)) {
        return
      }

      // Node circle
      ctx.beginPath()
      const radius = node.id === hoveredNode ? 15 : 10
      ctx.arc(x, y, radius, 0, Math.PI * 2)

      // Fill with gradient
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)

      if (node.id === hoveredNode) {
        gradient.addColorStop(0, "rgba(0, 255, 159, 0.8)")
        gradient.addColorStop(1, "rgba(0, 255, 159, 0.2)")
      } else {
        gradient.addColorStop(0, "rgba(0, 255, 159, 0.6)")
        gradient.addColorStop(1, "rgba(0, 255, 159, 0.1)")
      }

      ctx.fillStyle = gradient
      ctx.fill()

      // Pulsing animation for nodes
      if (node.id === hoveredNode) {
        ctx.beginPath()
        ctx.arc(x, y, radius + 5 + Math.sin(Date.now() / 200) * 3, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(0, 255, 159, 0.3)"
        ctx.stroke()
      }
    })
  }, [dimensions, hoveredNode, activeFilter])

  // Handle mouse interactions
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Check if mouse is over any node
    let hovered = null
    for (const node of nodes) {
      // Skip if node is filtered out
      if (activeFilter && !node.tags.includes(activeFilter)) {
        continue
      }

      const nodeX = node.x * dimensions.width
      const nodeY = node.y * dimensions.height
      const distance = Math.sqrt(Math.pow(x - nodeX, 2) + Math.pow(y - nodeY, 2))

      if (distance < 15) {
        hovered = node.id
        break
      }
    }

    setHoveredNode(hovered)
    canvas.style.cursor = hovered !== null ? "pointer" : "default"
  }

  const handleClick = () => {
    if (hoveredNode !== null) {
      const node = nodes.find((n) => n.id === hoveredNode)
      if (node) {
        window.location.href = `/imprints/${node.slug}`
      }
    }
  }

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-[#00ff9f] hover:text-[#00ff9f]/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Imprints
        </Link>

        <h1 className="text-3xl font-bold text-[#00ff9f] mb-6">Rotfield Visualization</h1>

        <div className="mb-6 flex flex-wrap gap-2">
          <Button
            variant="outline"
            className={`bg-black/50 border-[#00ff9f]/50 text-[#00ff9f] hover:bg-[#00ff9f]/20 ${activeFilter === null ? "bg-[#00ff9f]/20" : ""}`}
            onClick={() => setActiveFilter(null)}
          >
            All
          </Button>
          {["float", "ai-gaslighting", "premature-coherence-resistance", "oracle-crosstalk", "neurodivergent"].map(
            (tag) => (
              <Button
                key={tag}
                variant="outline"
                className={`bg-black/50 border-[#8b00ff]/50 text-[#8b00ff] hover:bg-[#8b00ff]/20 ${activeFilter === tag ? "bg-[#8b00ff]/20" : ""}`}
                onClick={() => setActiveFilter(tag)}
              >
                #{tag}
              </Button>
            ),
          )}
        </div>

        <div className="bg-black/40 border border-[#00ff9f]/30 rounded-lg p-4 backdrop-blur-sm" id="canvas-container">
          <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            className="w-full"
            aria-label="Rotfield visualization - an interactive network of connected concepts"
          />

          {hoveredNode !== null && (
            <div className="absolute bg-black/80 border border-[#00ff9f]/50 rounded px-3 py-2 text-sm font-mono text-[#00ff9f]">
              {nodes.find((n) => n.id === hoveredNode)?.title}
            </div>
          )}
        </div>

        <div className="mt-6 text-sm text-[#f5f5f5]/70">
          <p>
            The Rotfield visualization represents the compost epistemology of FLOAT, showing how concepts ferment and
            connect over time. Hover over nodes to see imprint titles, and click to navigate to the full content.
          </p>
        </div>
      </div>
    </main>
  )
}
