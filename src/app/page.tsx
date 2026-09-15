import { SiteShell } from "@/components/SiteShell";
import { PhotoHero } from "@/components/home/PhotoHero";
import { QuemSomos } from "@/components/home/QuemSomos";
import { EquipeBand } from "@/components/home/EquipeBand";
import { ImpactPhoto } from "@/components/home/ImpactPhoto";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { DonationsFlow } from "@/components/home/DonationsFlow";
import { HelpSection } from "@/components/home/HelpSection";
import { GallerySection } from "@/components/home/GallerySection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TransparencyPreview } from "@/components/home/TransparencyPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Página inicial — narrativa fotográfica: hero em tela cheia, quem somos,
 * foto da equipe em largura total, uma pausa emocional, projetos como
 * capítulos fotográficos, para onde vão as doações, como ajudar, galeria,
 * parceiros, transparência e chamada final.
 */
export default function HomePage() {
  return (
    <SiteShell>
      <PhotoHero />
      <QuemSomos />
      <EquipeBand />
      <ImpactPhoto />
      <ProjectsSection />
      <DonationsFlow />
      <HelpSection />
      <GallerySection />
      <PartnersSection />
      <TransparencyPreview />
      <FinalCTA />
    </SiteShell>
  );
}
