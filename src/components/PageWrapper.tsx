import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";

interface PageWrapperProps {
  children: ReactNode;
  backgroundPlaceholder?: boolean;
  backgroundImage?: string; // NEW PROP
}

const PageWrapper = ({ 
  children, 
  backgroundPlaceholder = true,
  backgroundImage 
}: PageWrapperProps) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">

      {backgroundPlaceholder && (
        <div className="absolute inset-0 grain-overlay">

          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('${backgroundImage || "/placeholder.svg"}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      )}

      <Navbar />

      <div
        className={`relative z-10 transition-all duration-700 ease-out ${
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
