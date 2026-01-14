const AmruteaStory = () => {
  return (
    <section id="story" className="py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in-up">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80"
                alt="Traditional tea preparation with natural light"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold/30 rounded-sm -z-10" />
          </div>

          {/* Content Side */}
          <div className="space-y-10 animate-fade-in-up stagger-2">
            {/* Header */}
            <div className="space-y-6">
              <div className="gold-line" />
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Our Heritage
              </p>
              <h2 className="luxury-heading text-4xl md:text-5xl">
                The Amrutea Story
              </h2>
            </div>

            {/* Story Content */}
            <div className="space-y-6 luxury-body text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Born from a deep reverence for nature's most exquisite offerings, 
                Amrutea began as a quest to discover the world's finest teas and 
                share them with discerning connoisseurs.
              </p>
              <p className="leading-relaxed">
                Our journey has taken us through misty mountain gardens in Darjeeling, 
                ancient tea forests in Yunnan, and pristine highlands of Ceylon—each 
                destination revealing treasures waiting to be discovered.
              </p>
              <p className="leading-relaxed">
                Today, Amrutea stands as a beacon of quality, bringing together 
                tradition and refinement in every carefully curated blend. Each cup 
                is an invitation to experience the extraordinary.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="luxury-btn">
                <span>Discover More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmruteaStory;
