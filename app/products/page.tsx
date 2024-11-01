import { Suspense } from "react";
import LoadingPage from "../loading";
import ProductCard from "../components/ProductCard";
const ProductsList = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="bg-white px-5 py-5">
        <ProductCard products={products} buttonText="View Details" />
      </div>
    </Suspense>
  );
};

export default ProductsList;
