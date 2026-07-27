/**
 * Necessidades de doação por categoria.
 * Conteúdo oficial confirmado. Na home mostramos as categorias com os itens
 * dentro de um acordeão acessível.
 */

export type NeedCategory = {
  id: string;
  title: string;
  items: string[];
  /** Observação opcional (ex.: faixa etária dos brinquedos) */
  note?: string;
};

export const needCategories: NeedCategory[] = [
  {
    id: "alimentacao",
    title: "Alimentação",
    items: ["Cestas básicas", "Embalagens para marmitas", "Talheres", "Copos"],
  },
  {
    id: "logistica",
    title: "Logística",
    items: ["Sacos de lixo reforçados de 100 litros"],
  },
  {
    id: "agasalhos",
    title: "Agasalhos",
    items: [
      "Casacos",
      "Blusas",
      "Calças",
      "Meias",
      "Calçados fechados",
      "Toucas",
      "Luvas",
      "Cobertores",
    ],
  },
  {
    id: "educacao",
    title: "Educação",
    items: [
      "Cadernos",
      "Lápis",
      "Borrachas",
      "Apontadores",
      "Canetas",
      "Lápis de cor",
      "Cola",
      "Estojos",
      "Giz de cera",
      "Massa de modelar",
    ],
  },
  {
    id: "brinquedos",
    title: "Brinquedos",
    items: ["Novos ou em excelente estado"],
    note: "Para crianças de 3 meses a 12 anos.",
  },
];
