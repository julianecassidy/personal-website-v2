/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "--color-primary",
        secondary: "--color-secondary",
        accent: "--color-accent",
        fill: "--color-fill",
        text: "--color-text",
        border: "--color-border",
        muted: "--color-card-muted"
      },
      fontFamily: {
        sans: ["Raleway", "Arial", "sans-serif"],
        serif: ["Zen Antique", "Georgia", "serif"],
        display: ["Economica", "sans-serif"],
        body: ["Raleway", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

