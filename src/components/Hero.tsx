import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Star } from "lucide-react";
import { MouseEvent } from "react";
import heroImage from "@/assets/hero-dental.jpg";

const Hero = () => {
  const handleBookAuditClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = document.getElementById("schedule-call");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-trust overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern dental office"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by Houston Dental Practices
            </span>
            <Star className="w-5 h-5 text-primary fill-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Helping Houston Dentists</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Modernize Their Online Presence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I transform outdated dental websites into modern, patient-attracting 
            digital experiences that increase bookings and build trust in your practice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="cta"
              size="lg"
              className="text-lg px-8 py-4 hover:scale-110 hover:shadow-strong transition-all duration-300 animate-glow group"
              onClick={handleBookAuditClick}
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Book a Free Website Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button variant="trust" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 group">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Local Richmond-based Developer
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Mobile-First Design
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Fast & SEO Optimized
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/5 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-20 w-16 h-16 bg-primary-glow/8 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-glow rounded-full opacity-40 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary rounded-full opacity-20 animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;