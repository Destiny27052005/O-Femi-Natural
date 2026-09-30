import React from "react";
import { 
  Leaf, 
  Truck, 
  Heart, 
  ShieldCheck, 
  Users, 
  Sprout, 
  Smile 
} from "lucide-react";

export default function About() {
  return (
    <main className="max-w-[1400px] mx-auto px-4 md:px-12 py-8 space-y-12">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-[#eaf4ec] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-[#d6ebd9]">
        <div className="space-y-4 max-w-xl z-10">
          <span className="inline-block bg-[#d8ecd8] text-[#12773c] text-xs font-semibold px-3 py-1 rounded-full">
            About Us
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#11311b] tracking-tight leading-tight">
            FreshBites – Good Food, <br /> Happy You
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We are a small, passionate business dedicated to bringing you fresh, high-quality snacks and beverages at the best prices. Our goal is simple — to make your everyday moments tastier, healthier and happier.
          </p>
        </div>

        <div className="relative mt-8 md:mt-0 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80"
            alt="Fresh cookies and juice"
            className="w-72 md:w-96 h-48 md:h-60 object-cover rounded-3xl shadow-sm"
          />
          <div className="absolute -top-3 -right-3 sm:right-2 font-serif italic text-xs md:text-sm text-[#12773c] select-none text-right">
            ` Real Snacks <br /> - Real Happiness 💚
          </div>
        </div>
      </section>

      {/* 2. Feature Highlights (4 Pillars) */}
      <section className="bg-[#f8faf8] border border-gray-100 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#12773c] shrink-0">
            <Leaf size={22} />
          </div>
          <div>
            <h2 className="text-xs font-bold text-gray-900">Fresh & Quality Products</h2>
            <p className="text-[11px] text-gray-500 mt-0.5">We source the best ingredients for great taste and nutrition.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#12773c] shrink-0">
            <Truck size={22} />
          </div>
          <div>
            <h2 className="text-xs font-bold text-gray-900">Fast & Reliable Service</h2>
            <p className="text-[11px] text-gray-500 mt-0.5">Your orders are processed quickly and delivered with care.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#12773c] shrink-0">
            <Heart size={22} />
          </div>
          <div>
            <h2 className="text-xs font-bold text-gray-900">Affordable Prices</h2>
            <p className="text-[11px] text-gray-500 mt-0.5">Premium quality snacks at pocket-friendly prices.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#12773c] shrink-0">
            <ShieldCheck size={22} />
          </div>
          <div>
            <h2 className="text-xs font-bold text-gray-900">Customer Satisfaction</h2>
            <p className="text-[11px] text-gray-500 mt-0.5">Your happiness is our top priority.</p>
          </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-4">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80"
            alt="FreshBites Package"
            className="w-full h-72 md:h-80 object-cover rounded-3xl shadow-sm"
          />
        </div>

        <div className="space-y-4">
          <span className="inline-block bg-[#eef7ee] text-[#12773c] text-xs font-semibold px-3 py-1 rounded-full">
            Our Story
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#11311b]">
            From a Simple Idea to FreshBites
          </h2>
          <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
            <p>
              FreshBites started with a simple idea — to make delicious snacks and beverages easily accessible to everyone. What began as a small local venture is now a trusted source for quality snacks, loved by students, professionals and families alike.
            </p>
            <p>
              We believe that good food brings people together, and we're here to make those moments even better.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Mission & Values */}
      <section className="bg-[#f4faf4] border border-[#e1f0e2] rounded-3xl p-8 md:p-12 text-center space-y-8">
        <div className="max-w-xl mx-auto space-y-2">
          <h2 className="text-xl md:text-2xl font-bold text-[#11311b]">
            Our Mission & Values
          </h2>
          <p className="text-xs text-gray-600">
            We're on a mission to deliver fresh, tasty and affordable snacks, while creating joy in every bite. Our values guide everything we do:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#12773c]">
              <Leaf size={20} />
            </div>
            <h3 className="text-xs font-bold text-gray-900">Quality</h3>
            <p className="text-[11px] text-gray-500">Only the best for you.</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#12773c]">
              <Users size={20} />
            </div>
            <h3 className="text-xs font-bold text-gray-900">Community</h3>
            <p className="text-[11px] text-gray-500">Supporting local & growing together.</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#12773c]">
              <Sprout size={20} />
            </div>
            <h3 className="text-xs font-bold text-gray-900">Sustainability</h3>
            <p className="text-[11px] text-gray-500">A healthier planet for tomorrow.</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-[#12773c]">
              <Smile size={20} />
            </div>
            <h3 className="text-xs font-bold text-gray-900">Happiness</h3>
            <p className="text-[11px] text-gray-500">Because good food brings smiles.</p>
          </div>
        </div>
      </section>

      {/* 5. Thank You Banner */}
      <section className="bg-[#184838] text-white rounded-2xl py-6 px-6 text-center space-y-2">
        <h2 className="text-sm md:text-base font-semibold">Thank you for being part of our journey!</h2>
        <p className="text-xs text-gray-300">We can't wait to serve you again.</p>
        <div className="flex justify-center pt-1 text-emerald-400">
          <Heart size={16} fill="currentColor" />
        </div>
      </section>
    </main>
  );
}