const AmruteaBrandStatement = () => {
  return (
    <section className="py-32 lg:py-40 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Decorative element */}
        <div className="flex justify-center">
          <div className="gold-line" />
        </div>

        {/* Brand Philosophy */}
        <blockquote className="space-y-8">
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed tracking-tight animate-fade-in-up">
            "We believe that tea is not merely a beverage—it is a 
            <span className="luxury-subheading"> ritual</span>, a moment of
            <span className="luxury-subheading"> pause</span>, a celebration of
            <span className="luxury-subheading"> life's finer pleasures</span>."
          </p>
        </blockquote>

        {/* Brand essence */}
        <div className="pt-8 space-y-6 animate-fade-in-up stagger-2">
          <p className="luxury-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Each leaf is handpicked from heritage gardens, crafted with centuries-old 
            wisdom, and presented with the reverence it deserves.
          </p>
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmruteaBrandStatement;
