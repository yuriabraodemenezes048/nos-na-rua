import { Reveal } from "@/components/Reveal";
import { Sparkline } from "@/components/brand/Decor";
import { siteConfig } from "@/data/site";

/**
 * Quem somos — bloco curto de texto, fundo claro. A prova humana (foto da
 * equipe) vem logo depois, em largura total (EquipeBand).
 */
export function QuemSomos() {
  const { impact, location } = siteConfig;
  const stats = [
    { big: impact.mealsPerWeek, small: impact.mealsLabel },
    { big: "Segundas", small: impact.time },
    { big: `Desde ${impact.sinceYear}`, small: "registrada e ativa" },
    { big: location.region, small: "área de atuação" },
  ];

  return (
    <section id="quem-somos" className="section">
      <div className="container-site max-w-3xl">
        <Reveal>
          <p className="kicker">
            <Sparkline className="h-4 w-8" />
            Quem somos
          </p>
          <h2 className="section-title mt-4">
            Uma rede de pessoas cuidando de pessoas
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
            Desde 2021, a Associação Nós na Rua mobiliza voluntários, doadores,
            empresas e parceiros para apoiar pessoas e famílias em situação de
            vulnerabilidade na Grande Florianópolis — transformando a
            mobilização da comunidade em cuidado, dignidade e novas
            oportunidades.
          </p>
          <p className="mt-4 max-w-prose text-[0.95rem] italic leading-relaxed text-brown">
            {siteConfig.mission.short}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-brown/10 pt-6 sm:grid-cols-4">
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
