import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { DemoNotice } from "@/components/DemoNotice";
import { ArrowRightIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de privacidade da ONG ${site.name} (conteúdo provisório).`,
};

/**
 * Página de Política de Privacidade — estrutura provisória.
 * O texto abaixo é um MODELO GENÉRICO e deve ser revisado por um responsável
 * antes da publicação oficial.
 */
export default function Privacidade() {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28">
        <article className="container-site max-w-3xl py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-verde-600 hover:text-verde-700"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Voltar para o início
          </Link>

          <h1 className="mt-6 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Política de Privacidade
          </h1>

          <div className="mt-4">
            <DemoNotice />
          </div>

          <div className="prose-nosnarua mt-8 flex flex-col gap-6 text-stone">
            <p>
              Esta página apresenta um modelo provisório de política de
              privacidade da ONG {site.name}. O conteúdo final deverá ser
              revisado e ajustado conforme as práticas reais da instituição e a
              legislação aplicável (LGPD).
            </p>

            <section className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-ink">
                1. Dados que coletamos
              </h2>
              <p>
                [Descrever quais dados são coletados — por exemplo, informações
                fornecidas ao entrar em contato pelo WhatsApp ou e-mail.]
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-ink">
                2. Como usamos as informações
              </h2>
              <p>
                [Explicar a finalidade do uso dos dados — por exemplo, responder
                mensagens e manter contato com doadores e apoiadores.]
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-ink">
                3. Compartilhamento
              </h2>
              <p>
                [Informar se e como os dados podem ser compartilhados. Como
                regra geral, dados pessoais não são vendidos.]
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-ink">
                4. Seus direitos
              </h2>
              <p>
                [Descrever os direitos do titular dos dados e como exercê-los,
                incluindo o canal de contato para solicitações.]
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-ink">5. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta política, entre em contato pelo
                e-mail{" "}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="font-medium text-verde-600 underline"
                >
                  {site.contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
