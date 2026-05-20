export const projectsPageData = {
  hero: {
    eyebrow: "Projects",
    title: "Projects, experiments and tools I’ve built.",
    description: "A collection of public repositories, ideas and engineering experiments — from useful utilities to personal projects.",
    filters: ["All", "C#", "Web", "Tools", "Automation", "Open Source"],
    sortOptions: [
      { value: "recent", label: "Recently updated" },
      { value: "stars", label: "Most stars" },
      { value: "alpha", label: "A - Z" }
    ],
    heroImage: "/images/projects-hero.svg",
    heroImageAlt: "Projects workspace illustration"
  },
  cta: {
    title: "Interested in working together?",
    description: "I’m always open to discussing new opportunities and exciting ideas.",
    actions: [
      { label: "Get In Touch", href: "/contact/", variant: "primary" },
    ]
  }
};
