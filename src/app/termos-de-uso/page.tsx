import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig, emailUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições de uso do site institucional da Associação Nós na Rua.",
  alternates: { canonical: "/termos-de-uso" },
  robots: { index: true, follow: true },
};

/** Data da última revisão deste texto. */
const lastUpdated = "22 de julho de 2026";

export default function TermsPage() {
  return (
    <SiteShell>
      <section className="section">
        <div className="container-site max-w-prose">
          <h1 className="font-display text-[2rem] leading-tight sm:text-[2.25rem]">
            Termos de Uso
          </h1>
          <p className="mt-3 text-sm text-muted">
            Última atualização: {lastUpdated}
          </p>

          <div className="mt-8 space-y-8 leading-relaxed text-muted">
            <section>
              <h2 className="font-display text-lg text-ink">Finalidade</h2>
              <p className="mt-2">
                Este site tem finalidade exclusivamente informativa. Ele
                apresenta a atuação da associação e disponibiliza os canais
                oficiais de contato e de doação.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">
                Identificação da associação
              </h2>
              <p className="mt-2">
                {siteConfig.legalName}, inscrita no CNPJ{" "}
                {siteConfig.organization.cnpj}, {siteConfig.organization.legalNature},
                com atuação em {siteConfig.location.label}.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">
                Doações e confirmação do destinatário
              </h2>
              <p className="mt-2">
                As doações são realizadas diretamente pelo aplicativo bancário
                do doador. Antes de concluir qualquer transferência, confirme
                que o destinatário exibido pelo seu banco é{" "}
                <strong className="font-semibold text-ink">
                  {siteConfig.donation.receiverName}
                </strong>
                , com o CNPJ {siteConfig.organization.cnpj}. A associação não
                solicita doações por outros nomes, chaves ou intermediários.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">Links externos</h2>
              <p className="mt-2">
                O site direciona para serviços de terceiros, como WhatsApp e
                Instagram. A associação não se responsabiliza pelo conteúdo, pela
                disponibilidade ou pelas práticas desses serviços.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">
                Uso do conteúdo
              </h2>
              <p className="mt-2">
                Os textos, imagens e a identidade visual apresentados aqui
                pertencem à associação. É vedada a reprodução para finalidade
                comercial ou de forma que sugira vínculo, patrocínio ou
                autorização inexistentes, bem como qualquer uso que possa
                induzir terceiros a erro — especialmente em pedidos de doação.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg text-ink">Contato</h2>
              <p className="mt-2">
                Dúvidas sobre estes termos podem ser enviadas para{" "}
                <a
                  href={emailUrl}
                  className="font-semibold text-brown underline underline-offset-4 hover:text-brown-dark"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
