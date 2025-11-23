import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81"
        },
        accent: "#0ea5e9"
      },
      boxShadow: {
        brand: "0 20px 60px -35px rgba(79, 70, 229, 0.6)"
      },
      fontFamily: {
        display: ["var(--font-inter)"],
        sans: ["var(--font-inter)"]
      }
    }
  },
  plugins: []
};

export default config;
