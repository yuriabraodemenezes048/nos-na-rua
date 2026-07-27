/**
 * Grafismos da identidade — formas orgânicas e folhas discretas.
 * Todos decorativos (aria-hidden). Usados como apoio visual, sem poluir.
 */

export function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M60 158C60 100 52 40 20 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 30 + i * 26;
        const x = 54 - i * 7;
        return (
          <g key={i}>
            <path
              d={`M${x} ${y} C ${x - 30} ${y - 14}, ${x - 34} ${y + 12}, ${x} ${y + 6} Z`}
              fill="currentColor"
              opacity="0.9"
            />
            <path
              d={`M${x + 6} ${y - 8} C ${x + 34} ${y - 22}, ${x + 40} ${y + 4}, ${x + 6} ${y - 2} Z`}
              fill="currentColor"
              opacity="0.7"
            />
          </g>
        );
      })}
    </svg>
  );
}

/** Bloco orgânico de fundo (blob), com leve movimento opcional. */
export function Blob({
  className = "",
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`${className} ${animate ? "animate-drift" : ""}`}
      style={{
        borderRadius: "46% 54% 42% 58% / 56% 44% 56% 44%",
      }}
    />
  );
}

/** Aspas / marcação simples usada em destaques. */
export function Sparkline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 14c6-10 10-10 15 0s9 10 15-2 8-8 14 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
