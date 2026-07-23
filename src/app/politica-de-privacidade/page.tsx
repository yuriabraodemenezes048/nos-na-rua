import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig, emailUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Associação Nós na Rua trata dados no site institucional.",
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

/** Data da última revisão deste texto. */
const lastUpdated = "22 de julho de 2026";

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="section">
        <div className="container-site max-w-prose">
          <h1 className="font-display text-[2rem] leading-tight sm:text-[2.25rem]">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-muted">
            Última atualização: {lastUpdated}
          </p>

          <div className="mt-8 space-y-8 leading-relaxed text-muted">
            <section>
              <h2 className="font-display text-lg text-ink">
                Dados coletados por este site
              </h2>
              <p className="mt-2">
                Este site é informativo e{" "}
                <strong className="font-semibold text-ink">
                  não possui formulários, cadastro, área de login nem newsletter
                </strong>
                . Não coletamos nome, e-mail, telefone ou qualquer dado pessoal
                através das páginas.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">
                Cookies e ferramentas de análise
              </h2>
              <p className="mt-2">
                O site não utiliza cookies não essenciais, não possui
                ferramentas de análise de audiência e não executa pixels de
                rastreamento publicitário.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">
                Contato por serviços externos
              </h2>
              <p className="mt-2">
                O contato com a associação acontece por serviços de terceiros:
                WhatsApp, Instagram e e-mail. Ao utilizar esses canais, você
                passa a se relacionar diretamente com essas plataformas, que
                possuem políticas de privacidade próprias e independentes desta.
                Recomendamos a leitura dos termos de cada serviço.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">
                Doações por PIX
              </h2>
              <p className="mt-2">
                As doações são feitas diretamente pelo aplicativo do seu banco.
                O site apenas exibe a chave PIX da associação — nenhum dado
                bancário ou financeiro é digitado, processado ou armazenado
                aqui.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">
                Hospedagem
              </h2>
              <p className="mt-2">
                O site é hospedado por um provedor de infraestrutura que pode
                manter registros técnicos de acesso, como endereço IP e data e
                hora da requisição, para fins de segurança e funcionamento do
                serviço.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">
                Dúvidas e solicitações
              </h2>
              <p className="mt-2">
                Para esclarecimentos sobre esta política, entre em contato pelo
                e-mail{" "}
                <a
                  href={emailUrl}
                  className="font-semibold text-brown underline underline-offset-4 hover:text-brown-dark"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">Responsável</h2>
              <p className="mt-2">
                {siteConfig.legalName} — CNPJ {siteConfig.organization.cnpj} —{" "}
                {siteConfig.location.label}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
