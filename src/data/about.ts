import { sharedCta } from "./cta";

export const about = {
  hero: {
    eyebrow: "About Me",
    title: "Focused on delivering high-quality software that makes a difference.",
    description:
      "I build automation frameworks, testing tools, and test software that helps teams ship reliable software faster. My focus is developing solutions that drive quality, improve stability and help deliver with confidence.",
    stats: [
      { label: "Experience", value: "7+ Years", icon: "Briefcase" },
      { label: "Based In", value: "UK", icon: "MapPin" },
    ],
    image: "/images/about-hero.svg",
    imageAlt: "Laptop on desk workspace"
  },

  philosophy: {
    title: "Engineering Philosophy",
    items: [
      {
        title: "Shift Left",
        description: "Testing should happen from the start of the development cycle.",
        icon: "ArrowLeft"
      },
      {
        title: "Prevention Over Detection",
        description: "A bug found in production is expensive. A bug found in a pull request is cheaper. But a bug prevented during the requirements phase costs nothing.",
        icon: "ShieldCheck"
      },
      {
        title: "Quality is a Team Responsibility",
        description: "Build a culture where developers, product managers, testers and stakeholders all own quality.",
        icon: "Users"
      }
    ]
  },

  timeline: {
    title: "Career Journey",
    items: [
      {
        title: "Senior Software QA Engineer",
        timeline: "2026 - Present",
        company: "Dayinsure",
        description: "."
      },
      {
        title: "Software Automation Engineer",
        timeline: "2023 - 2025",
        company: "ControlUp",
        description: "."
      },
      {
        title: "Software QA Engineer",
        timeline: "2019 - 2023",
        company: "Avanite",
        description: "."
      }
    ]
  },

  education: {
    title: "Education",
    items: [
      {
        title: "BSc Biology",
        timeline: "2016 - 2019",
        institution: "Edge Hill University",
      }
    ]
  },

  technologies: {
    title: "Tech Stack & Toolkit",
    groups: [
      {
        label: "Languages",
        icon: "Code2",
        items: ["C#", "TypeScript", "Python"]
      },
      {
        label: "Automation",
        icon: "Server",
        items: ["WDIO", "Selenium", "Playwright", "Karate"]
      },
      {
        label: "Infrastructure",
        icon: "Cloud",
        items: ["Linux", "macOS", "CI/CD", "DevOps"]
      },
      {
        label: "AI Workflow",
        icon: "Sparkles",
        items: ["Cursor", "Codex", "Claude"]
      },
      {
        label: "Tools",
        icon: "Settings",
        items: ["Git", "Docker", "VS Code", "Postman"]
      }
    ]
  },

  interests: {
    title: "What I’m Interested In",
    items: [
      { label: "Developer Experience", icon: "Monitor" },
      { label: "Automation & Testing", icon: "Wrench" },
      { label: "AI-assisted Development", icon: "Sparkles" },
      { label: "Scalable Systems", icon: "Layers" },
      { label: "Open Source Contributions", icon: "Code2" }
    ]
  },

  cta: sharedCta
};

export default about;
