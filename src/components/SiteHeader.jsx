import { useState } from "react";
import { Leaf, Menu, Search, ShoppingCart, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore"; // adjust path as needed

const links = [
  { title: "Home", to: "/" },
  { title: "Shop", to: "/shop" },
  { title: "About", to: "/about" },
  { title: "Contact", to: "/contact" },
];

function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Connect live cart count from Zustand
  const totalCount = useCartStore((state) => state.getTotalCount());

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-350 mx-auto flex items-center justify-between px-6 md:px-12 py-3.5">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#12773c] flex items-center justify-center text-white">
            <Leaf className="h-5 w-5 fill-current" />
          </div>
          <div className="leading-tight">
            <h1 className="text-[#0d2a17] text-xl font-black tracking-tight">FreshBites</h1>
            <p className="text-[10px] text-gray-500 font-medium">Good Food • Happy You</p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.title}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative py-1 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-[#12773c] after:content-[''] after:absolute after:left-0 after:-bottom-4 after:w-full after:h-[2.5px] after:bg-[#12773c] after:rounded-full"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* Search, Cart & Mobile Toggle */}
        <div className="flex items-center gap-4">
          
          {/* Search Bar */}
          <div className="hidden sm:flex items-center gap-2 bg-[#f8faf9] border border-gray-200/80 px-3.5 py-1.5 rounded-full w-56 lg:w-72 focus-within:border-gray-400 transition-colors">
            <Search className="h-4 w-4 text-gray-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              placeholder="Search products..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs text-gray-800 placeholder-gray-400 outline-none"
            />
          </div>

          {/* Cart Icon with Live Zustand Badge */}
          <div className="relative cursor-pointer p-1">
            <ShoppingCart className="h-5 w-5 text-[#0d2a17]" />
            {totalCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#12773c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-black p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 space-y-3 bg-white">
          <div className="flex items-center gap-2 bg-[#f8faf9] border border-gray-200 px-3 py-2 rounded-full mb-3">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              placeholder="Search products..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs outline-none"
            />
          </div>
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.title}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive ? "bg-green-50 text-[#12773c]" : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;