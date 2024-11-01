"use client";
import { useContext } from "react";
import { context } from "../context/context";
import ProductCard from "../components/ProductCard";

const ProductsCart = () => {
  const { cart } = useContext(context);

  return (
    <div>
      <h1 className="text-gray-700 mb-3 mt-3 ml-12 text-2xl font-bold ">
        Your products:
      </h1>
      {cart.length > 0 ? (
        <ProductCard products={cart} buttonText="Remove" />
      ) : (
        <h1 className="text-gray-700 mb-3 mt-3 ml-12 text-2xl font-bold ">
          There are not products yet
        </h1>
      )}
    </div>
  );
};

export default ProductsCart;
