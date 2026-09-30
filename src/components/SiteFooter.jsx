import { Leaf, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function SiteFooter() {
  const handleSupportClick = () => {
    const message = encodeURIComponent("Hello FreshBites team, I need assistance with an order.");
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <footer className="w-full bg-[#1b3b36] text-[#e0ece9] py-5 px-6 md:px-12 border-t border-[#254b45]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-emerald-400">
            <Leaf className="w-4 h-4 fill-current" />
          </div>
          <div>
            <h2 className="text-white text-lg font-bold tracking-tight leading-none">
              FreshBites
            </h2>
            <p className="text-[11px] text-emerald-200/70 mt-0.5">
              Good Food &bull; Happy You
            </p>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="flex items-center gap-4 sm:gap-6 text-xs font-medium text-emerald-100/80">
          {footerLinks.map((item, idx) => (
            <div key={item.label} className="flex items-center gap-4 sm:gap-6">
              <Link to={item.to} className="hover:text-white transition-colors">
                {item.label}
              </Link>
              {idx < footerLinks.length - 1 && (
                <span className="text-white/20 select-none">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Help & WhatsApp inquiry action */}
        <button
          onClick={handleSupportClick}
          className="group inline-flex items-center gap-2 text-xs font-medium text-emerald-100/90 hover:text-white transition-colors cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
          <span>Need Help? Chat with us on WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>

      </div>
    </footer>
  );
}

export default SiteFooter;