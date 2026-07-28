import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Sparkline } from "@/components/brand/Decor";
import { siteConfig } from "@/data/site";

/**
 * Quem somos + impacto — bloco único: foto real da equipe, narrativa curta,
 * missão e os quatro dados confirmados de forma compacta (sem virar cards).
 */
export function AboutImpact() {
  const { impact, location } = siteConfig;
  const stats = [
    { big: impact.mealsPerWeek, small: impact.mealsLabel },
    { big: "Segundas", small: impact.time },
    { big: `Desde ${impact.sinceYear}`, small: "registrada e ativa" },
    { big: location.region, small: "área de atuação" },
  ];

  return (
    <section id="quem-somos" className="section bg-sand/40">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
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
        </Reveal>

        <Reveal variant="right" delay={100}>
          <p className="kicker">
            <Sparkline className="h-4 w-8" />
            Quem somos
          </p>
          <h2 className="section-title mt-4 max-w-prose">
            Uma rede de pessoas cuidando de pessoas
          </h2>
          <div className="mt-5 max-w-prose space-y-4 leading-relaxed text-muted">
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
              contínua, transformamos a mobilização da comunidade em cuidado,
              dignidade e novas oportunidades.
            </p>
          </div>
          <p className="mt-5 border-l-2 border-terracotta pl-4 text-[0.95rem] italic leading-relaxed text-brown">
            {siteConfig.mission.short}
          </p>

          {/* Dados confirmados, compactos */}
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-brown/10 pt-6">
            {stats.map((s) => (
              <div key={s.big}>
                <dt className="font-display text-2xl leading-none text-ink">
                  {s.big}
                </dt>
                <dd className="mt-1 text-sm text-muted">{s.small}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
