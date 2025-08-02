import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A8A] text-white pt-0 pb-6" dir="rtl">
      <div className="bg-gray-100 py-8 flex justify-center items-center relative">
        <div className="absolute bottom-[-72px] bg-gray-100 rounded-full p-2 shadow-sm shadow-gray-50">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={120}
            className=""
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
        <div>
          <h3 className="font-bold text-lg mb-4">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:underline">
                درباره من
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                نمونه‌کارها
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                مهارت‌ها
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                ارتباط با من
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">تماس با من</h3>
          <ul className="space-y-2 text-sm">
            <li>تلفن: ۰۹۹۹۱۷۹۹۶۴۴</li>
            <li>ایمیل: info@anatech.dev</li>
            <li>برند: Anatech</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">شبکه‌های اجتماعی</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Anahitashams"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://t.me/anahitashams"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-gray-300"
            >
              <FaTelegramPlane size={20} />
            </a>
            <a
              href="https://www.instagram.com/anaweb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ANahitaweb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">شعار Anatech</h3>
          <p className="text-sm leading-6">
            سایتت رو با آناتک بساز،فروشت رو بترکون{" "}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t  border-gray-400 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} تمامی حقوق برای Anatech (آناهیتا شمس) محفوظ
        است.
      </div>
    </footer>
  );
}
