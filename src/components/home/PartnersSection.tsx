import { Reveal } from "@/components/Reveal";
import { LeafSprig } from "@/components/brand/Decor";
import { partners } from "@/data/site";

/**
 * Parceiros — apresenta quem constrói o trabalho junto ao Nós na Rua.
 * Estrutura preparada para receber logos depois; por enquanto os parceiros
 * confirmados aparecem pelo nome (sem logos falsas nem caixas tracejadas).
 */
export function PartnersSection() {
  return (
    <section id="parceiros" className="section">
      <div className="container-site max-w-4xl">
        <Reveal className="relative">
          <LeafSprig
            aria-hidden="true"
            className="absolute -right-2 -top-10 hidden h-24 w-16 text-brown/12 sm:block"
          />
          <p className="kicker">Parceiros</p>
          <h2 className="section-title mt-4">
            Quem fortalece essa missão com a gente.
          </h2>
          <p className="section-lead mt-4">
            O trabalho do Nós na Rua também é construído com empresas, projetos,
            organizações e pessoas que escolhem caminhar ao nosso lado.
          </p>
        </Reveal>

        <Reveal
          delay={100}
          className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-2"
        >
          {partners.map((partner) => (
            <div key={partner.name} className="bg-cream p-6">
              <p className="font-display text-lg leading-snug text-ink">
                {partner.name}
              </p>
              <p className="mt-1 text-sm text-muted">{partner.note}</p>
            </div>
          ))}
          <div className="flex items-center bg-cream p-6">
            <p className="text-[0.9375rem] leading-relaxed text-muted">
              Novos parceiros serão apresentados aqui conforme integram a rede.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
