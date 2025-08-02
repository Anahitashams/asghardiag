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
    <footer className="bg-black text-white pt-0 pb-6" dir="rtl">
      <div className="bg-orange-500 py-8 flex justify-center items-center relative">
        <div className="absolute bottom-[-72px] bg-orange-500 rounded-full p-2 shadow-md shadow-orange-500">
          <Image
            src="/croppedlogo.png"
            alt="logo"
            width={120}
            height={120}
            className=" bg-center bg-cover"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
        <div>
          <h3 className="font-bold text-lg mb-4 text-orange-500  ">
            دسترسی سریع
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-orange-300">
                درباره ما
              </a>
            </li>
            <li>
              <a href="#Services" className="hover:text-orange-300">
                خدمات خودرو
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-orange-300">
                تعرفه‌ها
              </a>
            </li>
            <li>
              <a href="#callus" className="hover:text-orange-300">
                ارتباط با ما
              </a>
            </li>
          </ul>
        </div>

        {/* تماس با ما */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-orange-500">تماس با ما</h3>
          <ul className="space-y-2 text-sm">
            <li>تلفن: ۰۹۱۲۱۲۳۴۵۶۷</li>
            <li>آدرس: تهران، فلکه دوم صادقیه</li>
            <li>برند: اصغر دیاگ</li>
            <li>ایمیل: info@asgharDiag.ir</li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-orange-500">
            شبکه‌های اجتماعی
          </h3>
          <div className="flex gap-4 text-white">
            <a
              href="https://t.me/asghardiag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-orange-300 transition"
            >
              <FaTelegramPlane size={20} />
            </a>
            <a
              href="https://www.instagram.com/asghardiag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-orange-300 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/asghardiag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-orange-300 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* شعار برند */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-orange-500">
            شعار اصغر دیاگ
          </h3>
          <p className="text-sm leading-6">
            از خطایابی تا راه‌اندازی، با اصغر دیاگ ماشینت همیشه آماده‌ست!
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} تمامی حقوق برای
        <strong className="text-orange-500">اصغر دیاگ</strong> محفوظ است.
      </div>
    </footer>
  );
}
