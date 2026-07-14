import { SectionHeading } from "@/components/SectionHeading";
import { DemoTag } from "@/components/DemoNotice";
import { HandshakeIcon, CheckIcon, WhatsAppIcon } from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";

/**
 * SEÇÃO 8 — EMPRESAS PARCEIRAS
 * Três níveis conceituais (Bronze, Prata, Gold), SEM valores fixos inventados,
 * mais uma área para logos e o botão "Quero apoiar como empresa".
 */
const niveis = [
  {
    nome: "Parceiro Bronze",
    cor: "border-terra-200",
    destaque: false,
    beneficios: [
      "Apoio mensal à causa",
      "Reconhecimento no site",
      "Selo digital de empresa parceira",
    ],
  },
  {
    nome: "Parceiro Prata",
    cor: "border-stone/30",
    destaque: true,
    beneficios: [
      "Tudo do nível Bronze",
      "Destaque na área de apoiadores",
      "Presença em campanhas selecionadas",
    ],
  },
  {
    nome: "Parceiro Gold",
    cor: "border-verde-300",
    destaque: false,
    beneficios: [
      "Tudo do nível Prata",
      "Maior visibilidade institucional",
      "Fortalecimento contínuo da causa",
    ],
  },
];

export function Empresas() {
  return (
    <section id="empresas" className="py-16 sm:py-24">
      <div className="container-site flex flex-col gap-12">
        <SectionHeading
          eyebrow="Empresas parceiras"
          title="Sua empresa pode fazer parte disso"
          subtitle="Empresas podem apoiar mensalmente a ONG e receber reconhecimento institucional. Os níveis abaixo são uma estrutura conceitual."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {niveis.map((n) => (
            <div
              key={n.nome}
              className={`relative flex flex-col gap-5 rounded-2xl border-2 bg-white p-6 shadow-card ${n.cor} ${
                n.destaque ? "lg:-translate-y-2 lg:shadow-soft" : ""
              }`}
            >
              {n.destaque && (
                <span className="absolute -top-3 left-6 rounded-full bg-verde-500 px-3 py-1 text-xs font-semibold text-white">
                  Mais escolhido
                </span>
              )}
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sand text-terra-500">
                  <HandshakeIcon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-ink">{n.nome}</h3>
              </div>
              <div>
                <DemoTag label="Valores definidos pela ONG" />
              </div>
              <ul className="flex flex-col gap-3">
                {n.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-stone">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-verde-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(site.messages.company)}
                target="_blank"
                rel="noopener noreferrer"
                className={n.destaque ? "btn-primary mt-auto" : "btn-secondary mt-auto"}
              >
                Quero apoiar como empresa
              </a>
            </div>
          ))}
        </div>

        {/* Área para logos de parceiros */}
        <div className="flex flex-col gap-5 rounded-2xl border border-ink/5 bg-sand/50 p-6 sm:p-8">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-lg font-semibold text-ink">
              Empresas que já apoiam
            </h3>
            <DemoTag label="Espaço para os logos das empresas parceiras" />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="grid h-20 place-items-center rounded-xl border border-dashed border-ink/15 bg-white text-sm font-medium text-stone"
              >
                Logo {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* CTA reforçado */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-stone">
            Quer conversar sobre uma parceria sob medida? Fale com a gente.
          </p>
          <a
            href={whatsappLink(site.messages.company)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar sobre parceria
          </a>
        </div>
      </div>
    </section>
  );
}
