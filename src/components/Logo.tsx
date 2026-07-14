import { site } from "@/lib/site";

/**
 * Marca da ONG: um pequeno emblema circular + o nome.
 *
 * OBSERVAÇÃO: este é um emblema provisório desenhado em código. Quando a ONG
 * enviar o logotipo oficial (a arte da mandala "Nós na Rua"), basta trocar o
 * bloco do emblema por uma <Image src="/logo.png" .../>.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="relative flex h-9 w-9 items-center justify-center rounded-full bg-terra-500 text-cream shadow-sm ring-1 ring-terra-600/20"
      >
        <svg viewBox="0 0 40 40" className="h-6 w-6" fill="none" aria-hidden>
          {/* pétalas simples ao redor (referência à mandala) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse
              key={i}
              cx="20"
              cy="7"
              rx="2.1"
              ry="4"
              fill="currentColor"
              opacity="0.85"
              transform={`rotate(${i * 45} 20 20)`}
            />
          ))}
          <circle cx="20" cy="20" r="6.5" fill="currentColor" />
          <circle cx="20" cy="20" r="3" fill="#B85A34" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold text-ink">
          {site.name}
        </span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-stone">
          ONG · Solidariedade
        </span>
      </span>
    </span>
  );
}
