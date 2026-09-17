import type { Config } from "tailwindcss";

// Palette named/structured after a real dark cinematic personal-OS build —
// deep maroon ground, coral primary accent, gold/teal/violet/blue highlights.
// Swap these values for your own brand colors; nothing else in the app
// depends on the specific hex values.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#160409",
          900: "#1e070d",
          850: "#260a12",
          800: "#2f0d17",
          700: "#3d1320",
          600: "#4d1a2a",
        },
        surface: {
          DEFAULT: "#2b0f18",
          soft: "#361420",
          raised: "#421a29",
        },
        coral: {
          DEFAULT: "#ff5a4d",
          400: "#ff7367",
          500: "#ff5a4d",
          600: "#ed4438",
        },
        gold: {
          DEFAULT: "#f2c879",
          soft: "#f7dca3",
        },
        neon: {
          teal: "#4fd6c0",
          violet: "#a78bfa",
          blue: "#5aa9ff",
        },
        ink: {
          DEFAULT: "#fbe9ec",
          soft: "#e9c9d1",
          muted: "#b78a97",
          faint: "#8a5f6c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(255,90,77,0.45)",
        card: "0 20px 45px -25px rgba(0,0,0,0.9)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.04)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
