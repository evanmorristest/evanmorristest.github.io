/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],

  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0a0a0a",
        muted: "#6b7280",
        border: "#e5e7eb",
        card: "#fafafa"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },

      boxShadow: {
        subtle: `
          0 1px 2px rgba(0,0,0,0.04),
          0 4px 12px rgba(0,0,0,0.03)
        `
      },

      maxWidth: {
        content: "1280px"
      },

      spacing: {
        section: "6rem"
      }
    }
  },

  plugins: []
};