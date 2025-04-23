
import { NavMenu } from "@/components/ui/nav-menu";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { MaterialsShowcase } from "@/components/materials-showcase";
import { TrailFinderTeaser } from "@/components/trail-finder-teaser";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat-bot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavMenu />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <MaterialsShowcase />
        <TrailFinderTeaser />
        <Testimonials />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
