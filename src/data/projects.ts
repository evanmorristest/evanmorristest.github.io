import { socialLinks } from "./socialLinks";

const githubUsername = new URL(socialLinks.github).pathname.replace("/", "");

export const githubProjectsConfig = {
  username: githubUsername,
  perPage: 100,
  sort: "updated",
  direction: "desc",
  includeForks: false,
  includeArchived: false,
  featuredLimit: 3,
  fallbackDescription: "A public GitHub repository from my software engineering portfolio.",
  fallbackLanguage: "Repository"
};
