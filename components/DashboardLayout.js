import {
  Bell,
  Search,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col">
        <div className="p-4 text-2xl font-bold text-orange-500">Shop Admin</div>
        <nav className="flex-1 p-2">
          <MenuItem icon={<ShoppingCart size={20} />} label="سفارش‌ها" />
          <MenuItem icon={<Package size={20} />} label="محصولات" />
          <MenuItem icon={<Users size={20} />} label="مشتریان" />
          <MenuItem icon={<BarChart3 size={20} />} label="گزارش‌ها" />
          <MenuItem icon={<Settings size={20} />} label="تنظیمات" />
        </nav>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
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

        {/* Content */}
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

function MenuItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded hover:bg-orange-500 cursor-pointer transition">
      {icon}
      <span>{label}</span>
    </div>
  );
}
