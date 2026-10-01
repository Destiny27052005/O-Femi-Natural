import { useState, useMemo } from "react";
import {
  Leaf,
  Truck,
  ShieldCheck,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Trash2,
  X,
  Send,
  Cookie,
  Coffee,
  Croissant,
  Package,
  Layers,
  ChevronDown
} from "lucide-react";
import { useCartStore } from "../store/useCartStore";

const productsData = [
  {
    id: "p1",
    title: "Crispy Plantain Chips (Dodo Ikire style)",
    price: 1000,
    category: "snacks",
    rating: 4.8,
    reviews: 142,
    badge: "Best Seller",
    inStock: true,
    img: "https://fabwoman.ng/wp-content/uploads/2018/01/dodo-ikire.jpg"
  },
  {
    id: "p2",
    title: "Golden Chin Chin (Pouch)",
    price: 1500,
    category: "snacks",
    rating: 4.9,
    reviews: 210,
    badge: "Popular",
    inStock: true,
    img: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p3",
    title: "Chilled Zobo Drink (500ml)",
    price: 800,
    category: "beverages",
    rating: 4.7,
    reviews: 95,
    badge: "Fresh",
    inStock: true,
    img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p4",
    title: "Spicy Beef Puff-Puff (5 pcs)",
    price: 1200,
    category: "snacks",
    rating: 4.6,
    reviews: 88,
    inStock: true,
    img: "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p5",
    title: "Nigerian Meat Pie (Flaky Crust)",
    price: 1500,
    category: "bakery",
    rating: 4.8,
    reviews: 164,
    badge: "Best Seller",
    inStock: true,
    img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p6",
    title: "Gala Sausage Roll (Pack of 3)",
    price: 1000,
    category: "bakery",
    rating: 4.4,
    reviews: 72,
    inStock: true,
    img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p7",
    title: "Fresh Tiger Nut Milk / Kunu Aya (500ml)",
    price: 1200,
    category: "beverages",
    rating: 4.9,
    reviews: 110,
    badge: "New",
    inStock: true,
    img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p8",
    title: "Cinema Combo (Popcorn + Chin Chin + Zobo)",
    price: 3200,
    category: "combo packs",
    rating: 4.9,
    reviews: 58,
    badge: "Value Pack",
    inStock: true,
    img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=500&q=80"
  }
];

const categoryList = [
  { id: "all", label: "All Products", count: 24, icon: Layers },
  { id: "snacks", label: "Snacks", count: 8, icon: Cookie },
  { id: "beverages", label: "Beverages", count: 5, icon: Coffee },
  { id: "bakery", label: "Bakery", count: 6, icon: Croissant },
  { id: "combo packs", label: "Combo Packs", count: 5, icon: Package }
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(4000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");
  const [itemQuantities, setItemQuantities] = useState({});

  // Zustand Store
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);

  const subtotal = getTotalPrice();

  // Local quantity helper for product cards before adding to cart
  const handleQuantityChange = (id, delta) => {
    setItemQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleAddWithQty = (product) => {
    const qty = itemQuantities[product.id] || 1;
    for (let i = 0; i < qty; i++) {
      addItem(product);
    }
  };

  // Filtered & Sorted items
  const filteredProducts = useMemo(() => {
    return productsData
      .filter((item) => {
        if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
        if (item.price > maxPrice) return false;
        if (inStockOnly && !item.inStock) return false;
        if (outOfStockOnly && item.inStock) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return b.reviews - a.reviews;
      });
  }, [selectedCategory, maxPrice, inStockOnly, outOfStockOnly, sortBy]);

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    let text = `*New Order from FreshBites Nigeria:*\n\n`;
    items.forEach((item) => {
      text += `• ${item.title} x ${item.quantity} = ₦${(item.price * item.quantity).toLocaleString()}\n`;
    });
    text += `\n*Subtotal:* ₦${subtotal.toLocaleString()}\n*Delivery:* Free\n\nPlease confirm my order!`;
    window.open(`https://wa.me/2348012345678?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="max-w-350 mx-auto px-4 md:px-8 py-6 space-y-8">
      {/* Top Banner with /hero.jpg and Concealing Fade Mask */}
      <div className="relative overflow-hidden rounded-3xl bg-[#ebf5ed] border border-[#d6ebd9] min-h-65 flex items-center">
        {/* Left Content Area */}
        <div className="relative z-10 p-6 md:p-8 max-w-sm sm:max-w-md space-y-3">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#11311b] tracking-tight">
            Shop Our Fresh & Tasty Products
          </h1>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Authentic Nigerian snacks, refreshing drinks, and flaky pastries made fresh daily.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#12773c] shadow-xs">
                <Leaf size={14} />
              </div>
              <div className="text-[10px] leading-tight font-semibold text-gray-800">
                Fresh <br /> <span className="font-normal text-gray-500">Ingredients</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#12773c] shadow-xs">
                <Truck size={14} />
              </div>
              <div className="text-[10px] leading-tight font-semibold text-gray-800">
                Fast <br /> <span className="font-normal text-gray-500">Service</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#12773c] shadow-xs">
                <ShieldCheck size={14} />
              </div>
              <div className="text-[10px] leading-tight font-semibold text-gray-800">
                Trusted <br /> <span className="font-normal text-gray-500">Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Hero Image with Soft Mask covering the graphic text */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 overflow-hidden pointer-events-none">
          <img
            src="/hero.png"
            alt="Snack selection"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#ebf5ed] via-[#ebf5ed]/70 to-transparent w-3/5" />
        </div>
      </div>

      {/* Main 3-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Filters Sidebar */}
        <aside className="lg:col-span-2 space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-bold text-sm text-gray-900 mb-3">Categories</h3>
            <div className="space-y-1">
              {categoryList.map((cat) => {
                const Icon = cat.icon;
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                      active
                        ? "bg-[#eaf5ed] text-[#12773c] font-semibold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={14} className={active ? "text-[#12773c]" : "text-gray-400"} />
                      <span>{cat.label}</span>
                    </div>
                    <span className="text-[11px] text-gray-400">{cat.count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-5 space-y-5">
            <h3 className="font-bold text-sm text-gray-900">Filters</h3>

            {/* Price Range */}
            <div>
              <div className="flex justify-between items-center text-xs text-gray-700 font-medium mb-2">
                <span>Price Range</span>
              </div>
              <input
                type="range"
                min="500"
                max="4000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#12773c]"
              />
              <div className="flex justify-between items-center text-[11px] text-gray-500 mt-1">
                <span>₦500</span>
                <span>₦{maxPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-800">Availability</h4>
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded text-[#12773c] focus:ring-0 cursor-pointer accent-[#12773c]"
                />
                In Stock
              </label>
              <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={outOfStockOnly}
                  onChange={(e) => setOutOfStockOnly(e.target.checked)}
                  className="rounded text-[#12773c] focus:ring-0 cursor-pointer accent-[#12773c]"
                />
                Out of Stock
              </label>
            </div>
          </div>
        </aside>

        {/* Center Column: Product Catalog Grid */}
        <section className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-900 text-base">
              All Products{" "}
              <span className="text-gray-400 font-normal text-sm">
                ({filteredProducts.length})
              </span>
            </h2>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-xl px-3 py-1.5 pr-8 text-xs font-medium text-gray-700 outline-none cursor-pointer hover:border-gray-300"
              >
                <option value="popularity">Sort by: Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {filteredProducts.map((prod) => {
              const qty = itemQuantities[prod.id] || 1;
              return (
                <div
                  key={prod.id}
                  className="bg-white border border-gray-100 rounded-2xl p-2.5 flex flex-col justify-between hover:shadow-md transition-shadow group relative"
                >
                  <div>
                    {/* Badge */}
                    <div className="relative mb-2.5">
                      {prod.badge && (
                        <span
                          className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${
                            prod.badge === "Best Seller" ? "bg-[#2d7348]" : "bg-[#1f8b4c]"
                          }`}
                        >
                          {prod.badge}
                        </span>
                      )}
                      <img
                        src={prod.img}
                        alt={prod.title}
                        className="w-full h-28 object-cover rounded-xl"
                      />
                    </div>

                    <h3 className="font-semibold text-gray-900 text-xs leading-snug line-clamp-2">
                      {prod.title}
                    </h3>
                    <p className="font-bold text-gray-900 text-xs mt-0.5">
                      ₦{prod.price.toLocaleString()}
                    </p>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-500">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      <span className="font-semibold text-gray-700">{prod.rating}</span>
                      <span>({prod.reviews})</span>
                    </div>
                  </div>

                  <div className="mt-2.5 space-y-2">
                    {/* Incrementor Buttons */}
                    <div className="flex items-center justify-between border border-gray-200 rounded-lg px-2 py-0.5 text-xs">
                      <button
                        onClick={() => handleQuantityChange(prod.id, -1)}
                        className="text-gray-500 hover:text-black py-0.5 cursor-pointer"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-semibold text-gray-800">{qty}</span>
                      <button
                        onClick={() => handleQuantityChange(prod.id, 1)}
                        className="text-gray-500 hover:text-black py-0.5 cursor-pointer"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Add to Cart CTA */}
                    <button
                      onClick={() => handleAddWithQty(prod)}
                      className="w-full bg-[#12773c] hover:bg-[#0e5e30] text-white py-1.5 rounded-xl text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ShoppingCart size={13} /> Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Right Column: Sticky Your Cart Drawer */}
        <aside className="lg:col-span-3 bg-white border border-gray-200 rounded-3xl p-5 shadow-xs sticky top-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <h2 className="text-base font-bold flex items-center gap-2 text-gray-900">
              <ShoppingCart size={18} /> Your Cart
            </h2>
            <button onClick={clearCart} className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer">
              <X size={16} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="divide-y divide-gray-100 max-h-85 overflow-y-auto my-2">
            {items.length === 0 ? (
              <div className="py-10 text-center text-gray-400 text-xs">
                Your cart is empty.
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-2.5 flex items-center justify-between gap-2.5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-11 h-11 object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-medium text-gray-800 truncate">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-gray-500 font-bold">
                      ₦{item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-600 cursor-pointer"
                      >
                        <Minus size={9} />
                      </button>
                      <span className="text-[11px] font-bold text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-600 cursor-pointer"
                      >
                        <Plus size={9} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between h-11">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <Trash2 size={13} />
                    </button>
                    <span className="text-xs font-bold text-gray-900">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pricing Totals */}
          <div className="border-t border-gray-100 pt-3 space-y-1 text-xs">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span className="font-bold text-gray-900">₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center pt-2 font-bold text-gray-900 border-t border-gray-100">
              <span>Total</span>
              <span className="text-base font-extrabold text-[#11311b]">
                ₦{subtotal.toLocaleString()}
              </span>
            </div>
          </div>

          {/* WhatsApp Order CTA */}
          <button
            onClick={handleWhatsAppOrder}
            disabled={items.length === 0}
            className="w-full mt-4 bg-[#128c7e] hover:bg-[#0e7064] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white py-2.5 rounded-2xl flex items-center justify-center gap-2 font-semibold text-xs transition-colors shadow-xs cursor-pointer"
          >
            <Send size={14} /> Send Order on WhatsApp
          </button>
          <p className="text-[10px] text-gray-400 text-center mt-1.5">
            Your cart will be sent directly to the vendor on WhatsApp.
          </p>

          <div className="mt-3 pt-3 border-t border-gray-100 flex items-start gap-2 text-[10px] text-gray-500">
            <ShieldCheck size={14} className="text-[#12773c] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-700">Secure & Easy</p>
              <p className="text-gray-400">No payment online. Just select, and we'll forward your order!</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}