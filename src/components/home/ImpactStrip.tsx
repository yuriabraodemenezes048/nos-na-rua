import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

/**
 * Faixa de impacto — apenas dados confirmados, em composição editorial
 * (sem cara de dashboard). Fundo marrom, texto claro (contraste alto).
 */
export function ImpactStrip() {
  const { impact, location } = siteConfig;

  const items = [
    { big: impact.mealsPerWeek, small: impact.mealsLabel },
    { big: "Segundas", small: impact.time },
    { big: `Desde ${impact.sinceYear}`, small: "associação registrada e ativa" },
    { big: location.region, small: "área de atuação" },
  ];

  return (
    <section aria-label="Impacto da associação" className="bg-brown text-white">
      <div className="container-site py-12 sm:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.big}
              delay={i * 90}
              className="border-l border-white/20 pl-5"
            >
              <p className="font-display text-3xl leading-none sm:text-4xl">
                {item.big}
              </p>
              <p className="mt-2 text-sm text-white/75">{item.small}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-white/60">
          Ação semanal nas proximidades do Viaduto da Chico Mendes, em{" "}
          {location.shortLabel}.
        </p>
      </div>
    </section>
  );
}
