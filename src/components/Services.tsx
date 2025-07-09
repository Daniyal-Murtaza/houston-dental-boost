import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Zap, 
  Search, 
  Calendar, 
  MapPin, 
  Palette,
  Monitor,
  TrendingUp
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Website Redesign",
      description: "Modern, professional redesigns that reflect your practice's quality and build patient trust.",
      features: ["Clean, professional design", "Brand-aligned colors", "Patient-focused layout"],
      popular: true
    },
    {
      icon: Smartphone,
      title: "Mobile Responsiveness", 
      description: "Ensure your site looks perfect on all devices—phones, tablets, and desktops.",
      features: ["Mobile-first design", "Touch-friendly interface", "Fast mobile loading"]
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      description: "Lightning-fast websites that load quickly and keep patients engaged.",
      features: ["Under 3-second load times", "Image optimization", "Performance monitoring"]
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Seamless online booking systems that make scheduling convenient for patients.",
      features: ["Online scheduling", "Calendar integration", "Automated reminders"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Get found by local patients searching for dental services in Houston.",
      features: ["Local SEO setup", "Google My Business", "Keyword optimization"]
    },
    {
      icon: MapPin,
      title: "Google Maps Integration",
      description: "Help patients find your practice easily with integrated maps and directions.",
      features: ["Interactive maps", "Driving directions", "Location verification"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-trust">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete <span className="bg-gradient-primary bg-clip-text text-transparent">Digital Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything your dental practice needs to succeed online, from modern design 
              to patient acquisition systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="p-6 shadow-card hover:shadow-strong transition-all duration-500 relative group cursor-pointer transform hover:scale-105 hover:rotate-1 animate-bounce-in overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                {/* Floating background element */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/5 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {service.popular && (
                  <Badge className="absolute top-3 right-2 bg-gradient-primary text-white">
                    Most Popular
                  </Badge>
                )}
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-trust rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <service.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="p-8 bg-card shadow-strong max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Results You Can Expect</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">40%+</div>
                  <div className="text-sm text-muted-foreground">Increase in Patient Inquiries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">Faster Page Load Times</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <div className="text-sm text-muted-foreground">Better Mobile Experience</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;