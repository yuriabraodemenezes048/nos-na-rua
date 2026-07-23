import Link from "next/link";
import { WhatsAppIcon } from "@/components/Icons";
import { whatsappUrl } from "@/data/site";

/**
 * Barra de ações fixa, exibida apenas em telas pequenas.
 * Duas ações: "Doar agora" (dominante) e "WhatsApp" (secundária).
 *
 * O espaço ocupado por ela é compensado pelo padding inferior aplicado ao
 * conteúdo em `SiteShell`, para que nada fique encoberto.
 */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-sand bg-cream/95 backdrop-blur-sm md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <Link href="/doe" className="btn-primary flex-1">
          Doar agora
        </Link>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary min-h-[3rem] shrink-0 px-5"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
