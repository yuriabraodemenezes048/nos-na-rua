import { Reveal } from "@/components/Reveal";
import { Character } from "@/components/Character";
import { WhatsAppIcon } from "@/components/Icons";
import { whatsappUrl, whatsappMessages } from "@/data/site";

/**
 * Parceria empresarial — seção institucional forte, com o personagem de
 * blazer (tom empresarial). Inspirada no post de parceria da associação.
 */
const contributions = [
  "Recursos",
  "Alimentos",
  "Roupas",
  "Itens de higiene",
  "Serviços",
  "Logística",
  "Divulgação",
];

export function BusinessPartnershipSection() {
  return (
    <section id="parceria" className="section">
      <div className="container-site">
        <div className="overflow-hidden rounded-3xl border border-sand bg-sand/40">
          <div className="grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[0.7fr_1fr] lg:gap-14 lg:p-14">
            <Reveal variant="left" className="order-2 mx-auto w-full max-w-[16rem] lg:order-1">
              <Character who="blazer" tone="cream" float objectPosition="center top" />
            </Reveal>

            <Reveal variant="right" className="order-1 lg:order-2">
              <p className="kicker">Parceria empresarial</p>
              <h2 className="section-title mt-4">
                Sua empresa pode fazer parte disso
              </h2>
              <p className="section-lead mt-4">
                Empresas podem contribuir com recursos, alimentos, roupas, itens
                de higiene, serviços, logística ou divulgação.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {contributions.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-brown/15 bg-cream px-3.5 py-1.5 text-sm text-brown"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl(whatsappMessages.partnership)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Conversar sobre uma parceria
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
