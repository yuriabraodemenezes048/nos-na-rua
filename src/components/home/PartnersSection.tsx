import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { partners, type Partner } from "@/data/site";

/**
 * Parceiros — quem constrói o trabalho junto ao Nós na Rua.
 *
 * Composição editorial e espaçada: as logos originais (sem recolorização
 * nem grayscale) são as protagonistas, dentro de uma área com altura fixa
 * (object-contain) para equilibrar o peso visual entre marcas muito
 * diferentes entre si. Cada item tem a mesma largura responsiva (2 colunas
 * no celular, 3 no tablet, 4 no desktop) e o flex-wrap centralizado resolve
 * sozinho a última linha incompleta, qualquer que seja o número de
 * parceiros — sem precisar hardcodar a quantidade por linha.
 */
const ITEM_WIDTH =
  "w-[calc(50%-0.75rem)] sm:w-[calc(33.333%-1.667rem)] lg:w-[calc(25%-2.625rem)]";

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
            O trabalho do Nós na Rua também é construído com empresas,
            projetos e organizações que escolhem caminhar ao nosso lado.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-10 sm:gap-x-10 lg:gap-x-14"
        >
          {partners.map((partner) => (
            <PartnerItem key={partner.id} partner={partner} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function PartnerItem({ partner }: { partner: Partner }) {
  const role = partner.role ?? "parceira";

  if (!partner.logo) {
    // Sem logo oficial ainda — bloco tipográfico no mesmo sistema visual,
    // com a mesma largura e altura reservadas às logos ao lado.
    return (
      <a
        href={partner.href}
        target={partner.href ? "_blank" : undefined}
        rel={partner.href ? "noopener noreferrer" : undefined}
        className={`group flex h-16 flex-col items-center justify-center text-center transition-transform duration-200 hover:-translate-y-0.5 sm:h-20 ${ITEM_WIDTH}`}
      >
        <span className="font-display text-[0.8125rem] font-semibold leading-tight text-ink sm:text-[0.9375rem]">
          {partner.name}
        </span>
        {partner.instagramHandle && (
          <span className="mt-1 text-xs text-brown underline-offset-4 group-hover:underline">
            {partner.instagramHandle}
          </span>
        )}
        {partner.description && (
          <span className="mt-0.5 text-xs text-muted">
            {partner.description}
          </span>
        )}
      </a>
    );
  }

  const logo = (
    <div className="flex h-14 items-center justify-center sm:h-16 lg:h-20">
      <Image
        src={partner.logo}
        alt={`${partner.name} — ${role} do Nós na Rua`}
        width={partner.logoWidth ?? 400}
        height={partner.logoHeight ?? 200}
        sizes="(max-width: 640px) 40vw, 208px"
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );

  if (partner.href) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.02] ${ITEM_WIDTH}`}
      >
        {logo}
      </a>
    );
  }

  return <div className={ITEM_WIDTH}>{logo}</div>;
}
