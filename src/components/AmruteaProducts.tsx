const products = [
  {
    id: 1,
    name: "Emperor's Gold",
    category: "Premium Blend",
    price: "₹2,450",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600&q=80",
    featured: true,
  },
  {
    id: 2,
    name: "Darjeeling First Flush",
    category: "Black Tea",
    price: "₹1,850",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    name: "Himalayan Chamomile",
    category: "Herbal Infusion",
    price: "₹980",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    name: "Ceylon Silver Tips",
    category: "White Tea",
    price: "₹3,200",
    image: "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?w=600&q=80",
    featured: false,
  },
];

const AmruteaProducts = () => {
  const featuredProduct = products.find((p) => p.featured);
  const otherProducts = products.filter((p) => !p.featured);

  return (
    <section id="products" className="py-24 lg:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="flex justify-center">
            <div className="gold-line" />
          </div>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Signature Selection
          </p>
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl">
            Our Finest Offerings
          </h2>
        </div>

        {/* Products Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Featured Product */}
          {featuredProduct && (
            <div className="group cursor-pointer animate-fade-in-up">
              <div className="luxury-card aspect-square rounded-sm mb-8">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 z-10">
                  <span className="text-background text-sm tracking-[0.2em] uppercase">
                    View Details
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs tracking-[0.2em] uppercase text-gold">
                  {featuredProduct.category}
                </p>
                <h3 className="font-serif text-3xl lg:text-4xl">
                  {featuredProduct.name}
                </h3>
                <p className="text-lg tracking-wide">{featuredProduct.price}</p>
              </div>
            </div>
          )}

          {/* Other Products Grid */}
          <div className="grid gap-8">
            {otherProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group cursor-pointer flex gap-6 animate-fade-in-up stagger-${index + 1}`}
              >
                {/* Product Image */}
                <div className="luxury-card w-32 h-32 flex-shrink-0 rounded-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>
                {/* Product Info */}
                <div className="flex flex-col justify-center space-y-2">
                  <p className="text-xs tracking-[0.2em] uppercase text-gold">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-xl lg:text-2xl group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm tracking-wide text-muted-foreground">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <button className="luxury-btn">
            <span>View All Products</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AmruteaProducts;
