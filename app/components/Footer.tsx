import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center self-center md:justify-start">
          <p>© 2024 OneClick.</p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="flex flex-col items-center md:items-end">
            <p>Follow us</p>
            <div className="flex gap-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-1 flex justify-center">
        <p>Made with love in Perú and Colombia</p>
      </div>
    </footer>
  );
};

export default Footer;
