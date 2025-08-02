"use client";

import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    carModel: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const formatDate = (date) => {
    if (!date) return "";
    return typeof date === "string" ? date : date.format("YYYY/MM/DD");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        date: formatDate(form.date),
      };

      await axios.post("http://localhost:3001/reservations", payload);

      toast.success("رزرو با موفقیت ثبت شد!");
      setSubmitted(true);
    } catch (error) {
      toast.error("خطا در ثبت رزرو. لطفاً دوباره تلاش کنید.");
      console.error("Reservation Error:", error);
    }
  };

  return (
    <div id="reserve" className=" max-w-5xl mx-auto p-6">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-3xl font-bold text-orange-500 mb-10 sm:mb-20 text-center">
        رزرو آنلاین خدمات خودرو
      </h1>

      <Card className="w-full sm:w-[60%] h-auto mx-auto">
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <label
                    className="block mb-1 font-semibold"
                    htmlFor="fullName"
                  >
                    نام و نام خانوادگی
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="مثلاً: علی رضایی"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold" htmlFor="phone">
                    شماره تماس
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="مثلاً: 09123456789"
                    required
                    className="w-full"
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label
                    className="block mb-1 font-semibold"
                    htmlFor="carModel"
                  >
                    مدل خودرو
                  </label>
                  <Input
                    id="carModel"
                    name="carModel"
                    value={form.carModel}
                    onChange={handleChange}
                    placeholder="مثلاً: پژو ۲۰۶"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold" htmlFor="service">
                    خدمات مورد نظر
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="" disabled>
                      انتخاب کنید
                    </option>
                    <option value="دیاگ">دیاگ</option>
                    <option value="تعمیر موتور">تعمیر موتور</option>
                    <option value="تعویض روغن">تعویض روغن</option>
                    <option value="تنظیم موتور">تنظیم موتور</option>
                    <option value="سایر خدمات">سایر خدمات</option>
                  </select>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div>
                  <label className="block mb-1 font-semibold" htmlFor="date">
                    تاریخ مراجعه
                  </label>
                  <DatePicker
                    className="my-orange-calendar"
                    calendar={persian}
                    locale={persian_fa}
                    value={form.date}
                    onChange={(date) => setForm((prev) => ({ ...prev, date }))}
                    calendarPosition="bottom-right"
                    inputClass="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold" htmlFor="time">
                    ساعت مراجعه
                  </label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={form.time}
                    onChange={handleChange}
                    required
                    step="60"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold" htmlFor="notes">
                    توضیحات بیشتر (اختیاری)
                  </label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="هر توضیحی که لازم می‌دانید..."
                    className="w-full"
                  />
                </div>
              </>
            )}

            {step === 4 && (
              <div className="text-right">
                <h2 className="text-xl font-bold mb-4">بازبینی اطلاعات</h2>
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>
                    <strong>نام و نام خانوادگی:</strong> {form.fullName}
                  </li>
                  <li>
                    <strong>شماره تماس:</strong> {form.phone}
                  </li>
                  <li>
                    <strong>مدل خودرو:</strong> {form.carModel}
                  </li>
                  <li>
                    <strong>خدمات:</strong> {form.service}
                  </li>
                  <li>
                    <strong>تاریخ مراجعه:</strong> {formatDate(form.date)}
                  </li>
                  <li>
                    <strong>ساعت مراجعه:</strong>{" "}
                    {form.time
                      ? form.time
                          .split(":")
                          .map((t) => t.padStart(2, "0"))
                          .join(":")
                      : ""}
                  </li>
                  <li>
                    <strong>توضیحات:</strong> {form.notes || "ندارد"}
                  </li>
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between mt-6 items-center gap-3">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  type="button"
                  className="w-full sm:w-auto"
                >
                  قبلی
                </Button>
              )}
              {step < 4 && (
                <Button
                  onClick={nextStep}
                  type="button"
                  className="w-full sm:w-auto"
                >
                  بعدی
                </Button>
              )}
              {step === 4 && !submitted && (
                <Button type="submit" className="w-full sm:w-auto">
                  ثبت رزرو
                </Button>
              )}
              {step === 4 && submitted && (
                <div className="text-orange-500 text-3xl font-bold flex items-center gap-2 mt-4 sm:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  ثبت شد
                </div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
