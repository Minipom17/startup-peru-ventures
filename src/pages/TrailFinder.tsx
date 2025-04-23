
import { useState } from "react";
import { NavMenu } from "@/components/ui/nav-menu";
import { Footer } from "@/components/footer";
import { ChatBot } from "@/components/chat-bot";
import { TrailFinderForm, TrailQuery } from "@/components/trail-finder/trail-finder-form";
import { TrailResult } from "@/components/trail-finder/trail-result";

// Mock API for trail finding
const mockTrailFinder = async (query: TrailQuery) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Generate trails based on difficulty and time
      const difficultyMap = {
        easy: { elevMin: 50, elevMax: 150, distanceMin: 2, distanceMax: 5 },
        moderate: { elevMin: 150, elevMax: 300, distanceMin: 4, distanceMax: 8 },
        hard: { elevMin: 300, elevMax: 600, distanceMin: 6, distanceMax: 12 },
        expert: { elevMin: 500, elevMax: 1000, distanceMin: 10, distanceMax: 20 },
      };
      
      const timeInt = parseInt(query.time);
      const diffSettings = difficultyMap[query.difficulty as keyof typeof difficultyMap] || difficultyMap.moderate;
      
      // Generate random trails based on the parameters
      const trails = Array.from({ length: 3 }, (_, i) => {
        const distance = Math.round((diffSettings.distanceMin + Math.random() * (diffSettings.distanceMax - diffSettings.distanceMin)) * 10) / 10;
        const elevation = Math.round(diffSettings.elevMin + Math.random() * (diffSettings.elevMax - diffSettings.elevMin));
        const estimatedTime = Math.min(timeInt, Math.round(distance * 8 + elevation / 30)); // Simple estimation formula
        
        // Generate random terrain and features
        const terrainOptions = ['Trail', 'Paved', 'Gravel', 'Forest', 'Urban', 'Dirt', 'Rocky', 'Grass'];
        const featureOptions = ['Water Access', 'Scenic Views', 'Shade', 'Dog-friendly', 'Loop', 'Out & Back', 'Technical'];
        
        const terrain = Array.from({ length: 2 + Math.floor(Math.random() * 2) }, () => 
          terrainOptions[Math.floor(Math.random() * terrainOptions.length)]
        ).filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates
        
        const features = Array.from({ length: 2 + Math.floor(Math.random() * 3) }, () => 
          featureOptions[Math.floor(Math.random() * featureOptions.length)]
        ).filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates
        
        return {
          id: `trail-${i + 1}`,
          name: `${query.location} ${['Park', 'Trail', 'Loop', 'Path', 'Run'][i % 5]} ${i + 1}`,
          location: query.location,
          difficulty: query.difficulty as 'easy' | 'moderate' | 'hard' | 'expert',
          distance,
          elevation,
          estimatedTime,
          description: `A beautiful ${query.difficulty} trail near ${query.location} featuring ${features.join(", ").toLowerCase()}. Perfect for a ${estimatedTime} minute run with ${elevation}m of elevation gain.`,
          terrain,
          features,
        };
      });
      
      resolve(trails);
    }, 1500); // Simulate API delay
  });
};

const TrailFinder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trails, setTrails] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = async (data: TrailQuery) => {
    setIsLoading(true);
    try {
      const results = await mockTrailFinder(data);
      setTrails(results as any[]);
      setHasSearched(true);
    } catch (error) {
      console.error("Error finding trails:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavMenu />
      <main className="flex-1">
        <section className="bg-teal text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">AI Trail Finder</h1>
              <p className="text-lg md:text-xl text-white/80">
                Discover perfect running routes based on your location, preferred difficulty, and available time.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <TrailFinderForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
            
            <div className="mt-12">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                  </div>
                  <p className="mt-4 text-lg">Finding the perfect trails for you...</p>
                </div>
              ) : hasSearched ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Recommended Trails</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trails.map((trail) => (
                      <TrailResult key={trail.id} trail={trail} />
                    ))}
                  </div>
                  {trails.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-lg">No trails found. Please try different search criteria.</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-charcoal/70">Use the form above to search for running trails.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default TrailFinder;
