import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Character } from "@/components/Character";
import { whatsappUrl } from "@/data/site";

/**
 * Chamada final — fotografia real ampla, escurecida, com a mensagem em um
 * bloco de bom contraste. Os personagens entram apenas como pequenos detalhes.
 * Duas ações: Doar agora e falar no WhatsApp.
 */
export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Foto real de fundo */}
          <Image
            src="/acoes/marmita-entrega.webp"
            alt="Voluntária da Associação Nós na Rua entregando uma marmita durante ação noturna."
            width={1536}
            height={1536}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 72rem"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            style={{ objectPosition: "center 35%" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-brown-dark/95 via-brown-dark/85 to-brown-dark/60"
          />

          <div className="relative px-6 py-16 sm:px-12 sm:py-20">
            {/* Personagens como pequenos detalhes */}
            <Character
              who="box"
              tone="sand"
              className="pointer-events-none absolute bottom-0 right-4 hidden w-24 opacity-95 lg:block"
              sizes="96px"
            />

            <Reveal className="max-w-xl">
              <h2 className="font-display text-[1.875rem] leading-tight text-white sm:text-[2.375rem]">
                Cada contribuição mantém essa rede em movimento.
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/90">
                Doe, participe ou compartilhe. Toda forma de apoio ajuda a Nós na
                Rua a continuar presente.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/doe" className="btn-on-brown w-full sm:w-auto">
                  Doar agora
                </Link>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-full border border-white/60 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  Falar com a associação
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
