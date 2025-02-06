
"use client";

import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Search, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { totalCartCount } = useCart();
  return (
    <header className="bg-white shadow-md py-3 px-3 top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="pr-6">
        <Link href="/">
            <Image className = "items-center" src="/images/logo.png" alt="Shop Logo" width={180} height={100} />
        </Link>
        </div>
     

        {/* Search Bar */}
        <div className="relative w-full max-w-4xl pr-6">
          <input
            type="text"
            placeholder="Search products..."
            className="text-gray-700 w-full border border-black rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-700" size={18} />
        </div>

        {/* Cart/wish/Login/Register */}
        <div className="flex items-center gap-8">
        <Link href={`/wishlist`} passHref>
        <button className="text-[#36454f] hover:text-[#008080] focus:outline-none relative">
            <Heart size={24} className='transition-all duration-300 ease-in-out transform fill-[#e8597e] text-[#e8597e] scale-110'/>
        </button>
      </Link>
      <Link href={`/cartlist`} passHref>
        <button className="text-[#36454f] hover:text-[#008080] focus:outline-none relative">
        <ShoppingCart size={24} className='transition-all duration-300 ease-in-out transformtext-[#008080] scale-110' />      
        <span className="absolute -top-3 -right-3 bg-[#ff2a61] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {totalCartCount}
        </span>
        </button>
      </Link>

          <Link
            href="/login"
            className="bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#36454F] "
          >
            Login
          </Link>
          <Link
            href="/login"
            className="bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#36454F] "
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
