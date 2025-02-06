

export const fetchProducts = async (): Promise<ProductCardProps[]> => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: ProductCardProps[] = await res.json();
        return data;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(error.message || "Something went wrong");
        } else {
          throw new Error("Something went wrong");
        }
      }
      
    };
    