import { blogContent } from "@data/site";
import type { Article } from "@utils/articleTypes";

interface DevArticle {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  social_image: string | null;
  published_timestamp: string;
  tag_list: string[];
  url: string;
  comments_count: number;
  public_reactions_count: number;
  reading_time_minutes: number;
}

const DEV_ARTICLES_URL = `https://dev.to/api/articles?username=${blogContent.devUsername}&per_page=${blogContent.articlesPerPage}`;

const toArticle = (article: DevArticle): Article | undefined => {
  if (!article.title || !article.url || Number.isNaN(Date.parse(article.published_timestamp))) {
    console.warn(`[articles] Skipping malformed DEV.to article ${article.id ?? "with unknown ID"}.`);
    return undefined;
  }

  return {
    title: article.title,
    url: article.url,
    description: article.description || undefined,
    publishedAt: article.published_timestamp,
    image: article.cover_image ?? article.social_image ?? undefined,
    source: "devto",
    sourceName: "DEV.to",
    tags: article.tag_list ?? [],
    readingTimeMinutes: article.reading_time_minutes,
    reactionsCount: article.public_reactions_count,
    commentsCount: article.comments_count
  };
};

export const fetchDevToArticles = async (): Promise<Article[]> => {
  const response = await fetch(DEV_ARTICLES_URL, {
    headers: {
      "User-Agent": blogContent.apiUserAgent
    }
  });

  if (!response.ok) {
    throw new Error(`DEV API responded with ${response.status}`);
  }

  const payload = (await response.json()) as unknown;

  if (!Array.isArray(payload)) {
    throw new Error("DEV API returned an unexpected response.");
  }

  return (payload as DevArticle[])
    .map(toArticle)
    .filter((article): article is Article => Boolean(article));
};
