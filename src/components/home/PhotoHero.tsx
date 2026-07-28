"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

/**
 * Hero editorial — foto real grande ao lado de um bloco de conteúdo sólido
 * (fundo Branco Quente). O texto NUNCA fica sobre a fotografia, o que garante
 * contraste estável em qualquer recorte. No celular, a foto vem primeiro e o
 * conteúdo aparece abaixo, em fundo sólido. Não usa 100vh.
 */
export function PhotoHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="section pt-8 sm:pt-10 lg:pt-0"
      aria-labelledby="hero-title"
    >
      <div className="container-site lg:grid lg:min-h-[80vh] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-stretch lg:gap-12">
        {/* Foto real (primeiro no celular) */}
        <figure className="order-1 overflow-hidden rounded-3xl border border-sand shadow-soft lg:order-2">
          <Image
            src="/acoes/tapera-acao.webp"
            alt="Ação comunitária da Associação Nós na Rua na Tapera, com roupas, calçados, voluntários e famílias reunidas."
            width={1672}
            height={941}
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className={`h-[280px] w-full object-cover transition-transform duration-[1200ms] ease-out will-change-transform sm:h-[380px] lg:h-full motion-reduce:transition-none motion-reduce:transform-none ${
              loaded ? "scale-100" : "scale-[1.04]"
            }`}
            style={{ objectPosition: "center 45%" }}
          />
        </figure>

        {/* Bloco de conteúdo sólido */}
        <div
          className={`order-2 flex flex-col justify-center pt-8 transition-all duration-700 ease-out motion-reduce:transition-none lg:order-1 lg:pt-0 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          } motion-reduce:translate-y-0 motion-reduce:opacity-100`}
        >
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-brown">
            Associação Nós na Rua · {siteConfig.location.shortLabel}
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[2.25rem] leading-[1.05] text-ink sm:text-[2.75rem] lg:text-[3.25rem]"
          >
            Solidariedade que chega a quem precisa.
          </h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
            Mobilizamos pessoas, doações e parcerias para apoiar pessoas e
            famílias em situação de vulnerabilidade na {siteConfig.location.region}.
          </p>

          <p className="mt-6 inline-flex w-fit items-start gap-3 rounded-2xl bg-sand px-5 py-3 text-[0.95rem] font-medium text-ink">
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
            <a href="#projetos" className="btn-secondary w-full sm:w-auto">
              Conheça nossas ações
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
