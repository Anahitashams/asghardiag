"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
    { href: "#about-me", label: "درباره من" },
    { href: "#skills", label: "مهارت ها" },
    { href: "#experience", label: "سوابق کاری" },
    { href: "#", label: "LOGO", isLogo: true },
    { href: "#education", label: "سوابق تحصیلی" },
    { href: "#Projects", label: "پروژه ها" },
    { href: "#call", label: "تماس با من" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        showHeader ? "opacity-100" : "opacity-0 pointer-events-none"
      }  sm:bg-transparent`}
    >
      <div
        className="flex flex-col sm:flex-row items-center justify-center px-4 py-3 max-w-7xl mx-auto"
        dir="rtl"
      >
        <div className="w-full flex justify-between items-center sm:hidden">
          <Image
            src="/logo.png"
            alt="ANATECH Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
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
          <ul className="flex flex-col sm:flex-row items-center gap-4 bg-gray-100 sm:bg-transparent rounded-md sm:rounded-none p-4 sm:p-0">
            {menuItems.map(({ href, label, isLogo }) => (
              <li key={href} className="whitespace-nowrap">
                {isLogo ? (
                  <div className="mx-8 sm:mx-12 w-[100px] sm:w-[150px] flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt="ANATECH Logo"
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                  </div>
                ) : (
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-1 lg:text-gray-50 lg:hover:text-gray-200 sm:text-gray-700 text-sm sm:text-base transition sm:hover:text-gray-500"
                  >
                    {label}
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
