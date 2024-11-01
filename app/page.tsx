import Banner from "./components/layout/Banner";
import CategoriesComponent from "./components/layout/CategoriesComponent";

export default function Home() {
  return (
    <div className="w-full p-4">
      <Banner />
      <CategoriesComponent />
    </div>
  );
}
