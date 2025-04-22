import { Property } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bath, Bed, Move } from 'lucide-react';
import Link from 'next/link';

interface PropertyListProps {
  properties: Property[];
}

export function PropertyList({ properties }: PropertyListProps) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <Link href={`/properties/${property.id}`} key={property.id}>
          <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
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
      ))}
    </div>
  );
}