import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SocialMediaManagement from "./pages/SocialMediaManagement";
import PromoShooting from "./pages/PromoShooting";
import BrandDesigning from "./pages/BrandDesigning";
import PodcastShooting from "./pages/PodcastShooting";
import WebsiteBuilding from "./pages/WebsiteBuilding";

// Preload all background images
import bg1 from "./Images/bg1.jpg";
import bg2 from "./Images/bg2.jpg";
import bg3 from "./Images/bg3.jpg";
import bg4 from "./Images/bg4.jpg";
import bg5 from "./Images/bg5.jpg";

const preloadImages = [bg1, bg2, bg3, bg4, bg5];

const ImagePreloader = () => {
  useEffect(() => {
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return null;
};

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/service/social-media-management" element={<SocialMediaManagement />} />
      <Route path="/service/promo-shooting" element={<PromoShooting />} />
      <Route path="/service/brand-designing" element={<BrandDesigning />} />
      <Route path="/service/podcast-shooting" element={<PodcastShooting />} />
      <Route path="/service/website-building" element={<WebsiteBuilding />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ImagePreloader />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
