import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import logo from "../Images/ogo.png"
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
          <img src={logo} className="w-[75vh] h-[75vh] opacity-[0.08]" />
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
