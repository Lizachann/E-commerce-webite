"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import SlideShow from "@/components/SlideShow";
import { useCart } from "@/contexts/CartContext";
import { fetchProducts } from "@/lib/fetchProducts";

const HomePage = () => {
  const { productCounts, wishlist, totalCartCount, updateCartCount, toggleWishlist } = useCart();
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [isClient, setIsClient] = useState(false);  
  const images = ['/images/slide1.jpg', '/images/slide2.jpg', '/images/slide3.png', '/images/slide4.jpg'];
  const imageWidth = 1920;
  const imageHeight = 750;

   useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const isCategoryMatch = selectedCategory === "All Categories" || product.category === selectedCategory;

    let isPriceMatch = true;
    if (selectedPriceRange === '0-50') {
      isPriceMatch = product.price >= 0 && product.price <= 50;
    } else if (selectedPriceRange === '51-100') {
      isPriceMatch = product.price > 50 && product.price <= 100;
    } else if (selectedPriceRange === '101-200') {
      isPriceMatch = product.price > 100 && product.price <= 200;
    } else if (selectedPriceRange === '201+') {
      isPriceMatch = product.price > 200;
    }

    return isCategoryMatch && isPriceMatch;
  });

  if (!isClient) {
     return null; 
  }

  return (
    <div>
      <SlideShow images={images} imageWidth={imageWidth} imageHeight={imageHeight} />
      <div className="flex">
        <div>
          <Sidebar 
            onCategorySelect={setSelectedCategory} 
            onPriceFilter={setSelectedPriceRange} 
          />
        </div>
        <div className="transition-all duration-300 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full mx-auto px-10">
            {filteredProducts.map((product) => (
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
