"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Character } from "@/components/Character";
import { LeafSprig } from "@/components/brand/Decor";
import { ArrowRightIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

/**
 * Hero com os dois personagens da marca ladeando a mensagem — ambos olhando
 * para o centro. Animações:
 *  - entrada suave dos personagens pelas laterais (ao carregar);
 *  - flutuação idle muito discreta (CSS, no componente Character);
 *  - parallax leve seguindo o mouse (só no desktop, ponteiro fino).
 * Tudo é desativado sob prefers-reduced-motion.
 */
export function CharactersHero() {
  const [mounted, setMounted] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const womanRef = useRef<HTMLDivElement>(null);
  const manRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dispara a animação de entrada logo após a montagem.
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    let raf = 0;
    const layers: [HTMLElement | null, number][] = [
      [womanRef.current, 10],
      [manRef.current, 14],
      [blob1Ref.current, -8],
      [blob2Ref.current, -6],
    ];

    function onMove(event: PointerEvent) {
      const rect = scene!.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        for (const [el, depth] of layers) {
          if (el) el.style.transform = `translate3d(${nx * depth}px, ${ny * depth}px, 0)`;
        }
      });
    }
    function reset() {
      cancelAnimationFrame(raf);
      for (const [el] of layers) if (el) el.style.transform = "";
    }

    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerleave", reset);
    return () => {
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(raf);
    };
  }, []);

  const enter = "transition-[transform,opacity] duration-[900ms] ease-out";

  return (
    <section
      ref={sceneRef}
      className="relative overflow-hidden pt-10 sm:pt-12 lg:flex lg:min-h-[86vh] lg:items-center lg:pt-4"
      aria-labelledby="hero-title"
    >
      {/* Grafismos de fundo */}
      <div
        ref={blob1Ref}
        aria-hidden="true"
        className="animate-drift absolute -left-24 top-4 -z-10 h-72 w-72 bg-sand/70"
        style={{ borderRadius: "46% 54% 42% 58% / 56% 44% 56% 44%" }}
      />
      <div
        ref={blob2Ref}
        aria-hidden="true"
        className="animate-drift absolute -right-16 bottom-8 -z-10 h-64 w-64 bg-terracotta/10"
        style={{ borderRadius: "54% 46% 58% 42% / 44% 56% 44% 56%", animationDelay: "-4s" }}
      />
      <LeafSprig
        aria-hidden="true"
        className="absolute right-6 top-6 -z-10 hidden h-40 w-28 text-brown/15 lg:block"
      />

      {/* Personagens no desktop — ladeando a mensagem */}
      <div
        ref={womanRef}
        className={`pointer-events-none absolute bottom-0 left-[1%] hidden w-[15rem] lg:block xl:left-[4%] xl:w-[16.5rem] ${enter} ${
          mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
        }`}
      >
        <Character who="blazer" tone="sand" float priority objectPosition="center top" />
      </div>
      <div
        ref={manRef}
        className={`pointer-events-none absolute bottom-0 right-[0%] hidden w-[19rem] lg:block xl:right-[3%] xl:w-[21rem] ${enter} ${
          mounted ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
        style={{ transitionDelay: "120ms" }}
      >
        <Character who="box" tone="sand" float priority objectPosition="center top" />
      </div>

      {/* Mensagem */}
      <div className="container-site relative z-10">
        <div className="mx-auto max-w-xl text-center">
          <p className="kicker justify-center">
            Associação Nós na Rua · {siteConfig.location.shortLabel}
          </p>
          <h1
            id="hero-title"
            className="mt-4 font-display text-[2.5rem] leading-[1.05] sm:text-[3.25rem] lg:text-[3.75rem]"
          >
            Solidariedade que chega a quem precisa.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Mobilizamos pessoas, doações e parcerias para apoiar pessoas em
            situação de rua e famílias em vulnerabilidade na{" "}
            {siteConfig.location.region}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/doe" className="btn-primary w-full sm:w-auto">
              Doar agora
            </Link>
            <a href="#projetos" className="btn-secondary w-full sm:w-auto">
              Conheça nossas ações
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Personagens no celular/tablet — abaixo da mensagem, olhando para o centro */}
        <div
          className={`mt-12 flex items-end justify-center gap-2 sm:gap-4 lg:hidden ${enter} ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Character
            who="blazer"
            tone="sand"
            className="w-[40vw] max-w-[11rem]"
            sizes="40vw"
          />
          <Character
            who="box"
            tone="sand"
            className="w-[46vw] max-w-[13rem]"
            sizes="46vw"
          />
        </div>
      </div>
    </section>
  );
}
