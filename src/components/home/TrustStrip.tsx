import { siteConfig } from "@/data/site";

/**
 * Faixa compacta de confiança — dados cadastrais reais, sem virar cards.
 * No celular quebra em duas colunas de forma organizada.
 */
export function TrustStrip() {
  const items = [
    siteConfig.organization.legalNature,
    `CNPJ ${siteConfig.organization.cnpj}`,
    `Registrada desde ${siteConfig.organization.foundedYear}`,
    siteConfig.location.shortLabel,
  ];

  return (
    <section aria-label="Informações cadastrais da associação" className="border-y border-sand bg-sand/40">
      <div className="container-site py-5">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-center text-[0.8125rem] text-muted sm:flex sm:items-center sm:justify-center sm:gap-0 sm:text-sm">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                index > 0
                  ? "sm:border-l sm:border-brown/15 sm:pl-6 sm:ml-6"
                  : undefined
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
