import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Calendar, 
  Menu, 
  X,
  Phone
} from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Services", href: "services" },
    { label: "Portfolio", href: "portfolio" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-card">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg">DentalWebDev</div>
              <div className="text-xs text-muted-foreground">Houston Specialist</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>832-988-6552</span>
            </div>
            <Button variant="cta" size="sm">
              <Calendar className="w-4 h-4" />
              Free Audit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>832-988-6552</span>
                </div>
                <Button variant="cta" size="lg" className="w-full">
                  <Calendar className="w-4 h-4" />
                  Book Free Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Trust Badge */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <Badge className="bg-gradient-primary text-white shadow-professional">
          ✓ Local Houston Developer
        </Badge>
      </div>
    </nav>
  );
};

export default Navigation;