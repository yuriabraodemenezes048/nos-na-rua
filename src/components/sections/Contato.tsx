import { SectionHeading } from "@/components/SectionHeading";
import {
  WhatsAppIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ClockIcon,
} from "@/components/Icons";
import {
  site,
  whatsappLink,
  instagramLink,
  emailLink,
} from "@/lib/site";

/**
 * SEÇÃO 10 — CONTATO
 * Canais diretos, simples e amigáveis.
 */
export function Contato() {
  const infos = [
    {
      icon: MailIcon,
      label: "E-mail",
      value: site.contact.email,
      href: emailLink(),
    },
    {
      icon: PhoneIcon,
      label: "Telefone",
      value: site.contact.phone,
      href: `tel:${site.contact.phone.replace(/\D/g, "")}`,
    },
    {
      icon: PinIcon,
      label: "Área de atuação",
      value: site.city,
      href: undefined,
    },
    {
      icon: ClockIcon,
      label: "Horário de atendimento",
      value: site.contact.hours,
      href: undefined,
    },
  ];

  return (
    <section id="contato" className="py-16 sm:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="Contato"
            title="Quer ajudar ou tirar dúvidas?"
            subtitle="Estamos por aqui para conversar. Escolha o canal que preferir."
          />

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={instagramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <InstagramIcon className="h-5 w-5 text-terra-500" />
              Instagram
            </a>
          </div>
        </div>

        {/* Cartões de informações */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {infos.map((info) => {
            const content = (
              <>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-verde-50 text-verde-500">
                  <info.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone">
                    {info.label}
                  </p>
                  <p className="truncate font-medium text-ink">{info.value}</p>
                </div>
              </>
            );

            return info.href ? (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-3 rounded-2xl border border-ink/5 bg-white p-4 shadow-sm transition hover:border-verde-200"
              >
                {content}
              </a>
            ) : (
              <div
                key={info.label}
                className="flex items-center gap-3 rounded-2xl border border-ink/5 bg-white p-4 shadow-sm"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
