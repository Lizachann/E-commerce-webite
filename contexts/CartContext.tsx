"use client";
import React from "react";
import { createContext, ReactNode, useContext, useState, } from "react";


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [productCounts, setProductCounts] = useState<{ [key: number]: number }>({});
  const [cartItems, setCartItems] = useState<ProductCardProps[]>([]);
  const [wishlist, setWishlist] = useState<ProductCardProps[]>([]);

  const totalCartCount = Object.values(productCounts).reduce((total, count) => total + count, 0);

  const updateCartCount = (product: ProductCardProps, num: number) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [product.id]: (prevCounts[product.id] || 0) + num,
    }));

    setCartItems((prevCartItems) => {
      const isItemInCart = prevCartItems.some((item) => item.id === product.id);
      return isItemInCart ? prevCartItems : [...prevCartItems, product];  
    });
  };

  const toggleWishlist = (product: ProductCardProps) => {
    setWishlist((prevWishlist) => {
      const isInWishlist = prevWishlist.some((item) => item.id === product.id);
      return isInWishlist ? prevWishlist.filter((item) => item.id !== product.id) : [...prevWishlist, product];
    });
  };

  const removeFromCart = (id: number) => {
    setProductCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[id];
      return newCounts;
    });
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ productCounts, cartItems, wishlist, totalCartCount, updateCartCount, toggleWishlist, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};