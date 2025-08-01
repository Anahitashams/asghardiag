"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cursor from "@/src/animation/animation2/Cursor";

function WelcomePage() {
  return (
    <div
      id="Home"
      dir="ltr"
      className="h-screen w-full flex flex-row relative bg-cover bg-center"
      style={{ backgroundImage: "url('/img/realbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-65 z-0"></div>

      <div className="w-[50%] h-full flex justify-center items-center pt-4 relative z-10">
        <div className="w-full max-w-2xl flex flex-col items-center text-center pt-4 px-4">
          <h1 className="font-bold text-4xl md:text-5xl leading-relaxed text-white drop-shadow-lg">
            به مجموعه خدمات تخصصی خودرو{" "}
            <span className="text-orange-500">اصغردیاگ</span> خوش آمدید
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-6 leading-8">
            ارائه‌دهنده‌ی خدمات پیشرفته‌ی عیب‌یابی، تعمیرات تخصصی و پشتیبانی
            حرفه‌ای خودروهای مدرن. با تیم مجرب ما، خودروی شما در بهترین دست‌هاست
          </p>
          <Link href="/products">
            <button
              type="button"
              className="mt-10 w-[190px] h-[60px] bg-orange-600 hover:bg-orange-500 rounded-xl text-white text-[20px] font-semibold shadow-md transition duration-200 hover:scale-105"
            >
              محصولات
            </button>
          </Link>
        </div>
      </div>

      <div className="w-[50%] h-full flex justify-end flex-col items-center relative z-10">
        <Image
          className="w-full h-[90%]"
          src="/img/workmen.png"
          alt="person"
          width={500}
          height={500}
        />
      </div>

      <div className="absolute top-8/9 left-3/6 -translate-x-1/2 -translate-y-1/2 z-20">
        <Cursor />
      </div>
    </div>
  );
}

export default WelcomePage;
