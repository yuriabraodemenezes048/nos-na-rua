import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { ScrollMorphLogo } from "@/components/ScrollMorphLogo";

/**
 * Estrutura comum a todas as páginas: cabeçalho, conteúdo, rodapé e a barra
 * de ações do celular. O padding inferior garante que a barra fixa nunca
 * cubra o final do conteúdo.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brown focus:px-5 focus:py-3 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <ScrollMorphLogo />
      <main id="conteudo" className="overflow-x-clip pb-24 lg:pb-0">
        {children}
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}
