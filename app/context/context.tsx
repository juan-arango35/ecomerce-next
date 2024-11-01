"use client";
import { Product } from "../interfaces";
import { createContext, ReactNode } from "react";
interface ContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  isInCart: (id: string) => boolean;
}

export interface ProviderProps {
  children: ReactNode;
}
export const context = createContext<ContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isInCart: () => false,
});
