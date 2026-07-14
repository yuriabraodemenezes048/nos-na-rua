/**
 * =============================================================================
 * CONFIGURACAO CENTRAL DO SITE — Nós na Rua
 * =============================================================================
 * Este é o ARQUIVO MAIS IMPORTANTE para a ONG editar.
 *
 * Todas as informações que mudam de verdade (WhatsApp, Instagram, chave PIX,
 * e-mail, telefone, CNPJ, etc.) ficam reunidas aqui. Basta trocar o texto
 * entre aspas para atualizar o site inteiro.
 *
 * Os valores marcados com [PLACEHOLDER] ou "[algo]" são provisórios e devem ser
 * substituídos pelos dados oficiais da ONG antes de publicar de verdade.
 * =============================================================================
 */

export const site = {
  /** Nome da ONG */
  name: "Nós na Rua",

  /** Frase institucional curta (aparece no rodapé e nos metadados) */
  tagline: "Solidariedade transformada em ação.",

  /** Descrição curta usada em SEO / redes sociais */
  description:
    "ONG Nós na Rua: ações sociais de cuidado e acolhimento a pessoas em situação de vulnerabilidade. Conheça o trabalho e apoie de forma simples e segura.",

  /** Endereço do site em produção (troque pelo domínio final) */
  url: "https://nosnarua.org.br", // [PLACEHOLDER] domínio oficial

  /** Cidade / região de atuação */
  city: "[Cidade/Região de atuação]", // [PLACEHOLDER]

  // ---------------------------------------------------------------------------
  // CONTATO
  // ---------------------------------------------------------------------------
  contact: {
    /** WhatsApp em formato internacional, só números (ex.: 5521999999999) */
    whatsapp: "5521999999999", // [PLACEHOLDER] número real
    /** Como o WhatsApp aparece escrito na tela */
    whatsappLabel: "(21) 99999-9999", // [PLACEHOLDER]
    /** @usuario do Instagram (sem o @) */
    instagram: "nosnarua", // [PLACEHOLDER] usuário real
    /** E-mail de contato */
    email: "contato@nosnarua.org.br", // [PLACEHOLDER]
    /** Telefone exibido (pode ser igual ao WhatsApp) */
    phone: "(21) 99999-9999", // [PLACEHOLDER]
    /** Horário de atendimento */
    hours: "Segunda a sexta, das 9h às 18h", // [PLACEHOLDER]
  },

  // ---------------------------------------------------------------------------
  // DOAÇÃO / PIX
  // ---------------------------------------------------------------------------
  pix: {
    /** Chave PIX (pode ser CNPJ, e-mail, telefone ou chave aleatória) */
    key: "[CHAVE-PIX-DA-ONG]", // [PLACEHOLDER]
    /** Nome do titular / instituição que recebe */
    holder: "[Nome da Instituição responsável]", // [PLACEHOLDER]
    /** Banco / instituição financeira */
    bank: "[Banco / Instituição]", // [PLACEHOLDER]
    /** Tipo de chave, só para exibição (CNPJ, e-mail, telefone, aleatória) */
    keyType: "CNPJ", // [PLACEHOLDER]
  },

  /** CNPJ da ONG (aparece no rodapé) */
  cnpj: "[00.000.000/0001-00]", // [PLACEHOLDER]

  // ---------------------------------------------------------------------------
  // MENSAGENS PRONTAS DO WHATSAPP
  // ---------------------------------------------------------------------------
  messages: {
    /** Botão flutuante / contato geral */
    general:
      "Olá! Conheci a ONG Nós na Rua pelo site e gostaria de saber mais sobre como ajudar.",
    /** Enviar comprovante de doação */
    receipt:
      "Olá! Acabei de fazer uma doação para a ONG Nós na Rua e gostaria de enviar o comprovante. 🙏",
    /** Empresa que quer apoiar */
    company:
      "Olá! Represento uma empresa e temos interesse em apoiar a ONG Nós na Rua como parceira. Podemos conversar?",
    /** Quero ser voluntário(a) */
    volunteer:
      "Olá! Gostaria de me tornar voluntário(a) da ONG Nós na Rua. Como posso participar?",
  },
} as const;

// -----------------------------------------------------------------------------
// FUNÇÕES AUXILIARES — geram os links de WhatsApp e Instagram automaticamente.
// -----------------------------------------------------------------------------

/** Monta o link do WhatsApp com uma mensagem pré-preenchida. */
export function whatsappLink(message: string = site.messages.general): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
}

/** Monta o link do Instagram. */
export function instagramLink(): string {
  return `https://instagram.com/${site.contact.instagram}`;
}

/** Monta o link de e-mail. */
export function emailLink(): string {
  return `mailto:${site.contact.email}`;
}
