import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import AudioPlayer from "@/components/AudioPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="case-study">
          <CaseStudy />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <WhatsAppButton />
      <AudioPlayer />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 DentalWebDev. Helping Houston dental practices succeed online.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
