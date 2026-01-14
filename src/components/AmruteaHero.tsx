const AmruteaHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1609855244817-359bacb1953e?w=1920&q=80"
          alt="Clear glass bowl with tea - luxury tea experience"
          className="w-full h-full object-cover animate-scale-in"
          style={{ animationDuration: '1.5s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <div className="space-y-8">
          {/* Decorative line */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="gold-line-wide" />
          </div>

          {/* Subtitle */}
          <p
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            The Art of Premium Tea
          </p>

          {/* Main Headline */}
          <h1
            className="luxury-heading text-5xl md:text-7xl lg:text-8xl animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            Where Every Sip
            <br />
            <span className="luxury-subheading">Tells a Story</span>
          </h1>

          {/* Description */}
          <p
            className="luxury-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            Discover the finest teas from the world's most distinguished estates.
            A journey of taste, tradition, and timeless elegance.
          </p>

          {/* CTA Button */}
          <div
            className="pt-8 animate-fade-in-up"
            style={{ animationDelay: '0.9s' }}
          >
            <button className="luxury-btn">
              <span>Explore Collection</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AmruteaHero;
