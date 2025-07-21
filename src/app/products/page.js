"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "@/components/Card";

function page() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => err);
  });
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4 w-full">
        <Card products={Products} />
      </div>
    </>
  );
}

export default page;
