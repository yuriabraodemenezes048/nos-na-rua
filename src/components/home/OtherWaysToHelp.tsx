import { ArrowRightIcon } from "@/components/Icons";
import { whatsappUrl, whatsappMessages } from "@/data/site";

/**
 * Outras formas de ajudar — três caminhos, todos levando ao WhatsApp
 * com mensagens diferentes já preenchidas.
 */
const ways = [
  {
    title: "Doe itens",
    text: "Combine com a equipe a entrega de alimentos, roupas ou materiais necessários.",
    message: whatsappMessages.items,
    label: "Falar sobre doação de itens",
  },
  {
    title: "Seja voluntário",
    text: "Fale com a associação para conhecer as necessidades atuais.",
    message: whatsappMessages.volunteer,
    label: "Falar sobre voluntariado",
  },
  {
    title: "Apoie como empresa",
    text: "Empresas podem contribuir com produtos, serviços, estrutura ou divulgação.",
    message: whatsappMessages.partnership,
    label: "Falar sobre parceria",
  },
];

export function OtherWaysToHelp() {
  return (
    <section className="section bg-sand/40">
      <div className="container-site">
        <h2 className="section-title">Existem outras formas de fazer parte</h2>

        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {ways.map((way) => (
            <li key={way.title} className="flex flex-col">
              <h3 className="font-display text-lg">{way.title}</h3>
              <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                {way.text}
              </p>
              <a
                href={whatsappUrl(way.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brown underline underline-offset-4 hover:text-brown-dark"
              >
                {way.label}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
