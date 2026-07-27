"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

/**
 * Hero fotográfico — usa um registro real da ação na comunidade da Tapera
 * como principal prova visual do trabalho. Os personagens ilustrados não
 * aparecem aqui; entram nas seções seguintes.
 *
 * Animação discreta ao carregar: o texto surge suavemente e a foto faz um
 * zoom mínimo e longo. Tudo é neutralizado sob prefers-reduced-motion
 * (variantes motion-reduce do Tailwind).
 */
export function PhotoHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className="section pt-8 sm:pt-10 lg:pt-12"
      aria-labelledby="hero-title"
    >
      <div className="container-site grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        {/* Texto */}
        <div
          className={`order-2 transition-all duration-700 ease-out motion-reduce:transition-none lg:order-1 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          } motion-reduce:translate-y-0 motion-reduce:opacity-100`}
        >
          <p className="kicker">
            Associação Nós na Rua · {siteConfig.location.shortLabel}
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[2.25rem] leading-[1.05] sm:text-[3rem] lg:text-[3.5rem]"
          >
            Solidariedade que chega a quem precisa.
          </h1>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
            Mobilizamos pessoas, doações e parcerias para apoiar pessoas em
            situação de rua e famílias em vulnerabilidade social na{" "}
            {siteConfig.location.region}.
          </p>

          <p className="mt-6 inline-flex items-start gap-3 rounded-2xl bg-sand/70 px-5 py-3 text-[0.95rem] font-medium text-ink">
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

        {/* Foto real, em moldura editorial */}
        <div className="relative order-1 lg:order-2">
          <div
            aria-hidden="true"
            className="absolute -right-5 -top-5 -z-10 hidden h-40 w-40 bg-terracotta/20 sm:block"
            style={{ borderRadius: "54% 46% 58% 42% / 44% 56% 44% 56%" }}
          />
          <div className="overflow-hidden rounded-[1.75rem] border border-sand shadow-soft">
            <Image
              src="/acoes/tapera-acao.webp"
              alt="Ação comunitária da Associação Nós na Rua na Tapera, com roupas, calçados, voluntários e famílias reunidas."
              width={1672}
              height={941}
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className={`aspect-[16/11] w-full object-cover transition-transform duration-[1400ms] ease-out will-change-transform sm:aspect-[16/10] motion-reduce:transition-none motion-reduce:transform-none ${
                loaded ? "scale-100" : "scale-105"
              }`}
              style={{ objectPosition: "center 42%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
