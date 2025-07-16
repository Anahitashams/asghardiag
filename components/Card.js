import React from "react";
import Image from "next/image";

function Card({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
        >
          <Image
            alt={product.title}
            src={product.image}
            width={160}
            height={160}
            className="object-contain mb-4"
          />
          <h1 className="text-base font-semibold mb-2 line-clamp-2">
            {product.title}
          </h1>
          <h2 className="text-green-600 font-bold mb-1">{product.price} $</h2>
          <p className="text-gray-500 text-sm line-clamp-3">
            {product.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
