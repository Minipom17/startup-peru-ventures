
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TrailInfo {
  id: string;
  name: string;
  location: string;
  difficulty: 'easy' | 'moderate' | 'hard' | 'expert';
  distance: number; // in km
  elevation: number; // in meters
  estimatedTime: number; // in minutes
  description: string;
  terrain: string[];
  features: string[];
}

interface TrailResultProps {
  trail: TrailInfo;
}

export function TrailResult({ trail }: TrailResultProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-blue-100 text-blue-800';
      case 'hard': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="bg-gradient-to-r from-teal/30 to-teal/10 p-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold">{trail.name}</CardTitle>
            <p className="text-sm text-charcoal/70 mt-1">{trail.location}</p>
          </div>
          <Badge className={`${getDifficultyColor(trail.difficulty)}`}>
            {trail.difficulty.charAt(0).toUpperCase() + trail.difficulty.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div>
            <p className="text-xs text-charcoal/60">Distance</p>
            <p className="font-medium">{trail.distance} km</p>
          </div>
          <div>
            <p className="text-xs text-charcoal/60">Elevation</p>
            <p className="font-medium">+{trail.elevation}m</p>
          </div>
          <div>
            <p className="text-xs text-charcoal/60">Est. Time</p>
            <p className="font-medium">{trail.estimatedTime} min</p>
          </div>
        </div>

        <div className="elevation-chart h-16 mb-4 bg-gray-100 rounded relative overflow-hidden">
          {/* Simplified elevation visualization */}
          <div className="absolute inset-0 flex items-end">
            <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
              <path
                d={`M0,30 L0,${30 - Math.random() * 10} 
                    C${10 + Math.random() * 10},${20 - Math.random() * 15} 
                    ${20 + Math.random() * 10},${25 - Math.random() * 15} 
                    ${30 + Math.random() * 10},${20 - Math.random() * 15} 
                    C${40 + Math.random() * 10},${15 - Math.random() * 10} 
                    ${50 + Math.random() * 10},${5 + Math.random() * 10} 
                    ${60 + Math.random() * 10},${10 - Math.random() * 5}
                    C${70 + Math.random() * 10},${15 - Math.random() * 10} 
                    ${80 + Math.random() * 10},${20 - Math.random() * 10} 
                    ${90 + Math.random() * 10},${25 - Math.random() * 5}
                    L100,30 Z`}
                fill="url(#gradient)"
                strokeWidth="1"
                stroke="#267D80"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#267D80" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#267D80" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute bottom-1 left-2 text-xs text-charcoal/70">0m</div>
          <div className="absolute bottom-1 right-2 text-xs text-charcoal/70">{trail.distance}km</div>
        </div>

        <p className="text-sm mb-4">{trail.description}</p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium mb-1">Terrain</p>
            <div className="flex flex-wrap gap-1">
              {trail.terrain.map((item, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-cream">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium mb-1">Features</p>
            <div className="flex flex-wrap gap-1">
              {trail.features.map((item, index) => (
                <Badge key={index} variant="outline" className="text-xs bg-cream">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
