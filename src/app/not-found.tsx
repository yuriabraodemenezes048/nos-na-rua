import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { LeafSprig } from "@/components/brand/Decor";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

/**
 * 404 — usa a mesma estrutura das demais páginas institucionais (SiteShell,
 * tipografia e botões existentes), para nunca sair da identidade do site.
 */
export default function NotFound() {
  return (
    <SiteShell>
      <section className="section">
        <div className="container-site max-w-2xl">
          <div className="relative">
            <LeafSprig
              aria-hidden="true"
              className="absolute -right-2 -top-8 hidden h-28 w-20 text-brown/15 sm:block"
            />
            <p className="kicker">404</p>
            <h1 className="mt-4 font-display text-[2.25rem] leading-tight sm:text-[2.75rem]">
              Essa página não foi encontrada.
            </h1>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              O endereço pode ter mudado ou não existir. Você pode voltar para
              o início e continuar conhecendo o trabalho do Nós na Rua.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/" className="btn-primary w-full sm:w-auto">
                Voltar para o início
              </Link>
              <Link href="/doe" className="btn-secondary w-full sm:w-auto">
                Fazer uma doação
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
