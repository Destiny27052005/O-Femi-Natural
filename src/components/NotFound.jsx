import { ArrowLeft, Home, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] max-w-350 mx-auto px-4 md:px-8 py-12 flex items-center justify-center">
      <div className="max-w-md w-full text-center space-y-6 bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-xs">
        
        {/* Animated Snack Icon Illustration */}
        <div className="relative mx-auto w-24 h-24 rounded-full bg-[#ebf5ed] border border-[#d6ebd9] flex items-center justify-center">
          <UtensilsCrossed size={42} className="text-[#12773c]" />
          <span className="absolute -top-1 -right-1 bg-[#12773c] text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
            404
          </span>
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#11311b] tracking-tight">
            Looks Like This Bite Is Missing!
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            The page you are looking for may have been moved, eaten, or doesn't exist anymore. Let’s get you back to the fresh treats!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#12773c] hover:bg-[#0e5e30] text-white text-xs font-semibold px-5 py-2.5 rounded-2xl transition-colors shadow-xs"
          >
            <Home size={15} /> Back to Home
          </Link>

          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold px-5 py-2.5 rounded-2xl transition-colors"
          >
            <ShoppingBag size={15} /> Explore Shop
          </Link>
        </div>

        {/* Subtle Support Link */}
        <div className="pt-4 border-t border-gray-100">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#12773c] transition-colors"
          >
            <ArrowLeft size={13} /> Need help? Contact our support team
          </Link>
        </div>

      </div>
    </main>
  );
}