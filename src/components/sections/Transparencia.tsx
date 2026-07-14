import { SectionHeading } from "@/components/SectionHeading";
import {
  DocumentIcon,
  CameraIcon,
  ChartIcon,
  ChatIcon,
  ShieldCheckIcon,
  SparkleIcon,
} from "@/components/Icons";

/**
 * SEÇÃO 6 — TRANSPARÊNCIA E CONFIANÇA
 * Blocos de credibilidade + selos/indicadores, sem parecer exagerado.
 */
const blocos = [
  {
    icon: DocumentIcon,
    title: "Prestação de contas",
    text: "Espaço para relatórios e demonstração do uso dos recursos.",
  },
  {
    icon: CameraIcon,
    title: "Registros das ações",
    text: "Fotos reais das atividades realizadas pela ONG.",
  },
  {
    icon: ChartIcon,
    title: "Atualização de campanhas",
    text: "Acompanhamento do andamento de cada campanha.",
  },
  {
    icon: ChatIcon,
    title: "Comunicação com doadores",
    text: "Canal aberto para dúvidas e retorno a quem apoia.",
  },
];

const selos = [
  { icon: ShieldCheckIcon, label: "Transparência" },
  { icon: CameraIcon, label: "Acompanhamento" },
  { icon: SparkleIcon, label: "Impacto social" },
  { icon: DocumentIcon, label: "Prestação de contas" },
];

export function Transparencia() {
  return (
    <section id="transparencia" className="py-16 sm:py-24">
      <div className="container-site flex flex-col gap-12">
        <SectionHeading
          eyebrow="Transparência e confiança"
          title="Confiança se constrói mostrando o trabalho"
          subtitle="Este site será o canal oficial para demonstrar as ações da ONG e manter a confiança de quem apoia."
        />

        {/* Selos / indicadores */}
        <div className="flex flex-wrap justify-center gap-3">
          {selos.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-2 rounded-full border border-verde-100 bg-white px-4 py-2 text-sm font-semibold text-verde-600 shadow-sm"
            >
              <s.icon className="h-4 w-4" />
              {s.label}
            </span>
          ))}
        </div>

        {/* Blocos de credibilidade */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blocos.map((b) => (
            <div key={b.title} className="card">
              <span className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-terra-50 text-terra-500">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="text-base font-semibold text-ink">{b.title}</h3>
              <p className="mt-1.5 text-sm text-stone">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
