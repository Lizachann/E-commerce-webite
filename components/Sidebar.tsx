// "use client";
// import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react"; // Import Lucide icons



// const Sidebar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(true); // Sidebar initially closed


//   const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Close the sidebar if the window width is less than lg or md
//   useEffect(() => {
//     if (windowWidth < 640) { 
//       setIsOpen(false);
//     } else {
//       setIsOpen(true);
//     }
//   }, [windowWidth]);


//   return (
//     <div className="relative w-full">
//       {/* Sidebar Content */}
//       <div
//         className={`transition-all duration-300 overflow-hidden ${
//           isOpen ? "w-96 md:w-80 p-4 bg-gray-200 border rounded-lg" : "w-0"
//         }`}
//       >
//         {/* Close Button inside the sidebar (X) */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="p-1 bg-gray-200 text-white rounded text-2xl bold absolute top-0 right-0"
//         >
//           <X className="text-2xl" />
//         </button>
//         <div>
//         <p>E-COmmws</p>
//         <p>E-COmmws</p>
//         </div>
        
//       </div>

//       {/* Menu Button (Hamburger Icon) */}
//       {!isOpen && ( // Only show the Menu button if the sidebar is closed
//         <button
//           onClick={() => setIsOpen(true)} // Open the sidebar when clicked
//           className="p-1 bg-gray-200 text-white rounded transition-all duration-300 absolute top-0 left-0 z-50 "
//         >
//           <Menu className="text-2xl" />
//         </button>
//       )}
//     </div>
//   );
// };

// export default Sidebar;



"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Import Lucide icons



const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar initially closed


  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close the sidebar if the window width is less than lg or md
  useEffect(() => {
    if (windowWidth < 640) { 
      setIsOpen(false);
    
    }
  }, [windowWidth]);


  return (
    <div className="relative w-full">
      {/* Sidebar Content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "w-96 md:w-80 p-4 bg-gray-200 border rounded-lg" : "w-0"
        }`}
      >
        {/* Close Button inside the sidebar (X) */}
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 bg-gray-200 text-white rounded text-2xl bold absolute top-0 right-0"
        >
          <X className="text-2xl" />
        </button>
        <div>
        <p>E-COmmws</p>
        <p>E-COmmws</p>
        <p>E-COmmws</p>
        <p>E-COmmws</p>

        <p>E-COmmws</p>

        <p>E-COmmws</p>



        </div>
        
      </div>

      {/* Menu Button (Hamburger Icon) */}
      {!isOpen && ( // Only show the Menu button if the sidebar is closed
        <button
          onClick={() => setIsOpen(true)} // Open the sidebar when clicked
          className="p-1 bg-gray-200 text-white rounded transition-all duration-300 absolute top-0 left-0 z-50 "
        >
          <Menu className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
