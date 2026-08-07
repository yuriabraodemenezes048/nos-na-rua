import { Reveal } from "@/components/Reveal";
import { Sparkline } from "@/components/brand/Decor";
import { siteConfig } from "@/data/site";

/**
 * Quem somos — bloco editorial de texto, fundo claro. A prova humana (foto da
 * equipe) vem logo depois, em largura total (EquipeBand).
 */
export function QuemSomos() {
  const { impact, location, organization } = siteConfig;
  const stats = [
    { big: `Desde ${impact.sinceYear}`, small: "registrada e ativa" },
    { big: location.region, small: "área de atuação" },
    { big: impact.mealsPerWeek, small: "refeições por semana" },
  ];

  return (
    <section id="quem-somos" className="section">
      <div className="container-site max-w-3xl">
        <Reveal>
          <p className="kicker">
            <Sparkline className="h-4 w-8" />
            Quem somos
          </p>
          <h2 className="section-title mt-4">Uma rede construída para cuidar.</h2>
          <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Somos a Associação Nós na Rua. Nascemos da união de pessoas
              dispostas a transformar solidariedade em ação.
            </p>
            <p>
              Desde {impact.sinceYear}, atuamos na {location.region} apoiando
              pessoas em situação de rua e famílias em situação de
              vulnerabilidade social.
            </p>
          </div>
          <p className="mt-6 border-l-2 border-terracotta pl-4 text-[0.95rem] italic leading-relaxed text-brown">
            {siteConfig.mission.full}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-x-6 gap-y-5 border-t border-brown/10 pt-6">
            {stats.map((s) => (
              <div key={s.big}>
                <dt className="font-display text-xl leading-none text-ink sm:text-2xl">
                  {s.big}
                </dt>
                <dd className="mt-1 text-sm text-muted">{s.small}</dd>
              </div>
            ))}
          </dl>
          <p className="sr-only">
            {organization.natureLabel} · CNPJ {organization.cnpj}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
