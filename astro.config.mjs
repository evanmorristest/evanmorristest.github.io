import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://evanmorristest.github.io",

  integrations: [
    tailwind(),
    mdx()
  ],

  markdown: {
    syntaxHighlight: "shiki"
  },

  build: {
    format: "directory"
  }
});
