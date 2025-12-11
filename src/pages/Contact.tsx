import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";

const contactLinks = [
  { name: "MAIL", href: "mailto:hello@fokuz.com" },
  { name: "INSTAGRAM", href: "https://instagram.com" },
  { name: "LINKED IN", href: "https://linkedin.com" },
  { name: "WHATSAPP", href: "https://wa.me/" },
];

const Contact = () => {
  return (
    <PageWrapper>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
        {/* Decorative frame */}
        <div className="relative max-w-xl w-full">
          {/* Corner decorations */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-foreground/30" />
          <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-foreground/30" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-foreground/30" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-foreground/30" />
          
          <div className="text-center px-8 py-12">
            {/* Title */}
            <h1 className="font-couture text-4xl md:text-6xl tracking-[0.3em] text-foreground mb-12 animate-fade-up">
              CONTACT
            </h1>
            
            {/* Contact buttons */}
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="animate-fade-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: 0 }}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="contact" size="full">
                      {link.name}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default Contact;
