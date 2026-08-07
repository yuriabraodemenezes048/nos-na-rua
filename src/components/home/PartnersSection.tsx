import { Reveal } from "@/components/Reveal";
import { partners } from "@/data/site";

/**
 * Parceiros — quem constrói o trabalho junto ao Nós na Rua.
 * Apresentação editorial e espaçada, pronta para receber logos depois
 * (basta trocar o nome por uma imagem). Sem caixas nem placeholders visíveis;
 * funciona bem com um ou vários parceiros.
 */
export function PartnersSection() {
  return (
    <section id="parceiros" className="section bg-sand/40">
      <div className="container-site max-w-3xl text-center">
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
          {partners.map((partner) => (
            <div key={partner.name} className="max-w-[16rem]">
              <p className="font-display text-lg leading-snug text-ink">
                {partner.name}
              </p>
              <p className="mt-1 text-sm text-muted">{partner.note}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
