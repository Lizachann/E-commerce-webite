
    interface ProductCardProps {
      id: number;
      image: string;
      title: string;
      price: number;
      description: string;
      category: string;
      rating: { rate: number; count: number };
      onAddToCart: () => void;
      onToggleWishlist: () => void; 
      cartCount: number;
      isWishlisted: boolean; 
      totalCartCount: number;
    }
    
    type ProductCount = {
      cartCount: number;
    };
    
    interface SlideShowProps {
      images: string[]; 
      imageWidth: number;  
      imageHeight: number;  
    }

    interface CartContextType {
      productCounts: { [key: number]: number };
      cartItems: ProductCardProps[];
      wishlist: ProductCardProps[];
      totalCartCount: number;
      updateCartCount: (product: ProductCardProps, num: number) => void;
      toggleWishlist: (product: ProductCardProps) => void;
      removeFromCart: (id: number) => void;
    }
    