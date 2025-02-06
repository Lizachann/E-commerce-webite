'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Heart, Minus, Plus, ShoppingCart, Star, ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { fetchProducts } from '@/lib/fetchProducts'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

const ProductPage = () => {
  const { id } = useParams();
  const { productCounts, wishlist, updateCartCount, toggleWishlist } = useCart();
  const [product, setProduct] = useState<ProductCardProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [num, setNum] = useState(1);  
 const router = useRouter();  
  

  const productId = Array.isArray(id) ? id[0] : id;
  useEffect(() => {
    if (!productId) {
      setError("Product ID is missing");
      setLoading(false);
      return;
    }
  
    const fetchProductData = async () => {
      setLoading(true);
      setError(null);
  
      try {
        const products = await fetchProducts();
        console.log("Fetched products:", products);  
  
        if (!Array.isArray(products)) {
          throw new Error("Invalid product data received");
        }
  
        const foundProduct = products.find((p) => p.id === parseInt(productId));
        console.log("Found product:", foundProduct); 
  
        if (!foundProduct) {
          throw new Error("Product not found");
        }
  
        setProduct(foundProduct);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchProductData();
  }, [productId]);


  useEffect(() => {
    if (product) {
      setIsWishlisted(wishlist.some((item) => item.id === product.id));
    }
  }, [product, wishlist]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
    if (error) return <div className="text-center mt-10 text-lg text-red-500">{error}</div>;
  if (!product) return <div className="text-center mt-10 text-lg text-red-500">Product not found.</div>;

  const handleIncrease = () => setNum((prev) => prev + 1);
  const handleDecrease = () => setNum((prev) => (prev > 1 ? prev - 1 : 1));  
  const handleAddToCart = () => {
      updateCartCount(product, num);
      setNum(1);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    setIsWishlisted(!isWishlisted); 
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
   
        <button
        onClick={() => router.back()}
        className="pt-12 pl-3 lg:pt-24 text-white rounded transition-all duration-300 absolute top-10 left-0 z-50 "
      >
        <ArrowLeft size={24} className="text-[#36454f]" />
      </button>
        <div className="w-full md:w-1/2 relative h-[600px]">
          <button onClick={handleToggleWishlist} className="absolute top-1 right-1 bg-[#fffbf0] rounded-full p-1 shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none z-10">
            <Heart size={24} className={`transition-all duration-300 ease-in-out transform ${isWishlisted ? 'fill-[#e8597e] text-[#e8597e] scale-110' : 'text-[#8b374d] scale-100'}`} />
          </button>
          <Image src={product.image} alt={product.title} layout="fill" objectFit="contain" className="rounded-lg shadow-md" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
          <div className="flex items-center mb-3">
            <span className="text-gray-700 text-lg">{product.rating.rate}</span>
            <Star size={20} className="fill-[#ff9529] text-[#ff9529] mx-2" />
            <span className="text-gray-500">({product.rating.count} reviews)</span>
          </div>
          <div className="flex items-center mb-3">
            <span className="text-[#36454f] font-bold pr-2">Category: </span>
            <span className="text-gray-500">{product.category}</span>
          </div>
          <p className="text-5xl font-semibold text-[#ff2a61] mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex space-x-8 mb-5">
            <button onClick={handleDecrease} className="bg-[#36454f] hover:text-black text-gray-700 rounded px-3 py-1 text-sm hover:bg-gray-300">
              <Minus size={20} className="text-[#fffbf0] hover:text-black"/>
            </button>
            <span className="text-lg font-semibold">{num}</span>

            <button onClick={handleIncrease} className="bg-[#36454f] hover:text-black text-gray-700 rounded px-3 py-1 text-sm hover:bg-gray-300">
              <Plus size={20} className="text-[#fffbf0] hover:text-black"/>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={handleAddToCart} className="text-[#36454f] hover:text-[#008080] focus:outline-none relative bg-[#008080] hover:bg-[#36454f] px-5 py-2 rounded-lg transition-all flex items-center gap-2">
              <ShoppingCart size={24} className="text-[#fffbf0]" />
              {productCounts[product.id] > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ff2a61] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {productCounts[product.id]}
                </span>
              )}
              <span className="text-[#fffbf0]">Add to Cart</span>
            </button>
            <Link href="/cartlist">
              <button className="text-[#fffbf0] focus:outline-none relative bg-[#ff9529] hover:bg-[#c06c16] px-5 py-2 rounded-lg transition-all flex items-center gap-2">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
