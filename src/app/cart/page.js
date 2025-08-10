"use client";
import React from "react";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-end mt-10">
        <button
          onClick={() => router.back()}
          className="
      bg-orange-500 hover:bg-orange-600 text-white font-semibold
      px-4 py-2 sm:px-6 sm:py-3
      rounded-lg transition
      w-full max-w-[200px] sm:max-w-[200px]
      text-sm sm:text-base
    "
        >
          بازگشت
        </button>
      </div>
    </div>
  );
}

export default page;
