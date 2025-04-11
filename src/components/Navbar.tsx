import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-md"
          : "bg-black/40 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <div className="w-16 h-auto">
          <Image
            src={
              isScrolled
                ? "/images/logo-ion.png"
                : "/images/logo-ion-white.png"
            }
            alt="ION Logo"
            width={100}
            height={32}
            className="w-full h-auto transition duration-300"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul
          className={`hidden md:flex space-x-6 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          <li><a href="#" className="hover:text-ion-green-light">Home</a></li>
          <li><a href="#" className="hover:text-ion-green-light">About</a></li>
          <li><a href="#" className="hover:text-ion-green-light">Products</a></li>
          <li><a href="#" className="hover:text-ion-green-light">Contact</a></li>
          <li>
            <a
              href="https://member.ionaya.com"
              className={`px-3 py-2 rounded-2xl hover:text-ion-gray hover:bg-ion-navy-dark ${
                isScrolled ? "bg-gray-200" : "bg-none"
              }`}
            >
              Login
            </a>
          </li>
        </ul>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={toggleMenu}
          className={`md:hidden z-50 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg backdrop-blur-md py-6 px-4 text-gray-900`}
        >
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li><a href="#" onClick={toggleMenu}>Home</a></li>
            <li><a href="#" onClick={toggleMenu}>About</a></li>
            <li><a href="#" onClick={toggleMenu}>Products</a></li>
            <li><a href="#" onClick={toggleMenu}>Contact</a></li>
            <li>
              <a
                href="https://member.ionaya.com"
                className="block bg-ion-navy text-white text-center py-2 rounded-2xl"
                onClick={toggleMenu}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
