"use client";

const orders = [
  {
    id: "#1234",
    customer: "علی رضایی",
    status: "ارسال شده",
    statusColor: "text-green-600",
    date: "۱۴۰۲/۰۵/۲۰",
    total: "۵۰۰,۰۰۰ تومان",
  },
  {
    id: "#1233",
    customer: "مریم احمدی",
    status: "در حال پردازش",
    statusColor: "text-yellow-600",
    date: "۱۴۰۲/۰۵/۱۹",
    total: "۳۲۰,۰۰۰ تومان",
  },
  {
    id: "#1232",
    customer: "حمید محمدی",
    status: "لغو شده",
    statusColor: "text-red-600",
    date: "۱۴۰۲/۰۵/۱۸",
    total: "۰ تومان",
  },
];

export default function OrdersPage() {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">صفحه سفارش‌ها</h1>

      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-orange-500 text-white">
            <th className="p-3">کد سفارش</th>
            <th className="p-3">نام مشتری</th>
            <th className="p-3">وضعیت</th>
            <th className="p-3">تاریخ</th>
            <th className="p-3">مبلغ کل</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(({ id, customer, status, statusColor, date, total }) => (
            <tr
              key={id}
              className="border-b border-gray-300 hover:bg-orange-50 cursor-pointer"
            >
              <td className="p-3">{id}</td>
              <td className="p-3">{customer}</td>
              <td className={`p-3 font-semibold ${statusColor}`}>{status}</td>
              <td className="p-3">{date}</td>
              <td className="p-3">{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
