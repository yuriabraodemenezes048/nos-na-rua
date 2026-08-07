import { whatsappMessages } from "@/data/site";

/**
 * Projetos reais do Nós na Rua — capítulos fotográficos na página inicial.
 * Conteúdo oficial confirmado. Cada projeto: foto grande, texto curto, até
 * três informações e um único CTA.
 */

export type ProjectImage = { src: string; alt: string; width: number; height: number };

export type Project = {
  id: string;
  kicker: string;
  title: string;
  text: string;
  /** Observação adicional (ex.: parceria da cozinha), opcional */
  note?: string;
  facts: string[];
  images: ProjectImage[];
  cta: { label: string; href?: string; message?: string };
};

export const projects: Project[] = [
  {
    id: "marmitas",
    kicker: "Entregas semanais",
    title: "Alimento, escuta e acolhimento.",
    text: "Todas as segundas-feiras, a partir das 19h30, o Nós na Rua distribui aproximadamente 100 refeições nas proximidades do Viaduto da Chico Mendes, em São José. Além da alimentação, a ação envolve conversa, escuta e acolhimento.",
    note: "As marmitas são produzidas semanalmente em parceria com a Cozinha Solidária da Vila Aparecida e distribuídas pelo Nós na Rua.",
    facts: ["≈ 100 refeições", "Segundas, às 19h30", "Viaduto da Chico Mendes"],
    images: [
      {
        src: "/acoes/marmita-entrega.webp",
        alt: "Voluntária do Nós na Rua entregando uma marmita durante ação noturna.",
        width: 1536,
        height: 1536,
      },
      {
        src: "/acoes/marmita-caixa.webp",
        alt: "Voluntária entregando marmita ao lado da caixa térmica com a identidade do Nós na Rua.",
        width: 1536,
        height: 1536,
      },
    ],
    cta: { label: "Ajude essa ação", href: "/doe" },
  },
  {
    id: "adote-uma-familia",
    kicker: "Adote uma Família",
    title: "Apoio que acompanha.",
    text: "O projeto promove apoio mensal a famílias cadastradas na Grande Florianópolis, de acordo com suas necessidades: alimentos, roupas, itens de higiene, materiais escolares, itens domésticos e orientação para acesso a direitos e serviços essenciais.",
    note: "Mais dignidade, autonomia e caminhos possíveis.",
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
    id: "acoes-comunitarias",
    kicker: "Ações comunitárias",
    title: "Comunidade também é cuidado.",
    text: "Ao longo do ano, realizamos campanhas e ações comunitárias na comunidade da Tapera — em datas como Páscoa, Dia das Crianças e Natal —, com recreação, convivência e integração entre crianças e famílias.",
    facts: ["Páscoa · Dia das Crianças · Natal", "Recreação", "Integração comunitária"],
    images: [
      {
        src: "/acoes/tapera-calcados.webp",
        alt: "Roupas e calçados doados organizados durante ação comunitária do Nós na Rua na Tapera.",
        width: 545,
        height: 300,
      },
    ],
    cta: { label: "Ajude nas próximas ações", message: whatsappMessages.seasonal },
  },
];
