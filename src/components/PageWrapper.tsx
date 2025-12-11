import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";

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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`min-h-screen bg-background relative overflow-hidden transition-transform duration-700 ease-out ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-full opacity-0"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
      }}
    >
      {backgroundPlaceholder && (
        <div className="absolute inset-0 grain-overlay">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          {backgroundImage && (
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
        </div>
      )}

      {/* Faded F Logo in center */}
      {showFadedLogo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            className="w-[60vh] h-[60vh] opacity-[0.08]"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          >
            {/* Outer rounded rectangle */}
            <rect x="20" y="20" width="160" height="160" rx="20" ry="20" className="stroke-foreground" />
            {/* F shape */}
            <path
              d="M70 50 L70 150 M70 50 L130 50 M70 100 L115 100"
              className="stroke-foreground"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}

      <Navbar />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
