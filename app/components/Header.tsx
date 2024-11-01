import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa"; // Importa el ícono de carrito

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">OneClick</div>
      <nav className="space-x-4 flex items-center">
        <Link href="/" className="hover:text-blue-300 hover:underline">
          Home
        </Link>
        <Link href="/products" className="hover:text-blue-300 hover:underline">
          Products
        </Link>
        <Link
          href="/cart"
          className="flex items-center hover:text-blue-300 hover:underline"
        >
          <FaShoppingCart className="mr-2" /> {/* Ícono de carrito */}
          Cart
        </Link>
      </nav>
    </header>
  );
};

export default Header;
