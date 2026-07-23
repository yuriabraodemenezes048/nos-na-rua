/**
 * Relatórios e prestações de contas da associação.
 *
 * Só devem entrar aqui informações revisadas e aprovadas pela associação.
 * Enquanto a lista estiver vazia, a página de transparência exibe um estado
 * vazio honesto, sem gráficos, números simulados ou downloads quebrados.
 */

export type TransparencyReport = {
  id: string;
  title: string;
  /** Período coberto, ex.: "Janeiro a março de 2025" */
  period: string;
  description: string;
  /** Valor recebido em reais; null quando não informado */
  receivedAmount: number | null;
  /** Valor utilizado em reais; null quando não informado */
  spentAmount: number | null;
  /** Pessoas alcançadas; null quando não informado */
  peopleReached: number | null;
  /** Itens recebidos ou distribuídos */
  items: string[];
  /** Imagens autorizadas do relatório */
  images: { src: string; alt: string; width: number; height: number }[];
  /** Documentos para download */
  documents: { label: string; href: string }[];
};

export const transparencyReports: TransparencyReport[] = [];
