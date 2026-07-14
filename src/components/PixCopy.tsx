"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/track";
import { CopyIcon, CheckIcon } from "@/components/Icons";

/**
 * Bloco da chave PIX com o botão "Copiar chave PIX" — FUNCIONAL.
 * Ao copiar, dá um retorno visual claro ("Copiado!") por alguns segundos.
 */
export function PixCopy() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.pix.key);
    } catch {
      // Navegadores muito antigos: seleção manual como alternativa.
      const el = document.createElement("textarea");
      el.value = site.pix.key;
      document.body.appendChild(el);
      el.select();
      // eslint-disable-next-line deprecation/deprecation
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    trackEvent("copiar_pix", { chave_tipo: site.pix.keyType });
    window.setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Chave em destaque */}
      <div className="flex flex-col gap-1 rounded-xl border border-verde-100 bg-verde-50/60 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-verde-600">
          Chave PIX ({site.pix.keyType})
        </span>
        <span className="break-all font-mono text-base font-medium text-ink">
          {site.pix.key}
        </span>
      </div>

      {/* Botão copiar */}
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition active:scale-[0.98] ${
          copied
            ? "bg-verde-600 text-white"
            : "bg-verde-500 text-white shadow-soft hover:bg-verde-600"
        }`}
        aria-live="polite"
      >
        {copied ? (
          <>
            <CheckIcon className="h-5 w-5" />
            Chave copiada!
          </>
        ) : (
          <>
            <CopyIcon className="h-5 w-5" />
            Copiar chave PIX
          </>
        )}
      </button>
    </div>
  );
}
