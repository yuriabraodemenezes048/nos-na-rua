"use client";

import { whatsappLink, site } from "@/lib/site";
import { trackEvent } from "@/lib/track";
import { WhatsAppIcon } from "@/components/Icons";

/**
 * Botão flutuante de WhatsApp — fixo no canto inferior direito, sempre à mão,
 * mas discreto. Abre uma conversa com mensagem já preenchida.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(site.messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("clique_whatsapp", { local: "flutuante" })}
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-float transition hover:bg-[#1FB457] active:scale-95 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">
        Fale conosco
      </span>
    </a>
  );
}
