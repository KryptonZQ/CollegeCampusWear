import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Mail, MapPin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "College Classic Hoodie",
    price: 59.99,
    category: "Hoodies",
    college: "Stanford",
    image: "https://images.unsplash.com/photo-1574456566174-7e94e01a2591?w=500&h=500&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Oversized Graphic Tee",
    price: 34.99,
    category: "T-Shirts",
    college: "Harvard",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Vintage Campus Cap",
    price: 29.99,
    category: "Caps",
    college: "MIT",
    image: "https://images.unsplash.com/photo-1625991417033-f2daf5b76c45?w=500&h=500&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=500&h=500&fit=crop&q=80",
  },
  {
    id: 6,
    name: "College Sticker Pack",
    price: 9.99,
    category: "Stickers",
    college: "Berkeley",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop&q=80",
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
    // Simple toast-like feedback
    const event = new CustomEvent("addToCart", { detail: { productId } });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground hidden sm:inline">
              CampusWear
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#products" className="text-sm font-medium text-gray-600 hover:text-foreground transition">
              Shop
            </a>
            <a href="#offers" className="text-sm font-medium text-gray-600 hover:text-foreground transition">
              Deals
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-foreground transition">
              Contact
            </a>
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
                  Rep Your{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    College Style
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
                  Campus wear, redefined. Trendy hoodies, graphic tees, and accessories designed for college
                  students who want to express their campus pride in style.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="#products">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300"
                  >
                    Shop Now
                  </Button>
                </Link>
                <Link to="#offers">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    View Deals
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-foreground">10K+</div>
                  <p className="text-sm text-gray-600">Students Reppin'</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <p className="text-sm text-gray-600">Colleges</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <p className="text-sm text-gray-600">Quality</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=800&h=800&fit=crop&q=80"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our curated collection of college merchandise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.college}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                        {product.category}
                      </p>
                      <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <p className="font-display font-bold text-2xl text-foreground">
                        ${product.price.toFixed(2)}
                      </p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product.id);
                        }}
                        className="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300"
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

      {/* Offers Section */}
      <section id="offers" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Exclusive Bundles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save big with our curated bundle deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary transition-all duration-300 group"
              >
                <div className="absolute -top-4 right-8 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Save ${offer.savings}
                </div>
                <div className="pt-4">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{offer.description}</p>

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

                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300">
                    Add Bundle to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 bg-gradient-to-br from-foreground to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Have questions about our products? Want to collaborate with us? We'd love to hear from you!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <a href="mailto:hello@campuswear.com" className="text-gray-300 hover:text-primary transition">
                      hello@campuswear.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Address</p>
                    <p className="text-gray-300">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="bg-primary hover:bg-opacity-90 text-white p-3 rounded-lg transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-primary hover:bg-opacity-90 text-white p-3 rounded-lg transition">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">College Name</label>
                  <input
                    type="text"
                    placeholder="Your college"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="font-display font-bold text-white">CampusWear</span>
            </div>
            <p className="text-sm">© 2024 CampusWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
