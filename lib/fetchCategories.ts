import { useState, useEffect } from "react";

export const useFetchCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);  

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);  
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(["All Categories", ...data]);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories");
      } finally {
        setLoading(false); // Ensure loading is set to false after fetching
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
