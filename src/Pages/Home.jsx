import React, { useState } from "react";
import {
  ArrowRight,
  ShoppingCart,
  Plus,
  Minus,
  X,
  Store,
  Package,
  Lock,
  PhoneCall
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

const products = [
  {
    id: "p1",
    title: "Crispy Plantain Chips (Dodo Ikire style)",
    price: 1000,
    category: "snacks",
    rating: 4.8,
    reviews: 142,
    badge: "Best Seller",
    inStock: true,
    img: "https://images.unsplash.com/photo-1621996346565-e3d5d6281729?auto=format&fit=crop&w=500&q=80"
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

const categories = ["All", "Snacks", "Beverages", "Bakery", "Combo Packs"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Zustand Store
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const getTotalCount = useCartStore((state) => state.getTotalCount);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  const subtotal = getTotalPrice();
  const totalCount = getTotalCount();

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let message = `*New Order from FreshBites Nigeria:*\n\n`;
    items.forEach((item) => {
      message += `• ${item.title} x ${item.quantity} = ₦${(item.price * item.quantity).toLocaleString()}\n`;
    });
    message += `\n*Total Amount:* ₦${subtotal.toLocaleString()}\n`;
    message += `*Delivery:* Free\n\nPlease confirm my order!`;

    // Localized Nigerian WhatsApp number (+234)
    window.open(`https://wa.me/2348012345678?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <main className="max-w-350 mx-auto px-4 md:px-8 py-6 space-y-12">
      {/* 2-Column Catalog & Cart Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Banner, Filter & Product Grid */}
        <section className="lg:col-span-8 space-y-6">

          {/* Hero Banner */}
          <div className="relative overflow-hidden bg-[#eaf4ec] rounded-3xl min-h-70 flex items-center border border-[#d6ebd9]">
            {/* 1. Left Content Area */}
            <div className="relative z-10 p-6 md:p-10 max-w-sm sm:max-w-md space-y-4">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#11311b] leading-tight">
                Fresh Snacks. <br /> Better Days.
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delicious, fresh and affordable Nigerian snacks, made for every moment.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#12773c] hover:bg-[#0e5c2e] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors shadow-xs"
              >
                Shop Now <ArrowRight size={14} />
              </Link>
            </div>

            {/* 2. Image positioned to display only the food items on the right */}
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 overflow-hidden pointer-events-none">
              <img
                src="/hero.png"
                alt="Fresh snacks and cookies"
                className="w-full h-full object-cover object-right"
              />
              {/* Soft fade mask that completely covers the left graphic text */}
              <div className="absolute inset-0 bg-linear-to-r from-[#eaf4ec] via-[#eaf4ec]/70 to-transparent w-3/5" />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${active
                      ? "bg-[#12773c] text-white shadow-xs"
                      : "bg-[#f3f4f6] text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <img
                    src={prod.img}
                    alt={prod.title}
                    className="w-full h-32 object-cover rounded-xl mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">
                    {prod.title}
                  </h3>
                  <p className="text-gray-900 font-bold mt-1 text-sm">
                    ₦{prod.price.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => addItem(prod)}
                  className="mt-3 w-full flex items-center justify-center gap-1.5 border border-[#12773c] text-[#12773c] hover:bg-[#12773c] hover:text-white rounded-xl py-2 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <ShoppingCart size={14} /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Right Column: Sticky Cart Sidebar */}
        <aside className="lg:col-span-4 bg-white border border-gray-200 rounded-3xl p-6 shadow-xs sticky top-6">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <h2 className="text-lg font-bold flex items-center gap-2 text-gray-900">
              <ShoppingCart size={20} /> Your Cart
            </h2>
            <span className="text-xs text-gray-500 font-medium">
              {totalCount} {totalCount === 1 ? "item" : "items"}
            </span>
          </div>

          {/* Cart Item List */}
          <div className="divide-y divide-gray-100 max-h-95 overflow-y-auto my-2">
            {items.length === 0 ? (
              <div className="py-12 text-center text-gray-400 text-sm">
                Your cart is empty.
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-3 flex items-center justify-between gap-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-xl shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-800 truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 font-semibold mt-0.5">
                      ₦{item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-5 h-5 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-600 cursor-pointer"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-xs font-semibold text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-5 h-5 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-600 cursor-pointer"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end justify-between h-14">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                    <span className="text-xs font-bold text-gray-900">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pricing Breakdown */}
          <div className="border-t border-gray-100 pt-3 space-y-1.5 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-[#12773c] font-semibold">Free</span>
            </div>
            <div className="flex justify-between items-center pt-2 text-sm font-bold text-gray-900 border-t border-gray-100">
              <span>Total</span>
              <span className="text-base font-extrabold text-[#11311b]">
                ₦{subtotal.toLocaleString()}
              </span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsAppCheckout}
            disabled={items.length === 0}
            className="w-full mt-4 bg-[#128c7e] hover:bg-[#0e7064] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-2xl flex flex-col items-center justify-center transition-colors shadow-xs cursor-pointer"
          >
            <div className="flex items-center gap-1.5 font-semibold text-sm">
              <PhoneCall size={16} /> Send Order on WhatsApp
            </div>
            <span className="text-[10px] opacity-80">Your cart will be sent directly to the vendor</span>
          </button>

          <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-gray-400">
            <Lock size={12} />
            <span>Secure & Easy | No Payment Online</span>
          </div>
        </aside>
      </div>

      {/* How It Works Section */}
      <section className="pt-8 border-t border-gray-100 text-center">
        <h3 className="text-base font-bold text-gray-800 mb-8">How It Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#12773c] flex items-center justify-center">
              <ShoppingCart size={20} />
            </div>
            <h4 className="font-semibold text-sm text-gray-900">1. Choose Products</h4>
            <p className="text-xs text-gray-500 max-w-45">
              Browse and add your favorite Nigerian snacks to the cart.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#12773c] flex items-center justify-center">
              <PhoneCall size={20} />
            </div>
            <h4 className="font-semibold text-sm text-gray-900">2. Send Order on WhatsApp</h4>
            <p className="text-xs text-gray-500 max-w-45">
              Click the button and your order will be forwarded to the vendor.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#12773c] flex items-center justify-center">
              <Store size={20} />
            </div>
            <h4 className="font-semibold text-sm text-gray-900">3. Vendor Confirms</h4>
            <p className="text-xs text-gray-500 max-w-45">
              The vendor will reply with availability and dispatch time.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#12773c] flex items-center justify-center">
              <Package size={20} />
            </div>
            <h4 className="font-semibold text-sm text-gray-900">4. Get Your Order</h4>
            <p className="text-xs text-gray-500 max-w-45">
              Confirm delivery and receive fresh treats at your doorstep.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}