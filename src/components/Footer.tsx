import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center space-x-6 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-pink-500 transition" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} className="text-white text-2xl hover:text-gray-500 transition" />
          </a>
        </div>

        {/* Terms & Copyright */}
        <div className="text-gray-400 text-sm">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <span className="mx-2">|</span>
          <span>© {new Date().getFullYear()} PT Ionaya Optima Natura. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
