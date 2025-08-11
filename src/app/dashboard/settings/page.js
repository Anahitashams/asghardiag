"use client";
import { useState } from "react";

export default function SettingsPage() {
  const [store, setStore] = useState({
    name: "فروشگاه من",
    phone: "09123456789",
    email: "info@shop.com",
    address: "تهران، خیابان مثال",
  });

  const handleChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("تنظیمات با موفقیت ذخیره شد!");
    console.log("تنظیمات جدید:", store);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-4">
      <h1 className="text-xl font-bold mb-4">تنظیمات فروشگاه</h1>

      <div>
        <label className="block mb-1">نام فروشگاه</label>
        <input
          type="text"
          name="name"
          value={store.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block mb-1">شماره تماس</label>
        <input
          type="text"
          name="phone"
          value={store.phone}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block mb-1">ایمیل</label>
        <input
          type="email"
          name="email"
          value={store.email}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block mb-1">آدرس</label>
        <textarea
          name="address"
          value={store.address}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        ذخیره تغییرات
      </button>
    </div>
  );
}
