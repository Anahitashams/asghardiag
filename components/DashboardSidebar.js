"use client";
import Link from "next/link";
import {
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-black text-white flex flex-col">
      <div className="p-4 text-2xl font-bold text-orange-500">Shop Admin</div>
      <nav className="flex-1 p-2 space-y-2">
        <MenuItem
          href="/dashboard/orders"
          icon={<ShoppingCart size={20} />}
          label="سفارش‌ها"
        />
        <MenuItem
          href="/dashboard/products"
          icon={<Package size={20} />}
          label="محصولات"
        />
        <MenuItem
          href="/dashboard/customers"
          icon={<Users size={20} />}
          label="مشتریان"
        />
        <MenuItem
          href="/dashboard/reports"
          icon={<BarChart3 size={20} />}
          label="گزارش‌ها"
        />
        <MenuItem
          href="/dashboard/settings"
          icon={<Settings size={20} />}
          label="تنظیمات"
        />
      </nav>
    </aside>
  );
}

function MenuItem({ href, icon, label }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 p-3 rounded hover:bg-orange-500 transition cursor-pointer"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
