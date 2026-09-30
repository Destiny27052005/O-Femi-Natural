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
import { useCartStore } from "../store/useCartStore"; // adjust path to your zustand store

const products = [
  {
    id: "p1",
    title: "Classic Potato Chips",
    price: 50,
    category: "snacks",
    img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p2",
    title: "Chocolate Chip Cookies",
    price: 80,
    category: "snacks",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p3",
    title: "Orange Juice (500ml)",
    price: 60,
    category: "beverages",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p4",
    title: "Veg Samosa (2 pcs)",
    price: 70,
    category: "snacks",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p5",
    title: "Chocolate Brownie",
    price: 90,
    category: "bakery",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p6",
    title: "Mixed Nuts (100g)",
    price: 120,
    category: "combo packs",
    img: "https://images.unsplash.com/photo-1536591375315-1b8368903277?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p7",
    title: "Veg Sandwich",
    price: 80,
    category: "bakery",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "p8",
    title: "Mineral Water (1L)",
    price: 30,
    category: "beverages",
    img: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=500&q=80"
  }
];

const categories = ["All", "Snacks", "Beverages", "Bakery", "Combo Packs"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Zustand Store selectors
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

    let message = `*New Order from FreshBites:*\n\n`;
    items.forEach((item) => {
      message += `• ${item.title} x ${item.quantity} = ₦${item.price * item.quantity}\n`;
    });
    message += `\n*Total Amount:* ₦${subtotal}\n`;
    message += `*Delivery:* Free\n\nPlease confirm my order!`;

    const encodedMessage = encodeURI(message);
    // Replace with your shop's phone number in international format
    window.open(`https://wa.me/919999999999?text=${encodedMessage}`, "_blank");
  };

  return (
    <main className="max-w-350 mx-auto px-4 md:px-8 py-6 space-y-12">
      {/* 2-Column Catalog & Cart Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Banner, Filter & Product Grid */}
        <section className="lg:col-span-8 space-y-6">
          
          {/* Hero Banner */}
          <div className="relative overflow-hidden bg-[#eaf4ec] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center border border-[#d6ebd9]">
            <div className="space-y-4 max-w-sm z-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#11311b] leading-tight">
                Fresh Snacks. <br /> Better Days.
              </h1>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Delicious, fresh and affordable snacks, <br className="hidden sm:inline" /> made for every moment.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-[#12773c] hover:bg-[#0e5c2e] text-white font-medium text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                Shop Now <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-6 md:mt-0 relative w-full md:w-1/2 flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80"
                alt="Fresh cookies and snacks"
                className="rounded-2xl object-cover h-44 w-full md:w-80 shadow-sm"
              />
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
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    active
                      ? "bg-[#12773c] text-white shadow-sm"
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
                  <p className="text-gray-900 font-bold mt-1 text-sm">₦{prod.price}</p>
                </div>

                <button
                  onClick={() => addItem(prod)}
                  className="mt-3 w-full flex items-center justify-center gap-1.5 border border-[#12773c] text-[#12773c] hover:bg-[#12773c] hover:text-white rounded-xl py-2 text-xs font-semibold transition-colors"
                >
                  <ShoppingCart size={14} /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Right Column: Sticky Cart Sidebar */}
        <aside className="lg:col-span-4 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm sticky top-6">
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
                    <p className="text-xs text-gray-500 font-semibold mt-0.5">₦{item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-5 h-5 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-xs font-semibold text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-5 h-5 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 text-gray-600"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end justify-between h-14">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X size={14} />
                    </button>
                    <span className="text-xs font-bold text-gray-900">
                      ₦{item.price * item.quantity}
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
              <span className="font-semibold text-gray-900">₦{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-[#12773c] font-semibold">Free</span>
            </div>
            <div className="flex justify-between items-center pt-2 text-sm font-bold text-gray-900 border-t border-gray-100">
              <span>Total</span>
              <span className="text-base font-extrabold">₦{subtotal}</span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsAppCheckout}
            disabled={items.length === 0}
            className="w-full mt-4 bg-[#128c7e] hover:bg-[#0e7064] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-2xl flex flex-col items-center justify-center transition-colors shadow-sm"
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
              Browse and add your favorite items to the cart.
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
              The vendor will reply with availability and total.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#12773c] flex items-center justify-center">
              <Package size={20} />
            </div>
            <h4 className="font-semibold text-sm text-gray-900">4. Get Your Order</h4>
            <p className="text-xs text-gray-500 max-w-45">
              Confirm and collect your order at your convenience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}