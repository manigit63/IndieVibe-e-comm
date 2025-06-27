// src/hooks/useFilteredProducts.js
import { useMemo } from "react";

const useFilteredProducts = (products, searchTerm, categoryFilter, sortBy) => {
  return useMemo(() => {
    return [...products]
      .filter((p) => {
        const matchesTitle =
          typeof p.title === "string" &&
          p.title.toLowerCase().includes(searchTerm?.toLowerCase() || "");
        const matchesCategory =
          categoryFilter === "" || p.category === categoryFilter;
        return matchesTitle && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === "lowToHigh") return a.price - b.price;
        if (sortBy === "highToLow") return b.price - a.price;
        if (sortBy === "newest") return b.id - a.id;
        return 0;
      });
  }, [products, searchTerm, categoryFilter, sortBy]);
};

export default useFilteredProducts;
