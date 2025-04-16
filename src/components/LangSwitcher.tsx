// src/components/LangSwitcher.tsx
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

type LangSwitcherProps = {
  isScrolled: boolean;
  mobile?: boolean;
};

const LangSwitcher = ({ isScrolled, mobile = false }: LangSwitcherProps) => {
  const router = useRouter();
  const { locale, asPath } = router;
  const [open, setOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleLanguageChange = (lang: string) => {
    setOpen(false);
    router.push(asPath, asPath, { locale: lang });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Short label: hanya menampilkan "EN" atau "ID"
  const shortLabel = locale === "en" ? "EN" : "ID";

  // Jika dalam mode mobile, override isScrolled menjadi true
  const appliedScrolled = mobile ? true : isScrolled;

  // Tombol utama (tidak berubah)
  const buttonClasses = appliedScrolled
    ? "inline-flex items-center gap-1 px-2 py-1 bg-white text-gray-900 text-sm rounded-md shadow-sm hover:bg-gray-100 focus:outline-none"
    : "inline-flex items-center gap-1 px-2 py-1 bg-transparent text-white text-sm hover:bg-gray-700 focus:outline-none";

  // **Perhatikan margin top di sini** — diubah dari mt-2 ke mt-0 agar menempel
  const dropdownClasses = appliedScrolled
    ? "absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20 text-sm"
    : "absolute left-0 mt-0 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-20 text-sm";

  // Item dropdown (tidak berubah)
  const dropdownItemClasses = appliedScrolled
    ? "block w-full text-left px-3 py-1 hover:bg-gray-100"
    : "block w-full text-left px-3 py-1 text-white hover:bg-gray-700";

  return (
    <div className="relative inline-block" ref={switcherRef}>
      <button type="button" onClick={toggleDropdown} className={buttonClasses}>
        <FaGlobe className="text-base" />
        <span>{shortLabel}</span>
        <FaChevronDown className="text-base" />
      </button>
      {open && (
        <div className={dropdownClasses}>
          <button
            onClick={() => handleLanguageChange("en")}
            className={dropdownItemClasses}
          >
            English - EN
          </button>
          <button
            onClick={() => handleLanguageChange("id")}
            className={dropdownItemClasses}
          >
            Bahasa Indonesia - ID
          </button>
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
