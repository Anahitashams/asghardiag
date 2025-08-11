"use client";
import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="bg-white flex items-center justify-between p-4 shadow">
      <div className="flex items-center gap-2 bg-gray-100 rounded p-2 w-1/3">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="جستجو..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>
      <div className="flex items-center gap-4">
        <Bell size={20} className="text-gray-600 cursor-pointer" />
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-8 h-8 rounded-full border-2 border-orange-500"
        />
      </div>
    </header>
  );
}
