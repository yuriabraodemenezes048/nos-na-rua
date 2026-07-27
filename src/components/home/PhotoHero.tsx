"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";
import { siteConfig, whatsappUrl } from "@/data/site";

/**
 * Hero em tela cheia: a foto real da ação ocupa toda a primeira dobra,
 * levemente escurecida, com a mensagem e os botões (Doar agora e WhatsApp)
 * sobre a imagem. A logo grande fica no topo (ScrollMorphLogo), fora daqui.
 *
 * A margem negativa sobe a seção para trás do cabeçalho fixo, deixando a foto
 * sangrar até o topo. Animação de entrada discreta, neutralizada sob
 * prefers-reduced-motion.
 */
export function PhotoHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="relative -mt-16 flex min-h-[100svh] flex-col overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Foto de fundo */}
      <Image
        src="/acoes/tapera-acao.webp"
        alt="Ação comunitária da Associação Nós na Rua na Tapera, com roupas, calçados, voluntários e famílias reunidas."
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: "center 45%" }}
      />
      {/* Escurecimento para leitura (mais forte à esquerda, no topo e embaixo) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-transparent to-black/45"
      />

      {/* Reserva o topo para o cabeçalho e a logo grande (ScrollMorphLogo) */}
      <div aria-hidden="true" className="h-52 shrink-0 sm:h-64" />

      {/* Conteúdo */}
      <div className="container-site relative z-10 flex flex-1 flex-col justify-center pb-24">
        <div
          className={`max-w-2xl text-white transition-all duration-700 ease-out motion-reduce:transition-none ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          } motion-reduce:translate-y-0 motion-reduce:opacity-100`}
        >
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-white/85">
            Associação Nós na Rua · {siteConfig.location.shortLabel}
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[2.5rem] leading-[1.05] drop-shadow-sm sm:text-[3.5rem] lg:text-[4rem]"
          >
            Solidariedade que chega a quem precisa.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
            Mobilizamos pessoas, doações e parcerias para apoiar pessoas em
            situação de rua e famílias em vulnerabilidade social na{" "}
            {siteConfig.location.region}.
          </p>

          <p className="mt-6 inline-flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-[0.95rem] font-medium text-white backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-terracotta"
            />
            Aproximadamente 100 refeições distribuídas toda segunda-feira.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/doe" className="btn-primary w-full sm:w-auto">
              Doar agora
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-full border border-white/60 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Indicador para rolar */}
      <a
        href="#quem-somos"
        aria-label="Ver mais sobre a associação"
        className="absolute inset-x-0 bottom-6 z-10 mx-auto flex w-fit flex-col items-center gap-1 text-white/70 transition-colors hover:text-white"
      >
        <span className="text-xs font-medium uppercase tracking-wide">
          Conheça nossas ações
        </span>
        <ArrowRightIcon className="h-5 w-5 rotate-90 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
