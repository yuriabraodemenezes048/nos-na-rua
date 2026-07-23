/**
 * Dados institucionais da Associação Nós na Rua – São José.
 *
 * Este é o único lugar onde as informações oficiais ficam registradas.
 * Para atualizar o site, edite os valores abaixo.
 */

export const siteConfig = {
  /** Nome público / marca */
  name: "Nós na Rua",

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
    /** Referência pública de atuação (sem endereço residencial) */
    areaOfOperation:
      "Atuação nas proximidades do Viaduto da Chico Mendes, em São José/SC.",
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

  /**
   * Logotipo oficial.
   * Assim que o arquivo da marca for enviado, coloque-o em /public e
   * informe o caminho aqui (ex.: "/logo-nos-na-rua.png"). Enquanto for null,
   * o site exibe a assinatura tipográfica da associação.
   */
  logo: null as string | null,
} as const;

/** Mensagens pré-preenchidas do WhatsApp, por contexto. */
export const whatsappMessages = {
  items:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de saber quais itens a associação está recebendo.",
  volunteer:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de saber como posso ajudar como voluntário(a).",
  partnership:
    "Olá! Conheci a Nós na Rua pelo site e gostaria de conversar sobre uma possível parceria.",
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
