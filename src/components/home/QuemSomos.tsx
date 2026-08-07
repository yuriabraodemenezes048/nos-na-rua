import { Reveal } from "@/components/Reveal";
import { Sparkline } from "@/components/brand/Decor";
import { siteConfig } from "@/data/site";

/**
 * Quem somos + impacto — bloco editorial. Os números confirmados aparecem como
 * tipografia grande (não como cards), integrados à narrativa.
 */
export function QuemSomos() {
  const { impact, location, organization } = siteConfig;

  const stats = [
    { top: "Desde", big: impact.sinceYear },
    { big: impact.mealsPerWeek, bottom: "refeições por semana" },
    { big: location.region, bottom: "onde atuamos" },
  ];

  return (
    <section id="quem-somos" className="section">
      <div className="container-site">
        <Reveal className="max-w-3xl">
          <p className="kicker">
            <Sparkline className="h-4 w-8" />
            Quem somos
          </p>
          <h2 className="section-title mt-5">Uma rede construída para cuidar.</h2>
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
        </Reveal>

        {/* Impacto — números editoriais grandes, sem cards */}
        <Reveal
          delay={120}
          className="mt-14 grid grid-cols-1 gap-8 border-t border-brown/12 pt-10 sm:grid-cols-3 sm:gap-0"
        >
          {stats.map((s, i) => (
            <div
              key={s.big}
              className={
                i > 0 ? "sm:border-l sm:border-brown/12 sm:pl-8" : undefined
              }
            >
              {s.top && (
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-brown">
                  {s.top}
                </p>
              )}
              <p className="mt-1 font-display text-[2.75rem] font-semibold leading-[0.95] text-ink sm:text-[3.25rem]">
                {s.big}
              </p>
              {s.bottom && (
                <p className="mt-2 text-sm uppercase tracking-wide text-muted">
                  {s.bottom}
                </p>
              )}
            </div>
          ))}
        </Reveal>

        <p className="sr-only">
          {organization.natureLabel} · CNPJ {organization.cnpj}
        </p>
      </div>
    </section>
  );
}
