"use client";
import Link from "next/link";
import React from "react";
function WelcomePage() {
  return (
    <>
      <div className="h-screen w-full">
        <Link href="/products">
          <button
            type="button"
            className="w-[170px] h-[60px] bg-black opacity-85 cursor-pointer rounded-lg text-white text-[20px] transition duration-200 hover:scale-105"
          >
            محصولات
          </button>
        </Link>
      </div>
    </>
  );
}

export default WelcomePage;
