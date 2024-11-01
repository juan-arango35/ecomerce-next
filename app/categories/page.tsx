import Link from "next/link";

export default async function CategoriesPage() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories: string[] = await res.json();

  return (
    <div className="flex flex-col md:flex-row m-2 gap-4">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/categories/${category}`}
          className="flex items-center justify-center w-full md:w-1/2 h-32 text-2xl md:text-xl font-bold text-blue-700 p-4 bg-white border rounded-lg shadow-lg hover:shadow-blue-300 transition-shadow duration-300"
        >
          {category.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
