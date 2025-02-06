"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useFetchCategories } from "@/lib/fetchCategories";

interface SidebarProps {
  onCategorySelect: (category: string) => void;
  onPriceFilter: (priceRange: string) => void; 
}

const Sidebar: React.FC<SidebarProps> = ({ onCategorySelect, onPriceFilter }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(true);

  // Use the custom hook for fetching categories
  const { categories, loading, error } = useFetchCategories();

  const priceRanges = [
    { label: "All Prices", value: "" },
    { label: "$0 - $50", value: "0-50" },
    { label: "$51 - $100", value: "51-100" },
    { label: "$101 - $200", value: "101-200" },
    { label: "$201+", value: "201+" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 640) {
      setIsOpen(false);
    }
  }, [windowWidth]);

  return (
    <div className="relative w-full h-full">
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "w-96 h-full md:w-80 p-4 bg-[#fffbf0] border rounded-lg" : "w-0"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 bg-[#fffbf0] rounded text-2xl bold absolute top-1 right-1"
        >
          <X className="text-2xl" />
        </button>

        <div>
          <p className="font-bold text-2xl text-[#e8597e] hover:text-[#ff2a61]">Filter By:</p>

          {/* Category Dropdown */}
          <div className="mt-4">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="w-full text-left font-semibold flex items-center justify-between"
            >
              <span className="text-lg text-[#8b374d] hover:text-[#ff2a61]">Categories</span>
              <span>{isCategoryOpen ? "▲" : "▼"}</span>
            </button>

            {isCategoryOpen && (
              <ul className="mt-2 pl-4 space-y-2">
                {loading ? (
                  <li>Loading...</li>
                ) : error ? (
                  <li>{error}</li>
                ) : (
                  categories.map((category, index) => (
                    <li key={index}>
                      <button
                        className="hover:text-[#008080] text-[#36454f]"
                        onClick={() => onCategorySelect(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>

          {/* Price Range Dropdown */}
          <div className="mt-4">
            <button
              onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)}
              className="w-full text-left font-semibold flex items-center justify-between"
            >
              <span className="text-lg text-[#8b374d] hover:text-[#ff2a61]">Price Ranges</span>
              <span>{isPriceRangeOpen ? "▲" : "▼"}</span>
            </button>

            {isPriceRangeOpen && (
              <ul className="mt-2 pl-4 space-y-2">
                {priceRanges.map((range) => (
                  <li key={range.value}>
                    <button
                      className={`hover:text-[#008080] text-[#36454f]`}
                      onClick={() => onPriceFilter(range.value)}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Menu Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-1 ml-1 bg-[#36454f] text-white rounded transition-all duration-300 absolute top-0 left-0 z-50"
        >
          <Menu className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
