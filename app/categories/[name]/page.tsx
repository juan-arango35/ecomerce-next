import { notFound } from "next/navigation";
import { Product } from "@/app/interfaces";
import ProductCard from "@/app/components/ProductCard";

interface CategoryProductsProps {
  params: { name: string };
}

async function loadCategoryProducts(
  category: string
): Promise<Product[] | null> {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  if (!response.ok) {
    return null;
  }
  const data: Product[] = await response.json();
  return data;
}

const CategoryProducts = async ({ params }: CategoryProductsProps) => {
  const categoryName = decodeURIComponent(params.name);
  const products = await loadCategoryProducts(params.name);

  if (!products) {
    notFound();
    return null;
  }

  return (
    <div>
      <h1 className="text-gray-700 mb-3 mt-3 ml-12 text-2xl font-bold ">
        {categoryName.toUpperCase()}
      </h1>
      {products.length > 0 ? (
        <ProductCard products={products} buttonText="View Details" />
      ) : (
        <h1 className="text-gray-700 mb-3 mt-3 ml-12 text-2xl font-bold ">
          There are not products in this category
        </h1>
      )}
    </div>
  );
};

export default CategoryProducts;
