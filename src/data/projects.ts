import { whatsappMessages } from "@/data/site";

/**
 * Projetos reais da associação — blocos editoriais na página inicial.
 * Conteúdo oficial confirmado. Cada projeto tem uma foto grande, um parágrafo
 * curto, no máximo três informações práticas e um único CTA.
 */

export type ProjectImage = { src: string; alt: string; width: number; height: number };

export type Project = {
  id: string;
  kicker: string;
  title: string;
  /** Um parágrafo curto */
  text: string;
  /** No máximo três informações práticas */
  facts: string[];
  /** Fotografias reais do projeto (1 ou 2). */
  images: ProjectImage[];
  /** CTA único */
  cta: { label: string; href?: string; message?: string };
};

export const projects: Project[] = [
  {
    id: "marmitas",
    kicker: "Toda segunda-feira",
    title: "Alimento, conversa e acolhimento",
    text: "Todas as segundas-feiras, a partir das 19h30, a Nós na Rua distribui aproximadamente 100 refeições nas proximidades do Viaduto da Chico Mendes. A ação também cria espaço para conversa, escuta e acolhimento.",
    facts: ["≈ 100 refeições", "Segundas, às 19h30", "Viaduto da Chico Mendes"],
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
    cta: { label: "Ajude essa ação", href: "/doe" },
  },
  {
    id: "adote-uma-familia",
    kicker: "Assistência contínua",
    title: "Apoio para reconstruir caminhos",
    text: "O Projeto Adote uma Família promove apoio mensal a famílias cadastradas na Grande Florianópolis, incluindo alimentos, roupas, itens domésticos, materiais escolares e orientação para acesso a direitos.",
    facts: ["Apoio mensal", "Famílias cadastradas", "Necessidades essenciais"],
    images: [
      {
        src: "/acoes/tapera-familias.webp",
        alt: "Famílias reunidas junto aos banners da campanha Adote uma Família, com rostos preservados.",
        width: 620,
        height: 210,
      },
    ],
    cta: { label: "Quero apoiar uma família", message: whatsappMessages.adoptFamily },
  },
  {
    id: "acoes-sazonais",
    kicker: "Páscoa · Dia das Crianças · Natal",
    title: "Datas especiais também são feitas de presença",
    text: "Ao longo do ano, a Nós na Rua realiza ações na comunidade da Tapera, criando momentos de convivência, recreação e celebração para crianças e famílias.",
    facts: ["Recreação", "Integração", "Campanhas sazonais"],
    images: [
      {
        src: "/acoes/tapera-calcados.webp",
        alt: "Roupas e calçados doados organizados durante ação comunitária da Nós na Rua na Tapera.",
        width: 545,
        height: 300,
      },
    ],
    cta: { label: "Ajude nas próximas ações", message: whatsappMessages.seasonal },
  },
];
