import type { Config } from "tailwindcss";

/**
 * Identidade visual — Associação Nós na Rua.
 *
 * Paleta oficial:
 *   Marrom Terra        #7A4A3A  — cor da marca, botões, títulos de apoio
 *   Preto Profundo      #111111  — textos principais
 *   Areia Clara         #EDE5DE  — blocos suaves de separação
 *   Branco Quente       #F7F3EF  — fundo predominante
 *   Terracota Solidária #D97C67  — apenas detalhes e formas orgânicas
 *
 * O terracota tem contraste insuficiente para texto (≈3:1), por isso é usado
 * somente como elemento decorativo ou com texto escuro por cima.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          DEFAULT: "#7A4A3A",
          dark: "#5E382C", // hover / estados pressionados
          soft: "#9A6552",
        },
        ink: "#111111",
        sand: "#EDE5DE",
        cream: "#F7F3EF",
        terracotta: "#D97C67",
        /** Texto secundário — cinza quente com contraste AA sobre o creme */
        muted: "#5B5049",
      },
      fontFamily: {
        // Definidas via next/font em src/app/layout.tsx
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "68rem",
        /** Largura confortável de leitura: ~65 caracteres */
        prose: "38rem",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 8px 24px -16px rgba(17, 17, 17, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
