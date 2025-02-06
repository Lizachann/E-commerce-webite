"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import SlideShow from "@/components/SlideShow";
import { useCart } from "@/contexts/CartContext";
import { fetchProducts } from "@/lib/fetchProducts"; // Import the fetch function

const HomePage = () => {
  const { productCounts, cartItems, wishlist, totalCartCount, updateCartCount, toggleWishlist } = useCart();
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const images = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide1.jpg', '/images/slide2.jpg'];
  const imageWidth = 1920;
  const imageHeight = 750;

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <SlideShow images={images} imageWidth={imageWidth} imageHeight={imageHeight} />
      <div className="flex">
        <div><Sidebar /></div>
        <div className="transition-all duration-300 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mx-auto px-10">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  rating={product.rating}
                  category={product.category}
                  onAddToCart={() => updateCartCount( product,0)}
                  onToggleWishlist={() => toggleWishlist(product)}
                  cartCount={productCounts[product.id] || 0}
                  isWishlisted={wishlist.some((item) => item.id === product.id)}
                  totalCartCount={totalCartCount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Items Section */}
      {/* <div className="mt-10 px-10">
        <h2 className="text-2xl font-bold">Items in Cart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <div key={product.id}>
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  rating={product.rating}
                  category={product.category}
                  onAddToCart={() => updateCartCount(product.id, product,product.cartCount)}
                  onToggleWishlist={() => toggleWishlist(product)}
                  cartCount={productCounts[product.id] || 0}
                  isWishlisted={wishlist.some((item) => item.id === product.id)}
                  totalCartCount={totalCartCount}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div> */}

      {/* Wishlist Section */}
      {/* <div className="mt-10 px-10">
        <h2 className="text-2xl font-bold">Wishlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {wishlist.length > 0 ? (
            wishlist.map((product) => (
              <div key={product.id}>
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  rating={product.rating}
                  category={product.category}
                  onAddToCart={() => updateCartCount(product.id, product)}
                  onToggleWishlist={() => toggleWishlist(product)}
                  cartCount={productCounts[product.id] || 0}
                  isWishlisted={wishlist.some((item) => item.id === product.id)}
                  totalCartCount={totalCartCount}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your wishlist is empty.</p>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
