import { Instagram, Facebook, Twitter } from "lucide-react";

const AmruteaFooter = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-20 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-serif text-3xl tracking-wide">Amrutea</h3>
            <p className="text-background/60 leading-relaxed max-w-sm">
              Crafting exceptional tea experiences for the discerning palate. 
              Where tradition meets refinement.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.2em] uppercase">Shop</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  All Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Herbal Infusions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Black Teas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Premium Blends
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.2em] uppercase">Information</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/40 tracking-wide">
              © 2025 Amrutea. All rights reserved.
            </p>
            <p className="text-xs text-background/40 tracking-wide">
              Crafted with care in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AmruteaFooter;
