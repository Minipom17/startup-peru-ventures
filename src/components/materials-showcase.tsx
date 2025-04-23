
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const MATERIALS = [
  {
    name: 'Alpaca Wool',
    description: 'Luxuriously soft, naturally thermal-regulating, and sustainable fiber from Peru.',
    icon: '🦙',
    benefits: ['Thermal regulation', 'Water-resistant', 'Hypoallergenic']
  },
  {
    name: 'Merino Wool',
    description: 'Fine wool that wicks moisture and prevents odor through natural antimicrobial properties.',
    icon: '🐑',
    benefits: ['Odor resistant', 'Moisture wicking', 'Temperature control']
  },
  {
    name: 'Bamboo Fiber',
    description: 'Eco-friendly material with natural cooling properties and incredible softness.',
    icon: '🎋',
    benefits: ['Antibacterial', 'UV protection', 'Breathable']
  },
  {
    name: 'Technical Nylon',
    description: 'Durable synthetic fiber that provides structure, support, and longevity.',
    icon: '🧵',
    benefits: ['Durability', 'Shape retention', 'Quick drying']
  },
];

export function MaterialsShowcase() {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="section-title">Premium Materials</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mt-6">
            Our innovative blend of natural and technical fibers creates the perfect balance
            of comfort, performance and sustainability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MATERIALS.map(material => (
            <Card key={material.name} className="bg-white/80 backdrop-blur hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{material.icon}</div>
                <h3 className="font-bold text-xl mb-2">{material.name}</h3>
                <p className="text-charcoal/70 mb-4">{material.description}</p>
                <div className="space-y-2">
                  {material.benefits.map(benefit => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/technology" className="inline-flex items-center text-terracotta font-medium hover:underline">
            Learn more about our technologies
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
