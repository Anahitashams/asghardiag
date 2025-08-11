"use client";

export default function DashboardPage() {
  return (
    <div className="p-6 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-3xl font-bold text-orange-500">داشبورد مدیریت</h1>
      <p className="text-gray-700">خوش آمدید به پنل مدیریت فروشگاه.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-500 text-white rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-2">تعداد سفارش‌ها</h2>
          <p className="text-3xl font-bold">125</p>
        </div>
        <div className="bg-black text-white rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-2">محصولات فعال</h2>
          <p className="text-3xl font-bold">48</p>
        </div>
        <div className="bg-orange-500 text-white rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-semibold mb-2">مشتریان</h2>
          <p className="text-3xl font-bold">76</p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3 text-black">
          خلاصه سفارش‌های اخیر
        </h3>
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="p-2">کد سفارش</th>
              <th className="p-2">نام مشتری</th>
              <th className="p-2">وضعیت</th>
              <th className="p-2">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 hover:bg-orange-50">
              <td className="p-2">#1234</td>
              <td className="p-2">علی رضایی</td>
              <td className="p-2 text-green-600 font-semibold">ارسال شده</td>
              <td className="p-2">۱۴۰۲/۰۵/۲۰</td>
            </tr>
            <tr className="border-b border-gray-300 hover:bg-orange-50">
              <td className="p-2">#1233</td>
              <td className="p-2">مریم احمدی</td>
              <td className="p-2 text-yellow-600 font-semibold">
                در حال پردازش
              </td>
              <td className="p-2">۱۴۰۲/۰۵/۱۹</td>
            </tr>
            <tr className="border-b border-gray-300 hover:bg-orange-50">
              <td className="p-2">#1232</td>
              <td className="p-2">حمید محمدی</td>
              <td className="p-2 text-red-600 font-semibold">لغو شده</td>
              <td className="p-2">۱۴۰۲/۰۵/۱۸</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
