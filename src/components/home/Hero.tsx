import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

/**
 * Primeira dobra.
 *
 * Como ainda não há fotografia real e autorizada da associação no projeto,
 * o lado visual é uma composição da própria identidade (formas orgânicas e o
 * ornamento circular da marca) — nunca uma imagem de banco nem uma caixa vazia.
 * Quando a foto oficial chegar, ela substitui o bloco `<HeroArtwork />`.
 */
export function Hero() {
  return (
    <section className="section pt-12 md:pt-16">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center rounded-full bg-sand px-3.5 py-1.5 text-[0.8125rem] font-medium text-brown">
            Associação registrada em {siteConfig.location.shortLabel}
          </p>

          <h1 className="mt-5 font-display text-[2.125rem] leading-[1.12] sm:text-[2.75rem] lg:text-[3.125rem]">
            Sua ajuda pode levar dignidade a quem mais precisa.
          </h1>

          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
            A Associação Nós na Rua apoia pessoas em situação de rua e famílias
            em vulnerabilidade social nas proximidades do Viaduto da Chico
            Mendes, em São José/SC.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/doe" className="btn-primary">
              Doar agora
            </Link>
            <a href="#como-ajudamos" className="btn-secondary">
              Conheça nosso trabalho
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <HeroArtwork />
      </div>
    </section>
  );
}

/** Composição visual da identidade — usada enquanto não há foto oficial. */
function HeroArtwork() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-none"
    >
      {/* Forma orgânica de fundo */}
      <div className="absolute inset-0 rounded-[42%_58%_46%_54%/54%_42%_58%_46%] bg-sand" />
      {/* Detalhe terracota */}
      <div className="absolute right-[8%] top-[10%] h-20 w-20 rounded-full bg-terracotta/70" />
      {/* Ornamento circular central */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-40 w-40 place-items-center rounded-full border-[6px] border-brown/90 sm:h-48 sm:w-48">
          <div className="h-20 w-20 rounded-full bg-brown sm:h-24 sm:w-24" />
        </div>
      </div>
      {/* Arco de apoio */}
      <div className="absolute bottom-[6%] left-[10%] h-24 w-24 rounded-full border-[5px] border-terracotta/60" />
    </div>
  );
}
