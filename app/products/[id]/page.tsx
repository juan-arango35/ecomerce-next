"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Product } from "@/app/interfaces";
import Button from "@/app/components/ui/Button";
import { useContext, useEffect, useState } from "react";
import { context } from "@/app/context/context";

interface ItemProduct {
  params: { id: string };
}

async function loadProduct(id: string): Promise<Product | null> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    return null;
  }
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return null;
  }
}

const ProductPageItem = ({ params }: ItemProduct) => {
  const { addToCart, removeFromCart, isInCart } = useContext(context);
  const [producto, setProducto] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await loadProduct(params.id);
      if (!fetchedProduct) {
        notFound(); // Manejo de error si no se encuentra el producto
      } else {
        setProducto(fetchedProduct);
      }
    };
    fetchProduct();
  }, [params.id]);

  if (!producto) {
    return null;
  }

  const handleCartAction = () => {
    if (isInCart(producto.id.toString())) {
      removeFromCart(producto.id);
    } else {
      addToCart(producto);
    }
  };

  return (
    <div className="flex flex-col md:flex-row mx-auto min-h-screen w-fit bg-gray-50 p-8">
      <div className="bg-white rounded-lg w-full md:w-2/3 mx-auto shadow-lg flex flex-wrap gap-4 md:flex-row justify-center items-center p-6">
        <Image
          src={producto.image}
          alt={producto.title}
          width={300}
          height={300}
          className="rounded-lg mb-4 object-contain"
        />
        <div className="flex flex-col md:w-2/5 min-w-80 justify-center items-center">
          <h1 className="font-bold text-2xl text-center text-blue-600 mb-2">
            {producto.title}
          </h1>
          <p className="text-gray-700 text-center text-sm md:text-base mb-4">
            <strong>Description:</strong> {producto.description}
          </p>
          <p className="font-bold text-xl text-center text-green-600 mb-4">
            Price: ${producto.price}
          </p>
          <div className="flex justify-around w-full items-center">
            <Button variant="secondary" className="w-fit">
              <Link href="/products">Go Back</Link>
            </Button>
            <Button handlerClick={handleCartAction}>
              {isInCart(producto.id.toString())
                ? "Remove from Cart"
                : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageItem;
