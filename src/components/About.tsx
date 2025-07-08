import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, MapPin, Users, Zap } from "lucide-react";
import aboutImage from "@/assets/about-developer.jpg";

const About = () => {
  const skills = [
    "React & TypeScript", "UI/UX Design", "Full-Stack Development", 
    "Mobile Responsive", "SEO Optimization", "Performance Tuning"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Your Developer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Local Richmond software engineer with a passion for helping Houston dental practices 
              succeed online through modern, converting websites.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Card className="p-8 shadow-card hover:shadow-strong transition-all duration-500 hover:scale-105 group">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 animate-glow -z-10" />
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold">Richmond, TX (77082)</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Local Expertise, Professional Results</h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  As a Richmond-based software engineer, I understand the unique needs of Houston-area 
                  dental practices. I specialize in creating websites that don't just look good—they 
                  convert visitors into patients and help your practice grow.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span>5+ years of web development experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Specialized in healthcare & dental websites</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span>Focus on speed, SEO, and conversions</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technical Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-trust text-trust-foreground">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="cta" className="w-full">
                  Let's Discuss Your Project
                </Button>
              </Card>
            </div>

            <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-glow" />
                <img
                  src={aboutImage}
                  alt="Software developer working"
                  className="w-full h-96 object-cover rounded-lg shadow-strong transform group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-lg group-hover:opacity-20 transition-opacity duration-500 z-20"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full opacity-60 animate-float" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-primary-glow rounded-full opacity-40 animate-float" style={{ animationDelay: '1.2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;