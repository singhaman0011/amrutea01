const testimonials = [
  {
    id: 1,
    quote: "Amrutea has redefined my understanding of what tea can be. Each cup is a meditation.",
    author: "Priya Sharma",
    title: "Tea Connoisseur, Mumbai",
  },
  {
    id: 2,
    quote: "The quality is unparalleled. From packaging to the last drop, everything speaks of elegance.",
    author: "Rajiv Menon",
    title: "Hospitality Director, Delhi",
  },
  {
    id: 3,
    quote: "A gift of Amrutea is a gift of refinement. My clients are always impressed.",
    author: "Ananya Krishnan",
    title: "Art Collector, Bangalore",
  },
];

const AmruteaTestimonials = () => {
  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Testimonials
          </p>
          <h2 className="luxury-heading text-4xl md:text-5xl">
            Words of Appreciation
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`text-center space-y-8 animate-fade-in-up stagger-${index + 1}`}
            >
              {/* Quote Mark */}
              <div className="flex justify-center">
                <span className="font-serif text-6xl text-gold/40">"</span>
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl lg:text-2xl italic leading-relaxed">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="space-y-2">
                <div className="gold-line mx-auto" />
                <p className="text-sm tracking-[0.15em] uppercase mt-6">
                  {testimonial.author}
                </p>
                <p className="text-xs tracking-wide text-muted-foreground">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmruteaTestimonials;
