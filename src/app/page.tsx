import { SiteShell } from "@/components/SiteShell";
import { CharactersHero } from "@/components/home/CharactersHero";
import { AboutSection } from "@/components/home/AboutSection";
import { ImpactStrip } from "@/components/home/ImpactStrip";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { DonationWaysSection } from "@/components/home/DonationWaysSection";
import { BusinessPartnershipSection } from "@/components/home/BusinessPartnershipSection";
import { TransparencyPreview } from "@/components/home/TransparencyPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Página inicial — nova direção de arte com os personagens da marca.
 * Fluxo: entender → confiar → como ajuda funciona → doar.
 */
export default function HomePage() {
  return (
    <SiteShell>
      <CharactersHero />
      <AboutSection />
      <ImpactStrip />
      <ProjectsSection />
      <DonationWaysSection />
      <BusinessPartnershipSection />
      <TransparencyPreview />
      <FinalCTA />
    </SiteShell>
  );
}
