/**
 * Registros reais das ações — fotografias documentais da associação.
 *
 * Privacidade: todas as imagens vêm de um registro real autorizado da ação
 * na comunidade da Tapera, com rostos desfocados na origem. Não publicar
 * fotos com pessoas identificáveis sem autorização (ver CONTENT_PENDING.md).
 *
 * A seção só é renderizada quando há itens. Máximo recomendado: 6.
 */

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/acoes/tapera-calcados.webp",
    alt: "Calçados doados organizados no chão durante a ação da Nós na Rua na Tapera.",
    caption: "Calçados doados, prontos para as famílias.",
    width: 545,
    height: 300,
  },
  {
    src: "/acoes/tapera-familias.webp",
    alt: "Famílias reunidas junto aos banners da campanha Adote uma Família, com rostos preservados.",
    caption: "Famílias no espaço comunitário da Tapera.",
    width: 620,
    height: 210,
  },
  {
    src: "/acoes/tapera-roupas.webp",
    alt: "Roupas doadas dobradas sobre cadeiras, organizadas para a distribuição.",
    caption: "Roupas separadas para a distribuição.",
    width: 345,
    height: 300,
  },
];
