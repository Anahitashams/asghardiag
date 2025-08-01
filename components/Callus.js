"use client";

import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Phone, Instagram, Mail, Send } from "lucide-react";

function Callus() {
  const [Form, setForm] = useState({
    name: "",
    lname: "",
    age: "",
    text: "",
  });

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3002/posts", Form)
      .then(() => toast.success("ارسال اطلاعات با موفقیت انجام شد"))
      .catch(() => toast.error("خطا در ارسال اطلاعات"));
  };

  return (
    <>
      <Toaster />
      <div
        id="callus"
        dir="rtl"
        className="w-full min-h-screen bg-[#000000] px-4 sm:px-8 md:px-16 lg:px-32 py-10 flex flex-col items-center"
      >
        <div className="text-center mb-8">
          <h1 className="text-xl text-white sm:text-2xl font-bold">
            تماس با ما
          </h1>
        </div>

        <div className="m-auto w-full flex flex-col lg:flex-row flex-wrap shadow-md shadow-[#FF6A00] bg-[#0000009c] rounded-4xl">
          <form
            onSubmit={SubmitHandler}
            className="w-full lg:w-1/2 p-6 sm:p-8 rounded-xl space-y-5"
          >
            <input
              type="text"
              name="name"
              value={Form.name}
              onChange={ChangeHandler}
              className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="نام خود را وارد کنید"
            />
            <input
              type="text"
              name="lname"
              value={Form.lname}
              onChange={ChangeHandler}
              className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="نام خانوادگی خود را وارد کنید"
            />
            <input
              type="email"
              name="age"
              value={Form.age}
              onChange={ChangeHandler}
              className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              placeholder="ایمیل خود را وارد کنید"
            />
            <textarea
              name="text"
              value={Form.text}
              onChange={ChangeHandler}
              rows={5}
              className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none resize-none"
              placeholder="متن پیام خود را وارد کنید"
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/2 sm:w-1/3 bg-[#FF6A00] text-white p-3 rounded-lg font-semibold hover:bg-orange-400 transition duration-300 hover:ring-[1px]"
              >
                ارسال پیام
              </button>
            </div>
          </form>

          <div className="w-full lg:w-1/2 text-white p-6 sm:p-8 space-y-4">
            <div className="flex items-center">
              <Phone className="w-6 h-20 text-orange-400" />
              <h1 className="text-lg px-2">شماره تماس: 09121234567</h1>
            </div>
            <div className="flex items-center">
              <Instagram className="w-6 h-20 text-pink-500" />
              <h1 className="text-lg px-2">آدرس اینستاگرام: oyek-web</h1>
            </div>
            <div className="flex items-center">
              <Send className="w-6 h-20 text-blue-400" />
              <h1 className="text-lg px-2">آدرس تلگرام: @oyek-Telegram</h1>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-20 text-yellow-400" />
              <h1 className="text-lg px-2">آدرس ایمیل: oyek@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Callus;
