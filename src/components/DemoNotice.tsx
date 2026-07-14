/**
 * Aviso discreto de que este é um protótipo demonstrativo.
 * Aparece em pontos estratégicos para deixar claro, com honestidade, que os
 * textos e imagens ainda serão substituídos pelos dados oficiais da ONG.
 */
export function DemoNotice({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-start gap-2 rounded-xl border border-terra-100 bg-terra-50/70 px-4 py-2 text-sm leading-relaxed text-terra-600 ${className}`}
    >
      <span aria-hidden className="mt-0.5 text-base leading-none">
        ✱
      </span>
      <span>
        Protótipo demonstrativo — textos, imagens e informações serão ajustados
        com os dados oficiais da ONG.
      </span>
    </p>
  );
}

/** Etiqueta menor, para marcar blocos individuais como conteúdo de exemplo. */
export function DemoTag({ label = "Conteúdo de exemplo" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-sand px-2.5 py-0.5 text-xs font-medium text-stone">
      {label}
    </span>
  );
}
