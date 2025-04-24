
import { NavMenu } from "@/components/ui/nav-menu";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { MaterialsShowcase } from "@/components/materials-showcase";
import { TrailFinderTeaser } from "@/components/trail-finder-teaser";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat-bot";
import { CommunitySection } from "@/components/community-section";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavMenu />
      <main>
        <HeroSection />
        
        {/* Split Product & Community Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Product Section */}
          <div className="bg-ocean-100 py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block relative">
                  Performance Gear
                  <span className="absolute bottom-[-8px] left-0 right-0 h-1 w-24 bg-sporty-blue mx-auto"></span>
                </h2>
                <p className="text-lg mt-6">Premium running equipment crafted for optimal performance</p>
              </div>
            </div>
            <FeaturedProducts />
            <MaterialsShowcase />
          </div>
          
          {/* Community & AI Section */}
          <div className="bg-forest-100 py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block relative">
                  Community & Resources
                  <span className="absolute bottom-[-8px] left-0 right-0 h-1 w-24 bg-sporty-green mx-auto"></span>
                </h2>
                <p className="text-lg mt-6">Connect with fellow runners and access AI-powered tools</p>
              </div>
            </div>
            <CommunitySection />
            <TrailFinderTeaser />
          </div>
        </div>
        
        <Testimonials />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;

