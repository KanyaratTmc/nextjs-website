import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { ContentSection } from "@/components/content-section"
import { ImageContentSection } from "@/components/image-content-section"
import { StatsSection } from "@/components/stats-section"
import { SidebarContent } from "@/components/sidebar-content"
import { MetricsSection } from "@/components/metrics-section"
import { ContentGrid } from "@/components/content-grid"
import { CtaSection } from "@/components/cta-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeatureCards />
        <ContentSection />
        <ImageContentSection />
        <div className="flex gap-8 max-w-7xl mx-auto px-4">
          <SidebarContent />
          <StatsSection />
        </div>
        <MetricsSection />
        <ContentGrid />
        <CtaSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
