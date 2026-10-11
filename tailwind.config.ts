import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        flora: {
          // Ink & surfaces
          black: "#16120F",
          white: "#FFFFFF",
          ivory: "#FAF7F2",
          "grey-light": "#F3ECE1", // warm cream surface
          "grey-dark": "#3D3631", // body text, 11:1 on ivory
          muted: "#6B625A", // secondary text, 5.5:1 on ivory
          line: "#E6DCCB", // hairline borders
          // Gold — bright on dark backgrounds, deep for text/icons on light
          gold: "#D4AF37",
          "gold-deep": "#7A5C1A",
          "gold-soft": "#EFE3BE",
          "gold-light": "#E2C15A", // top of the gold button gradient
          "gold-glint": "#FFF1C1", // brightest highlight in shimmer/progress
          amber: "#8A5A1C", // warm glow colour in dark sections
          // WhatsApp brand green, darkened for 4.5:1 contrast with white
          whatsapp: "#1F8F4E",
          "whatsapp-hover": "#187A41",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h3: ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.3" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.16em" }],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(22 18 15 / 0.04), 0 8px 24px -12px rgb(22 18 15 / 0.12)",
        lift: "0 2px 4px rgb(22 18 15 / 0.05), 0 20px 40px -20px rgb(22 18 15 / 0.25)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;