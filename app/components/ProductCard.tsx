"use client";
import Link from "next/link";
import { Product } from "../interfaces";
import Image from "next/image";
import Button from "./ui/Button";
import { Suspense, useContext } from "react";
import LoadingPage from "../loading";
import StarRating from "./Stars";
import { context } from "../context/context";

interface ProductCardProps {
  products: Product[];
  buttonText: string;
}

const ProductCard = ({ products, buttonText }: ProductCardProps) => {
  const { removeFromCart } = useContext(context);
  const handleSubmit = (item: Product) => {
    removeFromCart(item.id);
  };

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="bg-slate-50 flex flex-wrap gap-4 justify-center items-center p-3">
        {products.map((item: Product) => {
          const randomRating = Math.floor(Math.random() * 3) + 3;
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between items-center
               bg-white md:w-1/5 w-72 min-w-72 min-h-[25rem] text-black rounded-lg p-2 
               shadow-[3px_3px_10px_rgba(0,0,0,0.2)] hover:shadow-blue-300 transition-shadow hover:scale-105 duration-300"
            >
              <h2 className="text-center font-bold text-base flex items-center text-blue-600">
                {item.title}
              </h2>
              <p className="text-sm self-start">
                <strong>Category :</strong> {item.category}
              </p>
              <div className="flex justify-center items-center h-52 bg-gray-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={160}
                  height={160}
                  className="rounded-xl h-full w-auto object-contain"
                />
              </div>
              <div className="flex justify-between w-full px-2">
                <p>
                  <strong> Price:</strong> $ {item.price}
                </p>
                <StarRating rating={randomRating} />
              </div>
              <Button
                handlerClick={() =>
                  buttonText === "View Details" ? null : handleSubmit(item)
                }
              >
                {buttonText === "View Details" ? (
                  <Link href={`/products/${item.id}`}>{buttonText}</Link>
                ) : (
                  buttonText
                )}
              </Button>
            </div>
          );
        })}
      </div>
    </Suspense>
  );
};

export default ProductCard;
