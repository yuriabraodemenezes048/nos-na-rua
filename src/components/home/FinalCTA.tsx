import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Character } from "@/components/Character";
import { whatsappUrl } from "@/data/site";

/**
 * Chamada final — os personagens reaparecem ladeando a mensagem (desktop),
 * com um halo suave atrás do botão principal para conduzir o olhar.
 * Sem culpa nem apelação.
 */
export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-brown px-6 py-14 sm:px-12 sm:py-16">
          {/* Personagens ladeando (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-2 hidden w-40 lg:block xl:left-8"
          >
            <Character who="blazer" tone="sand" float objectPosition="center top" />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-2 hidden w-52 lg:block xl:right-8"
          >
            <Character who="box" tone="sand" float objectPosition="center top" />
          </div>

          <Reveal className="relative z-10 mx-auto max-w-prose text-center">
            <h2 className="font-display text-[1.875rem] leading-tight text-white sm:text-[2.375rem]">
              Toda ajuda pode iniciar um novo caminho.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-white/85">
              Contribua com qualquer valor e ajude a Associação Nós na Rua a
              continuar mobilizando ações em São José.
            </p>

            <div className="relative mt-9 inline-flex flex-col items-center">
              <span
                aria-hidden="true"
                className="animate-halo absolute -inset-4 -z-0 rounded-full bg-terracotta/40 blur-2xl"
              />
              <Link href="/doe" className="btn-on-brown relative z-10 px-9">
                Doar agora
              </Link>
            </div>

            <p className="mt-6 text-[0.9375rem] text-white/80">
              Prefere ajudar de outra forma?{" "}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline underline-offset-4"
              >
                Fale pelo WhatsApp.
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
