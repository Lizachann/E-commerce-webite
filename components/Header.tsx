
"use client";

import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-3 px-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="pr-6">
        <Link href="/">
            <img className = "items-center" src="/images/logo.png" alt="Shop Logo" width={150} height={100} />
        </Link>
        </div>
    

        {/* Search Bar */}
        <div className="relative w-full max-w-md pr-6">
          <input
            type="text"
            placeholder="Search products..."
            className="text-gray-700 w-full border rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Cart & Login/Register */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="text-gray-700 hover:text-black" size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              2 {/* Example cart count */}
            </span>
          </Link>

          <Link
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login / Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
