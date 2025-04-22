import { Hero } from '@/components/hero';
import { FeaturedListings } from '@/components/featured-listings';
import { AboutSection } from '@/components/about-section';
import { CtaSection } from '@/components/cta-section';
import { TestimonialsSection } from '@/components/testimonials-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedListings />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}