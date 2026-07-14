import { SectionHeading } from "@/components/SectionHeading";
import { PhotoFrame } from "@/components/PhotoFrame";
import { DemoTag } from "@/components/DemoNotice";

/**
 * SEÇÃO 5 — PROJETOS / AÇÕES
 * Cartões demonstrativos com espaço para fotos e textos reais no futuro.
 */
const projetos = [
  {
    tag: "Ação",
    title: "Ação solidária 1",
    text: "Espaço para descrever uma ação realizada pela ONG, com fotos e resultados.",
    tone: "verde" as const,
  },
  {
    tag: "Projeto",
    title: "Projeto 2",
    text: "Aqui entrará um projeto contínuo da instituição, explicado de forma simples.",
    tone: "terra" as const,
  },
  {
    tag: "Campanha",
    title: "Campanha solidária",
    text: "Registro de uma campanha de arrecadação, com data, local e impacto.",
    tone: "sand" as const,
  },
  {
    tag: "Mobilização",
    title: "Mobilização comunitária",
    text: "Momento em que a comunidade se uniu em torno da causa.",
    tone: "verde" as const,
  },
];

export function Projetos() {
  return (
    <section id="projetos" className="bg-sand/60 py-16 sm:py-24">
      <div className="container-site flex flex-col gap-12">
        <SectionHeading
          eyebrow="Projetos e ações"
          title="O trabalho que acontece na prática"
          subtitle="Esta área será atualizada com registros reais, projetos e campanhas da ONG."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projetos.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-card transition hover:shadow-soft"
            >
              <PhotoFrame
                label="Foto real do projeto"
                aspect="aspect-[16/9]"
                tone={p.tone}
                className="rounded-none border-0"
              />
              <div className="flex flex-col gap-2 p-5">
                <DemoTag label={p.tag} />
                <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                <p className="text-stone">{p.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-stone">
          <span className="font-medium text-ink">Observação:</span> os projetos
          acima são exemplos. Serão substituídos pelos registros oficiais da ONG.
        </p>
      </div>
    </section>
  );
}
