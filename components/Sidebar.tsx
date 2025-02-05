// components/Sidebar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-200 p-4 w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul>
          <li>
            <a href="#" className="block py-2 text-gray-700">
              Category 1
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 text-gray-700">
              Category 2
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 text-gray-700">
              Category 3
            </a>
          </li>
        </ul>
      </aside>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
