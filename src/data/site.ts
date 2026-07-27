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

  /** URL de produção */
  url: "https://nos-na-rua.vercel.app",

  organization: {
    cnpj: "43.557.623/0001-72",
    legalNature: "Associação Privada",
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
    full: "Promover assistência, inclusão e defesa de direitos para pessoas e famílias em situação de vulnerabilidade, fortalecendo sua dignidade, autonomia e cidadania.",
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
      alt: "Ilustração de uma mulher de blazer segurando uma pasta, personagem da identidade da Nós na Rua.",
      width: 250,
      height: 520,
    },
    /** Homem de gorro com caixa de doações — olha para a esquerda. */
    box: {
      src: "/personagens/personagem-caixa.png",
      alt: "Ilustração de um jovem de gorro segurando uma caixa de doações, personagem da identidade da Nós na Rua.",
      width: 378,
      height: 515,
    },
  },
} as const;

/** Mensagens pré-preenchidas do WhatsApp, por contexto. */
export const whatsappMessages = {
  donation:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de ajudar com uma doação.",
  items:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de saber quais itens posso doar.",
  volunteer:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de saber como posso participar como voluntário(a).",
  partnership:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de conversar sobre uma parceria com a minha empresa.",
  needs:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de combinar uma doação de itens.",
  weeklyMeals:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de ajudar a manter a entrega semanal de marmitas.",
  adoptFamily:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de apoiar uma família pelo projeto Adote uma Família.",
  seasonal:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de ajudar nas próximas ações sazonais.",
  receipt:
    "Olá! Fiz uma contribuição para a Associação Nós na Rua e gostaria de enviar o comprovante.",
  general:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de falar com a associação.",
} as const;

/** Monta o link do WhatsApp com a mensagem devidamente codificada. */
export function whatsappUrl(message: string = whatsappMessages.general): string {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
}

/** Link de e-mail. */
export const emailUrl = `mailto:${siteConfig.contact.email}`;
