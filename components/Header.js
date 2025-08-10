"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Settings,
  Info,
  Package,
  Newspaper,
  Phone,
  Calendar,
} from "lucide-react";

function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
    { href: "#", label: "LOGO", isLogo: true },
    {
      href: "#Home",
      label: "خانه",
      icon: <Newspaper className="ml-2" color="#FF6A00" size={18} />,
    },
    {
      href: "#Services",
      label: "خدمات ما",
      icon: <Settings className="ml-2" color="#FF6A00" size={18} />,
    },
    {
      href: "#about",
      label: "درباره ما",
      icon: <Info className="ml-2" color="#FF6A00" size={18} />,
    },
    {
      href: "#callus",
      label: "تماس با ما",
      icon: <Phone className="ml-2" color="#FF6A00" size={18} />,
    },
    {
      href: "/products",
      label: "محصولات",
      icon: <Package className="ml-2" color="#FF6A00" size={18} />,
    },
    {
      href: "#reserve",
      label: "رزرو آنلاین",
      icon: <Calendar className="ml-2" color="#FF6A00" size={18} />,
    },
  ];

  const textColorClass = isHome ? "text-white" : "text-black";
  const iconColor = isHome ? "white" : "black";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        showHeader ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`text-2xl flex flex-col sm:flex-row items-center justify-center px-10 py-3 max-w-7xl mx-auto ${textColorClass}`}
        dir="rtl"
      >
        {/* Mobile Top Bar */}
        <div className="w-full flex justify-between items-center sm:hidden">
          <Image
            src="/croppedlogo.png"
            alt="ANATECH Logo"
            width={50}
            height={50}
          />
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={28} color={iconColor} />
            ) : (
              <Menu size={28} color={iconColor} />
            )}
          </button>
        </div>

        {/* Menu */}
        <nav
          className={`${
            isOpen ? "block bg-white shadow-lg rounded-lg p-6" : "hidden"
          } w-full sm:flex sm:w-auto mt-4 sm:mt-0`}
        >
          <ul className="flex flex-col sm:flex-row items-center gap-14 rounded-md sm:rounded-none p-6 sm:p-0">
            {menuItems.map(({ href, label, isLogo, icon }) => (
              <li key={href} className="whitespace-nowrap">
                {isLogo ? (
                  <div className="mx-8 sm:mx-12 w-[100px] sm:w-[150px] flex-shrink-0">
                    <Image
                      src="/cropped-removebg-logo.png"
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
                    className={`flex items-center gap-1 px-4 py-1 text-sm sm:text-base transition duration-200 hover:text-orange-500 ${
                      isOpen ? "text-black" : textColorClass
                    }`}
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
