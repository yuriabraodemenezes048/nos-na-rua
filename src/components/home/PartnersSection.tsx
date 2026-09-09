import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { partners } from "@/data/site";

/**
 * Parceiros — quem constrói o trabalho junto ao Nós na Rua.
 *
 * Apresentação editorial e espaçada, pronta para receber logos depois (basta
 * preencher `logo` em `data/site.ts` — sem alterar este componente). Sem
 * caixas nem placeholders visíveis; o grid se adapta de 1 a muitos parceiros,
 * sem distorcer nenhuma logo (object-fit: contain).
 */
export function PartnersSection() {
  return (
    <section id="parceiros" className="section bg-sand/40">
      <div className="container-site max-w-4xl text-center">
        <Reveal>
          <p className="kicker justify-center">Parceiros</p>
          <h2 className="section-title mt-4">
            Quem fortalece essa missão com a gente.
          </h2>
          <p className="section-lead mx-auto mt-4">
            O trabalho do Nós na Rua também é construído com empresas, projetos,
            organizações e pessoas que escolhem caminhar ao nosso lado.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-10"
        >
          {partners.map((partner) => {
            const content = partner.logo ? (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.logoWidth ?? 200}
                height={partner.logoHeight ?? 100}
                className="h-14 w-auto object-contain opacity-90 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0 sm:h-16"
              />
            ) : (
              <p className="font-display text-lg leading-snug text-ink">
                {partner.name}
              </p>
            );

            return (
              <div key={partner.name} className="max-w-[16rem]">
                {partner.url ? (
                  <a href={partner.url} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  content
                )}
                <p className="mt-1 text-sm text-muted">{partner.description}</p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
