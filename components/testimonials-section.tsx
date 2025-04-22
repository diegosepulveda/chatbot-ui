import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "LuxeEstates found my dream home when no one else could. Their expertise and attention to detail made the entire process seamless.",
    author: "Jennifer Lawrence",
    position: "CEO, Tech Innovations",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg"
  },
  {
    id: 2,
    quote: "The team's knowledge of luxury real estate is unmatched. They negotiated terms that exceeded our expectations.",
    author: "Michael Roberts",
    position: "Finance Executive",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    id: 3,
    quote: "Working with LuxeEstates on selling our property was the best decision we made. They understood the market perfectly.",
    author: "Sophia Chen",
    position: "Interior Designer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground">
            Hear from those who've experienced our exceptional service and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card p-6 rounded-lg shadow-sm relative">
              <QuoteIcon className="absolute top-6 right-6 h-10 w-10 text-muted/10" />
              <p className="text-foreground mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}