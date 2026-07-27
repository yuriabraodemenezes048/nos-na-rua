import { whatsappMessages } from "@/data/site";

/**
 * Projetos da associação — blocos editoriais na página inicial.
 * Conteúdo oficial confirmado. Nenhum número foi adicionado além dos já
 * confirmados (≈100 refeições por semana, segundas às 19h30).
 */

export type Project = {
  id: string;
  /** Rótulo curto acima do título */
  kicker: string;
  title: string;
  /** Parágrafos do texto */
  paragraphs: string[];
  /** Ações — cada uma vira um botão que abre o WhatsApp */
  actions: { label: string; message: string; primary?: boolean }[];
};

export const projects: Project[] = [
  {
    id: "marmitas",
    kicker: "Entrega semanal de marmitas",
    title: "Alimento, conversa e acolhimento",
    paragraphs: [
      "Todas as segundas-feiras, a partir das 19h30, a Nós na Rua distribui aproximadamente 100 refeições nas proximidades do Viaduto da Chico Mendes.",
      "A ação vai além da alimentação. Cada encontro também abre espaço para conversa, escuta e acolhimento.",
    ],
    actions: [
      {
        label: "Ajude a manter essa ação",
        message: whatsappMessages.weeklyMeals,
        primary: true,
      },
      { label: "Quero colaborar", message: whatsappMessages.volunteer },
    ],
  },
  {
    id: "adote-uma-familia",
    kicker: "Adote uma Família",
    title: "Apoio contínuo para reconstruir caminhos",
    paragraphs: [
      "O Projeto Adote uma Família conecta solidariedade e acompanhamento contínuo.",
      "Famílias cadastradas na Grande Florianópolis recebem apoio de acordo com suas necessidades, incluindo alimentos, roupas, itens domésticos, materiais escolares e orientação para o acesso a direitos e serviços essenciais.",
    ],
    actions: [
      {
        label: "Quero conhecer o projeto",
        message: whatsappMessages.adoptFamily,
        primary: true,
      },
    ],
  },
  {
    id: "acoes-sazonais",
    kicker: "Ações sazonais",
    title: "Datas especiais também são feitas de presença",
    paragraphs: [
      "Durante o ano, a Nós na Rua realiza ações especiais na comunidade da Tapera.",
      "Em datas como Páscoa, Dia das Crianças e Natal, criamos momentos de convivência, recreação e celebração para crianças e famílias da comunidade.",
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
