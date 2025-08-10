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
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validateStep = () => {
    let valid = true;
    let newErrors = {};

    if (step === 1) {
      if (!form.fullName.trim()) {
        newErrors.fullName = true;
        toast.error("لطفاً نام و نام خانوادگی را وارد کنید");
        valid = false;
      }
      if (!form.phone.trim()) {
        newErrors.phone = true;
        toast.error("لطفاً شماره تماس را وارد کنید");
        valid = false;
      } else if (!/^09\d{9}$/.test(form.phone)) {
        newErrors.phone = true;
        toast.error("شماره تماس باید با 09 شروع شده و 11 رقم باشد");
        valid = false;
      }
    }

    if (step === 2) {
      if (!form.carModel.trim()) {
        newErrors.carModel = true;
        toast.error("لطفاً مدل خودرو را وارد کنید");
        valid = false;
      }
      if (!form.service) {
        newErrors.service = true;
        toast.error("لطفاً خدمات مورد نظر را انتخاب کنید");
        valid = false;
      }
    }

    if (step === 3) {
      if (!form.date) {
        newErrors.date = true;
        toast.error("لطفاً تاریخ مراجعه را انتخاب کنید");
        valid = false;
      }
      if (!form.time.trim()) {
        newErrors.time = true;
        toast.error("لطفاً ساعت مراجعه را وارد کنید");
        valid = false;
      } else if (!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(form.time)) {
        newErrors.time = true;
        toast.error("ساعت باید به فرمت 24 ساعته HH:mm باشد (مثلاً 14:30)");
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, 4));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const formatDate = (date) => {
    if (!date) return "";
    return typeof date === "string" ? date : date.format("YYYY/MM/DD");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step < 4) {
        if (validateStep()) setStep((s) => Math.min(s + 1, 4));
      } else {
        // مرحله آخر، ارسال فرم
        if (validateStep()) handleSubmit(e);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      const payload = {
        ...form,
        date: formatDate(form.date),
        time: form.time, // فقط HH:mm
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
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            onKeyDown={handleKeyDown}
          >
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
                    className={`w-full ${
                      errors.fullName ? "border-red-500" : ""
                    }`}
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
                    className={`w-full ${errors.phone ? "border-red-500" : ""}`}
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
                    className={`w-full ${
                      errors.carModel ? "border-red-500" : ""
                    }`}
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
                    className={`w-full border border-gray-300 rounded px-3 py-2 ${
                      errors.service ? "border-red-500" : ""
                    }`}
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
                    className={`my-orange-calendar ${
                      errors.date ? "border-red-500" : ""
                    }`}
                    calendar={persian}
                    locale={persian_fa}
                    value={form.date}
                    onChange={(date) => {
                      setForm((prev) => ({ ...prev, date }));
                      setErrors((prev) => ({ ...prev, date: false }));
                    }}
                    calendarPosition="bottom-right"
                    inputClass={`w-full border border-gray-300 rounded px-3 py-2 ${
                      errors.date ? "border-red-500" : ""
                    }`}
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold" htmlFor="time">
                    ساعت مراجعه (فرمت 24 ساعته: ساعت:دقیقه)
                  </label>
                  <Input
                    id="time"
                    name="time"
                    type="text"
                    placeholder="مثلاً 14:30"
                    value={form.time}
                    onChange={(e) => {
                      // فقط اجازه بده اعداد و : وارد بشه
                      const val = e.target.value;
                      if (/^$|^\d{0,2}(:\d{0,2})?$/.test(val)) {
                        setForm((prev) => ({ ...prev, time: val }));
                        setErrors((prev) => ({ ...prev, time: false }));
                      }
                    }}
                    className={`w-full ${errors.time ? "border-red-500" : ""}`}
                    required
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
                  type="button"
                  onClick={nextStep}
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
