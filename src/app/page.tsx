import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { OQueFazemos } from "@/components/sections/OQueFazemos";
import { ParaOndeVai } from "@/components/sections/ParaOndeVai";
import { Projetos } from "@/components/sections/Projetos";
import { Transparencia } from "@/components/sections/Transparencia";
import { ComoDoar } from "@/components/sections/ComoDoar";
import { Empresas } from "@/components/sections/Empresas";
import { OutrasFormas } from "@/components/sections/OutrasFormas";
import { Contato } from "@/components/sections/Contato";

/**
 * Página inicial — landing page institucional da ONG Nós na Rua.
 * A ordem das seções segue o roteiro de conversão:
 * apresentar → gerar confiança → mostrar o destino → facilitar a doação.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <OQueFazemos />
        <ParaOndeVai />
        <Projetos />
        <Transparencia />
        <ComoDoar />
        <Empresas />
        <OutrasFormas />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
