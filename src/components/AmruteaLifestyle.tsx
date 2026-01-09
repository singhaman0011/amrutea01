const lifestyleImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1515696955266-4f67e13219e8?w=600&q=80",
    alt: "Morning tea ritual",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
    alt: "Tea ceremony",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80",
    alt: "Tea leaves",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=600&q=80",
    alt: "Luxury tea set",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Tea garden",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
    alt: "Tea time",
  },
];

const AmruteaLifestyle = () => {
  return (
    <section className="py-24 lg:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            @Amrutea
          </p>
          <h2 className="luxury-heading text-4xl md:text-5xl">
            The Art of Living Well
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {lifestyleImages.map((image, index) => (
            <div
              key={image.id}
              className={`group luxury-card aspect-square rounded-sm cursor-pointer animate-fade-in-up stagger-${Math.min(index + 1, 6)}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500 flex items-center justify-center z-10">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 border border-background/80 rounded-full flex items-center justify-center">
                    <span className="text-background text-2xl">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
          >
            Follow Our Journey
            <span className="text-gold">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AmruteaLifestyle;
