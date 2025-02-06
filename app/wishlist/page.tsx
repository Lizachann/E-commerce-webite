"use client";
import React from "react";
import { useCart } from "@/contexts/CartContext";
import { ArrowLeft, HeartCrack } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { useRouter } from 'next/navigation'; 

const WishList = () => {
  const { productCounts, wishlist, totalCartCount, updateCartCount, toggleWishlist } = useCart();
  const router = useRouter();  
  return (
    <div className=" px-10">
      <button
        onClick={() => router.back()}
        className="pt-4 pl-3 text-white rounded transition-all duration-300 absolute left-0 z-50"
      >
        <ArrowLeft size={24} className="text-[#36454f]" />
      </button>
      <h2 className="pt-10 text-4xl font-bold text-[#ff2a61] mb-10">Wishlist</h2>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {wishlist.map((product) => (
            <div key={product.id}>
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
                rating={product.rating}
                category={product.category}
                onAddToCart={() => updateCartCount(product, 0)}
                onToggleWishlist={() => toggleWishlist(product)}
                cartCount={productCounts[product.id] || 0}
                isWishlisted={wishlist.some((item) => item.id === product.id)}
                totalCartCount={totalCartCount}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh] w-full text-center text-[#36454f]">
          <HeartCrack size={50} className="mb-4 text-[#ff2a61]" />
          <p className="text-lg font-semibold">Your wishlist is empty.</p>
        </div>
      )}
    </div>
  );
};

export default WishList;
