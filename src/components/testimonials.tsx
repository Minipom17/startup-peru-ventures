
import { Card, CardContent } from '@/components/ui/card';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Miguel Rodriguez',
    role: 'Marathon Runner',
    text: 'These socks have completely changed my marathon training. The compression is perfect, and my feet stay dry even after 20+ miles.',
    image: '/placeholder.svg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Trail Runner',
    text: 'The durability is impressive. I run technical trails weekly, and these socks show minimal wear after 6 months of intense use.',
    image: '/placeholder.svg',
  },
  {
    id: 3,
    name: 'Carlos Mendez',
    role: 'Ultra Runner',
    text: 'Zero blisters during my last 50-mile ultra! The combination of alpaca and technical fibers is truly revolutionary.',
    image: '/placeholder.svg',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-gold/20 text-charcoal font-medium rounded-full text-sm mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Athletes</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Hear from runners who have experienced the RunAlpaca difference in their training and races.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(testimonial => (
            <Card key={testimonial.id} className="bg-cream hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <svg className="w-8 h-8 text-gold/50 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8c-2.209 0-4 1.791-4 4v12h8V12h-4c0-1.105 0.895-2 2-2v-2zm12 0c-2.209 0-4 1.791-4 4v12h8V12h-4c0-1.105 0.895-2 2-2v-2z" />
                  </svg>
                  <p className="text-charcoal mb-4 italic">{testimonial.text}</p>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-charcoal/70">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
