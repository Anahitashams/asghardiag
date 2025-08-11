"use client";

export default function OrdersTable() {
  const orders = [
    {
      id: 1,
      customer: "علی رضایی",
      date: "1404/05/10",
      status: "در حال پردازش",
      total: "1,200,000 تومان",
    },
    {
      id: 2,
      customer: "مریم احمدی",
      date: "1404/05/09",
      status: "ارسال شده",
      total: "850,000 تومان",
    },
    {
      id: 3,
      customer: "حسین مرادی",
      date: "1404/05/08",
      status: "تحویل شده",
      total: "2,300,000 تومان",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="min-w-full text-sm text-right">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="p-3">شماره سفارش</th>
            <th className="p-3">مشتری</th>
            <th className="p-3">تاریخ</th>
            <th className="p-3">وضعیت</th>
            <th className="p-3">مبلغ</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">{order.date}</td>
              <td className="p-3">{order.status}</td>
              <td className="p-3">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
