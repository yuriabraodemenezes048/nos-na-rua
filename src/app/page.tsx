import { SiteShell } from "@/components/SiteShell";
import { PhotoHero } from "@/components/home/PhotoHero";
import { ImpactStrip } from "@/components/home/ImpactStrip";
import { AboutSection } from "@/components/home/AboutSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { RealGallery } from "@/components/home/RealGallery";
import { DonationWaysSection } from "@/components/home/DonationWaysSection";
import { DonationNeeds } from "@/components/home/DonationNeeds";
import { BusinessPartnershipSection } from "@/components/home/BusinessPartnershipSection";
import { TransparencyPreview } from "@/components/home/TransparencyPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Página inicial — hero fotográfico com registro real da ação, projetos
 * verdadeiros, galeria documental e os personagens da marca como apoio.
 * Jornada: conhecer → enxergar o trabalho → confiar → escolher como ajudar.
 */
export default function HomePage() {
  return (
    <SiteShell>
      <PhotoHero />
      <ImpactStrip />
      <AboutSection />
      <ProjectsSection />
      <RealGallery />
      <DonationWaysSection />
      <DonationNeeds />
      <BusinessPartnershipSection />
      <TransparencyPreview />
      <FinalCTA />
    </SiteShell>
  );
}
