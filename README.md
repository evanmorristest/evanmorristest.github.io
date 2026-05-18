# evanmorristest.github.io

A modern, minimalist personal portfolio website built with Astro and Tailwind CSS, designed for deployment on GitHub Pages.

This project focuses on clean typography, strong content presentation, responsive layouts, and fast static-site performance using a monochrome design system.

---

# Overview

This portfolio site is designed to showcase:

- Featured projects
- Technical skills
- Work experience
- Blog posts
- Personal background
- Contact information

The architecture prioritizes:

- performance
- accessibility
- maintainability
- responsive design
- content-first structure

The overall visual style is intentionally minimal:

- black / white / grey palette
- subtle shadows and borders
- spacious layouts
- image-focused project cards
- lightweight animations
- strong typography

---

# Tech Stack

| Technology | Purpose |
|---|---|
| Astro | Static site framework |
| Tailwind CSS | Utility-first styling |
| TypeScript | Type safety |
| Markdown Content Collections | Blog + project content |
| GitHub Pages | Hosting |
| GitHub Actions | Automated deployment |

---

# Features

## Core Features

- Fully static portfolio website
- Responsive design for desktop, tablet, and mobile
- Markdown-powered blog system
- Markdown-powered project pages
- Content collections for scalable content management
- SEO-friendly architecture
- GitHub Pages deployment pipeline
- Optimized asset organization
- Minimalist monochrome design system

## Planned Sections

- Homepage
- About page
- Projects archive
- Individual project pages
- Blog archive
- Individual blog posts
- Contact page

---

# Design Principles

The website is designed around several core principles:

- clean spacing
- readability-first typography
- minimal UI noise
- subtle interactions
- reusable components
- accessibility-first implementation
- performant frontend architecture

## Visual Style

- Monochrome color palette
- Soft rounded corners
- Subtle shadows
- Spacious layouts
- Minimal animations
- High contrast readability

---

# Project Structure

```text
portfolio-site/
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── resume/
│   └── favicon/
│
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── data/
│   └── utils/
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

# Website Routes

## Homepage

Route:

```text
/
```

Contains:

- Hero section
- CTA buttons
- Featured projects
- Skills overview
- Experience section
- Footer / contact section

Main file:

```text
src/pages/index.astro
```

---

# About Page

Route:

```text
/about
```

Contains:

- Personal background
- Engineering philosophy
- Technology stack
- Interests
- Optional timeline

Main file:

```text
src/pages/about.astro
```

---

# Projects Section

## Projects Overview

Route:

```text
/projects
```

Contains:

- All projects
- Filtering / tagging
- Project cards
- Project summaries

Main file:

```text
src/pages/projects/index.astro
```

---

## Individual Project Pages

Routes:

```text
/projects/[project-name]
```

Project content is stored in:

```text
src/content/projects/
```

Example:

```text
src/content/projects/automation-dashboard.md
```

Each project markdown file may contain:

- title
- summary
- stack
- screenshots
- architecture notes
- challenges
- lessons learned

---

# Blog Section

## Blog Overview

Route:

```text
/blog
```

Contains:

- All blog posts
- Sorting
- Tags
- Post archive

Main file:

```text
src/pages/blog/index.astro
```

---

## Individual Blog Posts

Stored in:

```text
src/content/blog/
```

Example:

```text
src/content/blog/github-pages-deployment.md
```

Markdown frontmatter includes:

```yaml
title:
description:
date:
tags:
coverImage:
```

---

# Contact Page

Route:

```text
/contact
```

Contains:

- Email
- LinkedIn
- GitHub
- Résumé download
- Optional contact form

Main file:

```text
src/pages/contact.astro
```

---

# Styling & Design System

## Color Palette

```css
--background: #ffffff;
--foreground: #0a0a0a;
--muted: #6b7280;
--border: #e5e7eb;
--card: #fafafa;
```

Minimal monochrome palette with strong contrast and subtle UI separation.

---

# Typography

## Primary Font

### Inter

Used throughout the site for clean readability and modern presentation.

---

# Icons

## Main Icon Libraries

### Lucide Icons

Used for:

- navigation
- buttons
- social links
- UI controls

### Simple Icons

Used for:

- technology icons
- operating systems
- tooling logos

---

# Responsive Design

## Desktop

- 3-column project layouts
- Horizontal hero layout

## Tablet

- 2-column project layouts
- Stacked hero layout

## Mobile

- Single-column layout
- Compressed spacing
- Collapsible navigation

---

# Performance Goals

The project prioritizes:

- Static generation
- Optimized images
- Minimal JavaScript
- Lazy-loaded assets
- Semantic HTML
- Accessibility compliance
- Fast load times

---

# Development Guidelines

This repository follows several development standards:

- Semantic HTML structure
- WCAG 2.1 accessibility considerations
- Modular component architecture
- Reusable styling patterns
- Small, maintainable functions
- ES6+ JavaScript / TypeScript standards
- Organized asset management
- Responsive-first implementation

Contributors and agents should reference:

- `design.md` for design specifications
- `homepage-design.png` for layout accuracy

---

# Deployment

Deployment is handled using GitHub Actions and hosted on GitHub Pages.

Workflow file:

```text
.github/workflows/deploy.yml
```

Astro deployment guide:

```text
https://docs.astro.build/en/guides/deploy/github/
```

---

# Planned Roadmap

## Phase 1

- Astro setup
- Tailwind setup
- GitHub Pages deployment
- Base layouts

## Phase 2

- Hero section
- Navigation
- Footer

## Phase 3

- Featured projects
- Skills section
- Experience timeline

## Phase 4

- About page
- Projects system
- Blog system

## Phase 5

- Animations
- SEO optimization
- Accessibility pass
- Performance optimization

---

# Future Enhancements

Potential future additions include:

- Dark mode
- Project filtering
- Blog tagging
- Search
- Analytics
- CMS integration
- Command palette
- Multilingual support
- Advanced animations

---

# Final Goal

The portfolio should feel:

- modern
- minimal
- professional
- highly readable
- performant
- timeless

The primary focus is presenting technical work with:

- clarity
- strong typography
- clean layouts
- polished user experience
- content-first design