/* 'use client'; */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import LangSwitcher from "./LangSwitcher";

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
        <Link href="/" className="w-16 h-auto block">
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
        </Link>

        {/* DESKTOP MENU */}
        <ul className={`hidden md:flex space-x-6 ${isScrolled ? "text-gray-900" : "text-white"}`}>
          <li>
            <Link href="/" className="hover:text-ion-green-light">Home</Link>
          </li>
          <li>
            <Link href="/#AboutION" className="hover:text-ion-green-light">About</Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-ion-green-light">Products</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-ion-green-light">Contact</Link>
          </li>
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
          <LangSwitcher isScrolled={isScrolled} />
        </ul>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={toggleMenu}
          className={`md:hidden z-50 ${isScrolled ? "text-gray-900" : "text-white"}`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg backdrop-blur-md py-6 px-4 text-gray-900">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li>
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="/#AboutION" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href="/products" onClick={toggleMenu}>Products</Link>
            </li>
            <li>
              <Link href="#" onClick={toggleMenu}>Contact</Link>
            </li>
            <li>
              <a
                href="https://member.ionaya.com"
                className="block bg-ion-navy text-white text-center py-2 rounded-2xl"
                onClick={toggleMenu}
              >
                Login
              </a>
            </li>
            {/* Untuk mobile, override agar styling selalu seperti scrolled */}
            <LangSwitcher isScrolled={isScrolled} mobile={true} />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
