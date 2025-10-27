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
        primary: {
          bg: "#0B0B0B",
          secondary: "#111111",
          panel: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#FF6A00",
          hover: "#FF8533",
          light: "#FFA366",
        },
        text: {
          DEFAULT: "#E0E0E0",
          muted: "#B0B0B0",
          dark: "#808080",
        },
        border: {
          DEFAULT: "#333333",
          light: "#404040",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #FF6A00, 0 0 10px #FF6A00, 0 0 15px #FF6A00" },
          "100%": { boxShadow: "0 0 10px #FF6A00, 0 0 20px #FF6A00, 0 0 30px #FF6A00" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

