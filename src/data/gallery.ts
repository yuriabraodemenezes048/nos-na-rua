/**
 * Registros reais das ações da associação.
 *
 * Regras:
 * - Use somente fotografias reais, autorizadas pela associação.
 * - Prefira registros de voluntários, equipe, mãos, alimentos, materiais e
 *   organização das doações.
 * - Não publique imagens que exponham pessoas atendidas de forma
 *   desnecessária, nem crianças identificáveis sem autorização.
 * - O `alt` é obrigatório e deve descrever a cena.
 *
 * Enquanto a lista estiver vazia, a seção de registros não é renderizada.
 * Máximo recomendado: 4 imagens.
 */

export type GalleryItem = {
  /** Caminho da imagem em /public, ex.: "/registros/entrega-01.jpg" */
  src: string;
  /** Descrição da imagem para leitores de tela */
  alt: string;
  /** Legenda curta e opcional */
  caption?: string;
  width: number;
  height: number;
};

export const galleryItems: GalleryItem[] = [];
