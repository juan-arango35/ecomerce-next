import CategoriesPage from "@/app/categories/page";


const CategoriesComponent = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-950 col-span-2 md:col-span-3">
        What do you want today?
      </h2>
      <div>
        <CategoriesPage />
      </div>
    </div>
  );
};

export default CategoriesComponent;
