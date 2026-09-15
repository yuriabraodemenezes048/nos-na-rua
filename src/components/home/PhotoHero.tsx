"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

/**
 * Hero fotográfico em tela cheia — a entrega de uma cesta básica a uma
 * família, com a voluntária sorrindo ao lado, preenche toda a largura e a
 * maior parte da viewport, como a abertura de um documentário. O crop é
 * responsivo: a foto é vertical, então no mobile o enquadramento corta
 * pouco na horizontal (mantendo as pessoas visíveis) e no desktop a faixa
 * visível é horizontal, então o foco fica nos rostos, perto do topo. O
 * texto fica sobre a imagem com um degradê escuro que garante contraste
 * WCAG AA. Zoom inicial quase imperceptível (desativado sob
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
      className="relative isolate -mt-16 flex min-h-[78svh] w-full items-end overflow-hidden sm:min-h-[92svh]"
      aria-labelledby="hero-title"
    >
      <Image
        src="/acoes/entrega-familia-final.webp"
        alt="Voluntária do Nós na Rua sorrindo ao lado de uma família, de costas, recebendo uma cesta básica na porta de casa."
        fill
        priority
        sizes="100vw"
        className={`object-cover object-[12%_center] transition-transform duration-[1400ms] ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none sm:object-[center_20%] ${
          loaded ? "scale-100" : "scale-[1.06]"
        }`}
      />
      {/* Degradês: escuro embaixo e à esquerda, onde fica o texto */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-brown-dark/97 via-brown-dark/68 to-brown-dark/20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-brown-dark/90 via-brown-dark/55 to-transparent"
      />
      {/* Escurecimento no topo, para a navegação branca permanecer legível sobre a foto */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brown-dark/70 via-brown-dark/30 to-transparent"
      />

      <div className="container-site relative z-10 w-full pb-28 pt-16 sm:pb-20 lg:pb-24">
        <div
          className={`max-w-2xl transition-all duration-700 ease-out motion-reduce:transition-none ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          } motion-reduce:translate-y-0 motion-reduce:opacity-100 [text-shadow:0_2px_16px_rgba(0,0,0,0.55)]`}
        >
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-[#F0C6B6]">
            Associação Nós na Rua
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[2.5rem] leading-[1.03] text-cream sm:text-[3.25rem] lg:text-[4rem]"
          >
            Solidariedade que chega a quem precisa.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white">
            Apoiamos pessoas e famílias em situação de vulnerabilidade social na{" "}
            {siteConfig.location.region}.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/doe" className="btn-on-brown w-full sm:w-auto">
              Doar agora
            </Link>
            <a
              href="#projetos"
              className="inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-ink/25 px-7 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto"
            >
              Conheça nossas ações
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>

          <p className="mt-8 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-white/85">
            São José • Santa Catarina
          </p>
        </div>
      </div>

      {/* Indicação discreta de scroll */}
      <a
        href="#quem-somos"
        aria-label="Rolar para conhecer o Nós na Rua"
        className="absolute inset-x-0 bottom-4 z-10 mx-auto hidden w-fit text-white/60 transition-colors hover:text-white sm:block"
      >
        <ArrowRightIcon className="h-6 w-6 rotate-90 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
