export type ArticleSource = "devto" | "substack";

export interface Article {
  title: string;
  url: string;
  description?: string;
  publishedAt: string;
  image?: string;
  source: ArticleSource;
  sourceName: string;
  tags: string[];
  readingTimeMinutes?: number;
  reactionsCount?: number;
  commentsCount?: number;
}
