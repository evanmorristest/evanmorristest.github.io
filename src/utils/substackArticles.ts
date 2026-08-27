import { XMLParser } from "fast-xml-parser";
import { blogContent } from "@data/site";
import type { Article } from "@utils/articleTypes";

type RssText = string | number | { "#text"?: string | number };

interface RssMedia {
  "@_url"?: string;
  "@_type"?: string;
}

interface RssItem {
  title?: RssText;
  link?: RssText;
  description?: RssText;
  "content:encoded"?: RssText;
  pubDate?: RssText;
  category?: RssText | RssText[];
  enclosure?: RssMedia | RssMedia[];
  "media:content"?: RssMedia | RssMedia[];
  "media:thumbnail"?: RssMedia | RssMedia[];
}

interface RssDocument {
  rss?: {
    channel?: {
      item?: RssItem | RssItem[];
    };
  };
}

const parser = new XMLParser({
  ignoreAttributes: false,
  trimValues: true
});

const asText = (value: RssText | undefined): string => {
  if (typeof value === "string" || typeof value === "number") {
    return String(value).trim();
  }

  return value?.["#text"] === undefined ? "" : String(value["#text"]).trim();
};

const decodeCodePoint = (entity: string, code: string, radix: number) => {
  const value = Number.parseInt(code, radix);
  return Number.isInteger(value) && value >= 0 && value <= 0x10ffff
    ? String.fromCodePoint(value)
    : entity;
};

const decodeHtmlEntities = (value: string) =>
  value
    .replace(/&#(\d+);/g, (entity, code: string) => decodeCodePoint(entity, code, 10))
    .replace(/&#x([\da-f]+);/gi, (entity, code: string) => decodeCodePoint(entity, code, 16))
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&(apos|#39);/gi, "'");

const toPlainText = (html: string) =>
  decodeHtmlEntities(
    html
      .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<br\s*\/?\s*>|<\/p>|<\/div>|<\/li>/gi, " ")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();

const truncate = (value: string, maximumLength = 240) => {
  if (value.length <= maximumLength) return value;

  const shortened = value.slice(0, maximumLength + 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 160 ? lastSpace : maximumLength).trim()}…`;
};

const validHttpUrl = (value: string): string | undefined => {
  try {
    const url = new URL(decodeHtmlEntities(value));
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : undefined;
  } catch {
    return undefined;
  }
};

const asArray = <T>(value: T | T[] | undefined): T[] => {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
};

const imageFromMedia = (media: RssMedia | RssMedia[] | undefined) =>
  asArray(media)
    .filter((entry) => !entry?.["@_type"] || entry["@_type"].startsWith("image/"))
    .map((entry) => validHttpUrl(entry?.["@_url"] ?? ""))
    .find(Boolean);

const imageFromHtml = (html: string) => {
  const match = html.match(/<img\b[^>]*\bsrc=["']([^"']+)["']/i);
  return match ? validHttpUrl(match[1]) : undefined;
};

const categoriesFromItem = (category: RssItem["category"]) =>
  asArray(category)
    .map(asText)
    .filter(Boolean)
    .slice(0, 4);

const toArticle = (item: RssItem, index: number): Article | undefined => {
  const title = asText(item.title);
  const url = validHttpUrl(asText(item.link));
  const publishedAt = asText(item.pubDate);

  if (!title || !url || Number.isNaN(Date.parse(publishedAt))) {
    console.warn(`[articles] Skipping malformed Substack RSS item ${index + 1}.`);
    return undefined;
  }

  const descriptionHtml = asText(item.description) || asText(item["content:encoded"]);
  const contentHtml = asText(item["content:encoded"]);
  const description = truncate(toPlainText(descriptionHtml));
  const image =
    imageFromMedia(item.enclosure) ??
    imageFromMedia(item["media:content"]) ??
    imageFromMedia(item["media:thumbnail"]) ??
    imageFromHtml(descriptionHtml) ??
    imageFromHtml(contentHtml);

  return {
    title,
    url,
    description: description || undefined,
    publishedAt: new Date(publishedAt).toISOString(),
    image,
    source: "substack",
    sourceName: "Substack",
    tags: categoriesFromItem(item.category)
  };
};

export const parseSubstackFeed = (xml: string): Article[] => {
  const document = parser.parse(xml) as RssDocument;
  const channel = document.rss?.channel;

  if (!channel) {
    throw new Error("Substack feed did not return a valid RSS channel.");
  }

  return asArray(channel.item).flatMap((item, index) => {
    try {
      const article = toArticle(item, index);
      return article ? [article] : [];
    } catch (error) {
      console.warn(`[articles] Skipping malformed Substack RSS item ${index + 1}.`, error);
      return [];
    }
  });
};

export const fetchSubstackArticles = async (): Promise<Article[]> => {
  const response = await fetch(blogContent.substackFeedUrl, {
    headers: {
      Accept: "application/rss+xml, application/xml;q=0.9, text/xml;q=0.8",
      "User-Agent": blogContent.apiUserAgent
    }
  });

  if (!response.ok) {
    throw new Error(`Substack RSS responded with ${response.status}`);
  }

  return parseSubstackFeed(await response.text());
};
