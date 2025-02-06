"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Search, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { totalCartCount } = useCart();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);  
    };

     handleResize();

     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <header className="bg-white shadow-md py-3 px-3 top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="pr-6">
          <Link href="/">
            <Image className="items-center" src="/images/logo.png" alt="Shop Logo" width={180} height={100} />
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
        <div className="flex items-center gap-4">
          <Link href={`/wishlist`} passHref>
            <button className="text-[#36454f] hover:text-[#008080] focus:outline-none relative">
              <Heart size={24} className="transition-all duration-300 ease-in-out transform fill-[#e8597e] text-[#e8597e] scale-110" />
            </button>
          </Link>

          <Link href={`/cartlist`} passHref>
            <button className="text-[#36454f] hover:text-[#008080] focus:outline-none relative">
              <ShoppingCart size={24} className="transition-all duration-300 ease-in-out transform text-[#008080] scale-110" />
              <span className="absolute -top-3 -right-3 bg-[#ff2a61] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalCartCount}
              </span>
            </button>
          </Link>

          {/* Login and Register buttons (Desktop view) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={handlePopup}
              className="bg-[#008080] text-white px-4 py-2 rounded-lg hover:bg-[#36454F]"
            >
              Login
            </button>
            <button
              onClick={handlePopup}
              className="bg-[#008080] text-white px-4 py-2 rounded-lg hover:bg-[#36454F]"
            >
              Register
            </button>
          </div>

          {/* Login and Register Dropdown (Mobile view) */}
          {isMobile && (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-[#008080] text-white px-4 py-2 rounded-lg hover:bg-[#36454F]"
              >
                Account
              </button>

              {isDropdownOpen && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-48 mt-2 p-3">
                  <button
                    onClick={handlePopup}
                    className="w-full text-left text-[#008080] hover:text-[#36454f] py-2"
                  >
                    Login
                  </button>
                  <button
                    onClick={handlePopup}
                    className="w-full text-left text-[#008080] hover:text-[#36454f] py-2"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Coming Soon Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-100">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mt-4">
            <Image
                src="/images/coming-soon.gif"
                alt="Coming Soon"
                className="mx-auto"
                width={200}  
                height={200}  
              />          
            </div>
            <button
              onClick={closePopup}
              className="mt-4 bg-[#008080] text-white px-4 py-2 rounded-md hover:bg-[#36454F]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
