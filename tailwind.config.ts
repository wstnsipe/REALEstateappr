import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef1f8",
          100: "#d5ddef",
          200: "#aabade",
          300: "#7b93c9",
          400: "#5570b4",
          500: "#3a559e",
          600: "#2d4288",
          700: "#1e2f6a",
          800: "#152252",
          900: "#0f1a3f",
          950: "#0a1129",
        },
        brand: {
          navy: "#1a2b4a",
          red: "#c41e3a",
          gold: "#b8902a",
          light: "#f5f5f3",
          muted: "#6b7280",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        wider: "0.1em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
