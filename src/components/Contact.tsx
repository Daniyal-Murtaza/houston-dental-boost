import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  MessageSquare,
  Send
} from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  // Dynamically load Calendly script
  useEffect(() => {
    const scriptId = "calendly-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-trust">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Get Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss your dental practice's needs and create a website that
              attracts more patients and grows your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-strong">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Dr. Your Name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="doctor@yourpractice.com"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="practice">Practice Name</Label>
                  <Input
                    id="practice"
                    placeholder="Your Dental Practice"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Current Website (if any)</Label>
                  <Input
                    id="website"
                    placeholder="www.yourpractice.com"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your practice and what you're looking to improve with your website..."
                    className="min-h-32"
                  />
                </div>

                <Button variant="cta" size="lg" className="w-full text-lg py-6">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info & Calendly */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-trust rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Richmond, TX 77082</div>
                      <div className="text-sm text-muted-foreground">Houston Metro Area</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-trust rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">+1 832-988-6552</div>
                      <div className="text-sm text-muted-foreground">Call or Text</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-trust rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">hello@dentalwebdev.com</div>
                      <div className="text-sm text-muted-foreground">Email Response within 2hrs</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-trust rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Mon-Fri 8AM-6PM</div>
                      <div className="text-sm text-muted-foreground">Weekend consultations available</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Badge className="bg-gradient-primary text-white">
                    ✓ Free Initial Consultation
                  </Badge>
                  <Badge variant="outline" className="block w-fit">
                    ✓ 2-4 Week Delivery
                  </Badge>
                  <Badge variant="outline" className="block w-fit">
                    ✓ Houston Area Focus
                  </Badge>
                </div>
              </Card>

              {/* Calendly Embed */}
              <Card className="p-8 shadow-card" id="schedule-call">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Schedule a Call</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  Book a free 30-minute consultation to discuss your dental practice's
                  website needs and how I can help you attract more patients.
                </p>

                {/* Calendly inline widget begin */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/danielzaydee/30min?hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "700px" }}
                ></div>
                {/* Calendly inline widget end */}
              </Card>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center mt-12">
            <Card className="p-8 bg-card shadow-strong max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Prefer WhatsApp?</h3>
              <p className="text-muted-foreground mb-6">
                Get instant answers to your questions about website redesign,
                pricing, and timeline.
              </p>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp: +1 832-988-6552
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;