import Image from "next/image";
import { Reveal } from "@/components/Reveal";

/**
 * Galeria documental — grade estilo masonry (via CSS columns, sem JS) com
 * fotos reais das ações. Reforça presença e organização sem repetir as
 * fotos já usadas em destaque nas seções acima.
 */
const photos = [
  {
    src: "/acoes/tapera-acao.webp",
    alt: "Voluntários e famílias durante ação comunitária na Tapera, com roupas e calçados organizados para doação.",
    width: 1672,
    height: 941,
  },
  {
    src: "/acoes/mobilizacao-caixa-carro.webp",
    alt: "Voluntária carregando caixa de doações até o carro antes de uma ação do Nós na Rua.",
    width: 1448,
    height: 1086,
  },
  {
    src: "/acoes/marmita-entrega.webp",
    alt: "Voluntária entregando uma marmita durante a ação noturna semanal do Nós na Rua.",
    width: 1536,
    height: 1536,
  },
  {
    src: "/acoes/triagem-roupas-tapera.webp",
    alt: "Voluntárias organizando roupas doadas durante ação comunitária na Tapera.",
    width: 1448,
    height: 1086,
  },
  {
    src: "/acoes/doacoes-cestas-sofa.webp",
    alt: "Cestas básicas organizadas para distribuição às famílias cadastradas.",
    width: 1448,
    height: 1086,
  },
  {
    src: "/acoes/marmita-caixa.webp",
    alt: "Voluntária entregando marmita ao lado da caixa térmica com a identidade do Nós na Rua.",
    width: 1536,
    height: 1536,
  },
];

export function GallerySection() {
  return (
    <section id="galeria" className="section pt-0 sm:pt-0">
      <div className="container-site">
        <Reveal className="max-w-2xl">
          <p className="kicker">Galeria</p>
          <h2 className="section-title mt-4">O trabalho, em imagens.</h2>
          <p className="section-lead mt-4">
            Registros reais das ações semanais e das campanhas do Nós na Rua.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 columns-2 gap-3 sm:columns-3 sm:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="mb-3 break-inside-avoid overflow-hidden rounded-2xl bg-sand sm:mb-4"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 320px"
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
