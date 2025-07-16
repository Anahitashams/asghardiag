"use client";
import Link from "next/link";

import React from "react";

function WelcomePage() {
  const headingClasses =
    "typewriter font-bold border-r-2 border-white overflow-hidden whitespace-nowrap " +
    "w-[15ch] text-lg sm:w-[20ch] sm:text-xl md:w-[22ch] md:text-2xl lg:w-[22ch] lg:text-4xl " +
    "py-6 leading-loose";

  return (
    <>
      <div
        dir="rtl"
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/luxryminicar.png')",
        }}
      >
        <div
          className="hidden sm:block absolute inset-0 bg-cover z-0"
          style={{
            backgroundImage: "url('/img/luxrycar.png')",
            backgroundPosition: "center 80%",
          }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-30 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-white text-center">
          <h1 className="h-8 text-2xl"> اصغر دیاگ</h1>
          <h1 className={headingClasses}>به مجموعه اصغر دیاگ خوش آمدید</h1>
          <Link href="/products">
            <button
              type="button"
              className="w-[170px] h-[60px] bg-black opacity-85 cursor-pointer rounded-lg text-white text-[20px] transition duration-200 hover:scale-105"
            >
              محصولات
            </button>
          </Link>
        </div>

        <style jsx>{`
          .typewriter {
            animation: typing 6s steps(30, end) forwards,
              blink 0.8s step-end infinite;
            direction: rtl;
          }

          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 100%;
            }
          }

          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default WelcomePage;
