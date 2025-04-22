"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchIcon } from 'lucide-react';

export function Hero() {
  const [propertyType, setPropertyType] = useState('any');
  const [priceRange, setPriceRange] = useState('any');
  const [location, setLocation] = useState('');

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <img 
          src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg" 
          alt="Modern office building"
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-4 z-20 mt-16">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Find Your Next Business Location
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Premium commercial properties for growing enterprises
          </p>
        </div>
        
        <div className="bg-white dark:bg-card rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium mb-1">
                Location
              </label>
              <Input 
                id="location"
                placeholder="City or District"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="property-type" className="block text-sm font-medium mb-1">
                Property Type
              </label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger id="property-type">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                  <SelectItem value="warehouse">Warehouse</SelectItem>
                  <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="price-range" className="block text-sm font-medium mb-1">
                Price Range
              </label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger id="price-range">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="0-5000000">Up to $5M</SelectItem>
                  <SelectItem value="5000000-10000000">$5M - $10M</SelectItem>
                  <SelectItem value="10000000-20000000">$10M - $20M</SelectItem>
                  <SelectItem value="20000000-50000000">$20M - $50M</SelectItem>
                  <SelectItem value="50000000+">$50M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button className="w-full gap-2">
                <SearchIcon className="h-4 w-4" />
                <span>Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}