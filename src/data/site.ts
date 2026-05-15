import { socialLinks } from "./socialLinks";

const displayUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export const siteMeta = {
  title: "Software Engineer Portfolio",
  description:
    "A minimalist software engineering portfolio focused on projects, skills, experience, and writing.",
  homeTitle: "Robert Deckow | Software Engineer",
  homeDescription:
    "Software engineering portfolio featuring projects, skills, experience, writing, and contact information.",
  copyright: "2026 Software Engineer Portfolio. All rights reserved."
};

export const navigationContent = {
  brandLabel: "RD",
  homeAriaLabel: "Portfolio home",
  primaryAriaLabel: "Primary navigation",
  mobileAriaLabel: "Mobile navigation",
  openMenuLabel: "Open navigation",
  closeMenuLabel: "Close navigation"
};

export const heroContent = {
  eyebrow: "Hello, I'm",
  name: "Robert Deckow",
  role: "Software Engineer & Developer",
  summary:
    "I build reliable, scalable, and user-centric applications with a focus on clean code, performance, automation, and maintainable systems.",
  visualLabel: "Monochrome development workspace illustration",
  codeSnippet: `const portfolio = {
  role: "Software Engineer",
  focus: ["Product", "Automation", "AI"],
  status: "Available"
};`,
  actions: [
    {
      label: "View Projects",
      href: "/projects/",
      icon: "arrow-up-right",
      variant: "primary"
    },
    {
      label: "GitHub",
      href: socialLinks.github,
      icon: "github",
      variant: "secondary",
      external: true
    },
    {
      label: "CV",
      href: socialLinks.resume,
      icon: "download",
      variant: "secondary",
      download: true
    },
    {
      label: "Contact",
      href: "/contact/",
      icon: "mail",
      variant: "secondary"
    }
  ]
};

export const footerContent = {
  heading: "Let's build something great together.",
  description:
    "I'm always open to thoughtful products, useful tools, and interesting engineering problems.",
  backToTopLabel: "Back to top",
  links: [
    {
      label: "GitHub",
      displayText: displayUrl(socialLinks.github),
      href: socialLinks.github,
      icon: "github",
      external: true
    },
    {
      label: "LinkedIn",
      displayText: displayUrl(socialLinks.linkedin),
      href: socialLinks.linkedin,
      icon: "linkedin",
      external: true
    },
    {
      label: "CV",
      displayText: "Download PDF",
      href: socialLinks.resume,
      icon: "download",
      download: true
    }
  ]
};

export const sectionContent = {
  featuredProjects: {
    title: "Featured Projects",
    viewAllLabel: "View all projects",
    viewAllHref: "/projects/",
    liveDemoLabel: "Live Demo",
    githubLabel: "GitHub"
  },
  skills: {
    title: "Skills",
    description: "Technologies and tools I work with"
  },
  experience: {
    title: "Experience",
    workTitle: "Work Experience",
    educationTitle: "Education"
  }
};

export const pageContent = {
  about: {
    metaTitle: "About | Software Engineer Portfolio",
    eyebrow: "About",
    title: "Engineering useful software with calm, durable foundations.",
    description:
      "This page will hold the personal background, engineering philosophy, technologies, interests, and timeline. Placeholder content is ready to be replaced with the final biography."
  },
  projects: {
    metaTitle: "Projects | Software Engineer Portfolio",
    eyebrow: "Projects",
    title: "Selected work, systems, and technical case studies.",
    description:
      "The full projects index will support deeper project writeups, tags, screenshots, architecture notes, and source links. Generic project cards are shown for now."
  },
  blog: {
    metaTitle: "Blog | Software Engineer Portfolio",
    eyebrow: "Blog",
    title: "Notes on software engineering, automation, and building better tools.",
    description:
      "Latest writing pulled from DEV, keeping articles in one publishing workflow while presenting them inside this portfolio."
  },
  contact: {
    metaTitle: "Contact | Software Engineer Portfolio",
    eyebrow: "Contact",
    title: "Start a conversation about a project, role, or collaboration.",
    description:
      "Use the placeholder links below for now. These can be replaced with the final email, social profiles, and CV before launch."
  }
};

export const blogContent = {
  devUsername: "evanmorris",
  articlesPerPage: 9,
  apiUserAgent: "evanmorristest.github.io portfolio site",
  sectionTitle: "Latest Articles",
  sourceLabel: "Fetched from dev.to",
  viewProfileLabel: "View on DEV",
  readArticleLabel: "Read article",
  readingTimeSuffix: "min read",
  emptyTitle: "No DEV articles found yet.",
  errorTitle: "Articles could not be loaded.",
  errorLogMessage: "Unable to fetch DEV articles",
  emptyDescription:
    "Publish articles under the DEV account and they will appear here automatically.",
  errorDescription:
    "The DEV API request failed during page generation. The route is still available and will populate on the next successful build.",
  openProfileLabel: "Open DEV Profile"
};

export const contactContent = {
  links: [
    {
      label: "Email",
      href: `mailto:${socialLinks.email}`,
      text: `Email: ${socialLinks.email}`
    },
    {
      label: "GitHub",
      href: socialLinks.github,
      text: "GitHub",
      external: true
    },
    {
      label: "LinkedIn",
      href: socialLinks.linkedin,
      text: "LinkedIn",
      external: true
    },
    {
      label: "CV",
      href: socialLinks.resume,
      text: "CV PDF",
      download: true
    }
  ]
};
