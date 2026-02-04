import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Mail, MapPin, Instagram, Twitter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "College Classic Hoodie",
    price: 59.99,
    category: "Hoodies",
    college: "Stanford",
    image: "https://cdn.shopify.com/s/files/1/0570/1674/2601/products/1_750x.jpg?v=1630703840",
  },
  {
    id: 2,
    name: "Oversized Graphic Tee",
    price: 34.99,
    category: "T-Shirts",
    college: "Harvard",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb6dbb?w=500&h=500&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Vintage Campus Cap",
    price: 29.99,
    category: "Caps",
    college: "MIT",
    image: "https://cdn.shopify.com/s/files/1/0076/5196/7846/products/product-image-768419201_5c2c1240-b894-4d37-9f7b-20f74e07c84d_500x.jpg",
  },
  {
    id: 4,
    name: "Premium Tote Bag",
    price: 44.99,
    category: "Bags",
    college: "Yale",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Embroidered Crewneck",
    price: 54.99,
    category: "Sweatshirts",
    college: "Princeton",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&q=80",
  },
  {
    id: 6,
    name: "College Sticker Pack",
    price: 9.99,
    category: "Stickers",
    college: "Berkeley",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=500&fit=crop&q=80",
  },
];

const offers = [
  {
    title: "Hoodie + Tee Combo",
    description: "Get both our classic hoodie and graphic tee",
    originalPrice: 94.98,
    salePrice: 79.99,
    savings: 15,
  },
  {
    title: "Freshers Pack",
    description: "Perfect starter bundle for college",
    originalPrice: 139.97,
    salePrice: 99.99,
    savings: 40,
  },
  {
    title: "Campus Collection",
    description: "Hoodie, cap, and tote bag essentials",
    originalPrice: 134.97,
    salePrice: 109.99,
    savings: 25,
  },
];

export default function Index() {
  const [cart, setCart] = useState<number[]>([]);

  const handleAddToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="min-h-screen bg-background text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-foreground font-bold text-sm">CC</span>
            </div>
            <span className="font-display font-bold text-lg text-primary hidden sm:inline">
              CAMPUSWEAR
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#products" className="text-sm font-medium text-gray-300 hover:text-primary transition">
              Products
            </a>
            <a href="#offers" className="text-sm font-medium text-gray-300 hover:text-primary transition">
              Bundles
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-primary transition">
              Contact
            </a>
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-primary" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="px-4 py-2 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-semibold">
                    ✨ NEXT GEN CAMPUS WEAR
                  </div>
                </div>

                <h1 className="font-display font-black text-5xl sm:text-7xl leading-tight text-white">
                  Rep Your{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                    College
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-lg">
                  Bold styles. Premium quality. Designed for students who stand out. Join thousands of college students already repping their campus in style.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="#products">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 text-foreground font-bold"
                  >
                    Explore Collection <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="#offers">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10"
                  >
                    View Bundles
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-12 pt-8">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <p className="text-sm text-gray-400">Happy Students</p>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <p className="text-sm text-gray-400">Top Colleges</p>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">24h</div>
                  <p className="text-sm text-gray-400">Fast Shipping</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden group">
              <img
                src="https://cdn.shopify.com/s/files/1/0570/1674/2601/products/1_750x.jpg?v=1630703840"
                alt="Hero"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              <div className="absolute inset-0 border border-primary/30 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-b from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
              Featured Collection
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover our curated selection of premium college merchandise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden bg-background">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-foreground px-3 py-1 rounded-lg text-xs font-bold">
                      {product.college}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                        {product.category}
                      </p>
                      <h3 className="font-semibold text-lg text-white group-hover:text-primary transition">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-primary/20">
                      <p className="font-display font-bold text-2xl text-primary">
                        ${product.price.toFixed(2)}
                      </p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product.id);
                        }}
                        className="bg-gradient-to-r from-primary to-secondary text-foreground p-2 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section id="offers" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
              Exclusive Bundles
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Save more with our premium bundle deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-8 hover:border-primary/60 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/30"
              >
                <div className="absolute -top-4 right-8 bg-secondary text-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Save ${offer.savings}
                </div>
                <div className="pt-4">
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{offer.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 line-through">
                        ${offer.originalPrice.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-500">Original</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-display font-black text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        ${offer.salePrice.toFixed(2)}
                      </span>
                      <span className="text-xs text-primary font-semibold">
                        {Math.round((offer.savings / offer.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-foreground font-bold">
                    Add Bundle
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Have questions? Want to collaborate? We're here to help you rep your college style.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:hello@campuswear.com" className="text-gray-400 hover:text-primary transition">
                      hello@campuswear.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-gray-400">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="bg-primary hover:bg-opacity-90 text-foreground p-3 rounded-lg transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-primary hover:bg-opacity-90 text-foreground p-3 rounded-lg transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">College Name</label>
                  <input
                    type="text"
                    placeholder="Your college"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Message</label>
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-foreground font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-primary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">CC</span>
              </div>
              <span className="font-display font-bold text-primary">CAMPUSWEAR</span>
            </div>
            <p className="text-sm text-gray-500">© 2024 CampusWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
