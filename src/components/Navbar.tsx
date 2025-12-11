import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "../Images/ogo.png"
const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICE", path: "/service" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12">
      {/* Logo placeholder */}
      <Link to="/" className="flex items-center">
        <img src={logo} className="h-10" alt="" />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "font-couture text-sm tracking-[0.2em] text-foreground/80 hover:text-foreground transition-colors duration-300 relative",
              location.pathname === link.path && "text-foreground"
            )}
          >
            {link.name}
            {location.pathname === link.path && (
              <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground" />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden flex flex-col gap-1.5">
        <span className="w-6 h-px bg-foreground" />
        <span className="w-6 h-px bg-foreground" />
        <span className="w-4 h-px bg-foreground" />
      </button>
    </nav>
  );
};

export default Navbar;
