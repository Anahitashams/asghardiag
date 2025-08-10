"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Card from "@/components/Card";
import { ShoppingCart } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const router = useRouter();

  const PushHandler = () => {
    router.push("/cart");
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => err);
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  return (
    <div className="max-w-full px-4 sm:px-6 lg:px-8 mx-auto py-6">
      {cart.length > 0 && (
        <div className="flex justify-center mt-24 mb-10 px-2 sm:px-0">
          <button
            onClick={PushHandler}
            className="
        w-full max-w-[200px]
        h-12 sm:h-14
        bg-orange-500 hover:bg-orange-600
        text-white
        flex justify-center items-center
        rounded-lg
        transition
        text-sm sm:text-base
        gap-2
        mb-4 sm:mb-2
      "
            type="button"
          >
            <ShoppingCart size={20} />
            <span>برو به سبد خرید ({cart.length})</span>
          </button>
        </div>
      )}

      <Card products={products} addToCart={addToCart} />
      <div className="flex justify-center mt-10">
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
