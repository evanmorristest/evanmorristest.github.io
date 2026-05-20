import { socialLinks } from "./socialLinks";

export const contactData = {
  hero: {
    eyebrow: "Contact",
    title: "Let’s Connect",
    description:
      "I’m always open to discussing new opportunities, collaborations, or interesting projects.",
    image: "/images/contact-hero.svg",
    imageAlt: "Laptop on desk contact illustration"
  },

  cards: [
    {
      label: "GitHub",
      title: socialLinks.github,
      description: "View my repositories",
      href: socialLinks.github,
      icon: "Github",
      external: true
    },
    {
      label: "LinkedIn",
      title: socialLinks.linkedin,
      description: "Connect with me",
      href: socialLinks.linkedin,
      icon: "Linkedin",
      external: true
    },
    {
      label: "CV",
      title: "Download PDF",
      description: "Get a printable copy of my resume.",
      href: socialLinks.resume,
      icon: "FileText",
      download: true
    }
  ],

  form: {
    title: "Send a Message",
    description:
      "Have a question or proposal? Send me a message and I’ll get back to you as soon as possible.",
    fields: [
      { name: "name", label: "Your Name", type: "text", placeholder: "Your Name" },
      { name: "email", label: "Your Email", type: "email", placeholder: "Your Email" },
      { name: "subject", label: "Subject", type: "text", placeholder: "Subject" },
      { name: "message", label: "Your Message", type: "textarea", placeholder: "Your Message" }
    ],
    submitLabel: "Send Message"
  },

  interests: {
    title: "What I’m interested in",
    items: [
      {
        title: "Opportunities",
        description: "Full-time roles, part-time work, or freelance opportunities.",
        icon: "Briefcase"
      },
      {
        title: "Collaborations",
        description: "Working together on innovative products or open-source.",
        icon: "Users"
      },
      {
        title: "Consulting",
        description: "Helping teams build better software and automate testing processes.",
        icon: "Settings"
      },
      {
        title: "Speaking",
        description: "Tech talks, webinars, and workshop presentations.",
        icon: "Mic"
      }
    ]
  }
};

export default contactData;
