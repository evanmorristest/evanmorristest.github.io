# GitHub Portfolio Website Plan

# Personal Portfolio Website Plan

## Goal

Build a minimalist, monochrome personal portfolio website hosted on GitHub Pages using:

* Astro
* Tailwind CSS
* Markdown content collections
* Static assets
* Fully responsive design
* Minimal black/white/grey aesthetic

The design principles are:

* clean spacing
* strong typography
* subtle borders/shadows
* grayscale palette
* minimal animations
* image-focused project cards
* content-first structure

---

# Tech Stack

## Core Stack

| Technology     | Purpose                |
| -------------- | ---------------------- |
| Astro          | Static site framework  |
| Tailwind CSS   | Styling                |
| TypeScript     | Type safety            |
| Markdown       | Blog + project content |
| GitHub Pages   | Hosting                |
| GitHub Actions | Deployment             |

---

# Project Structure

Planned folder structure:

```text
portfolio-site/
│
├── public/
│   │
│   ├── images/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── blog/
│   │   ├── profile/
│   │   └── logos/
│   │
│   ├── icons/
│   │
│   ├── resume/
│   │   └── resume.pdf
│   │
│   └── favicon/
│
├── src/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── experience/
│   │   ├── blog/
│   │   ├── footer/
│   │   └── shared/
│   │
│   ├── content/
│   │   ├── blog/
│   │   └── projects/
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   └── ProjectLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── projects/
│   │   └── blog/
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── typography.css
│   │   └── utilities.css
│   │
│   ├── data/
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── socialLinks.ts
│   │   └── navigation.ts
│   │
│   └── utils/
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

# Website Structure

## Homepage

Route:

```text
/
```

Contains:

* Hero Section
* CTA Buttons
* Featured Projects
* Skills
* Experience
* Footer / Contact

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

* personal background
* engineering philosophy
* technologies
* interests
* optional timeline

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

* all projects
* filtering/tagging
* cards

Main file:

```text
src/pages/projects/index.astro
```

---

## Individual Project Pages

Routes:

```text
/projects/project-name
```

Content stored in:

```text
src/content/projects/
```

Example:

```text
src/content/projects/automation-dashboard.md
```

Each project markdown file contains:

* title
* summary
* stack
* screenshots
* architecture notes
* challenges
* lessons learned

---

# Blog Section

## Blog Overview

Route:

```text
/blog
```

Contains:

* all blog posts
* sorting
* tags

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

* email
* LinkedIn
* GitHub
* résumé download
* optional contact form

Main file:

```text
src/pages/contact.astro
```

---

# Image Structure

## Hero Images

```text
/public/images/hero/
```

Examples:

```text
hero-main.webp
workspace.webp
```

---

## Project Images

```text
/public/images/projects/
```

Each project gets its own folder:

```text
/public/images/projects/finance-dashboard/
/public/images/projects/automation-suite/
/public/images/projects/portfolio-site/
```

Inside each:

```text
cover.webp
dashboard.webp
mobile.webp
architecture.webp
```

---

## Blog Images

```text
/public/images/blog/
```

---

## Profile Images

```text
/public/images/profile/
```

Examples:

```text
avatar.webp
portrait.webp
```

---

# Skills Section Structure

Skills data will be centralized in:

```text
src/data/skills.ts
```

Structure example:

```ts
{
  category: "Automation",
  items: [
    "WDIO",
    "Selenium",
    "Playwright",
    "BrowserStack",
    "Karate"
  ]
}
```

---

# Experience Structure

Stored in:

```text
src/data/experience.ts
```

Contains:

## Work Experience

* 3 jobs
* title
* company
* timeline
* description

## Education

* 2 education entries
* institution
* qualification
* years

---

# Design System

## Color Palette

```css
--background: #ffffff;
--foreground: #0a0a0a;
--muted: #6b7280;
--border: #e5e7eb;
--card: #fafafa;
```

Minimal monochrome palette only.

---

# Typography

## Primary Font

### Inter

Google Fonts:

https://fonts.google.com/specimen/Inter

Import:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

---

# Icons

## Main Icon Library

### Lucide Icons

https://lucide.dev

Used for:

* navigation
* buttons
* social icons
* UI icons

Install:

```bash
npm install lucide-astro
```

---

# Skills Icons

## Simple Icons

https://simpleicons.org

Used for:

* technologies
* operating systems
* tooling logos

---

# Skills Section Icon Links

## Infrastructure

### Windows

https://simpleicons.org/icons/windows11.svg

### Linux

https://simpleicons.org/icons/linux.svg

### Apple/macOS

https://simpleicons.org/icons/apple.svg

### iOS

https://simpleicons.org/icons/ios.svg

### Android

https://simpleicons.org/icons/android.svg

---

# Automation Icons

### WDIO

https://simpleicons.org/icons/webdriverio.svg

### Selenium

https://simpleicons.org/icons/selenium.svg

### Playwright

https://simpleicons.org/icons/playwright.svg

### BrowserStack

https://simpleicons.org/icons/browserstack.svg

### Karate

https://simpleicons.org/icons/karateclubs.svg

---

# AI Icons

### Cursor

https://cursor.com

### OpenAI / Codex

https://simpleicons.org/icons/openai.svg

### Claude / Anthropic

https://simpleicons.org/icons/anthropic.svg

---

# Language Icons

### C#

https://simpleicons.org/icons/csharp.svg

### TypeScript

https://simpleicons.org/icons/typescript.svg

### Python

https://simpleicons.org/icons/python.svg

---

# Social Icons

## GitHub

https://simpleicons.org/icons/github.svg

## LinkedIn

https://simpleicons.org/icons/linkedin.svg

## Email

Use Lucide Mail icon:
https://lucide.dev/icons/mail

## Resume Download

Use Lucide Download icon:
https://lucide.dev/icons/download

---

# Buttons

Primary button style:

* black background
* white text
* subtle hover lift

Secondary button style:

* white background
* light border
* dark text

---

# Layout Principles

## Spacing

Use generous spacing:

```text
py-24
gap-12
rounded-2xl
```

Avoid clutter.

---

# Shadows

Use extremely subtle shadows only:

```css
box-shadow:
0 1px 2px rgba(0,0,0,0.04),
0 4px 12px rgba(0,0,0,0.03);
```

---

# Border Radius

```css
border-radius: 24px;
```

Soft but modern.

---

# Responsive Strategy

## Desktop

* 3-column projects
* horizontal hero layout

## Tablet

* 2-column projects
* stacked hero

## Mobile

* single-column layout
* compressed spacing
* collapsible navigation

---

# Deployment

## GitHub Pages Deployment

Deployment handled through GitHub Actions.

Workflow file:

```text
.github/workflows/deploy.yml
```

Astro official guide:

https://docs.astro.build/en/guides/deploy/github/

---

# Initial Build Order

## Phase 1

* Astro setup
* Tailwind setup
* GitHub Pages deployment
* Base layout

---

## Phase 2

* Hero section
* Navigation
* Footer

---

## Phase 3

* Featured projects
* Skills section
* Experience timeline

---

## Phase 4

* About page
* Projects pages
* Blog system

---

## Phase 5

* Animations
* SEO
* performance optimization
* accessibility pass

---

# Future Additions

Potential future enhancements:

* dark mode
* project filtering
* blog tagging
* search
* analytics
* CMS integration
* animation polish
* command palette
* multilingual support

---

# Final Design Goal

The final website should feel:

* modern
* minimal
* professional
* content-focused
* highly readable
* performant
* timeless

The portfolio should prioritize:

* project quality
* technical clarity
* typography
* spacing
* clean presentation
