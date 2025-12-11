import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import bg3 from "../Images/bg3.jpg";

const services = [
  "SOCIAL MEDIA MANAGEMENT",
  "PROMO SHOOTING",
  "BRAND DESIGNING",
  "PODCAST SHOOTING",
  "WEBSITE BUILDING",
];

const Service = () => {
  return (
    <PageWrapper backgroundImage={bg3} showFadedLogo={true}>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
        {/* Decorative frame */}
        <div className="relative max-w-2xl w-full">
          {/* Corner decorations */}
          {/* <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-foreground/30" />
          <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-foreground/30" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-foreground/30" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-foreground/30" />
           */}
          <div className="text-center px-8 py-12">
            {/* Title */}
            <h1 className="font-couture text-4xl md:text-6xl tracking-[0.3em] text-foreground mb-12 animate-fade-up">
              SERVICES
            </h1>
            
            {/* Service buttons */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="animate-fade-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: 0 }}
                >
                  <Button variant="contact" size="full">
                    {service}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default Service;
