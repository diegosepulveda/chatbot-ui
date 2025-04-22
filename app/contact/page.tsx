import { ContactForm } from '@/components/contact-form';
import { ContactInfo } from '@/components/contact-info';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Contact Our Luxury Real Estate Team
          </h1>
          <p className="text-muted-foreground">
            Reach out to our experienced team of luxury property specialists who are ready to help you find your dream home or sell your property.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}