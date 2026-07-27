import { Reveal } from "@/components/Reveal";
import { Character } from "@/components/Character";
import { LeafSprig, Sparkline } from "@/components/brand/Decor";

/**
 * Quem somos — narrativa institucional humana, com um personagem como apoio
 * visual discreto e a frase-síntese em destaque.
 */
export function AboutSection() {
  return (
    <section id="quem-somos" className="section relative overflow-hidden">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
        <Reveal>
          <p className="kicker">
            <Sparkline className="h-4 w-8" />
            Quem somos
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
          <p className="mt-8 border-l-2 border-terracotta pl-5 font-display text-xl leading-snug text-brown">
            Transformamos solidariedade em cuidado, dignidade e oportunidades.
          </p>
        </Reveal>

        <Reveal variant="right" delay={120} className="relative mx-auto w-full max-w-xs">
          <LeafSprig
            aria-hidden="true"
            className="absolute -left-8 -top-6 h-28 w-20 text-brown/15"
          />
          <Character who="blazer" tone="sand" float objectPosition="center top" />
        </Reveal>
      </div>
    </section>
  );
}
