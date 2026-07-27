import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { needCategories } from "@/data/donations";
import { whatsappUrl, whatsappMessages } from "@/data/site";

/**
 * O que faz diferença agora — necessidades de doação por categoria.
 * Usa <details>/<summary> nativos: acessível por teclado e funciona sem JS.
 */
export function DonationNeeds() {
  return (
    <section id="necessidades" className="section">
      <div className="container-site max-w-3xl">
        <Reveal>
          <p className="kicker">Necessidades atuais</p>
          <h2 className="section-title mt-4">O que faz diferença agora</h2>
          <p className="section-lead mt-4">
            As necessidades mudam ao longo do ano. Estes são alguns dos itens
            que ajudam a manter nossas ações.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-8 divide-y divide-sand overflow-hidden rounded-2xl border border-sand">
          {needCategories.map((cat, index) => (
            <details key={cat.id} name="necessidades" open={index === 0} className="group bg-cream">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-lg text-ink transition-colors hover:bg-sand/40">
                {cat.title}
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brown/25 text-brown transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-5">
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-sand px-3 py-1 text-sm text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {cat.note && (
                  <p className="mt-3 text-sm text-muted">{cat.note}</p>
                )}
              </div>
            </details>
          ))}
        </Reveal>

        <a
          href={whatsappUrl(whatsappMessages.needs)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Combinar uma doação
        </a>
      </div>
    </section>
  );
}
