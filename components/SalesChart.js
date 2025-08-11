"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SalesChart() {
  const data = [
    { name: "شنبه", sales: 1200000 },
    { name: "یکشنبه", sales: 900000 },
    { name: "دوشنبه", sales: 1500000 },
    { name: "سه‌شنبه", sales: 1100000 },
    { name: "چهارشنبه", sales: 1800000 },
    { name: "پنجشنبه", sales: 750000 },
    { name: "جمعه", sales: 1300000 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-bold mb-4">نمودار فروش هفتگی</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => `${value.toLocaleString()} تومان`} />
          <Bar dataKey="sales" fill="#f97316" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
