/**
 * Dados institucionais da Associação Nós na Rua – São José.
 *
 * Este é o único lugar onde as informações oficiais ficam registradas.
 * Para atualizar o site, edite os valores abaixo.
 */

export const siteConfig = {
  /** Nome público / marca */
  name: "Nós na Rua",

  /** Sigla */
  acronym: "NNR",

  /** Razão social completa */
  legalName: "Associação Nós na Rua – São José",

  /**
   * URL pública do site — usada em metadataBase, canonical, Open Graph,
   * JSON-LD, sitemap e robots (todos consomem este único valor).
   *
   * Controlada por NEXT_PUBLIC_SITE_URL, com o domínio atual da Vercel como
   * fallback. Quando o domínio oficial for conectado na Vercel:
   *   1. defina NEXT_PUBLIC_SITE_URL=https://DOMINIO-OFICIAL (nas variáveis
   *      de ambiente do projeto na Vercel) e refaça o deploy;
   *   2. confira canonical, Open Graph, sitemap.xml e robots.txt no domínio
   *      novo;
   *   3. se a Vercel estiver configurada para redirecionar o domínio
   *      .vercel.app para o domínio oficial, teste esse redirecionamento.
   * Enquanto isso não acontecer, o fallback abaixo mantém o site apontando
   * para o domínio atual — não trocar manualmente antes da migração real.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nos-na-rua.vercel.app",

  organization: {
    cnpj: "43.557.623/0001-72",
    legalNature: "Associação Privada",
    /** Como a natureza é comunicada ao público */
    natureLabel: "Associação sem fins lucrativos",
    status: "Ativa",
    /** Data de abertura no formato ISO e por extenso */
    foundedISO: "2021-05-03",
    foundedLabel: "03 de maio de 2021",
    foundedYear: "2021",
  },

  location: {
    city: "São José",
    state: "SC",
    stateName: "Santa Catarina",
    /** Como a cidade aparece no site */
    label: "São José – Santa Catarina",
    shortLabel: "São José – SC",
    /** Região de atuação */
    region: "Grande Florianópolis",
    /** Referência pública da ação semanal (sem endereço residencial) */
    weeklyReference:
      "Proximidades do Viaduto da Chico Mendes, em São José/SC.",
  },

  contact: {
    email: "nosnarua.contato@gmail.com",
    /** WhatsApp principal — apenas dígitos, padrão internacional */
    whatsapp: "5548991353909",
    whatsappLabel: "(48) 99135-3909",
  },

  social: {
    instagram: "https://www.instagram.com/nosnarua/",
    instagramHandle: "@nosnarua",
  },

  donation: {
    /** Chave PIX (o CNPJ da associação) */
    pixKey: "43.557.623/0001-72",
    /** Versão só com dígitos — é a que o botão copia */
    pixKeyRaw: "43557623000172",
    pixKeyType: "CNPJ",
    /** Nome que o banco deve exibir ao confirmar a transferência */
    receiverName: "Associação Nós na Rua São José",
    /**
     * QR Code oficial do PIX.
     * Só será exibido quando a associação enviar o arquivo oficial
     * (coloque em /public e informe o caminho aqui, ex.: "/pix-qrcode.png").
     */
    qrCodeImage: null as string | null,
  },

  /** Impacto confirmado — não adicionar números além destes. */
  impact: {
    mealsPerWeek: "≈ 100",
    mealsLabel: "refeições por semana",
    day: "Toda segunda-feira",
    time: "a partir das 19h30",
    sinceYear: "2021",
  },

  /**
   * Missão e posicionamento.
   * A missão oficial ainda está em revisão pela diretoria (ver
   * CONTENT_PENDING.md) — o texto abaixo é provisório e aprovado para uso.
   */
  mission: {
    full: "Promover assistência, inclusão e defesa de direitos para pessoas e famílias em situação de vulnerabilidade social, fortalecendo sua dignidade, autonomia e cidadania.",
    short:
      "Promover assistência, inclusão e defesa de direitos, fortalecendo dignidade, autonomia e cidadania.",
    positioning:
      "Transformamos solidariedade em cuidado, dignidade e oportunidades.",
    campaign: "Solidariedade que chega a quem precisa.",
  },

  /**
   * Logotipo oficial (arte da mandala "Nós na Rua"), extraído da identidade
   * da associação. Usado no cabeçalho e no rodapé.
   */
  logo: "/logo-nos-na-rua.png",

  /**
   * Personagens ilustrados da marca. São personagens institucionais —
   * não representam pessoas reais, voluntários específicos ou beneficiários.
   */
  characters: {
    /** Mulher de blazer com pasta — olha para a direita. Tom institucional. */
    blazer: {
      src: "/personagens/personagem-blazer.png",
      alt: "Ilustração de uma mulher de blazer segurando uma pasta, personagem da identidade do Nós na Rua.",
      width: 250,
      height: 520,
    },
    /** Homem de gorro com caixa de doações — olha para a esquerda. */
    box: {
      src: "/personagens/personagem-caixa.png",
      alt: "Ilustração de um jovem de gorro segurando uma caixa de doações, personagem da identidade do Nós na Rua.",
      width: 378,
      height: 515,
    },
  },
} as const;

/** Mensagens pré-preenchidas do WhatsApp, por contexto. */
export const whatsappMessages = {
  items:
    "Olá! Conheci o Nós na Rua pelo site e gostaria de combinar uma doação de itens.",
  volunteer:
    "Olá! Conheci o Nós na Rua pelo site e gostaria de saber como participar como voluntário(a).",
  partnership:
    "Olá! Conheci o Nós na Rua pelo site e gostaria de saber mais sobre as possibilidades de parceria para empresas.",
  adoptFamily:
    "Olá! Conheci o Projeto Adote uma Família e gostaria de saber como posso apoiar.",
  seasonal:
    "Olá! Conheci as ações do Nós na Rua e gostaria de colaborar com as próximas campanhas.",
  receipt:
    "Olá! Fiz uma contribuição para a Associação Nós na Rua e gostaria de enviar o comprovante.",
  general:
    "Olá! Conheci o Nós na Rua pelo site e gostaria de saber como posso ajudar.",
} as const;

/**
 * Parceiros reais e confirmados.
 *
 * `logo` é opcional — quando ausente (caso da Cozinha Solidária hoje), o
 * parceiro é apresentado por um bloco tipográfico no mesmo sistema visual.
 * Assim que uma logo oficial estiver disponível, basta:
 *   1. colocar o arquivo em /public/images/parceiros/;
 *   2. informar `logo`, `logoWidth` e `logoHeight` (dimensões reais do
 *      arquivo, para o Next.js evitar layout shift).
 * `href` só deve ser preenchido com um link oficial confirmado — nunca
 * inventar URL. `role` ajusta a concordância de gênero no alt text
 * ("parceira" é o padrão; use "parceiro" quando o nome pedir, ex.: Conselho).
 * A seção em PartnersSection se adapta sozinha à quantidade de parceiros.
 * Não inventar parceiros, logos, links ou funções que não estejam aqui.
 */
export type Partner = {
  id: string;
  name: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  href?: string;
  /** Exibido junto ao nome quando não há logo (ex.: "@usuario"). */
  instagramHandle?: string;
  description?: string;
  role?: "parceira" | "parceiro";
};

export const partners: Partner[] = [
  {
    id: "ceconluz",
    name: "Ceconluz",
    logo: "/images/parceiros/ceconluz.png",
    logoWidth: 377,
    logoHeight: 371,
  },
  {
    id: "cozinha-solidaria",
    name: "Cozinha Solidária da Vila Aparecida",
    description: "Produção das marmitas",
    href: "https://www.instagram.com/shira_cozinhasolidaria",
    instagramHandle: "@shira_cozinhasolidaria",
  },
  {
    id: "body-angel",
    name: "Body Angel Training Center",
    logo: "/images/parceiros/body-angel.png",
    logoWidth: 900,
    logoHeight: 563,
  },
  {
    id: "run-fitness-club",
    name: "Run Fitness Club",
    logo: "/images/parceiros/run-fitness-club.png",
    logoWidth: 1200,
    logoHeight: 698,
  },
  {
    id: "gelus",
    name: "Gelus",
    logo: "/images/parceiros/gelus.png",
    logoWidth: 1200,
    logoHeight: 433,
  },
  {
    id: "charlie",
    name: "Charlie",
    logo: "/images/parceiros/charlie-brownie.png",
    logoWidth: 900,
    logoHeight: 281,
  },
  {
    id: "conselho-comunitario-tapera",
    name: "Conselho Comunitário da Tapera",
    logo: "/images/parceiros/centro-comunitario-tapera.png",
    logoWidth: 900,
    logoHeight: 900,
    role: "parceiro",
  },
];

/**
 * Empresas parceiras — apoio institucional para empresas.
 *
 * `fiscalInfo` fica desabilitado até a contabilidade da associação validar o
 * enquadramento fiscal do Nós na Rua. Enquanto `enabled` for false, nenhuma
 * informação sobre dedução ou incentivo fiscal é publicada — não afirmar
 * benefício fiscal sem essa confirmação. Quando aprovado, preencher `text` e
 * mudar `enabled` para true; a seção de Empresas já está preparada para
 * renderizar esse bloco sem precisar ser reconstruída.
 */
export const companyPartnership = {
  fiscalInfo: {
    enabled: false,
    text: null as string | null,
  },
} as const;

/** Monta o link do WhatsApp com a mensagem devidamente codificada. */
export function whatsappUrl(message: string = whatsappMessages.general): string {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
}

/** Link de e-mail. */
export const emailUrl = `mailto:${siteConfig.contact.email}`;
