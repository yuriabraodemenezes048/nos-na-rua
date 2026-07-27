import Image from "next/image";
import { siteConfig } from "@/data/site";

/**
 * Logotipo oficial da associação (arte da mandala "Nós na Rua").
 * Caso `siteConfig.logo` seja removido, exibe uma assinatura tipográfica
 * de segurança para o site nunca ficar sem marca.
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
        width={480}
        height={541}
        priority={!isFooter}
        className={`w-auto ${isFooter ? "h-16" : "h-11"} ${className}`}
      />
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className={`grid shrink-0 place-items-center rounded-full bg-brown ${
          isFooter ? "h-11 w-11" : "h-9 w-9"
        }`}
      >
        <span
          className={`rounded-full border-2 border-cream/70 ${
            isFooter ? "h-5 w-5" : "h-4 w-4"
          }`}
        />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        Nós na Rua
      </span>
    </span>
  );
}
