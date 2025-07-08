import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Smartphone, 
  Search,
  ArrowRight
} from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

const CaseStudy = () => {
  const improvements = [
    {
      icon: TrendingUp,
      metric: "150%",
      label: "Increase in Patient Bookings",
      description: "More patients finding and contacting the practice"
    },
    {
      icon: Clock,
      metric: "3.2s",
      label: "Page Load Time",
      description: "Down from 8.5s - dramatically improved user experience"
    },
    {
      icon: Smartphone,
      metric: "95%",
      label: "Mobile Performance Score",
      description: "Perfect mobile experience for patients on-the-go"
    },
    {
      icon: Search,
      metric: "#1",
      label: "Local Search Ranking",
      description: "Top position for 'dentist near me' searches"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-primary text-white mb-4">
              Real Results
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Outdated to <span className="bg-gradient-primary bg-clip-text text-transparent">Outstanding</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we transformed a Houston dental practice's online presence 
              and dramatically increased their patient bookings.
            </p>
          </div>

          {/* Before/After Image */}
          <div className="mb-16">
            <Card className="overflow-hidden shadow-strong">
              <img
                src={beforeAfterImage}
                alt="Before and after website redesign comparison"
                className="w-full h-64 md:h-96 object-cover"
              />
            </Card>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {improvements.map((item, index) => (
              <Card 
                key={item.label}
                className="p-6 text-center shadow-card hover:shadow-professional transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 bg-trust rounded-lg mb-4 mx-auto w-fit">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {item.metric}
                </div>
                <h3 className="font-semibold mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Case Study Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span>Outdated website design from 2015</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span>Poor mobile experience losing patients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span>Slow loading times and no online booking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2"></div>
                  <span>Invisible in local search results</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-4">The Solution</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Modern, trust-building design with patient focus</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Mobile-first responsive design</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Speed optimization and online booking system</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Local SEO optimization for Houston searches</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-trust shadow-strong max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready for Similar Results?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can transform your dental practice's online presence 
                and start attracting more patients today.
              </p>
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                Schedule Your Free Audit
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;