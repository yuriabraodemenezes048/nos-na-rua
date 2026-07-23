import Image from "next/image";
import Link from "next/link";
import { currentCampaign } from "@/data/campaigns";
import { whatsappUrl, whatsappMessages } from "@/data/site";

/**
 * Campanha atual.
 * Só é renderizada quando existe uma campanha real e ativa nos dados —
 * caso contrário o componente não devolve nada (sem "em breve", sem metas
 * vazias, sem barra de progresso zerada).
 */
export function CurrentCampaign() {
  const campaign = currentCampaign;
  if (!campaign.active || !campaign.title) return null;

  return (
    <section className="section">
      <div className="container-site">
        <div className="overflow-hidden rounded-2xl border border-sand">
          {campaign.image && (
            <Image
              src={campaign.image}
              alt={campaign.imageAlt}
              width={1200}
              height={600}
              className="h-56 w-full object-cover sm:h-72"
            />
          )}

          <div className="p-6 sm:p-8">
            <p className="text-[0.8125rem] font-semibold uppercase tracking-wide text-brown">
              Campanha atual
            </p>
            <h2 className="section-title mt-2">{campaign.title}</h2>

            {campaign.description && (
              <p className="section-lead mt-4">{campaign.description}</p>
            )}

            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-[0.9375rem]">
              {campaign.deadline && (
                <div>
                  <dt className="text-muted">Prazo</dt>
                  <dd className="font-medium text-ink">{campaign.deadline}</dd>
                </div>
              )}
              {campaign.goal && (
                <div>
                  <dt className="text-muted">Objetivo</dt>
                  <dd className="font-medium text-ink">{campaign.goal}</dd>
                </div>
              )}
            </dl>

            {campaign.items.length > 0 && (
              <div className="mt-6">
                <h3 className="font-display text-base">Itens necessários</h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {campaign.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-sand px-3 py-1 text-sm text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/doe" className="btn-primary">
                Contribuir com a campanha
              </Link>
              <a
                href={whatsappUrl(whatsappMessages.items)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Doar itens pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
