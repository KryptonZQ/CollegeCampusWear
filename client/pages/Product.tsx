import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ChevronLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const productData = {
  1: {
    name: "College Classic Hoodie",
    price: 59.99,
    college: "Stanford",
    category: "Hoodies",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23f0f0f0' width='400' height='500'/%3E%3Cellipse cx='200' cy='100' rx='60' ry='65' fill='%234F46E5'/%3E%3Cpath d='M 140 140 L 120 200 Q 120 220 140 230 L 140 420 L 180 420 L 180 260 L 200 260 L 200 420 L 220 420 L 220 260 L 240 260 L 240 420 L 280 420 L 280 230 Q 300 220 300 200 L 280 140' fill='%234F46E5' stroke='%23333' stroke-width='1.5'/%3E%3Cpath d='M 140 150 L 80 160 L 80 280 L 140 250' fill='%234F46E5'/%3E%3Cpath d='M 260 150 L 320 160 L 320 280 L 260 250' fill='%234F46E5'/%3E%3Cline x1='190' y1='100' x2='160' y2='130' stroke='%23333' stroke-width='2'/%3E%3Cline x1='210' y1='100' x2='240' y2='130' stroke='%23333' stroke-width='2'/%3E%3C/svg%3E",
    description:
      "Our signature college hoodie is the perfect way to rep your campus. Made from premium 100% cotton blend fabric with a soft fleece interior, this hoodie offers unmatched comfort and durability. Features embroidered college details and a modern oversized fit.",
    details: [
      "100% premium cotton blend",
      "Soft fleece interior",
      "Embroidered college details",
      "Oversized modern fit",
      "Drawstring hood",
      "Kangaroo front pockets",
      "Machine washable",
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#001f3f" },
      { name: "Heather Grey", hex: "#a4adb7" },
      { name: "White", hex: "#ffffff" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  2: {
    name: "Oversized Graphic Tee",
    price: 34.99,
    college: "Harvard",
    category: "T-Shirts",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23f5f5f5' width='400' height='500'/%3E%3Cpath d='M 120 120 L 100 180 L 100 420 L 180 420 L 180 220 L 220 220 L 220 420 L 300 420 L 300 180 L 280 120 Z' fill='%23FFFFFF' stroke='%23333' stroke-width='2'/%3E%3Crect x='130' y='140' width='140' height='60' fill='%23EC4899' rx='8'/%3E%3Ctext x='200' y='175' font-size='20' fill='%23FFFFFF' text-anchor='middle' font-weight='bold'%3ECAMPUS%3C/text%3E%3C/svg%3E",
    description:
      "Make a statement with our oversized graphic tee featuring bold college-inspired artwork. Crafted from breathable 100% organic cotton, it's perfect for casual wear and comfortable all day long.",
    details: [
      "100% organic cotton",
      "Oversized fit",
      "Bold graphic design",
      "Pre-shrunk fabric",
      "Crew neck",
      "Printed college graphics",
      "Available in multiple colors",
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#ffffff" },
      { name: "Navy", hex: "#001f3f" },
      { name: "Sage Green", hex: "#9dc183" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  3: {
    name: "Vintage Campus Cap",
    price: 29.99,
    college: "MIT",
    category: "Caps",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23f5f5f5' width='400' height='400'/%3E%3Cpath d='M 100 200 Q 100 120 200 100 Q 300 120 300 200' fill='%2306B6D4' stroke='%23333' stroke-width='2'/%3E%3Crect x='80' y='200' width='240' height='60' fill='%23333' stroke='%23333' stroke-width='2'/%3E%3Ctext x='200' y='235' font-size='24' fill='%23FFFFFF' text-anchor='middle' font-weight='bold'%3EMIT%3C/text%3E%3C/svg%3E",
    description:
      "Classic vintage-style cap with embroidered college logo. Perfect for sunny days and casual outings. Features adjustable strap for the perfect fit.",
    details: [
      "100% cotton twill",
      "Embroidered college logo",
      "Vintage-inspired design",
      "Adjustable back strap",
      "Pre-curved bill",
      "One size fits most",
      "Structured crown",
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#001f3f" },
      { name: "Khaki", hex: "#c3b091" },
      { name: "Red", hex: "#e74c3c" },
    ],
    sizes: ["One Size"],
  },
  4: {
    name: "Premium Tote Bag",
    price: 44.99,
    college: "Yale",
    category: "Bags",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23f5f5f5' width='400' height='500'/%3E%3Cpath d='M 120 80 L 120 380 Q 120 420 160 420 L 240 420 Q 280 420 280 380 L 280 80' fill='%238B5CF6' stroke='%23333' stroke-width='2'/%3E%3Cpath d='M 140 60 Q 140 40 160 40 L 240 40 Q 260 40 260 60' fill='%238B5CF6' stroke='%23333' stroke-width='2'/%3E%3Cpath d='M 150 50 L 150 30 Q 150 20 160 20 Q 170 20 170 30 L 170 50' stroke='%23333' stroke-width='2' fill='none'/%3E%3Cpath d='M 230 50 L 230 30 Q 230 20 240 20 Q 250 20 250 30 L 250 50' stroke='%23333' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    description:
      "Spacious and stylish tote bag perfect for campus life. Made from durable canvas material with reinforced handles and embroidered college details.",
    details: [
      "Premium cotton canvas",
      "Embroidered college details",
      "Reinforced stitching",
      "Interior slip pocket",
      "Comfortable shoulder handles",
      "Eco-friendly material",
      "14.5\" x 14\" size",
    ],
    colors: [
      { name: "Natural Canvas", hex: "#e8d7c3" },
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#001f3f" },
    ],
    sizes: ["One Size"],
  },
  5: {
    name: "Embroidered Crewneck",
    price: 54.99,
    college: "Princeton",
    category: "Sweatshirts",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23f5f5f5' width='400' height='500'/%3E%3Cpath d='M 110 140 L 100 200 L 100 420 L 170 420 L 170 240 L 200 240 L 200 420 L 230 420 L 230 240 L 260 240 L 260 420 L 330 420 L 330 200 L 320 140 Z' fill='%23F59E0B' stroke='%23333' stroke-width='2'/%3E%3Ccircle cx='130' cy='130' r='32' fill='%23F59E0B' stroke='%23333' stroke-width='2'/%3E%3Ccircle cx='200' cy='115' r='25' fill='%23EC4899' stroke='%23333' stroke-width='1.5'/%3E%3C/svg%3E",
    description:
      "Elevated crewneck sweatshirt with intricate embroidered college insignia. Perfect for layering or wearing solo, this piece combines style and comfort.",
    details: [
      "80% cotton, 20% polyester blend",
      "Intricate embroidery details",
      "Brushed fleece interior",
      "Ribbed cuffs and waistband",
      "Dropped shoulder design",
      "Side seam pockets",
      "Available in multiple colors",
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Charcoal", hex: "#36454f" },
      { name: "Navy", hex: "#001f3f" },
      { name: "Cream", hex: "#fffdd0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  6: {
    name: "College Sticker Pack",
    price: 9.99,
    college: "Berkeley",
    category: "Stickers",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23f5f5f5' width='400' height='400'/%3E%3Crect x='60' y='60' width='280' height='280' fill='%2310B981' rx='20' stroke='%23333' stroke-width='2'/%3E%3Cpath d='M 150 120 L 170 180 L 235 180 L 185 220 L 210 280 L 150 240 L 90 280 L 115 220 L 65 180 L 130 180 Z' fill='%23FFD700' stroke='%23333' stroke-width='1.5'/%3E%3Cpath d='M 250 140 L 260 165 L 288 165 L 265 180 L 275 205 L 250 190 L 225 205 L 235 180 L 212 165 L 240 165 Z' fill='%23FFD700'/%3E%3Cpath d='M 280 250 L 290 270 L 312 270 L 295 282 L 305 302 L 280 290 L 255 302 L 265 282 L 248 270 L 270 270 Z' fill='%23FFD700'/%3E%3C/svg%3E",
    description:
      "Decorate your laptop, water bottle, or anywhere with our vibrant college-themed sticker pack. 10 unique designs celebrating campus life.",
    details: [
      "10 unique sticker designs",
      "Weather-resistant material",
      "Waterproof and durable",
      "Easy to apply and remove",
      "High-quality printing",
      "Perfect for laptops and bottles",
      "Celebrate your college pride",
    ],
    colors: [
      { name: "Multicolor", hex: "#multicolor" },
    ],
    sizes: ["One Size"],
  },
};

export default function Product() {
  const { id } = useParams();
  const product = productData[id as keyof typeof productData] || productData[1];

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground hidden sm:inline">
              CampusWear
            </span>
          </div>
          <div className="w-10" />
        </div>
      </nav>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden bg-gray-100 h-96 sm:h-[500px] lg:h-[600px] shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-primary transition"
                >
                  <img
                    src={product.image}
                    alt={`View ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                    {product.college} • {product.category}
                  </p>
                  <h1 className="font-display font-black text-3xl sm:text-4xl text-foreground mt-2">
                    {product.name}
                  </h1>
                </div>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-2 rounded-lg transition ${
                    isWishlisted
                      ? "bg-secondary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Heart className="w-6 h-6" fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                {product.description}
              </p>
            </div>

            <div className="space-y-6">
              {/* Price */}
              <div className="flex items-baseline gap-4">
                <p className="font-display font-black text-4xl text-foreground">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-gray-500 text-lg">
                  Free shipping on orders over $100
                </p>
              </div>

              {/* Color Selection */}
              <div className="space-y-3">
                <label className="block font-semibold text-foreground">Color</label>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-lg border-2 transition flex items-center justify-center font-semibold text-xs transition ${
                        selectedColor.name === color.name
                          ? "border-primary"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{
                        backgroundColor: color.hex !== "#multicolor" ? color.hex : "white",
                      }}
                      title={color.name}
                    >
                      {color.hex === "#multicolor" ? "🎨" : ""}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{selectedColor.name}</p>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <label className="block font-semibold text-foreground">Size</label>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 rounded-lg font-semibold transition border-2 ${
                        selectedSize === size
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-gray-300 text-gray-700 hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <label className="block font-semibold text-foreground">Quantity</label>
                <div className="flex items-center gap-4 bg-gray-100 rounded-lg w-fit p-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-600 hover:text-foreground transition font-bold text-lg"
                  >
                    −
                  </button>
                  <span className="font-semibold text-foreground w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-600 hover:text-foreground transition font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Product Features */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-foreground">Product Details</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart Button */}
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 py-6 text-lg font-semibold mt-8">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add {quantity} to Cart
              </Button>

              {/* Additional Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
                <p className="font-semibold mb-1">Fast & Free Shipping</p>
                <p>Free shipping on orders over $100. Returns accepted within 30 days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              You Might Also Like
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[2, 3, 4].map((productId) => {
              const relatedProduct = productData[productId as keyof typeof productData];
              return (
                <Link key={productId} to={`/product/${productId}`}>
                  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {relatedProduct.college}
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                          {relatedProduct.category}
                        </p>
                        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition">
                          {relatedProduct.name}
                        </h3>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <p className="font-display font-bold text-2xl text-foreground">
                          ${relatedProduct.price.toFixed(2)}
                        </p>
                        <ShoppingCart className="w-5 h-5 text-gray-400 group-hover:text-primary transition" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
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
