import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://evanmorristest.github.io",

  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ],

  markdown: {
    syntaxHighlight: "shiki"
  },

  build: {
    format: "directory"
  }
});