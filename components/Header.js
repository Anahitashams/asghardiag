"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Settings, Info, Package, Newspaper } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      href: "#services",
      label: "خدمات ما",
      icon: <Settings className="ml-2" color="#FF6A00" size={18} />,
    },
    {
      href: "#about",
      label: "درباره ما",
      icon: <Info className="ml-2" color="#FF6A00" size={18} />,
    },
    {
      href: "#",
      label: "LOGO",
      isLogo: true,
    },
    {
      href: "#products",
      label: "محصولات",
      icon: <Package className="ml-2" color="#FF6A00" size={18} />,
    },
    {
      href: "#articles",
      label: "مقالات",
      icon: <Newspaper className="ml-2" color="#FF6A00" size={18} />,
    },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        showHeader ? "opacity-100" : "opacity-0 pointer-events-none"
      }  sm:bg-transparent`}
    >
      <div
        className="text-white text-2xl flex flex-col sm:flex-row items-center justify-center px-10 py-3 max-w-7xl mx-auto"
        dir="rtl"
      >
        <div className=" w-full flex justify-between items-center sm:hidden">
          <Image
            src="/logo.png"
            alt="ANATECH Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } w-full sm:flex sm:w-auto mt-4 sm:mt-0`}
        >
          <ul className="flex flex-col sm:flex-row items-center gap-14 rounded-md sm:bg-transparent  sm:rounded-none p-6 sm:p-0">
            {menuItems.map(({ href, label, isLogo, icon }) => (
              <li key={href} className="whitespace-nowrap ">
                {isLogo ? (
                  <div className="mx-8 sm:mx-12 w-[100px] sm:w-[150px] flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt="asghardiag Logo"
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                  </div>
                ) : (
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-1 px-4 py-1 text-sm sm:text-base transition duration-200 hover:shadow-lg hover:scale-125"
                  >
                    {icon}
                    <span>{label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
