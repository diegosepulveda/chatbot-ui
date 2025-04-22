"use client"

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Bath, Bed, Building, ChevronLeft, Heart, MapPin, Move, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { getPropertyById } from '@/lib/data';
import { PropertyInquiryForm } from '@/components/property-inquiry-form';
import Link from 'next/link';

export default function PropertyPage() {
  const { id } = useParams() as { id: string };
  const property = getPropertyById(id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!property) {
    notFound();
  }
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  const handlePreviousImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link href="/properties" className="inline-flex items-center text-primary mb-6 hover:underline">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Properties
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Property images */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] mb-6 rounded-lg overflow-hidden">
              <img 
                src={property.images[currentImageIndex]} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-4 left-4 flex space-x-2">
                <Badge variant="destructive" className="uppercase">
                  {property.status === 'for-sale' ? 'For Sale' : property.status === 'for-rent' ? 'For Rent' : property.status}
                </Badge>
                <Badge variant="secondary">
                  {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </Badge>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="rounded-full opacity-80 hover:opacity-100"
                  onClick={handlePreviousImage}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="rounded-full opacity-80 hover:opacity-100"
                  onClick={handleNextImage}
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="absolute bottom-4 right-4">
                <div className="bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>
            </div>
            
            <div className="flex justify-start space-x-2 mb-6 overflow-x-auto py-2">
              {property.images.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded cursor-pointer flex-shrink-0 border-2 ${
                    index === currentImageIndex ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Property view ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
            
            {/* Property details */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-serif font-bold mb-2">{property.title}</h1>
                  <p className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{formatPrice(property.price)}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <Bed className="h-5 w-5 mb-1" />
                  <p className="text-lg font-medium">{property.bedrooms}</p>
                  <p className="text-xs text-muted-foreground">Bedrooms</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <Bath className="h-5 w-5 mb-1" />
                  <p className="text-lg font-medium">{property.bathrooms}</p>
                  <p className="text-xs text-muted-foreground">Bathrooms</p>
                </div>
                <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                  <Move className="h-5 w-5 mb-1" />
                  <p className="text-lg font-medium">{property.squareFeet.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Sq. Ft.</p>
                </div>
              </div>
              
              <div className="flex space-x-2 mb-6">
                <Button variant="outline" className="gap-2 flex-1">
                  <Heart className="h-4 w-4" />
                  Save
                </Button>
                <Button variant="outline" className="gap-2 flex-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
              
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <p className="leading-relaxed">{property.description}</p>
                </TabsContent>
                <TabsContent value="features" className="pt-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="location" className="pt-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Map view of {property.location}</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div>
            {/* Agent card */}
            <Card className="mb-6 sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{property.agent.name}</h3>
                    <p className="text-sm text-muted-foreground">Luxury Property Specialist</p>
                  </div>
                </div>
                
                <Separator className="mb-4" />
                
                <PropertyInquiryForm propertyId={property.id} propertyTitle={property.title} agentName={property.agent.name} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}