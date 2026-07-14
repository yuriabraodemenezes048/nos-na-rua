import { SectionHeading } from "@/components/SectionHeading";
import { DemoTag } from "@/components/DemoNotice";
import {
  AppleIcon,
  SoapIcon,
  TruckIcon,
  SparkleIcon,
  BoxIcon,
  SeedIcon,
  ShieldCheckIcon,
} from "@/components/Icons";

/**
 * SEÇÃO 4 — PARA ONDE VAI SUA DOAÇÃO
 * Mostra, de forma clara e visual, os possíveis destinos das doações.
 * Sem percentuais ou números inventados — apenas a estrutura, pronta para
 * receber os dados oficiais depois.
 */
const destinos = [
  {
    icon: AppleIcon,
    title: "Alimentação",
    text: "Refeições e cestas para quem está com fome.",
  },
  {
    icon: SoapIcon,
    title: "Higiene e itens essenciais",
    text: "Kits de higiene, roupas e cobertores.",
  },
  {
    icon: TruckIcon,
    title: "Apoio logístico",
    text: "Transporte e distribuição das doações.",
  },
  {
    icon: SparkleIcon,
    title: "Ações e projetos sociais",
    text: "Campanhas e atividades com a comunidade.",
  },
  {
    icon: BoxIcon,
    title: "Materiais de apoio",
    text: "Recursos para realizar cada ação com dignidade.",
  },
  {
    icon: SeedIcon,
    title: "Ampliação das ações",
    text: "Alcançar mais pessoas e novos lugares.",
  },
];

export function ParaOndeVai() {
  return (
    <section id="doacao-destino" className="py-16 sm:py-24">
      <div className="container-site flex flex-col gap-12">
        <SectionHeading
          eyebrow="Para onde vai sua doação"
          title="Sua contribuição vira cuidado concreto"
          subtitle="Cada doação se transforma em apoio real. Veja os destinos possíveis dos recursos."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinos.map((d) => (
            <div
              key={d.title}
              className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-card"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-terra-50 text-terra-500">
                <d.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{d.title}</h3>
                <p className="mt-1 text-sm text-stone">{d.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Frase forte sobre transparência */}
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-verde-100 bg-verde-50/70 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-verde-500 shadow-sm">
            <ShieldCheckIcon className="h-6 w-6" />
          </span>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold leading-snug text-ink">
              Transparência é parte essencial deste projeto. Aqui a ONG poderá
              mostrar, de forma clara, como os recursos são utilizados.
            </p>
            <DemoTag label="Espaço preparado para receber a prestação de contas oficial" />
          </div>
        </div>
      </div>
    </section>
  );
}
