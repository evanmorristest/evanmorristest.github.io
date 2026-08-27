import { socialLinks } from "./socialLinks";

const displayUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export const siteMeta = {
  title: "Software Engineer Portfolio",
  description: "Software engineering portfolio focused on projects, skills, experience, and writing.",
  homeTitle: "Evan Morris | Software Engineer",
  homeDescription: "Software engineering portfolio featuring projects, skills, experience, writing, and contact information.",
  copyright: "2026 Evan Morris Portfolio. All rights reserved."
};

export const navigationContent = {
  brandLabel: "EM",
  homeAriaLabel: "Portfolio home",
  primaryAriaLabel: "Primary navigation",
  mobileAriaLabel: "Mobile navigation",
  openMenuLabel: "Open navigation",
  closeMenuLabel: "Close navigation"
};

export const heroContent = {
  eyebrow: "Hello, I'm",
  name: "Evan Morris",
  role: "Software Engineer & Automation Tester",
  summary:
    "I have years of experience owning end-to-end quality in software development. I build automation frameworks, testing tools, and drive quality in engineering teams.",
  visualLabel: "Monochrome development workspace illustration",
  codeSnippet: `const portfolio = {
  role: "Software Engineer",
  focus: ["Quality", "Automation", "Product"],
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
  heading: "Let's connect.",
  description: "I'm always open to new ideas and interesting engineering problems.",
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
    emptyTitle: "GitHub projects could not be loaded.",
    emptyDescription:
      "The GitHub API request failed during page generation. The section will populate again on the next successful build.",
    liveDemoLabel: "Live Demo",
    githubLabel: "GitHub",
    updatedLabel: "Updated"
  },
  projectsIndex: {
    emptyTitle: "No public GitHub repositories found.",
    emptyDescription:
      "Public repositories from GitHub will appear here automatically once they are available."
  },
  skills: {
    title: "Skills",
    description: "Technologies and tools I work with"
  },
  experience: {
    title: "Experience",
    workTitle: "Work Experience",
    educationTitle: "Education",
    certificationsTitle: "Certifications",
    credentialLabel: "View credential"
  }
};

export const pageContent = {
  about: {
    metaTitle: "About | Software Engineer Portfolio",
    eyebrow: "About",
    title: "A software engineer focused on reliable systems and thoughtful product delivery.",
    description:
      "A flexible biography page for background, engineering values, technologies, interests, and timeline milestones."
  },
  projects: {
    metaTitle: "Projects | Software Engineer Portfolio",
    eyebrow: "Projects",
    title: "Personal projects, useful tools and interesting ideas.",
    description:
      "The repositories that are public on my GitHub profile will appear here."
  },
  blog: {
    metaTitle: "Blog | Software Engineer Portfolio",
    eyebrow: "Blog",
    title: "Notes on software engineering.",
    description:
      "Latest writing pulled from my DEV.to and Substack publications. Consider liking or commenting on articles that you find interesting!"
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
  enableDevTo: false,
  enableSubstack: true,
  devUsername: "evanmorris",
  substackFeedUrl: "https://evanm11.substack.com/feed",
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
  emptyDescription: "Publish articles under the DEV account and they will appear here automatically.",
  errorDescription: "The DEV API request failed during page generation. The route is still available and will populate on the next successful build.",
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

export const aboutContent = {
  biography: {
    title: "Personal Background",
    paragraphs: [
      "I am a software engineer who enjoys building useful, maintainable products and the systems that keep them reliable. My work spans frontend interfaces, backend integrations, test automation, CI/CD, and developer tooling.",
      "This page is structured so the final biography can grow naturally over time. Each section can be shortened, expanded, or removed without changing the page layout."
    ],
    highlights: [
      { label: "Focus", value: "Product engineering, automation, and platform quality" },
      { label: "Strength", value: "Turning ambiguous problems into dependable software" },
      { label: "Working style", value: "Clear communication, pragmatic delivery, and steady iteration" }
    ]
  },
  philosophy: {
    title: "Engineering Philosophy",
    items: [
      {
        title: "Build for maintainability",
        description:
          "Prefer simple systems, clear boundaries, and code that future engineers can understand quickly."
      },
      {
        title: "Automate the repeatable",
        description:
          "Use tests, pipelines, and tooling to make quality part of the workflow rather than a final checkpoint."
      },
      {
        title: "Design around users",
        description:
          "Make technical decisions that support real workflows, readable interfaces, and resilient experiences."
      }
    ]
  },
  technologies: {
    title: "Technologies",
    groups: [
      {
        label: "Languages",
        items: ["TypeScript", "C#", "Python"]
      },
      {
        label: "Frontend",
        items: ["Astro", "React", "Tailwind CSS"]
      },
      {
        label: "Quality",
        items: ["Playwright", "Selenium", "WDIO", "BrowserStack"]
      },
      {
        label: "Delivery",
        items: ["GitHub Actions", "Docker", "Cloud platforms"]
      }
    ]
  },
  interests: {
    title: "Interests",
    items: [
      "Developer experience",
      "Automation strategy",
      "Accessible interfaces",
      "AI-assisted engineering",
      "Performance tuning",
      "Technical writing"
    ]
  },
  timeline: {
    title: "Timeline",
    items: [
      {
        title: "Senior Software Engineer",
        timeline: "2024 - Present",
        description:
          "Leading product engineering initiatives, automation improvements, and delivery workflows."
      },
      {
        title: "Software Engineer",
        timeline: "2022 - 2023",
        description:
          "Built full-stack features, strengthened testing practices, and worked across product teams."
      },
      {
        title: "Early Engineering Work",
        timeline: "2021 - 2022",
        description:
          "Developed responsive web applications, integrated APIs, and improved frontend reliability."
      }
    ]
  }
};
