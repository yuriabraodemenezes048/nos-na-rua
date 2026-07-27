import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";
import { whatsappUrl, whatsappMessages } from "@/data/site";

/**
 * Como ajudar — quatro formas de contribuir. A doação por PIX é destacada
 * (bloco marrom); as demais abrem o WhatsApp com mensagens específicas.
 */
const ways = [
  {
    title: "Doe pelo PIX",
    text: "A forma mais rápida de apoiar as ações. Contribua com qualquer valor.",
    cta: "Doar pelo PIX",
    href: "/doe",
    external: false,
    featured: true,
  },
  {
    title: "Doe alimentos e itens",
    text: "Alimentos, roupas e itens essenciais para as entregas e projetos.",
    cta: "Doar itens",
    href: whatsappUrl(whatsappMessages.items),
    external: true,
  },
  {
    title: "Seja voluntário",
    text: "Some sua presença às ações e à mobilização da associação.",
    cta: "Ser voluntário",
    href: whatsappUrl(whatsappMessages.volunteer),
    external: true,
  },
  {
    title: "Torne sua empresa parceira",
    text: "Contribua com recursos, produtos, serviços, logística ou divulgação.",
    cta: "Ser empresa parceira",
    href: "#parceria",
    external: false,
  },
];

export function DonationWaysSection() {
  return (
    <section id="como-ajudar" className="section bg-sand/50">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="kicker">Como ajudar</p>
          <h2 className="section-title mt-4">Você também pode fazer parte</h2>
          <p className="section-lead mt-4">
            A transformação acontece quando cada pessoa contribui da maneira que
            pode.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ways.map((way, i) => (
            <Reveal
              key={way.title}
              as="article"
              delay={i * 80}
              className={`flex flex-col rounded-2xl p-7 ${
                way.featured
                  ? "bg-brown text-white shadow-soft"
                  : "border border-sand bg-cream"
              }`}
            >
              <h3 className="font-display text-xl">{way.title}</h3>
              <p
                className={`mt-2 flex-1 leading-relaxed ${
                  way.featured ? "text-white/85" : "text-muted"
                }`}
              >
                {way.text}
              </p>

              {way.external ? (
                <a
                  href={way.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-brown underline-offset-4 hover:underline"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {way.cta}
                </a>
              ) : way.featured ? (
                <Link href={way.href} className="btn-on-brown mt-6 w-full sm:w-auto">
                  {way.cta}
                </Link>
              ) : (
                <a
                  href={way.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brown underline-offset-4 hover:underline"
                >
                  {way.cta}
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
