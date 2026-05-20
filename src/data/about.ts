export const about = {
  hero: {
    eyebrow: "About Me",
    title: "Building reliable software with purpose and impact.",
    description:
      "I’m a software engineer who enjoys turning complex problems into simple, elegant solutions. I care about clean code, thoughtful design and creating systems that people can rely on every day.",
    stats: [
      { label: "Experience", value: "3+ Years", icon: "Briefcase" },
      { label: "Based In", value: "Australia", icon: "MapPin" },
      { label: "Open To", value: "Opportunities", icon: "Globe2" }
    ],
    image: "/images/about-hero.svg",
    imageAlt: "Laptop on desk workspace"
  },

  philosophy: {
    title: "Engineering Philosophy",
    items: [
      {
        title: "Keep it Simple",
        description: "I believe simple solutions are easier to build, maintain and scale.",
        icon: "Cube"
      },
      {
        title: "Build for Reliability",
        description: "I design systems that are dependable, well-tested and resilient in production.",
        icon: "ShieldCheck"
      },
      {
        title: "Optimize for Impact",
        description: "I focus on building things that create real value for users and teams.",
        icon: "Sparkles"
      }
    ]
  },

  timeline: {
    title: "Career Journey",
    items: [
      {
        title: "Senior Software Engineer",
        timeline: "2024 - Present",
        company: "TechNova Solutions",
        description: "Leading a team of engineers building scalable web platforms and automation solutions."
      },
      {
        title: "Software Engineer",
        timeline: "2022 - 2024",
        company: "CodeWorks Labs",
        description: "Built full-stack applications and automated testing frameworks used by thousands of users."
      },
      {
        title: "Junior Developer",
        timeline: "2021 - 2022",
        company: "WebCraft Studio",
        description: "Developed REST APIs and internal tools, improving team productivity and workflows."
      }
    ]
  },

  education: {
    title: "Education",
    items: [
      {
        title: "B.Sc. in Computer Science",
        timeline: "2017 - 2021",
        institution: "University of Technology",
        description: "Focused on software engineering, data structures, algorithms and distributed systems."
      },
      {
        title: "High School Diploma",
        timeline: "2015 - 2017",
        institution: "Central High School",
        description: "Graduated with honors."
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

  cta: {
    title: "Let’s build something great together.",
    description: "I’m always open to discussing new opportunities and exciting ideas.",
    actions: [
      { label: "Get In Touch", href: "/contact/", variant: "primary" },
      { label: "View GitHub", href: "https://github.com/evanmorristest", variant: "secondary" },
      { label: "Download Résumé", href: "/resume/resume.pdf", variant: "secondary", download: true }
    ]
  }
};

export default about;
