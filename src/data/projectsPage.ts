export const projectsPageData = {
  hero: {
    eyebrow: "Projects",
    title: "A collection of things I’ve built and continue to improve.",
    description:
      "Explore the repositories, tooling experiments, and open-source work that reflect my focus on reliability, automation, and developer experience.",
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
      { label: "Download Résumé", href: "/resume/resume.pdf", variant: "secondary", download: true }
    ]
  }
};
