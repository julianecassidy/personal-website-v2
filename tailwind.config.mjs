function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "1040px",
      lg: "1200px",
    },
    extend: {
      colors: {
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-secondary"),
        accent: withOpacity("--color-accent"),
        fill: withOpacity("--color-fill"),
        base: withOpacity("--color-base"),
        border: withOpacity("--color-border"),
        muted: withOpacity("--color-muted"),
        button: withOpacity("--color-button"),
        white: withOpacity("--color-white"),
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
};
