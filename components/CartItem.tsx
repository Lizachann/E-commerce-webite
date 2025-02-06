import React from 'react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { Heart, Minus, Plus, Trash, Trash2 } from 'lucide-react';

interface CartItemProps {
  product: ProductCardProps;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { productCounts, updateCartCount, removeFromCart } = useCart();
  const count = productCounts[product.id] || 0;

  return (
    <div className="relative flex bg-white rounded-lg shadow-md p-4 mb-4 items-center justify-between">
      <button
        onClick={() => removeFromCart(product.id)}
        className="absolute top-2 right-2 bg-[#fffbf0] rounded-full p-1 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none"
      >
        <Trash2
          size={24}
          className="transition-all duration-300 ease-in-out transform text-[#ff2a61] scale-110"
        />
      </button>

      {/* Product Image */}
      <div className="flex-shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-700">${product.price}</p>
        
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm">Quantity: {count}</p>
          <div className="flex space-x-2 mb-5">
            <button
              onClick={() => {
                if (count > 1) {
                  updateCartCount(product, -1);
                } else {
                  removeFromCart(product.id);
                }
              }}
              className="bg-[#36454f] hover:text-black text-gray-700 rounded px-3 py-1 text-sm hover:bg-gray-300"
            >
              <Minus size={12} className="text-[#fffbf0] hover:text-black" />
            </button>
            <span className="text-lg font-semibold">{count}</span>
            <button
              onClick={() => updateCartCount(product, 1)}
              className="bg-[#36454f] hover:text-black text-gray-700 rounded px-3 py-1 text-sm hover:bg-gray-300"
            >
              <Plus size={12} className="text-[#fffbf0] hover:text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
