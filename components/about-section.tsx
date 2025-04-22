import { Building, Home, Key, Shield } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Luxury Real Estate Experts
          </h2>
          <p className="text-muted-foreground">
            With over 20 years of experience in the luxury real estate market, we provide exceptional service and exclusive access to the finest properties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Exclusive Listings</h3>
            <p className="text-muted-foreground">
              Access to the most prestigious properties, many not publicly listed.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Global Network</h3>
            <p className="text-muted-foreground">
              International connections with elite real estate professionals worldwide.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Key className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Personalized Service</h3>
            <p className="text-muted-foreground">
              Dedicated agents providing customized assistance throughout your journey.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Market Expertise</h3>
            <p className="text-muted-foreground">
              In-depth knowledge of luxury markets, trends, and investment opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}