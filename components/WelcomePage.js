"use client";
// import Link from "next/link";
import React from "react";
import Mainweel from "@/src/animation/animation3/Mainweel";
function WelcomePage() {
  return (
    <>
      <div dir="ltr" className="h-screen w-full flex flex-row ">
        <div className="w-[50%] left-0 h-screen flex justify-start items-start">
          <Mainweel />
        </div>
      </div>
    </>
  );
}

export default WelcomePage;

{
  /* <Link href="/products">
  <button
    type="button"
    className="w-[170px] h-[60px] bg-black opacity-85 cursor-pointer rounded-lg text-white text-[20px] transition duration-200 hover:scale-105"
  >
    محصولات
  </button>
</Link> */
}
