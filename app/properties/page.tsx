import { getPropertyById, properties } from '@/lib/data';
import { PropertyList } from '@/components/property-list';
import { PropertySearch } from '@/components/property-search';

export default function PropertiesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Discover Exceptional Properties
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            Browse our curated collection of luxury properties, each offering unique features and exceptional value.
          </p>
        </div>
        
        <PropertySearch />
        
        <div className="mt-10">
          <PropertyList properties={properties} />
        </div>
      </div>
    </div>
  );
}