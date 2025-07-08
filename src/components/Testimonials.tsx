import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Martinez",
      practice: "Katy Dental Care",
      location: "Katy, TX",
      text: "Our new website has completely transformed our practice. We're getting 3x more online appointment requests and patients constantly compliment us on how professional and easy to use it is.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Dr. Michael Chen",
      practice: "Houston Family Dentistry", 
      location: "Sugar Land, TX",
      text: "Working with this developer was incredibly smooth. He understood exactly what our practice needed and delivered a website that perfectly represents our brand. Highly recommended!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Dr. Jennifer Rodriguez",
      practice: "Brightway Dental",
      location: "Pearland, TX", 
      text: "The speed improvement alone was worth it - our site now loads in under 3 seconds. But beyond that, the design is beautiful and our patients love the online booking feature.",
      rating: 5,
      avatar: "JR"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Houston Dentists <span className="bg-gradient-primary bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real feedback from dental professionals who've transformed their online presence 
              and grown their patient base.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="p-6 shadow-card hover:shadow-strong transition-all duration-300 animate-fade-in relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/20" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="ring-2 ring-primary/20">
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.practice}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-4 text-center shadow-card">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </Card>
            <Card className="p-4 text-center shadow-card">
              <div className="text-2xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Happy Dentists</div>
            </Card>
            <Card className="p-4 text-center shadow-card">
              <div className="text-2xl font-bold text-primary mb-1">2-4 Week</div>
              <div className="text-sm text-muted-foreground">Delivery Time</div>
            </Card>
            <Card className="p-4 text-center shadow-card">
              <div className="text-2xl font-bold text-primary mb-1">Local</div>
              <div className="text-sm text-muted-foreground">Houston Area</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;