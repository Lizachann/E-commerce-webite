// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Heart, ShoppingCart, Star } from 'lucide-react';
// import Link from 'next/link';

// const ProductCard: React.FC<ProductCardProps> = ({
//   id,
//   image,
//   title,
//   price,
//   rating,
//   onAddToCart,
//   onToggleWishlist,
//   cartCount = 0,
//   isWishlisted,
// }) => {
//   const [isAddedToCart, setIsAddedToCart] = useState(false);

//   const handleAddToCart = (event: React.MouseEvent) => {
//     setIsAddedToCart(true);
    
//     if (onAddToCart) {
//       onAddToCart();
//     }
//     setTimeout(() => setIsAddedToCart(false), 1000); // Reset after 1 second
//   };

//   const handleWishlist = (event: React.MouseEvent) => {
//     if (onToggleWishlist) {
//       onToggleWishlist();
//     }
//   };

//   return (
//     <div className="w-full h-[400px] rounded overflow-hidden shadow-lg bg-white relative">
//       {/* Wishlist Button */}
//       <button
//   onClick={handleWishlist}
//   className="absolute top-1 right-1 bg-[#fffbf0] rounded-full p-1 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none z-10"
// >
//   <Heart
//     size={24}
//     className={`transition-all duration-300 ease-in-out transform ${
//       isWishlisted ? 'fill-[#e8597e] text-[#e8597e] scale-110' : 'text-[#8b374d] scale-100'
//     }`}
//   />
// </button>


//       <Link href={`/product/${id}`} passHref>
//         <div className="relative w-full h-56 cursor-pointer">
//           <Image
//             src={image}
//             alt={title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-t-lg"
//           />
//         </div>

//       <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2 truncate cursor-pointer hover:text-blue-500">
//             {title}
//           </div>
      
//           <div className="flex items-center mb-3">
//             <span className="text-gray-700 text-lg">{rating.rate}</span>
//             <Star size={20} className="fill-[#ff9529] text-[#ff9529] mx-2" />
//             <span className="text-gray-500">({rating.count} reviews)</span>
//           </div>
       
//       </div>
//       </Link>
//       {/* Product Price and Cart Button */}
//       <div className="px-6 py-4 flex items-center justify-between">
//         <span className="text-xl font-semibold">${price}</span>
        
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  rating,
  onToggleWishlist,
  isWishlisted = false, // default to false if not provided
  description,
  category,
  onAddToCart,
  cartCount = 0, // default cartCount as 0
  totalCartCount = 0, // default totalCartCount as 0
}) => {
  const { productCounts, updateCartCount } = useCart(); // Destructuring to get cart state and updater
  const [num, setNum] = useState(1);  // Default quantity is 1

  // Handle adding product to the cart
  const handleAddToCart = () => {
    // Create a simplified product object to pass to updateCartCount
    const product = {
      id,
      image,
      title,
      price,
      rating,
      description,  // Include all properties that are required
      category,
      onAddToCart,
      onToggleWishlist,
      cartCount, // Add the missing cartCount
      isWishlisted, // Add the missing isWishlisted
      totalCartCount, // Add the missing totalCartCount
    };

    // Call the cart update function with the correct product object and quantity (num)
    updateCartCount(product, num);

    // Reset quantity after adding to cart
    setNum(1);
  };

  // Handle wishlist toggle
  const handleWishlist = () => {
    if (onToggleWishlist) {
      onToggleWishlist();
    }
  };

  return (
    <div className="w-full h-[400px] rounded overflow-hidden shadow-lg bg-white relative">
      {/* Wishlist Button */}
      <button
        onClick={handleWishlist}
        className="absolute top-1 right-1 bg-[#fffbf0] rounded-full p-1 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none z-10"
      >
        <Heart
          size={24}
          className={`transition-all duration-300 ease-in-out transform ${
            isWishlisted ? 'fill-[#e8597e] text-[#e8597e] scale-110' : 'text-[#8b374d] scale-100'
          }`}
        />
      </button>

      <Link href={`/product/${id}`} passHref>
        <div className="relative w-full h-56 cursor-pointer">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 truncate cursor-pointer hover:text-blue-500">
            {title}
          </div>

          <div className="flex items-center mb-3">
            <span className="text-gray-700 text-lg">{rating.rate}</span>
            <Star size={20} className="fill-[#ff9529] text-[#ff9529] mx-2" />
            <span className="text-gray-500">({rating.count} reviews)</span>
          </div>
        </div>
      </Link>

      {/* Product Price and Cart Button */}
      <div className="px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-semibold">${price}</span>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="text-[#36454f] hover:text-[#008080] focus:outline-none relative"
        >
          <ShoppingCart
            size={24}
            className='transition-all duration-300 ease-in-out transformtext-[#008080] scale-110'
          />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#ff2a61] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
