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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23f0f0f0' width='400' height='500'/%3E%3Cellipse cx='200' cy='80' rx='35' ry='30' fill='%23f0f0f0'/%3E%3Cpath d='M 130 100 L 110 180 L 110 420 L 170 420 L 170 240 L 200 240 L 200 420 L 230 420 L 230 240 L 260 240 L 260 420 L 320 420 L 300 180 L 270 100' fill='%23FFFFFF' stroke='%23333' stroke-width='2'/%3E%3Cpath d='M 130 110 L 60 120 L 60 260 L 130 200' fill='%23FFFFFF' stroke='%23333' stroke-width='1.5'/%3E%3Cpath d='M 270 110 L 340 120 L 340 260 L 270 200' fill='%23FFFFFF' stroke='%23333' stroke-width='1.5'/%3E%3Crect x='140' y='160' width='120' height='80' fill='%23EC4899' rx='8'/%3E%3Ctext x='200' y='205' font-size='32' fill='%23FFFFFF' text-anchor='middle' font-weight='bold'%3EH%3C/text%3E%3C/svg%3E",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Cellipse cx='200' cy='150' rx='140' ry='40' fill='%23333' stroke='%23222' stroke-width='1.5'/%3E%3Cpath d='M 100 150 Q 100 80 200 60 Q 300 80 300 150' fill='%2306B6D4' stroke='%23333' stroke-width='2'/%3E%3Cpath d='M 100 150 Q 100 85 200 65 Q 300 85 300 150' fill='none' stroke='%23333' stroke-width='1' stroke-dasharray='5,3'/%3E%3Cellipse cx='200' cy='150' rx='140' ry='35' fill='%23555' opacity='0.3'/%3E%3C/svg%3E",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23f0f0f0' width='400' height='500'/%3E%3Cpath d='M 130 100 L 130 380 Q 130 420 170 420 L 230 420 Q 270 420 270 380 L 270 100' fill='%238B5CF6' stroke='%23333' stroke-width='2.5'/%3E%3Cline x1='130' y1='100' x2='270' y2='100' stroke='%23333' stroke-width='2'/%3E%3Cpath d='M 150 100 Q 140 40 170 30' fill='none' stroke='%23333' stroke-width='8' stroke-linecap='round'/%3E%3Cpath d='M 250 100 Q 260 40 230 30' fill='none' stroke='%23333' stroke-width='8' stroke-linecap='round'/%3E%3Cline x1='200' y1='100' x2='200' y2='420' stroke='%23333' stroke-width='1.5' stroke-dasharray='5,5'/%3E%3C/svg%3E",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23f0f0f0' width='400' height='500'/%3E%3Cellipse cx='200' cy='85' rx='40' ry='35' fill='%23f0f0f0'/%3E%3Cpath d='M 120 110 L 100 200 L 100 420 L 170 420 L 170 250 L 200 250 L 200 420 L 230 420 L 230 250 L 260 250 L 260 420 L 330 420 L 310 200 L 280 110' fill='%23F59E0B' stroke='%23333' stroke-width='2'/%3E%3Cpath d='M 120 120 L 40 140 L 40 280 L 120 220' fill='%23F59E0B' stroke='%23333' stroke-width='1.5'/%3E%3Cpath d='M 280 120 L 360 140 L 360 280 L 280 220' fill='%23F59E0B' stroke='%23333' stroke-width='1.5'/%3E%3Cellipse cx='200' cy='85' rx='40' ry='35' fill='none' stroke='%23333' stroke-width='2.5'/%3E%3Ccircle cx='200' cy='140' r='15' fill='%23EC4899' opacity='0.8'/%3E%3C/svg%3E",
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23f0f0f0' width='400' height='400'/%3E%3Crect x='80' y='80' width='240' height='240' fill='%2310B981' stroke='%23333' stroke-width='2' rx='8'/%3E%3Ccircle cx='140' cy='130' r='25' fill='%23FFD700' stroke='%23333' stroke-width='1.5'/%3E%3Cpath d='M 140 105 L 145 115 L 155 115 L 147 122 L 150 135 L 140 130 L 130 135 L 133 122 L 125 115 L 135 115 Z' fill='%23FFA500'/%3E%3Crect x='200' y='100' width='40' height='40' fill='%23FF6B9D' stroke='%23333' stroke-width='1.5' rx='4' transform='rotate(15 220 120)'/%3E%3Cpath d='M 110 230 L 120 210 L 130 230 Z' fill='%23FF6B9D' stroke='%23333' stroke-width='1.5'/%3E%3Ccircle cx='240' cy='240' r='20' fill='%235D8AA8' stroke='%23333' stroke-width='1.5'/%3E%3Ccircle cx='160' cy='280' r='18' fill='%23FFD700' stroke='%23333' stroke-width='1.5'/%3E%3C/svg%3E",
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
