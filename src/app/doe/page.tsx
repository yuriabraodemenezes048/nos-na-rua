import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { CopyPixButton } from "@/components/CopyPixButton";
import { Character } from "@/components/Character";
import { Reveal } from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { siteConfig, whatsappUrl, whatsappMessages } from "@/data/site";

export const metadata: Metadata = {
  title: "Doe para a Associação Nós na Rua | PIX oficial",
  description:
    "Doe pelo PIX oficial e ajude a manter as ações da Associação Nós na Rua em São José e na Grande Florianópolis.",
  alternates: { canonical: "/doe" },
  openGraph: {
    title: "Doe para a Associação Nós na Rua | PIX oficial",
    description:
      "Doe pelo PIX oficial e ajude a manter as ações da Associação Nós na Rua em São José e na Grande Florianópolis.",
    url: "/doe",
  },
};

const steps = [
  "Copie a chave e abra o aplicativo do banco.",
  "Escolha PIX e cole a chave.",
  "Confira o destinatário e finalize.",
];

export default function DonatePage() {
  const { donation } = siteConfig;

  return (
    <SiteShell>
      {/* Introdução com personagem de apoio */}
      <section className="section pb-8 sm:pb-10">
        <div className="container-site grid items-center gap-8 lg:grid-cols-[1fr_0.55fr]">
          <div>
            <p className="kicker">Doe agora</p>
            <h1 className="mt-4 font-display text-[2.25rem] leading-[1.05] sm:text-[2.75rem]">
              Transforme solidariedade em ação
            </h1>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              Sua contribuição ajuda a manter a entrega semanal de refeições, o
              apoio às famílias e as ações comunitárias.
            </p>
          </div>
          <div className="mx-auto hidden w-full max-w-[13rem] sm:block">
            <Character who="box" tone="sand" float objectPosition="center top" />
          </div>
        </div>
      </section>

      {/* Bloco do PIX */}
      <section className="pb-4">
        <div className="container-site max-w-2xl">
          <Reveal className="rounded-3xl border border-sand bg-sand/40 p-6 shadow-soft sm:p-8">
            <h2 className="text-[0.8125rem] font-semibold uppercase tracking-wide text-brown">
              Chave PIX — {donation.pixKeyType}
            </h2>
            <p className="mt-2 break-all font-display text-2xl font-semibold text-ink sm:text-3xl">
              {donation.pixKey}
            </p>

            <div className="mt-6">
              <CopyPixButton />
            </div>

            {donation.qrCodeImage && (
              <div className="mt-8 flex flex-col items-center gap-3 border-t border-brown/10 pt-8">
                <Image
                  src={donation.qrCodeImage}
                  alt="QR Code do PIX da Associação Nós na Rua"
                  width={220}
                  height={220}
                  className="rounded-xl bg-white p-3"
                />
                <p className="text-sm text-muted">
                  Ou escaneie o QR Code pelo aplicativo do seu banco.
                </p>
              </div>
            )}

            <dl className="mt-8 space-y-4 border-t border-brown/10 pt-6 text-[0.9375rem]">
              <div>
                <dt className="text-muted">Destinatário</dt>
                <dd className="font-medium text-ink">{donation.receiverName}</dd>
              </div>
              <div>
                <dt className="text-muted">CNPJ</dt>
                <dd className="font-medium text-ink">
                  {siteConfig.organization.cnpj}
                </dd>
              </div>
            </dl>
          </Reveal>

          <p className="mt-6 rounded-xl border-l-4 border-terracotta bg-sand/60 p-4 text-[0.9375rem] leading-relaxed text-ink">
            Antes de confirmar a transferência, confira se o destinatário
            exibido no seu banco é{" "}
            <strong className="font-semibold">{donation.receiverName}</strong>.
          </p>
        </div>
      </section>

      {/* Passo a passo */}
      <section className="section pt-10">
        <div className="container-site max-w-2xl">
          <h2 className="section-title text-[1.5rem] sm:text-[1.75rem]">
            Como doar pelo PIX
          </h2>
          <ol className="mt-6 space-y-3">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-3 text-[0.9375rem] text-muted">
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sand text-sm font-semibold text-brown"
                >
                  {index + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-12 border-t border-sand pt-8">
            <h2 className="font-display text-lg">Quer enviar o comprovante?</h2>
            <p className="mt-2 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
              O envio é opcional. Se preferir, você pode compartilhar o
              comprovante com a equipe pelo WhatsApp.
            </p>
            <a
              href={whatsappUrl(whatsappMessages.receipt)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-4"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Enviar comprovante pelo WhatsApp
            </a>
          </div>

          <p className="mt-12 font-display text-xl text-brown">
            Obrigado por fazer parte dessa corrente de cuidado.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
