import PageWrapper from "@/components/PageWrapper";

const galleryItems = [
  { id: 1, title: "PROJECT 01" },
  { id: 2, title: "PROJECT 02" },
  { id: 3, title: "PROJECT 03" },
  { id: 4, title: "PROJECT 04" },
  { id: 5, title: "PROJECT 05" },
  { id: 6, title: "PROJECT 06" },
];

const Gallery = () => {
  return (
    <PageWrapper backgroundImage="../Images/bg1.jpg">
      <main className="min-h-screen px-4 py-24 pt-32">
        {/* Title */}
        <h1 className="font-couture text-4xl md:text-6xl tracking-[0.3em] text-foreground text-center mb-16 animate-fade-up">
          GALLERY
        </h1>
        
        {/* Gallery grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] bg-card border border-foreground/20 overflow-hidden cursor-pointer animate-fade-up hover:border-foreground/50 transition-all duration-300"
              style={{ animationDelay: `${0.1 * (index + 1)}s`, opacity: 0 }}
            >
              {/* Placeholder for gallery image */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-background flex items-center justify-center">
                <span className="font-couture text-foreground/30 text-sm tracking-[0.2em]">
                  IMAGE PLACEHOLDER
                </span>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-couture text-foreground text-sm tracking-[0.2em]">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </PageWrapper>
  );
};

export default Gallery;
