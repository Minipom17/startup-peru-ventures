
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 1,
    name: 'Trail Runner Pro',
    description: 'Premium compression socks with alpaca wool blend',
    price: 24.99,
    image: '/placeholder.svg',
    category: 'compression'
  },
  {
    id: 2,
    name: 'Merino Light',
    description: 'Lightweight merino wool socks for hot weather',
    price: 19.99,
    image: '/placeholder.svg',
    category: 'lightweight'
  },
  {
    id: 3,
    name: 'Bamboo Ultra Comfort',
    description: 'Moisture-wicking bamboo blend for maximum comfort',
    price: 22.99,
    image: '/placeholder.svg',
    category: 'comfort'
  },
  {
    id: 4,
    name: 'Alpaca Endurance',
    description: 'Long-distance running socks with enhanced durability',
    price: 27.99,
    image: '/placeholder.svg',
    category: 'endurance'
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta font-medium rounded-full text-sm mb-4">
            FEATURED PRODUCTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for Performance</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Discover our premium selection of high-performance running socks, crafted from innovative materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-charcoal">
                  {product.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-charcoal/70 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${product.price}</span>
                  <Button variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-terracotta hover:bg-terracotta/90">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
