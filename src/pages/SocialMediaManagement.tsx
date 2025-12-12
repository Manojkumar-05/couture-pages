import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import bg3 from "../Images/bg3.jpg";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const services = [
  "INSTAGRAM",
  "LINKEDIN",
  "TWITTER",
  "YOUTUBE",
];

const SocialMediaManagement = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper backgroundImage={bg3} showFadedLogo={true}>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
        <div className="relative max-w-2xl w-full">
          <div className="text-center px-8 py-12">
            <button 
              onClick={() => navigate('/service')}
              className="absolute top-0 left-0 text-foreground/70 hover:text-foreground transition-colors flex items-center gap-2 font-couture text-sm tracking-wider"
            >
              <ArrowLeft size={18} />
              BACK
            </button>
            
            <h1 className="font-couture text-3xl md:text-5xl tracking-[0.3em] text-foreground mb-12 animate-fade-up">
              SOCIAL MEDIA MANAGEMENT
            </h1>
            
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

export default SocialMediaManagement;
