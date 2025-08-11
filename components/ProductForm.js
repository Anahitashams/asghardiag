"use client";
import { useState } from "react";

export default function ProductForm() {
  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("محصول جدید:", form);
    alert("محصول با موفقیت اضافه شد!");
    setForm({ name: "", price: "", stock: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-6 rounded-lg space-y-4"
    >
      <h2 className="text-lg font-bold">افزودن محصول جدید</h2>
      <input
        type="text"
        placeholder="نام محصول"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border rounded p-2"
      />
      <input
        type="number"
        placeholder="قیمت"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        className="w-full border rounded p-2"
      />
      <input
        type="number"
        placeholder="موجودی"
        value={form.stock}
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
        className="w-full border rounded p-2"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        افزودن محصول
      </button>
    </form>
  );
}
