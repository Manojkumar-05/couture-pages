import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import logo from "../Images/ogo.png";

interface PageWrapperProps {
  children: ReactNode;
  backgroundPlaceholder?: boolean;
  backgroundImage?: string;
  showFadedLogo?: boolean;
}

const PageWrapper = ({ 
  children, 
  backgroundPlaceholder = true,
  backgroundImage,
  showFadedLogo = false
}: PageWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  // Preload background image
  useEffect(() => {
    if (backgroundImage) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => setBgLoaded(true);
    } else {
      setBgLoaded(true);
    }
  }, [backgroundImage]);

  // Trigger slide-up animation after bg is loaded
  useEffect(() => {
    if (bgLoaded) {
      // Small delay to ensure smooth animation start
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [bgLoaded]);

  return (
    <div 
      className={`fixed inset-0 bg-background overflow-hidden transition-transform duration-700 ${
        isVisible 
          ? "translate-y-0" 
          : "translate-y-full"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
        zIndex: 10
      }}
    >
      {backgroundPlaceholder && backgroundImage && bgLoaded && (
        <>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Overlay for better content readability */}
          <div className="absolute inset-0 bg-background/40" />
        </>
      )}

      {/* Faded F Logo in center */}
      {showFadedLogo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src={logo} className="w-[75vh] h-[75vh] opacity-[0.08]" alt="" />
        </div>
      )}

      <Navbar />

      <div className="relative z-10 h-full overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
