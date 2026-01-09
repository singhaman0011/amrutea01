const collections = [
  {
    id: 1,
    title: "Herbal Infusions",
    subtitle: "Nature's Healing Touch",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
    description: "Pure botanical blends for wellness and serenity",
  },
  {
    id: 2,
    title: "Black Teas",
    subtitle: "Bold & Distinguished",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80",
    description: "Rich, full-bodied classics from premier estates",
  },
  {
    id: 3,
    title: "Premium Blends",
    subtitle: "Artisanal Excellence",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80",
    description: "Signature creations by master tea artisans",
  },
];

const AmruteaCollections = () => {
  return (
    <section id="collections" className="py-24 lg:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Curated Selection
          </p>
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl">
            Our Collections
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`group cursor-pointer animate-fade-in-up stagger-${index + 1}`}
            >
              {/* Image Container */}
              <div className="luxury-card aspect-[3/4] mb-8 rounded-sm">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 flex items-end justify-center pb-12 z-10">
                  <span className="text-background text-sm tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    Explore
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <p className="text-xs tracking-[0.2em] uppercase text-gold">
                  {collection.subtitle}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl">
                  {collection.title}
                </h3>
                <p className="luxury-body text-muted-foreground text-sm">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmruteaCollections;
