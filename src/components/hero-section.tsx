
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative bg-cream min-h-[90vh] flex items-center overflow-hidden hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 to-cream/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-charcoal">
              Performance Socks <span className="text-terracotta">Crafted in Peru</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 max-w-lg">
              Premium running socks made with innovative materials like alpaca wool, merino, bamboo, and technical nylon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-6 rounded-md text-lg">
                <Link to="/shop">Shop Collection</Link>
              </Button>
              <Button asChild variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10">
                <Link to="/technology">Our Technology</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex flex-col">
                <span className="text-sm uppercase text-charcoal/60">Sustainable</span>
                <span className="font-medium">Materials</span>
              </div>
              <div className="h-10 w-px bg-charcoal/20"></div>
              <div className="flex flex-col">
                <span className="text-sm uppercase text-charcoal/60">Performance</span>
                <span className="font-medium">Engineering</span>
              </div>
              <div className="h-10 w-px bg-charcoal/20"></div>
              <div className="flex flex-col">
                <span className="text-sm uppercase text-charcoal/60">Peruvian</span>
                <span className="font-medium">Craftsmanship</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] animate-fade-in">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-sporty-orange/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-sporty-blue/20 rounded-full blur-3xl"></div>
            <img 
              src="/placeholder.svg" 
              alt="RunAlpaca Premium Socks"
              className="absolute inset-0 w-full h-full object-contain z-10"
            />
          </div>
        </div>
      </div>
      
      {/* New split showcase banners */}
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 md:grid-cols-2 bg-white/80 backdrop-blur">
        <div className="p-4 border-r border-charcoal/10 flex items-center justify-center">
          <Link to="/shop" className="flex items-center gap-3 text-terracotta hover:text-terracotta/80 transition-colors">
            <span className="text-xl font-bold">Shop Premium Gear</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="p-4 flex items-center justify-center">
          <Link to="/trail-finder" className="flex items-center gap-3 text-sporty-blue hover:text-sporty-blue/80 transition-colors">
            <span className="text-xl font-bold">Explore Trail Finder AI</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
