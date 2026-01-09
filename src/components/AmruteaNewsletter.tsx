import { useState } from "react";

const AmruteaNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Exclusive Updates
          </p>
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl">
            Join the Amrutea Circle
          </h2>
          <p className="luxury-body text-muted-foreground text-lg max-w-xl mx-auto">
            Be the first to discover new collections, exclusive offerings, 
            and the stories behind our teas.
          </p>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-6 py-4 bg-transparent border border-border focus:border-gold outline-none transition-colors duration-300 text-sm tracking-wide placeholder:text-muted-foreground/60"
            />
            <button type="submit" className="luxury-btn sm:flex-shrink-0">
              <span>Subscribe</span>
            </button>
          </div>
          <p className="text-xs text-muted-foreground/60 tracking-wide">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default AmruteaNewsletter;
