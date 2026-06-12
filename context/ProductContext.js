"use client";

import { productsData } from "@/lib/products";
import { createContext, useContext, useState, useEffect } from "react";
// import { productsData } from '@/lib/products';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('techVaultProducts');
      return saved ? JSON.parse(saved) : productsData;
    }
    return productsData;
  });

  useEffect(() => {
    localStorage.setItem('techVaultProducts', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);





