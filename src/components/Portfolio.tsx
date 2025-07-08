import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone, Zap, Search } from "lucide-react";
import portfolioImage from "@/assets/portfolio-grid.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "SmileCare Dental",
      description: "Complete redesign for a family dental practice in Katy, focusing on modern aesthetics and online booking.",
      tech: ["React", "Mobile First", "SEO", "Booking System"],
      results: "200% increase in online appointments",
      category: "Full Redesign"
    },
    {
      title: "Houston Orthodontics",
      description: "Mobile-responsive design with patient portal integration and virtual consultation booking.",
      tech: ["WordPress", "Custom Forms", "Patient Portal", "Maps"],
      results: "180% boost in patient inquiries",
      category: "Orthodontics"
    },
    {
      title: "Brightway Dentistry",
      description: "Speed optimization and SEO overhaul for an established practice in Sugar Land.",
      tech: ["Performance", "Local SEO", "Google Analytics", "Schema"],
      results: "85% faster load times",
      category: "Optimization"
    },
    {
      title: "Pearland Family Dental",
      description: "Modern website with integrated appointment scheduling and patient education resources.",
      tech: ["Vue.js", "Calendly", "Content Management", "Reviews"],
      results: "150% more online bookings",
      category: "Family Practice"
    }
  ];

  return (
    <section className="py-20 bg-gradient-trust">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Successful dental website transformations across the Houston area, 
              each tailored to attract and convert more patients.
            </p>
          </div>

          {/* Featured Portfolio Image */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-strong">
              <img
                src={portfolioImage}
                alt="Portfolio of dental website designs"
                className="w-full h-64 md:h-96 object-cover"
              />
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="p-6 shadow-card hover:shadow-strong transition-all duration-300 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge variant="secondary" className="mb-2 bg-trust text-trust-foreground">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <Zap className="w-4 h-4" />
                  {project.results}
                </div>
              </Card>
            ))}
          </div>

          {/* Portfolio Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Dental Websites Delivered</div>
            </Card>
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </Card>
            <Card className="p-6 text-center shadow-card">
              <div className="text-3xl font-bold text-primary mb-2">48hrs</div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </Card>
          </div>

          {/* Technologies & Approach */}
          <Card className="p-8 shadow-strong">
            <h3 className="text-2xl font-bold mb-6 text-center">My Development Approach</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-trust rounded-lg mb-4 mx-auto w-fit">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Mobile-First Design</h4>
                <p className="text-sm text-muted-foreground">
                  Every site is designed for mobile users first, ensuring perfect experiences on all devices.
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-trust rounded-lg mb-4 mx-auto w-fit">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Performance Focused</h4>
                <p className="text-sm text-muted-foreground">
                  Lightning-fast loading times keep patients engaged and improve search rankings.
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-trust rounded-lg mb-4 mx-auto w-fit">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">SEO Optimized</h4>
                <p className="text-sm text-muted-foreground">
                  Built-in SEO best practices help patients find your practice in local searches.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;