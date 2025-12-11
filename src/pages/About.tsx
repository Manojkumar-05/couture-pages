import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";
import bg2 from "../Images/bg2.jpg";

const About = () => {
  return (
    <PageWrapper backgroundImage={bg2}>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
        {/* Decorative frame */}
        <div className="relative max-w-4xl w-full">
          {/* Corner decorations */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-foreground/30" />
          <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-foreground/30" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-foreground/30" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-foreground/30" />
          
          <div className="text-center px-8 py-16">
            {/* Title */}
            <h1 className="font-couture text-4xl md:text-6xl tracking-[0.3em] text-foreground mb-12 animate-fade-up">
              ABOUT
            </h1>
            
            {/* Description */}
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="font-couture text-xs md:text-sm tracking-[0.15em] leading-relaxed text-foreground/90 animate-fade-up-delay-1">
                AT FOKUZ, WE BRING BRANDS TO LIFE THROUGH THE POWER OF CINEMATIC STORYTELLING. WE SPECIALIZE IN BRAND MARKETING BY CRAFTING HIGH-END, DOCUMENTARY-STYLE, ADVERTISEMENT-STYLE, OR VIDEOS THAT AUTHENTICALLY SHOWCASE YOUR STORY, VALUES, AND VISION.
              </p>
              
              <p className="font-couture text-xs md:text-sm tracking-[0.15em] leading-relaxed text-foreground/90 animate-fade-up-delay-2">
                OUR APPROACH BLENDS CREATIVITY WITH STRATEGY, ENSURING EVERY FRAME NOT ONLY LOOKS STUNNING BUT ALSO DRIVES ENGAGEMENT AND BUILDS TRUST.
              </p>
              
              <p className="font-couture text-xs md:text-sm tracking-[0.15em] leading-relaxed text-foreground/90 animate-fade-up-delay-3">
                FROM PROMOTIONAL CAMPAIGNS AND CORPORATE DOCUMENTARIES TO PRODUCT LAUNCHES AND EVENT COVERAGES, WE DELIVER VISUALS THAT CAPTIVATE, INSPIRE, AND CONVERT.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-12 animate-fade-up-delay-4">
              <Link to="/service">
                <Button variant="fokuz" size="lg">
                  SERVICES
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
};

export default About;
