"use client";

import Image from "next/image";

export default function Card({ products, addToCart }) {
  return (
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 px-2 sm:px-0">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-3xl shadow p-4 flex flex-col min-h-[420px] sm:min-h-[460px] md:min-h-[480px]"
        >
          <div className="flex justify-center h-40 sm:h-48 p-3 sm:p-4 bg-gray-50 rounded-xl">
            <Image
              src={product.image}
              alt={product.title}
              width={140}
              height={140}
              className="object-contain"
            />
          </div>

          <h4 className="mt-3 font-semibold text-gray-800 line-clamp-2 text-sm sm:text-base">
            {product.title}
          </h4>

          <p className="text-gray-500 text-xs sm:text-sm line-clamp-3 mt-2 flex-grow">
            {product.description}
          </p>

          <span className="mt-3 bg-orange-500 text-white font-bold px-3 py-1 rounded-full inline-block w-max text-xs sm:text-sm">
            {product.price} $
          </span>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white rounded py-2 font-semibold text-sm sm:text-base"
          >
            افزودن به سبد خرید
          </button>
        </div>
      ))}
    </div>
  );
}
