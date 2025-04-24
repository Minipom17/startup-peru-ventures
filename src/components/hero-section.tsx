
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative bg-ocean-100 min-h-[90vh] flex items-center overflow-hidden hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-sporty-blue/20 to-sporty-green/10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-ocean-600">
              Your Running <span className="text-sporty-blue">Journey Starts Here</span>
            </h1>
            <p className="text-lg md:text-xl text-ocean-500/80 max-w-lg">
              Join a vibrant community of runners. Premium gear, expert guidance, and AI-powered trail recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild className="bg-sporty-blue hover:bg-sporty-blue/90 text-white px-8 py-6 rounded-md text-lg">
                <Link to="/shop">Shop Gear</Link>
              </Button>
              <Button asChild variant="outline" className="border-sporty-green text-sporty-green hover:bg-sporty-green/10">
                <Link to="/community">Join Community</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex flex-col">
                <span className="text-sm uppercase text-ocean-500/60">Premium</span>
                <span className="font-medium">Equipment</span>
              </div>
              <div className="h-10 w-px bg-ocean-500/20"></div>
              <div className="flex flex-col">
                <span className="text-sm uppercase text-ocean-500/60">Weekly</span>
                <span className="font-medium">Group Runs</span>
              </div>
              <div className="h-10 w-px bg-ocean-500/20"></div>
              <div className="flex flex-col">
                <span className="text-sm uppercase text-ocean-500/60">AI Trail</span>
                <span className="font-medium">Finder</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] animate-fade-in">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-sporty-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-sporty-green/20 rounded-full blur-3xl"></div>
            <img 
              src="/placeholder.svg" 
              alt="RunAlpaca Premium Running Gear"
              className="absolute inset-0 w-full h-full object-contain z-10"
            />
          </div>
        </div>
      </div>
      
      {/* Split showcase banners */}
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 md:grid-cols-2 bg-white/80 backdrop-blur">
        <div className="p-4 border-r border-ocean-500/10 flex items-center justify-center">
          <Link to="/shop" className="flex items-center gap-3 text-sporty-blue hover:text-sporty-blue/80 transition-colors">
            <span className="text-xl font-bold">Browse Premium Gear</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        <div className="p-4 flex items-center justify-center">
          <Link to="/community" className="flex items-center gap-3 text-sporty-green hover:text-sporty-green/80 transition-colors">
            <span className="text-xl font-bold">Join Our Community</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
