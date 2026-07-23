import Image from "next/image";
import { siteConfig } from "@/data/site";

/**
 * Assinatura da associação.
 *
 * Quando o arquivo oficial do logotipo for enviado, basta colocá-lo em
 * /public e informar o caminho em `siteConfig.logo` — este componente passa a
 * exibir a marca automaticamente, sem nenhuma outra alteração de código.
 *
 * Enquanto isso, exibimos a assinatura tipográfica da associação com um
 * pequeno ornamento circular (elemento de apoio da identidade), em vez de
 * tentar reproduzir o logotipo original.
 */
export function Logo({
  size = "header",
  className = "",
}: {
  size?: "header" | "footer";
  className?: string;
}) {
  const isFooter = size === "footer";

  if (siteConfig.logo) {
    return (
      <Image
        src={siteConfig.logo}
        alt={siteConfig.legalName}
        width={isFooter ? 200 : 148}
        height={isFooter ? 200 : 148}
        priority={!isFooter}
        className={`h-auto ${isFooter ? "w-28" : "w-16"} ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Ornamento circular — elemento decorativo da identidade */}
      <span
        aria-hidden="true"
        className={`relative grid shrink-0 place-items-center rounded-full bg-brown ${
          isFooter ? "h-11 w-11" : "h-9 w-9"
        }`}
      >
        <span
          className={`rounded-full border-2 border-cream/70 ${
            isFooter ? "h-5 w-5" : "h-4 w-4"
          }`}
        />
        <span className="absolute h-1.5 w-1.5 rounded-full bg-terracotta" />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-tight text-ink ${
            isFooter ? "text-xl" : "text-lg"
          }`}
        >
          Nós na Rua
        </span>
        <span className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-muted">
          Associação · São José/SC
        </span>
      </span>
    </span>
  );
}
