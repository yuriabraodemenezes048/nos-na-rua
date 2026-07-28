"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

/**
 * Hero fotográfico em tela cheia — a foto real da ação na Tapera preenche
 * toda a largura e a maior parte da viewport, como a abertura de um
 * documentário. O texto fica sobre a imagem com um degradê escuro que garante
 * contraste WCAG AA. Zoom inicial quase imperceptível (desativado sob
 * prefers-reduced-motion).
 */
export function PhotoHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[88svh] w-full items-end overflow-hidden"
      aria-labelledby="hero-title"
    >
      <Image
        src="/acoes/tapera-acao.webp"
        alt="Ação comunitária da Associação Nós na Rua na Tapera, com roupas, calçados, voluntários e famílias reunidas."
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-transform duration-[1400ms] ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none ${
          loaded ? "scale-100" : "scale-[1.06]"
        }`}
        style={{ objectPosition: "center 42%" }}
      />
      {/* Degradês: escuro embaixo e à esquerda, onde fica o texto */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-brown-dark/92 via-brown-dark/35 to-brown-dark/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brown-dark/70 via-brown-dark/20 to-transparent"
      />

      <div className="container-site relative z-10 w-full pb-28 pt-16 sm:pb-20 lg:pb-24">
        <div
          className={`max-w-2xl transition-all duration-700 ease-out motion-reduce:transition-none ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          } motion-reduce:translate-y-0 motion-reduce:opacity-100`}
        >
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-[#F0C6B6]">
            Associação Nós na Rua · {siteConfig.location.shortLabel}
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[2.5rem] leading-[1.03] text-cream sm:text-[3.25rem] lg:text-[4rem]"
          >
            Solidariedade que chega a quem precisa.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand">
            Mobilizamos pessoas, doações e parcerias para apoiar pessoas e
            famílias em situação de vulnerabilidade na {siteConfig.location.region}.
          </p>
          <p className="mt-5 text-[0.95rem] font-medium text-white">
            <span
              aria-hidden
              className="mr-2 inline-block h-2.5 w-2.5 -translate-y-px rounded-full bg-terracotta align-middle"
            />
            Aproximadamente 100 refeições distribuídas toda segunda-feira.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/doe" className="btn-on-brown w-full sm:w-auto">
              Doar agora
            </Link>
            <a
              href="#projetos"
              className="inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-full border border-white/60 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Conheça nossas ações
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
