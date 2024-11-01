"use client";
import { useState, useEffect } from "react";
import { ProviderProps, context } from "./context";
import { Product } from "../interfaces";

export const Provider = ({ children }: ProviderProps) => {
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const isInCart = (id: string): boolean => {
    const inCart = cart.some((product) => product.id.toString() === id);
    return inCart;
  };

  return (
    <context.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      {children}
    </context.Provider>
  );
};
