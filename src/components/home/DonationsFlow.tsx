import Image from "next/image";
import { Reveal } from "@/components/Reveal";

/**
 * Para onde vão as doações — transparência de uso, em linguagem simples.
 * Lista curta ao lado de uma foto real (cestas prontas para distribuição),
 * sem gráficos nem aparência burocrática.
 */
const destinations = [
  { title: "Alimentação", desc: "Cestas básicas e insumos para as marmitas semanais." },
  { title: "Higiene", desc: "Itens de higiene pessoal para as famílias atendidas." },
  { title: "Roupas e agasalhos", desc: "Triagem e distribuição de roupas, calçados e cobertores." },
  { title: "Adote uma Família", desc: "Apoio mensal a famílias cadastradas no projeto." },
  { title: "Campanhas sazonais", desc: "Ações como Páscoa, Dia das Crianças e Natal." },
  { title: "Logística das entregas", desc: "Embalagens, transporte e materiais das ações." },
];

export function DonationsFlow() {
  return (
    <section id="para-onde-vao" className="section bg-sand/40">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="kicker">Para onde vão as doações</p>
          <h2 className="section-title mt-4">Cada doação vira ação concreta.</h2>
          <p className="section-lead mt-4">
            As doações recebidas ajudam a manter as ações e os projetos do
            Nós na Rua, além da aquisição de materiais, insumos e recursos
            necessários para cada iniciativa.
          </p>

          <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {destinations.map((d) => (
              <div key={d.title} className="border-t border-brown/15 pt-4">
                <dt className="font-display text-lg text-ink">{d.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">
                  {d.desc}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal variant="right" delay={100}>
          <Image
            src="/acoes/doacoes-cestas-sofa.webp"
            alt="Cestas básicas organizadas para distribuição, ao lado do banner da campanha Adote uma Família."
            width={1448}
            height={1086}
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="rounded-3xl shadow-lift"
          />
        </Reveal>
      </div>
    </section>
  );
}
