import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import logo from "../Images/ogo.png";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICE", path: "/service" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12">
        {/* Logo placeholder */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-10" alt="FOKUZ Logo" />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-couture text-sm tracking-[0.2em] text-foreground/80 hover:text-outline transition-colors duration-300 relative",
                location.pathname === link.path && "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={cn(
            "w-6 h-px bg-foreground transition-all duration-300",
            mobileMenuOpen && "rotate-45 translate-y-[4px]"
          )} />
          <span className={cn(
            "w-6 h-px bg-foreground transition-all duration-300",
            mobileMenuOpen && "opacity-0"
          )} />
          <span className={cn(
            "w-4 h-px bg-foreground transition-all duration-300",
            mobileMenuOpen && "-rotate-45 -translate-y-[4px] w-6"
          )} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background/98 backdrop-blur-sm md:hidden transition-all duration-500",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "font-couture text-2xl tracking-[0.3em] text-foreground/80 hover:text-foreground transition-all duration-300",
                location.pathname === link.path && "text-foreground",
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms" }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
