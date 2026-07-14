/**
 * Rastreamento de eventos (cliques em botões importantes).
 *
 * Esta função envia um evento tanto para o Google Analytics (gtag) quanto para
 * o Meta Pixel (fbq), SE eles estiverem configurados (veja src/components/
 * Analytics.tsx e o arquivo .env.local). Se não estiverem, ela simplesmente
 * não faz nada — o site continua funcionando normalmente.
 *
 * Uso: trackEvent("clique_doar", { local: "hero" })
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }

  // Meta Pixel (evento personalizado)
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", event, params);
  }

  // Em desenvolvimento, ajuda a conferir que o evento disparou.
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.debug("[track]", event, params);
  }
}
