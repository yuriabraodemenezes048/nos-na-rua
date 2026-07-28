import { SiteShell } from "@/components/SiteShell";
import { PhotoHero } from "@/components/home/PhotoHero";
import { AboutImpact } from "@/components/home/AboutImpact";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { PhotoStrip } from "@/components/home/PhotoStrip";
import { HelpSection } from "@/components/home/HelpSection";
import { TransparencyPreview } from "@/components/home/TransparencyPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Página inicial — seis blocos: hero fotográfico, quem somos + impacto,
 * projetos reais (+ faixa fotográfica curta), como ajudar, transparência e
 * chamada final. Jornada: ver o trabalho → confiar → como ajudar → doar.
 */
export default function HomePage() {
  return (
    <SiteShell>
      <PhotoHero />
      <AboutImpact />
      <ProjectsSection />
      <PhotoStrip />
      <HelpSection />
      <TransparencyPreview />
      <FinalCTA />
    </SiteShell>
  );
}
