import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock, Building } from 'lucide-react';

export function ContactInfo() {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <h2 className="text-2xl font-serif font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-6">
          Our team of luxury real estate professionals is ready to assist you with all your property needs, whether you're buying, selling, or investing.
        </p>
        
        <div className="space-y-4">
          <div className="flex">
            <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Main Office</p>
              <p className="text-muted-foreground">1234 Luxury Lane, Beverly Hills, CA 90210</p>
            </div>
          </div>
          
          <div className="flex">
            <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-muted-foreground">(800) 555-LUXE</p>
            </div>
          </div>
          
          <div className="flex">
            <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">info@luxeestates.com</p>
            </div>
          </div>
          
          <div className="flex">
            <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Office Hours</p>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-muted-foreground">Sunday: By Appointment</p>
            </div>
          </div>
          
          <div className="flex">
            <Building className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Additional Offices</p>
              <p className="text-muted-foreground">Malibu | Newport Beach | Santa Barbara</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}