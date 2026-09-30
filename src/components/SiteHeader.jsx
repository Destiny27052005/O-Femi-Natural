import { useState } from "react";
import { Leaf, Menu, Search, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
    { title: "Home", to: "/" },
    { title: "Shop", to: "/shop" },
    { title: "About", to: "/about" },
    { title: "Contact", to: "/contact" },
];

function SiteHeader() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [product, setProduct] = useState("")


    const getNavClasses = (isActive) =>
        `px-4 py-2 rounded-lg font-medium transition-all text-sm ${isActive
            ? "bg-green-500 text-white shadow-xs font-semibold"
            : "text-[var(--body-text-slate)] hover:text-[var(--very-dark-text)] hover:bg-black/5"
        }`;

    return (
        <div>
            <header className="flex justify-between place-items-center px-12 py-6 border-b border-b-gray-200">
                <div className="flex gap-1 place-items-center">
                    <Leaf className="h-10 w-10 text-green-600" />
                    <div>
                        <h1 className="text-green-600 text-3xl font-bold">FreshBites</h1>
                        <p>Good Food &bull; Happy You</p>
                    </div>
                </div>
                <div>
                    <nav className="hidden md:flex items-center gap-1 sm:gap-2">
                        {links.map((link) => (
                            <NavLink
                                key={link.title}
                                to={link.to}
                                end={link.to === "/"}
                                className={({ isActive }) => getNavClasses(isActive)}
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </nav>
                </div>
                <div className="flex place-items-center gap-3">
                    <div className="flex place-items-center gap-1 border border-gray-500/70 p-1 rounded-2xl">
                        <Search className="h-4 w-4" />
                        <input id="search" type="text" value={product} placeholder="Search products..." onChange={(e) => setProduct(e.target.value)} className="outline-0" />
                    </div>
                    <div className="relative">
                        <ShoppingCart />
                        <span className="text-white flex w-4 h-4 place-items-center justify-center text-center bg-green-600 rounded-[50%] absolute -top-1 right-0 z-50">3</span>
                    </div>
                </div>
                <Menu  className="md:hidden"/>
            </header>
        </div>
    );
}

export default SiteHeader;