import { SiteShell } from "@/components/SiteShell";
import { PhotoHero } from "@/components/home/PhotoHero";
import { QuemSomos } from "@/components/home/QuemSomos";
import { EquipeBand } from "@/components/home/EquipeBand";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { HelpSection } from "@/components/home/HelpSection";
import { TransparencyPreview } from "@/components/home/TransparencyPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Página inicial — narrativa fotográfica: hero em tela cheia, quem somos,
 * foto da equipe em largura total, projetos como capítulos fotográficos,
 * como ajudar (identidade + personagens), transparência e chamada final.
 */
export default function HomePage() {
  return (
    <SiteShell>
      <PhotoHero />
      <QuemSomos />
      <EquipeBand />
      <ProjectsSection />
      <HelpSection />
      <TransparencyPreview />
      <FinalCTA />
    </SiteShell>
  );
}
