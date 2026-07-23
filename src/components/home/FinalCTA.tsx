import Link from "next/link";
import { whatsappUrl } from "@/data/site";

/** Chamada final — direta e sem linguagem apelativa. */
export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-site">
        <div className="rounded-3xl bg-brown px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-prose font-display text-[1.75rem] leading-tight text-white sm:text-[2.125rem]">
            Toda ajuda pode iniciar um novo caminho.
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-lg leading-relaxed text-white/85">
            Contribua com qualquer valor e ajude a Associação Nós na Rua a
            continuar mobilizando ações em São José.
          </p>

          <Link href="/doe" className="btn-on-brown mt-8">
            Doar agora
          </Link>

          <p className="mt-6 text-[0.9375rem] text-white/80">
            Prefere ajudar de outra forma?{" "}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline underline-offset-4"
            >
              Fale pelo WhatsApp.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
