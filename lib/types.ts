export interface Imprint {
  slug: string
  title: string
  description: string
  color: string
  latestIssue: string
  tags: string[]
  issues: Issue[]
}

export interface Issue {
  slug: string
  title: string
  date: string
  description: string
  articles: ArticleMeta[]
}

export interface ArticleMeta {
  slug: string
  title: string
  excerpt: string
}

export interface Article {
  title: string
  keywords: string
  metadata: {
    size: string
    date: string
    author: string
  }
  tags: string[]
  content: string
  relatedArticles: RelatedArticle[]
}

export interface RelatedArticle {
  imprint: string
  issue: string
  slug: string
}

export interface FlattenedArticle extends Article {
  imprintSlug: string
  issueSlug: string
  articleSlug: string
}

export interface RotfieldNode {
  id: number
  title: string
  x: number
  y: number
  slug: string
  tags: string[]
}

export interface RotfieldEdge {
  source: number
  target: number
}
