
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Technology', href: '/technology' },
  { name: 'About', href: '/about' },
  { name: 'Trail Finder', href: '/trail-finder' },
  { name: 'Blog', href: '/blog' },
];

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-terracotta">RunAlpaca</span>
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-charcoal font-medium hover:text-terracotta transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" className="hover:text-terracotta">
            Sign In
          </Button>
          <Button variant="default" className="bg-terracotta hover:bg-terracotta/90">
            Cart (0)
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-charcoal p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-terracotta">RunAlpaca</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-charcoal hover:text-terracotta transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="mt-auto flex flex-col gap-4">
            <Button variant="ghost" className="hover:text-terracotta justify-start" onClick={() => setIsOpen(false)}>
              Sign In
            </Button>
            <Button variant="default" className="bg-terracotta hover:bg-terracotta/90" onClick={() => setIsOpen(false)}>
              Cart (0)
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
