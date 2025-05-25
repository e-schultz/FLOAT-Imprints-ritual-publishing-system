import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./mdx-components.tsx",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "float-green": "#00ff9f",
        "glitch-red": "#ff0066",
        "ritual-purple": "#8b00ff",
        "terminal-black": "#1a1a1a",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00ff9f",
          foreground: "#1a1a1a",
        },
        secondary: {
          DEFAULT: "#8b00ff",
          foreground: "#f5f5f5",
        },
        destructive: {
          DEFAULT: "#ff0066",
          foreground: "#f5f5f5",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-5px, 5px)" },
          "40%": { transform: "translate(-5px, -5px)" },
          "60%": { transform: "translate(5px, 5px)" },
          "80%": { transform: "translate(5px, -5px)" },
        },
        "pulse-sigil": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glitch: "glitch 0.5s ease-in-out infinite",
        "pulse-sigil": "pulse-sigil 2s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#f5f5f5",
            a: {
              color: "#8b00ff",
              "&:hover": {
                color: "#00ff9f",
              },
            },
            h1: {
              color: "#00ff9f",
            },
            h2: {
              color: "#00ff9f",
            },
            h3: {
              color: "#00ff9f",
            },
            strong: {
              color: "#00ff9f",
            },
            code: {
              color: "#00ff9f",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
            },
            blockquote: {
              borderLeftColor: "#00ff9f",
              color: "#f5f5f5",
              opacity: 0.8,
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
