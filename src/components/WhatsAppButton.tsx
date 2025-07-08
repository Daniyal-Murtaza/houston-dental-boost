import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "+18329886552";
  const message = "Hi! I'm interested in learning more about your dental website services.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        variant="cta"
        size="lg"
        className="rounded-full shadow-strong animate-pulse hover:animate-none h-14 w-14 p-0"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;