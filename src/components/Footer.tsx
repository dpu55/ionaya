import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "next-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation('common'); // Use the 'common' namespace
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center space-x-6 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">
                {t("homenav", "Home")}
              </Link>
            </li>
            <li>
              <Link href="/#AboutION" className="hover:text-white">
                {t("aboutnav", "About")}
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                {t("productnav", "Products")}
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                {t("contactnav", "Contact")}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com/ionayaofficial/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-2xl hover:text-blue-500 transition"
            />
          </a>
          <a href="https://instagram.com/ionayaofficial/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-2xl hover:text-pink-500 transition"
            />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-white text-2xl hover:text-gray-500 transition"
            />
          </a>
        </div>

        {/* Terms & Copyright */}
        <div className="text-gray-400 text-sm">
          <Link href="#" className="hover:text-white">
            {t("termcondition", "Terms & Conditions")}
          </Link>
          <span className="mx-2">|</span>
          <span>
            © {new Date().getFullYear()} PT Ionaya Optima Natura. All rights
            reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
