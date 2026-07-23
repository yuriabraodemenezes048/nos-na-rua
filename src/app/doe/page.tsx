import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/SiteShell";
import { CopyPixButton } from "@/components/CopyPixButton";
import { WhatsAppIcon } from "@/components/Icons";
import { siteConfig, whatsappUrl, whatsappMessages } from "@/data/site";

export const metadata: Metadata = {
  title: "Doe para a Nós na Rua | PIX oficial",
  description:
    "Contribua com a Associação Nós na Rua por meio do PIX oficial e ajude a fortalecer ações realizadas em São José – SC.",
  alternates: { canonical: "/doe" },
  openGraph: {
    title: "Doe para a Nós na Rua | PIX oficial",
    description:
      "Contribua com a Associação Nós na Rua por meio do PIX oficial e ajude a fortalecer ações realizadas em São José – SC.",
    url: "/doe",
  },
};

const steps = [
  "Copie a chave PIX.",
  "Abra o aplicativo do seu banco.",
  "Escolha a opção PIX e cole a chave.",
  "Confira o nome do destinatário.",
  "Finalize a contribuição.",
];

export default function DonatePage() {
  const { donation } = siteConfig;

  return (
    <SiteShell>
      <section className="section">
        <div className="container-site max-w-2xl">
          <h1 className="font-display text-[2rem] leading-tight sm:text-[2.5rem]">
            Faça sua doação
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Sua contribuição ajuda a fortalecer as ações realizadas pela
            Associação Nós na Rua.
          </p>

          {/* Bloco principal do PIX */}
          <div className="mt-10 rounded-2xl border border-sand bg-sand/40 p-6 sm:p-8">
            <h2 className="text-[0.8125rem] font-semibold uppercase tracking-wide text-brown">
              Chave PIX — {donation.pixKeyType}
            </h2>
            <p className="mt-2 break-all font-display text-2xl font-semibold text-ink">
              {donation.pixKey}
            </p>

            <div className="mt-6">
              <CopyPixButton />
            </div>

            {/* O QR Code só aparece quando o arquivo oficial for cadastrado */}
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

            {/* Destinatário */}
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
          </div>

          {/* Aviso de segurança */}
          <p className="mt-6 rounded-xl border-l-4 border-terracotta bg-sand/60 p-4 text-[0.9375rem] leading-relaxed text-ink">
            Antes de confirmar a transferência, confira se o destinatário
            exibido no seu banco é{" "}
            <strong className="font-semibold">{donation.receiverName}</strong>.
          </p>

          {/* Passo a passo */}
          <h2 className="section-title mt-12 text-[1.5rem] sm:text-[1.75rem]">
            Como doar pelo PIX
          </h2>
          <ol className="mt-5 space-y-3">
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

          {/* Comprovante — opcional */}
          <div className="mt-12 border-t border-sand pt-8">
            <h2 className="font-display text-lg">
              Quer enviar o comprovante?
            </h2>
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
