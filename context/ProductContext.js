"use client";

import { productsData } from "@/lib/products";
import { createContext, useContext, useState, useEffect } from "react";
// import { productsData } from '@/lib/products';

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("TechVault_products");
      return saved ? JSON.parse(saved) : productsData;
    }
    return productsData;
  });

  useEffect(() => {
    localStorage.setItem("TechVault_products", JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, { ...newProduct, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => useContext(ProductContext);
