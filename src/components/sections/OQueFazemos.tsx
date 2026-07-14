import { SectionHeading } from "@/components/SectionHeading";
import {
  HandsHeartIcon,
  BoxIcon,
  SparkleIcon,
  MegaphoneIcon,
  UsersIcon,
  HandshakeIcon,
} from "@/components/Icons";

/**
 * SEÇÃO 3 — O QUE FAZEMOS
 * Frentes de atuação em cartões simples: ícone + título + descrição curta.
 */
const frentes = [
  {
    icon: HandsHeartIcon,
    title: "Apoio social",
    text: "Cuidado e acolhimento a pessoas em situação de vulnerabilidade.",
  },
  {
    icon: BoxIcon,
    title: "Distribuição de doações",
    text: "Alimentos, roupas e itens essenciais chegam a quem precisa.",
  },
  {
    icon: SparkleIcon,
    title: "Ações solidárias",
    text: "Campanhas e mutirões realizados ao longo do ano.",
  },
  {
    icon: MegaphoneIcon,
    title: "Mobilização da comunidade",
    text: "Reunimos vizinhos, apoiadores e parceiros em torno da causa.",
  },
  {
    icon: UsersIcon,
    title: "Apoio de voluntários",
    text: "Pessoas dedicando tempo e carinho para transformar realidades.",
  },
  {
    icon: HandshakeIcon,
    title: "Parcerias com empresas",
    text: "Empresas que apoiam a causa e fortalecem o trabalho social.",
  },
];

export function OQueFazemos() {
  return (
    <section id="o-que-fazemos" className="bg-sand/60 py-16 sm:py-24">
      <div className="container-site flex flex-col gap-12">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Frentes de atuação da ONG"
          subtitle="Um resumo simples das principais formas como o trabalho acontece no dia a dia."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {frentes.map((f) => (
            <article key={f.title} className="card hover:-translate-y-0.5 hover:shadow-soft">
              <span className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-verde-50 text-verde-500">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-1.5 text-stone">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
