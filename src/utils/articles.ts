import { fetchDevToArticles } from "@utils/devToArticles";
import { fetchSubstackArticles } from "@utils/substackArticles";
import type { Article, ArticleSource } from "@utils/articleTypes";
import { blogContent } from "@data/site";

export type { Article, ArticleSource } from "@utils/articleTypes";

export interface ArticleCollection {
  articles: Article[];
  enabledSources: ArticleSource[];
  failedSources: ArticleSource[];
}

interface ArticleSourceConfig {
  id: ArticleSource;
  name: string;
  enabled: boolean;
  load: () => Promise<Article[]>;
}

const sources: ArticleSourceConfig[] = [
  { id: "devto", name: "DEV.to", enabled: blogContent.enableDevTo, load: fetchDevToArticles },
  { id: "substack", name: "Substack", enabled: blogContent.enableSubstack, load: fetchSubstackArticles }
];

let articleCache: Promise<ArticleCollection> | undefined;

const loadArticles = async (): Promise<ArticleCollection> => {
  const enabledSourceConfigs = sources.filter((source) => source.enabled);
  const enabledSources = enabledSourceConfigs.map((source) => source.id);
  const results = await Promise.allSettled(enabledSourceConfigs.map((source) => source.load()));
  const articles: Article[] = [];
  const failedSources: ArticleSource[] = [];

  results.forEach((result, index) => {
    const source = enabledSourceConfigs[index];

    if (result.status === "fulfilled") {
      articles.push(...result.value);
      return;
    }

    failedSources.push(source.id);
    console.warn(
      `[articles] Unable to load ${source.name} articles; continuing with available sources.`,
      result.reason
    );
  });

  articles.sort((first, second) => Date.parse(second.publishedAt) - Date.parse(first.publishedAt));

  return { articles, enabledSources, failedSources };
};

export const getArticles = () => {
  articleCache ??= loadArticles();
  return articleCache;
};
