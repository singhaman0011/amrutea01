import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const AmruteaHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="font-serif text-2xl lg:text-3xl tracking-wide">
              Amrutea
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <a
              href="#collections"
              className="text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
            >
              Collections
            </a>
            <a
              href="#story"
              className="text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
            >
              Our Story
            </a>
            <a
              href="#products"
              className="text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
            >
              Shop
            </a>
            <a
              href="#contact"
              className="text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="luxury-btn">
              <span>Shop Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <nav className="flex flex-col py-8 px-6 gap-6">
              <a
                href="#collections"
                className="text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </a>
              <a
                href="#story"
                className="text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </a>
              <a
                href="#products"
                className="text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </a>
              <a
                href="#contact"
                className="text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="luxury-btn mt-4 w-full">
                <span>Shop Now</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default AmruteaHeader;
