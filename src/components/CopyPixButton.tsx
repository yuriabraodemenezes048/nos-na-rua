"use client";

import { useEffect, useRef, useState } from "react";
import { CopyIcon, CheckIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

type Status = "idle" | "copied" | "error";

/**
 * Botão de copiar a chave PIX.
 *
 * - Copia a chave em dígitos (formato aceito pelos bancos).
 * - Anuncia o resultado via aria-live, para leitores de tela.
 * - Possui alternativa caso navigator.clipboard não esteja disponível
 *   (navegadores antigos ou contexto sem HTTPS).
 * - Nunca recarrega a página.
 */
export function CopyPixButton() {
  const [status, setStatus] = useState<Status>("idle");
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  async function handleCopy() {
    const key = siteConfig.donation.pixKeyRaw;
    let copied = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(key);
        copied = true;
      } else {
        // Alternativa para navegadores sem a API de área de transferência.
        const field = document.createElement("textarea");
        field.value = key;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        copied = document.execCommand("copy");
        document.body.removeChild(field);
      }
    } catch {
      copied = false;
    }

    setStatus(copied ? "copied" : "error");
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <div>
      <button type="button" onClick={handleCopy} className="btn-primary w-full">
        {status === "copied" ? (
          <>
            <CheckIcon className="h-5 w-5" />
            Chave PIX copiada
          </>
        ) : (
          <>
            <CopyIcon className="h-5 w-5" />
            Copiar chave PIX
          </>
        )}
      </button>

      {/* Retorno para leitores de tela e para quem enxerga */}
      <p
        aria-live="polite"
        className={`mt-3 text-sm ${
          status === "error" ? "text-brown-dark" : "text-muted"
        }`}
      >
        {status === "copied" && "Chave PIX copiada."}
        {status === "error" &&
          "Não foi possível copiar. Selecione a chave manualmente."}
      </p>
    </div>
  );
}
