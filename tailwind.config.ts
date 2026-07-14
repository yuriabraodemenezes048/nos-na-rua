import type { Config } from "tailwindcss";

/**
 * ---------------------------------------------------------------------------
 * PALETA DO SITE — edite as cores aqui para mudar todo o visual.
 * ---------------------------------------------------------------------------
 * A direção é: fundos claros e acolhedores (creme/bege), verde institucional
 * como cor principal e um terracota suave (que conversa com a logo) como
 * detalhe. Texto em cinza/marrom escuro para leitura confortável.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fundos claros
        cream: "#FBF8F2", // off-white / bege muito claro (fundo principal)
        sand: "#F4ECDE", // bege claro para blocos alternados
        // Verde institucional (cor principal / botões)
        verde: {
          50: "#EEF5F0",
          100: "#D6E8DD",
          200: "#AED2BC",
          300: "#82B99B",
          400: "#569E7A",
          500: "#38855F", // base
          600: "#2C6C4C", // hover / textos verdes
          700: "#235741",
          800: "#1D4534",
        },
        // Terracota suave — detalhe acolhedor (conversa com a logo)
        terra: {
          50: "#FBEFE9",
          100: "#F4D8CB",
          200: "#E7B29B",
          300: "#D98B6B",
          400: "#C96E48",
          500: "#B85A34", // base
          600: "#9C4A2A",
        },
        // Texto
        ink: "#2A2521", // cinza/marrom escuro para títulos e textos
        stone: "#6E655C", // texto secundário / apoio
      },
      fontFamily: {
        // Definidas via next/font em src/app/layout.tsx
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(42, 37, 33, 0.15)",
        card: "0 6px 24px -10px rgba(42, 37, 33, 0.12)",
        float: "0 12px 28px -8px rgba(42, 37, 33, 0.28)",
      },
      maxWidth: {
        content: "72rem", // largura confortável de leitura para as seções
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
