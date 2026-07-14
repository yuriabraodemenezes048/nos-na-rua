import { SectionHeading } from "@/components/SectionHeading";
import { PixCopy } from "@/components/PixCopy";
import { DemoTag } from "@/components/DemoNotice";
import { WhatsAppIcon, HeartIcon } from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";

/**
 * SEÇÃO 7 — COMO DOAR (coração do site)
 * Fluxo: a pessoa vê a chave → copia ou escaneia → doa → envia comprovante →
 * recebe agradecimento. Precisa ser MUITO fácil.
 */
const passos = [
  "Copie a chave PIX ou escaneie o QR Code.",
  "Faça a doação no app do seu banco.",
  "Envie o comprovante pelo WhatsApp.",
];

export function ComoDoar() {
  return (
    <section
      id="doacao"
      className="scroll-mt-24 bg-verde-600 py-16 text-white sm:py-24"
    >
      <div className="container-site flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
            <HeartIcon className="h-4 w-4" />
            Como doar
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Doar leva menos de um minuto
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-white/85">
            Escolha a forma mais fácil para você. Toda contribuição, de qualquer
            valor, faz diferença.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Card PIX */}
          <div className="rounded-3xl bg-cream p-6 text-ink shadow-soft sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row">
              {/* QR Code (área demonstrativa) */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="grid h-40 w-40 shrink-0 place-items-center rounded-2xl border-2 border-dashed border-verde-200 bg-white text-center"
                  role="img"
                  aria-label="Área reservada para o QR Code do PIX"
                >
                  <span className="px-4 text-xs font-medium text-stone">
                    QR Code
                    <br />
                    (área demonstrativa)
                  </span>
                </div>
                <DemoTag label="Inserir QR Code real" />
              </div>

              {/* Chave + copiar */}
              <div className="flex-1">
                <PixCopy />
              </div>
            </div>

            {/* Dados do recebedor */}
            <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-ink/10 pt-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-stone">
                  Nome / Instituição
                </dt>
                <dd className="font-medium text-ink">{site.pix.holder}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-stone">
                  Banco / Instituição
                </dt>
                <dd className="font-medium text-ink">{site.pix.bank}</dd>
              </div>
            </dl>
          </div>

          {/* Passo a passo + comprovante */}
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-verde-700/60 p-6 sm:p-8">
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-semibold">Passo a passo</h3>
              <ol className="flex flex-col gap-4">
                {passos.map((passo, i) => (
                  <li key={passo} className="flex items-start gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-white/90">{passo}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={whatsappLink(site.messages.receipt)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enviar comprovante no WhatsApp
              </a>
              <p className="rounded-2xl bg-white/10 p-4 text-center text-sm leading-relaxed text-white/90">
                💚 Obrigado por apoiar essa causa. Sua contribuição ajuda a
                transformar solidariedade em ação.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-white/70">
          Chave PIX, QR Code e dados do recebedor são provisórios e serão
          substituídos pelos dados oficiais da ONG.
        </p>
      </div>
    </section>
  );
}
