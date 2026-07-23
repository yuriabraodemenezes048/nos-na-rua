/**
 * Campanha atual da associação.
 *
 * Enquanto `active` for false, a seção de campanha não é renderizada em
 * lugar nenhum do site. Para publicar uma campanha real, preencha os campos
 * e mude `active` para true.
 */

export type Campaign = {
  active: boolean;
  title: string;
  description: string;
  /** Prazo por extenso, ex.: "até 20 de agosto" */
  deadline: string;
  /** Objetivo em texto livre, ex.: "300 cestas básicas" */
  goal: string;
  /** Caminho de uma imagem real em /public, ou null */
  image: string | null;
  /** Texto alternativo da imagem (obrigatório quando houver imagem) */
  imageAlt: string;
  /** Itens necessários para a campanha */
  items: string[];
};

export const currentCampaign: Campaign = {
  active: false,
  title: "",
  description: "",
  deadline: "",
  goal: "",
  image: null,
  imageAlt: "",
  items: [],
};
