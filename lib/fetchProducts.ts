export const fetchProducts = async (): Promise<ProductCardProps[]> => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: ProductCardProps[] = await res.json();
        return data;
      } catch (error: any) {
        throw new Error(error.message || "Something went wrong");
      }
    };
    