import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"
import { SigilToss } from "@/components/sigil-toss"
import { SigilNecro } from "@/components/sigil-necro"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override the default components
    h1: ({ children }) => <h1 className="text-3xl font-bold text-[#00ff9f] mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-[#00ff9f] mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold text-[#00ff9f] mt-6 mb-3">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="text-[#8b00ff] hover:text-[#00ff9f] transition-colors underline underline-offset-2"
      >
        {children}
      </Link>
    ),
    strong: ({ children }) => <strong className="font-bold text-[#00ff9f]">{children}</strong>,
    img: ({ src, alt, ...props }) => (
      <Image
        src={src || "/placeholder.svg"}
        alt={alt || ""}
        width={800}
        height={400}
        className="rounded-md my-6"
        {...props}
      />
    ),
    ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#00ff9f] pl-4 italic my-4 text-[#f5f5f5]/80">{children}</blockquote>
    ),
    code: ({ children }) => (
      <code className="font-mono bg-black/50 px-1.5 py-0.5 rounded text-[#00ff9f] text-sm">{children}</code>
    ),
    // Custom components
    SigilToss,
    SigilNecro,
    ...components,
  }
}
