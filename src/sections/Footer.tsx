import { FaFacebookF, FaTiktok  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  return (
    <footer className="text-white py-16 px-4 text-center">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
        <nav className="mb-4 md:mb-0 flex gap-4">
          <a href="#" className="mx-2 hover:text-gray-400">
          <FaFacebookF />
          </a>
          <a href="#" className="mx-2 hover:text-gray-400">
            <FaXTwitter />
          </a>
          <a href="#" className="mx-2 hover:text-gray-400">
            <FaTiktok />
          </a>
        </nav>
        <div className="mb-4 md:mb-0">
          <input
            type="email"
            placeholder="Subscribe to our newsletter"
            className="p-2 rounded-md text-gray-200 w-64"
          />
          <button className="bg-brown-600 text-white py-2 px-4 rounded-md ml-2 hover:bg-brown-700 transition">
            Subscribe
          </button>
        </div>
        <p className="text-sm">© 2025 kofe-latte. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
