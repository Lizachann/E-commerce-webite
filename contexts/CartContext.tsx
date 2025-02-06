// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// interface CartContextType {
//   productCounts: { [key: number]: number };
//   cartItems: ProductCardProps[];
//   wishlist: ProductCardProps[];
//   totalCartCount: number;
//   updateCartCount: (id: number, product: ProductCardProps) => void;
//   toggleWishlist: (product: ProductCardProps) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [productCounts, setProductCounts] = useState<{ [key: number]: number }>({});
//   const [cartItems, setCartItems] = useState<ProductCardProps[]>([]);
//   const [wishlist, setWishlist] = useState<ProductCardProps[]>([]);

//   const totalCartCount = Object.values(productCounts).reduce((total, count) => total + count, 0);

//   const updateCartCount = (id: number, product: ProductCardProps) => {
//     setProductCounts((prevCounts) => ({
//       ...prevCounts,
//       [id]: (prevCounts[id] || 0) + 1,
//     }));

//     setCartItems((prevCartItems) => {
//       const isItemInCart = prevCartItems.some((item) => item.id === id);
//       if (!isItemInCart) {
//         return [...prevCartItems, product];
//       }
//       return prevCartItems;
//     });
//   };

//   // const toggleWishlist = (product: ProductCardProps) => {
//   //   setWishlist((prevWishlist) => {
//   //     const isInWishlist = prevWishlist.some((item) => item.id === product.id);
//   //     return isInWishlist ? prevWishlist.filter((item) => item.id !== product.id) : [...prevWishlist, product];
//   //   });
//   // };

//   const toggleWishlist = (product: ProductCardProps) => {
//         setWishlist((prevWishlist) => {
//           const isInWishlist = prevWishlist.some((item) => item.id === product.id);
//           if (isInWishlist) {
//             return prevWishlist.filter((item) => item.id !== product.id); // Remove from wishlist
//           } else {
//             return [...prevWishlist, product]; // Add to wishlist
//           }
//         });
//       };

//   return (
//     <CartContext.Provider value={{ productCounts, cartItems, wishlist, totalCartCount, updateCartCount, toggleWishlist }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };


// // "use client";

// // import { createContext, useContext, useState, ReactNode } from "react";

// // const CartContext = createContext<CartContextType | undefined>(undefined);

// // export const CartProvider = ({ children }: { children: ReactNode }) => {
// //   const [productCounts, setProductCounts] = useState<{ [key: number]: number }>({});
// //   const [cartItems, setCartItems] = useState<ProductCardProps[]>([]);
// //   const [wishlist, setWishlist] = useState<ProductCardProps[]>([]);

// //   // Total cart count
// //   const totalCartCount = Object.values(productCounts).reduce((total, count) => total + count, 0);

// //   // ✅ Update item quantity in cart (Increment/Decrement)
// //   const updateCartCount = (id: number, product: ProductCardProps, amount: number) => {
// //     setProductCounts((prevCounts) => {
// //       const newCount = (prevCounts[id] || 0) + amount;
// //       if (newCount < 1) return prevCounts; // Prevent going below 1
// //       return { ...prevCounts, [id]: newCount };
// //     });

// //     setCartItems((prevCartItems) => {
// //       const existingItem = prevCartItems.find((item) => item.id === id);
// //       if (!existingItem) {
// //         return [...prevCartItems, { ...product, quantity: 1 }];
// //       }
// //       return prevCartItems.map((item) =>
// //         item.id === id ? { ...item, quantity: Math.max(1, (item.quantity || 1) + amount) } : item
// //       );
// //     });
// //   };

// //   // ✅ Remove item from cart
// //   const removeFromCart = (id: number) => {
// //     setProductCounts((prevCounts) => {
// //       const newCounts = { ...prevCounts };
// //       delete newCounts[id];
// //       return newCounts;
// //     });

// //     setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
// //   };

// //   // ✅ Wishlist toggle function
// //   const toggleWishlist = (product: ProductCardProps) => {
// //     setWishlist((prevWishlist) => {
// //       const isInWishlist = prevWishlist.some((item) => item.id === product.id);
// //       return isInWishlist
// //         ? prevWishlist.filter((item) => item.id !== product.id)
// //         : [...prevWishlist, product];
// //     });
// //   };

// //   return (
// //     <CartContext.Provider value={{ 
// //       productCounts, cartItems, wishlist, totalCartCount, 
// //       updateCartCount, removeFromCart, toggleWishlist 
// //     }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // export const useCart = () => {
// //   const context = useContext(CartContext);
// //   if (!context) {
// //     throw new Error("useCart must be used within a CartProvider");
// //   }
// //   return context;
// // };

"use client";


import { createContext, ReactNode, useContext, useState, } from "react";


interface CartContextType {
  productCounts: { [key: number]: number };
  cartItems: ProductCardProps[];
  wishlist: ProductCardProps[];
  totalCartCount: number;
  updateCartCount: (product: ProductCardProps, num: number) => void;
  toggleWishlist: (product: ProductCardProps) => void;
  removeFromCart: (id: number) => void;
}

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
      return isItemInCart ? prevCartItems : [...prevCartItems, product]; // Simplified logic
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