"use client"

import { useRef } from 'react';
import { ArrowLeftCircle, ArrowRightCircle, Bath, Bed, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getFeaturedProperties, Property } from '@/lib/data';
import Link from 'next/link';

export function FeaturedListings() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const featuredProperties = getFeaturedProperties();
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -current.clientWidth : current.clientWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Properties</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our handpicked selection of extraordinary properties, each offering unique luxury and exceptional value.
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <Button variant="outline" size="icon" onClick={() => scroll('left')}>
              <ArrowLeftCircle className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll('right')}>
              <ArrowRightCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/properties">View All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: Property }) {
  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Link href={`/properties/${property.id}`}>
      <Card className="w-[300px] md:w-[350px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
        <div className="relative h-[220px] overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="destructive" className="uppercase text-xs font-semibold">
              {property.status === 'for-sale' ? 'For Sale' : property.status === 'for-rent' ? 'For Rent' : property.status}
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="text-xs font-semibold">
              {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-serif font-bold text-lg mb-1 line-clamp-1">{property.title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{property.location}</p>
          <p className="text-xl font-bold text-primary mb-3">{formatPrice(property.price)}</p>
          
          <div className="flex justify-between text-sm">
            <span className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              {property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              {property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}
            </span>
            <span className="flex items-center gap-1">
              <Move className="h-4 w-4" />
              {property.squareFeet.toLocaleString()} ft²
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}