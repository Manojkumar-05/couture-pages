import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";
import logoFull from "../Images/logoFull.png";

const Index = () => {
  return (
    <PageWrapper backgroundImage="../Images/bg1.jpg">
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        {/* Welcome text */}
        <p className="font-couture text-sm md:text-base tracking-[0.4em] text-foreground/70 mb-6 animate-fade-up">
          W E L C O M E &nbsp; T O
        </p>
        
        {/* Logo placeholder - large centered */}
        <div className="animate-fade-up-delay-1 w-[60%] m-[3%]">
          <img src={logoFull} alt="" />
        </div>
        
        {/* Tagline */}
        <p className="font-couture text-sm md:text-base tracking-[0.3em] text-foreground/80 mb-12 text-center animate-fade-up-delay-2">
          C R E A T E &nbsp; Y O U R &nbsp; B R A N D &nbsp; W I T H &nbsp; U S
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-up-delay-3">
          <Link to="/about">
            <Button variant="fokuz" size="xl" className="rounded-full">
              EXPLORE
            </Button>
          </Link>
        </div>
      </main>
    </PageWrapper>
  );
};

export default Index;
