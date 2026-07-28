import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Sparkline } from "@/components/brand/Decor";
import { siteConfig } from "@/data/site";

/**
 * Quem somos / Quem faz acontecer — narrativa institucional com a foto real
 * da equipe em destaque, para gerar confiança e humanizar a associação.
 */
export function AboutSection() {
  return (
    <section id="quem-somos" className="section relative overflow-hidden">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="kicker">
            <Sparkline className="h-4 w-8" />
            Quem faz acontecer
          </p>
          <h2 className="section-title mt-4 max-w-prose">
            Uma rede de pessoas cuidando de pessoas
          </h2>
          <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-muted">
            <p>
              A Associação Nós na Rua nasceu da união de pessoas dispostas a
              transformar solidariedade em ação.
            </p>
            <p>
              Desde 2021, mobilizamos voluntários, doadores, empresas e
              parceiros para apoiar pessoas e famílias em situação de
              vulnerabilidade na Grande Florianópolis.
            </p>
            <p>
              Por meio de alimentos, campanhas, acolhimento e assistência
              contínua, buscamos transformar a ação coletiva em cuidado,
              dignidade e novas oportunidades.
            </p>
          </div>
          <div className="mt-8 rounded-2xl bg-sand/60 p-5">
            <p className="text-[0.8125rem] font-semibold uppercase tracking-wide text-brown">
              Nossa missão
            </p>
            <p className="mt-2 max-w-prose leading-relaxed text-ink">
              {siteConfig.mission.short}
            </p>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <figure className="overflow-hidden rounded-3xl border border-sand shadow-soft">
            <Image
              src="/acoes/equipe.webp"
              alt="Equipe de voluntários da Associação Nós na Rua reunida durante ação social, com caixas de doação."
              width={1456}
              height={900}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[16/10] w-full object-cover"
            />
          </figure>
          <p className="mt-4 border-l-2 border-terracotta pl-5 font-display text-xl leading-snug text-brown">
            {siteConfig.mission.positioning}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
