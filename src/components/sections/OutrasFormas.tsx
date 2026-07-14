import { SectionHeading } from "@/components/SectionHeading";
import {
  UsersIcon,
  BoxIcon,
  MegaphoneIcon,
  HandshakeIcon,
  SparkleIcon,
} from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";

/**
 * SEÇÃO 9 — OUTRAS FORMAS DE AJUDAR
 * Mostra que a ajuda não precisa ser só financeira.
 */
const formas = [
  {
    icon: UsersIcon,
    title: "Seja voluntário(a)",
    text: "Doe seu tempo e participe das ações da ONG.",
  },
  {
    icon: BoxIcon,
    title: "Doe itens",
    text: "Alimentos, roupas, cobertores e itens de higiene.",
  },
  {
    icon: MegaphoneIcon,
    title: "Divulgue a causa",
    text: "Compartilhe o site e as redes com quem pode ajudar.",
  },
  {
    icon: HandshakeIcon,
    title: "Parceria empresarial",
    text: "Aproxime sua empresa e fortaleça o trabalho social.",
  },
  {
    icon: SparkleIcon,
    title: "Participe das campanhas",
    text: "Some-se aos mutirões e ações solidárias.",
  },
];

export function OutrasFormas() {
  return (
    <section id="ajudar" className="bg-sand/60 py-16 sm:py-24">
      <div className="container-site flex flex-col gap-12">
        <SectionHeading
          eyebrow="Outras formas de ajudar"
          title="Ajudar vai muito além de doar dinheiro"
          subtitle="Existem várias maneiras de fazer parte. Escolha a que mais combina com você."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {formas.map((f) => (
            <div key={f.title} className="card flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-verde-50 text-verde-500">
                <f.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold text-ink">{f.title}</h3>
                <p className="mt-1 text-sm text-stone">{f.text}</p>
              </div>
            </div>
          ))}

          {/* Card CTA voluntariado */}
          <div className="flex flex-col justify-center gap-3 rounded-2xl bg-verde-500 p-6 text-white shadow-soft">
            <h3 className="text-lg font-semibold">Quer começar hoje?</h3>
            <p className="text-sm text-white/85">
              Fale com a gente no WhatsApp e descubra como participar.
            </p>
            <a
              href={whatsappLink(site.messages.volunteer)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-verde-600 transition hover:bg-verde-50"
            >
              Quero ser voluntário(a)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
