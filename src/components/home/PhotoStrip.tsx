import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { InstagramIcon, ArrowRightIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

/**
 * Faixa fotográfica curta (não é uma galeria longa): uma imagem maior e duas
 * menores, com link para o Instagram. Registros complementares das ações.
 */
const photos = [
  {
    src: "/acoes/equipe.webp",
    alt: "Equipe de voluntários da Associação Nós na Rua reunida durante ação social.",
    width: 1456,
    height: 900,
    lead: true,
  },
  {
    src: "/acoes/marmita-caixa.webp",
    alt: "Entrega de marmita ao lado da caixa térmica com a identidade da Nós na Rua.",
    width: 1536,
    height: 1536,
    lead: false,
  },
  {
    src: "/acoes/tapera-roupas.webp",
    alt: "Roupas doadas organizadas durante ação comunitária da Nós na Rua na Tapera.",
    width: 345,
    height: 300,
    lead: false,
  },
];

export function PhotoStrip() {
  return (
    <section aria-labelledby="faixa-fotos" className="section pt-0">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="faixa-fotos" className="section-title max-w-xl">
            É assim que a solidariedade acontece
          </h2>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <InstagramIcon className="h-5 w-5" />
            Veja mais no Instagram
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <Reveal className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {photos.map((p) => (
            <figure
              key={p.src}
              className={`overflow-hidden rounded-2xl border border-sand ${
                p.lead ? "col-span-2" : ""
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                loading="lazy"
                sizes={p.lead ? "(max-width: 640px) 100vw, 40vw" : "(max-width: 640px) 50vw, 25vw"}
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
