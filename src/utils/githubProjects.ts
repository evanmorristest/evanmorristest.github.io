import { githubProjectsConfig } from "@data/projects";

interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  fork: boolean;
  archived: boolean;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  updated_at: string;
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  imageLabel: string;
  githubUrl: string;
  demoUrl?: string;
  stars: number;
  forks: number;
  updatedAt: string;
}

const formatTitle = (name: string) =>
  name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const hasHomepage = (homepage: string | null) => Boolean(homepage?.trim());
let projectCache: Promise<Project[]> | undefined;

const toProject = (repo: GitHubRepository): Project => {
  const tags = [
    repo.language,
    ...(repo.topics ?? [])
  ].filter(Boolean) as string[];

  return {
    id: repo.id,
    title: formatTitle(repo.name),
    summary: repo.description ?? githubProjectsConfig.fallbackDescription,
    tags: tags.length > 0 ? tags.slice(0, 4) : [githubProjectsConfig.fallbackLanguage],
    imageLabel: repo.language ?? githubProjectsConfig.fallbackLanguage,
    githubUrl: repo.html_url,
    demoUrl: hasHomepage(repo.homepage) ? repo.homepage?.trim() : undefined,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.pushed_at ?? repo.updated_at
  };
};

const fetchGitHubProjects = async () => {
  const params = new URLSearchParams({
    sort: githubProjectsConfig.sort,
    direction: githubProjectsConfig.direction,
    per_page: String(githubProjectsConfig.perPage)
  });
  const githubToken = import.meta.env.GITHUB_TOKEN as string | undefined;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };

  if (githubToken) {
    headers.Authorization = `Bearer ${githubToken}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${githubProjectsConfig.username}/repos?${params}`,
    { headers }
  );

  if (!response.ok) {
    throw new Error(`GitHub API responded with ${response.status}`);
  }

  const repositories = (await response.json()) as GitHubRepository[];

  return repositories
    .filter((repo) => githubProjectsConfig.includeForks || !repo.fork)
    .filter((repo) => githubProjectsConfig.includeArchived || !repo.archived)
    .map(toProject);
};

export const getGitHubProjects = async () => {
  projectCache ??= fetchGitHubProjects();

  return projectCache;
};

export const getFeaturedGitHubProjects = async () => {
  const projects = await getGitHubProjects();

  return projects.slice(0, githubProjectsConfig.featuredLimit);
};
