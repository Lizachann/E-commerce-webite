// "use client";
// import { useEffect, useState } from "react";
// import ProductCard from "@/components/ProductCard";
// import { useCart } from "@/contexts/CartContext";
// import { fetchProducts } from "@/lib/fetchProducts"; 
// import { ArchiveX } from "lucide-react";

// const CartList = () => {
//   const { productCounts, cartItems, totalCartCount, updateCartCount, toggleWishlist } = useCart();
//   const [products, setProducts] = useState<ProductCardProps[]>([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       const data = await fetchProducts();
//       setProducts(data);
//     };
//     getProducts();
//   }, []);

//   return (
//       <div className="mt-10 px-10">
//         <h2 className="text-4xl font-bold text-[#008080] mb-20">Items in Cart</h2>
//         {cartItems.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {cartItems.map((product) => (
//             <div key={product.id}>
//               <ProductCard
//                 id={product.id}
//                 image={product.image}
//                 title={product.title}
//                 price={product.price}
//                 description={product.description}
//                 rating={product.rating}
//                 category={product.category}
//                 onAddToCart={() => updateCartCount(product.id, product,)}
//                 onToggleWishlist={() => toggleWishlist(product)}
//                 cartCount={productCounts[product.id] || 0}
//                 isWishlisted={cartItems.some((item) => item.id === product.id)}
//                 totalCartCount={totalCartCount}
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//             <div className="flex flex-col items-center justify-center h-[60vh] w-full text-center text-[#36454f]">
//                   <ArchiveX size={50} className="mb-4 text-[#008080]" />
//                   <p className="text-lg font-semibold">Your Cart is empty.</p>
//            </div>        
//         )}
//         </div>
        
      
//   );
// };

// export default CartList;


"use client";

import CartItem from '@/components/CartItem';
import { useCart } from '@/contexts/CartContext';
import { ArchiveX, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


const CartList: React.FC = () => {
  const { cartItems, productCounts } = useCart();

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((product: ProductCardProps) => {
      total += product.price * productCounts[product.id];
    });
    return total;
  };
  const discount = 10; 
  const deliveryFee = 5; 
  const subtotal = calculateTotal();
  const total = subtotal - discount + deliveryFee;
  
  return (
<div className="cart-page  px-10">
<Link href="/" className="pt-4 pl-3 text-white rounded transition-all duration-300 absolute left-0 z-50">
        <ArrowLeft size={24} className="text-[#36454f]" />
      </Link>
      <h2 className="text-4xl font-bold pt-10 text-[#008080]">Items in Cart</h2>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] w-full text-center text-[#36454f]">
          <ArchiveX size={50} className="mb-4 text-[#008080]" />
          <p className="text-lg font-semibold">Your Cart is empty.</p>
        </div>
      ) : (
        <div className='flex gap-6 justify-between'>
            <div className='w-[70%] flex flex-col space-y-4'>
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
           
      
             {/* Order Summary Breakdown */}
            <div className="order-breakdown bg-white p-6 rounded-lg shadow-md mb-6 w-[30%]">
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <p className="text-sm text-gray-700">Subtotal</p>
              <p className="text-sm font-semibold text-gray-900">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <p className="text-sm text-gray-700">Discount</p>
              <p className="text-sm font-semibold text-red-600">-${discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-300">
              <p className="text-sm text-gray-700">Delivery Fee</p>
              <p className="text-sm font-semibold text-gray-900">${deliveryFee.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p className="text-lg font-semibold text-gray-700">Total</p>
              <p className="text-xl font-bold text-teal-600">${total.toFixed(2)}</p>
            </div>
            <div className="mt-4 text-center">
            <button className="w-full py-2 px-4 mb-10 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition">
              Checkout
            </button>
          </div>
          </div>

          
        </div>
      )}
    </div>
  );
};

export default CartList;

