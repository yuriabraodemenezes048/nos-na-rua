import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { whatsappUrl } from "@/data/site";

/**
 * Chamada final em tela cheia — fotografia real ampla, escurecida, com a
 * mensagem centralizada e bom contraste. Encerramento emocional que conduz à
 * doação. Duas ações: Doar agora e falar no WhatsApp.
 */
export function FinalCTA() {
  return (
    <section className="relative isolate flex min-h-[68svh] w-full items-center overflow-hidden">
      <Image
        src="/acoes/equipe.webp"
        alt="Equipe de voluntários da Associação Nós na Rua reunida durante ação social."
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 35%" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/75 to-brown-dark/70"
      />

      <div className="container-site relative z-10 w-full py-20 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-[2rem] leading-tight text-cream sm:text-[2.5rem]">
            Cada gesto fortalece essa rede.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-sand">
            Doe, participe ou compartilhe. Existem muitas formas de ajudar o
            cuidado a chegar mais longe.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/doe" className="btn-on-brown w-full sm:w-auto">
              Fazer uma doação
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-full border border-white/60 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Falar com a gente
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
