import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WorkAreas } from "@/components/home/WorkAreas";
import { DonationJourney } from "@/components/home/DonationJourney";
import { CurrentCampaign } from "@/components/home/CurrentCampaign";
import { RealGallery } from "@/components/home/RealGallery";
import { TransparencyPreview } from "@/components/home/TransparencyPreview";
import { AboutSection } from "@/components/home/AboutSection";
import { OtherWaysToHelp } from "@/components/home/OtherWaysToHelp";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Página inicial.
 * `CurrentCampaign` e `RealGallery` só aparecem quando existem dados reais —
 * enquanto não houver, não renderizam nada.
 */
export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <TrustStrip />
      <WorkAreas />
      <DonationJourney />
      <CurrentCampaign />
      <RealGallery />
      <TransparencyPreview />
      <AboutSection />
      <OtherWaysToHelp />
      <FinalCTA />
    </SiteShell>
  );
}
