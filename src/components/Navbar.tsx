import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-md"
          : "bg-black/40 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO: berubah tergantung scroll */}
        <div className="w-16 h-auto">
          <img
            src={
              isScrolled
                ? "/images/logo-ion.png" // gelap → digunakan saat background putih
                : "/images/logo-ion-white.png" // putih → digunakan saat background transparan/gelap
            }
            alt="ION Logo"
            className="w-full h-auto transition duration-300"
          />
        </div>

        {/* MENU */}
        <ul className={`hidden md:flex space-x-6 ${isScrolled ? "text-gray-900" : "text-white"}`}>
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Products</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
