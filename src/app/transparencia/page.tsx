import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { TransparencyReportCard } from "@/components/TransparencyReportCard";
import { Reveal } from "@/components/Reveal";
import { LeafSprig } from "@/components/brand/Decor";
import { WhatsAppIcon } from "@/components/Icons";
import { siteConfig, whatsappUrl } from "@/data/site";
import { transparencyReports } from "@/data/transparency";

export const metadata: Metadata = {
  title: "Transparência | Associação Nós na Rua",
  description:
    "Consulte os dados institucionais e acompanhe as prestações de contas da Associação Nós na Rua – São José.",
  alternates: { canonical: "/transparencia" },
  openGraph: {
    title: "Transparência | Associação Nós na Rua",
    description:
      "Consulte os dados institucionais e acompanhe as prestações de contas da Associação Nós na Rua – São José.",
    url: "/transparencia",
  },
};

export default function TransparencyPage() {
  const { organization, location } = siteConfig;

  const institutional = [
    { label: "Razão social", value: siteConfig.legalName },
    { label: "CNPJ", value: organization.cnpj },
    { label: "Natureza jurídica", value: organization.legalNature },
    { label: "Data de abertura", value: organization.foundedLabel },
    { label: "Situação", value: organization.status },
    { label: "Município", value: location.label },
  ];

  return (
    <SiteShell>
      <section className="section">
        <div className="container-site max-w-3xl">
          <div className="relative">
            <LeafSprig
              aria-hidden="true"
              className="absolute -right-2 -top-8 hidden h-28 w-20 text-brown/15 sm:block"
            />
            <p className="kicker">Confiança com clareza</p>
            <h1 className="mt-4 font-display text-[2.25rem] leading-tight sm:text-[2.75rem]">
              Transparência
            </h1>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              A confiança de quem apoia é parte essencial do nosso trabalho.
              Nesta página serão publicados os resultados, documentos e
              prestações de contas aprovados pela associação.
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-muted">
              As doações recebidas são destinadas à manutenção das ações
              semanais e à compra de insumos para os projetos ativos.
            </p>
          </div>

          {/* Bloco institucional */}
          <Reveal>
            <h2 className="section-title mt-12 text-[1.5rem] sm:text-[1.75rem]">
              Dados institucionais
            </h2>
            <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-sand bg-sand sm:grid-cols-2">
              {institutional.map((item) => (
                <div key={item.label} className="bg-cream p-5">
                  <dt className="text-[0.8125rem] text-muted">{item.label}</dt>
                  <dd className="mt-1 font-medium text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Relatórios */}
          <Reveal>
            <h2 className="section-title mt-14 text-[1.5rem] sm:text-[1.75rem]">
              Relatórios e prestações de contas
            </h2>

            {transparencyReports.length > 0 ? (
              <div className="mt-6 space-y-6">
                {transparencyReports.map((report) => (
                  <TransparencyReportCard key={report.id} report={report} />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-sand bg-sand/40 p-6 sm:p-8">
                <p className="max-w-prose leading-relaxed text-muted">
                  Os primeiros relatórios e documentos estão sendo organizados
                  pela associação. Assim que forem revisados e aprovados, serão
                  publicados nesta página.
                </p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-6"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Falar com a associação
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
