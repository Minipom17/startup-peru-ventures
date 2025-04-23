
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function TrailFinderTeaser() {
  return (
    <section className="py-16 bg-teal text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M0,0 L100,0 L100,100 L0,100 Z" 
            fill="white" 
            strokeWidth="1"
            stroke="rgba(255,255,255,0.2)"
          />
          <path 
            d="M0,0 L100,100 M100,0 L0,100" 
            strokeWidth="2"
            stroke="rgba(255,255,255,0.1)"
            fill="none"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 text-white font-medium rounded-full text-sm mb-4">
              AI-POWERED
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Perfect Trail</h2>
            <p className="text-lg text-white/80 mb-6">
              Our AI-powered Trail Finder helps you discover running routes based on your location, 
              preferred difficulty, and available time. Get personalized recommendations with detailed 
              elevation profiles and difficulty ratings.
            </p>
            <Button asChild className="bg-white text-teal hover:bg-white/90">
              <Link to="/trail-finder">Try Trail Finder</Link>
            </Button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            <div className="flex flex-col gap-4 mb-6">
              <div className="space-y-2">
                <label className="block text-white text-sm font-medium">Location</label>
                <input 
                  type="text" 
                  placeholder="Enter location"
                  className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-white text-sm font-medium">Difficulty</label>
                  <select className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30">
                    <option value="">Select difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="moderate">Moderate</option>
                    <option value="hard">Hard</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-white text-sm font-medium">Time Available</label>
                  <select className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30">
                    <option value="">Select time</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="90">1.5 hours</option>
                    <option value="120">2+ hours</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button disabled className="bg-white/80 text-teal hover:bg-white">
                Find Trails
              </Button>
            </div>
            
            <div className="mt-6 text-center text-white/60 text-sm">
              Preview only. Visit the Trail Finder page to use this feature.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
