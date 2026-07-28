import { whatsappMessages } from "@/data/site";

/**
 * Projetos reais da associação — blocos editoriais na página inicial.
 * Conteúdo oficial confirmado. Nenhum número foi adicionado além dos já
 * confirmados (≈100 refeições por semana, segundas às 19h30).
 */

export type ProjectImage = { src: string; alt: string; width: number; height: number };

export type Project = {
  id: string;
  kicker: string;
  title: string;
  paragraphs: string[];
  /** Detalhes concretos, exibidos como lista */
  details: string[];
  /** Fotografias reais do projeto (1 ou 2). Quando ausente, usa grafismo. */
  images?: ProjectImage[];
  /** Ações — cada uma vira um botão (interno ou WhatsApp) */
  actions: {
    label: string;
    href?: string;
    message?: string;
    primary?: boolean;
  }[];
};

export const projects: Project[] = [
  {
    id: "marmitas",
    kicker: "Todas as segundas-feiras",
    title: "Alimento, conversa e acolhimento",
    paragraphs: [
      "Todas as segundas-feiras, a partir das 19h30, a Nós na Rua distribui aproximadamente 100 refeições nas proximidades do Viaduto da Chico Mendes.",
      "A ação vai além da alimentação. Cada encontro também abre espaço para conversa, escuta e acolhimento.",
    ],
    details: [
      "Aproximadamente 100 refeições",
      "Segundas-feiras, a partir das 19h30",
      "Apoio de cozinhas comunitárias",
      "Proximidades do Viaduto da Chico Mendes",
    ],
    images: [
      {
        src: "/acoes/marmita-entrega.webp",
        alt: "Voluntária da Associação Nós na Rua entregando uma marmita durante ação noturna.",
        width: 1536,
        height: 1536,
      },
      {
        src: "/acoes/marmita-caixa.webp",
        alt: "Voluntária entregando marmita ao lado da caixa térmica com a identidade da Nós na Rua.",
        width: 1536,
        height: 1536,
      },
    ],
    actions: [
      { label: "Ajude a manter essa ação", href: "/doe", primary: true },
      { label: "Quero colaborar", message: whatsappMessages.volunteer },
    ],
  },
  {
    id: "adote-uma-familia",
    kicker: "Assistência contínua",
    title: "Apoio para reconstruir caminhos",
    paragraphs: [
      "O Projeto Adote uma Família conecta solidariedade e acompanhamento contínuo.",
      "Famílias cadastradas na Grande Florianópolis recebem apoio de acordo com suas necessidades, incluindo alimentos, roupas, itens domésticos, materiais escolares e orientação para o acesso a direitos e serviços essenciais.",
    ],
    details: [
      "Alimentos e itens domésticos",
      "Roupas e materiais escolares",
      "Orientação para acesso a direitos e serviços",
      "Acompanhamento contínuo",
    ],
    images: [
      {
        src: "/acoes/tapera-familias.webp",
        alt: "Famílias reunidas junto aos banners da campanha Adote uma Família, com rostos preservados.",
        width: 620,
        height: 210,
      },
    ],
    actions: [
      {
        label: "Quero apoiar uma família",
        message: whatsappMessages.adoptFamily,
        primary: true,
      },
    ],
  },
  {
    id: "acoes-sazonais",
    kicker: "Páscoa · Dia das Crianças · Natal",
    title: "Datas especiais também são feitas de presença",
    paragraphs: [
      "Durante o ano, a Nós na Rua realiza ações especiais na comunidade da Tapera.",
      "Criamos momentos de convivência, recreação e celebração para crianças e famílias da comunidade.",
    ],
    details: [
      "Recreação infantil",
      "Brinquedos infláveis",
      "Pintura facial",
      "Distribuição de doces",
      "Integração comunitária",
    ],
    images: [
      {
        src: "/acoes/tapera-roupas.webp",
        alt: "Roupas doadas organizadas durante ação comunitária da Associação Nós na Rua na Tapera.",
        width: 345,
        height: 300,
      },
    ],
    actions: [
      {
        label: "Ajude nas próximas ações",
        message: whatsappMessages.seasonal,
        primary: true,
      },
    ],
  },
];
