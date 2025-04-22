import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/95 z-10"></div>
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
              alt="Luxury home"
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="relative z-20 p-10 md:p-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-white/90 mb-8">
              Contact our team of luxury real estate experts today and begin your journey to finding the perfect property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/properties">Browse Properties</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}