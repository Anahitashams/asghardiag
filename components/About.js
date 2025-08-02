import React from "react";
import Mainweel from "@/src/animation/animation3/Mainweel";

function About() {
  return (
    <div id="about" className="  w-full max-h-screen sm:h-auto flex flex-col">
      <h1 className="m-auto text-3xl sm:text-4xl md:text-[40px] font-black mt-6 sm:mt-10">
        درباره ما
      </h1>
      <div className="w-[95%] sm:w-[90%] m-auto flex flex-col md:flex-row justify-center items-start mt-4 md:mt-20">
        <div className="w-full md:w-[60%] text-base sm:text-lg md:text-[20px]">
          <h1 className="font-bold mb-3">
            تخصص، تعهد و اعتماد؛ سه ستون اصلی خدمات ما
          </h1>
          <h2 className="mb-4 leading-relaxed">
            در مجموعه{" "}
            <span className="text-orange-500 font-bold">اصغردیاگ</span>، ما فقط
            به تعمیر و نگهداری خودرو نمی‌پردازیم؛ بلکه با هر خودرو، مسئولیتی را
            می‌پذیریم که برای ما ارزشمندتر از هر چیز دیگری‌ست: اعتماد شما. با
            بیش از <span className="font-bold">30 سال</span> تجربه تخصصی در
            ارائه خدمات مکانیکی، الکتریکی و فنی خودروهای داخلی و خارجی، تیم ما
            از مهندسان و تکنسین‌های آموزش‌دیده، همواره در تلاش‌اند تا کیفیتی
            فراتر از انتظار را برای شما به ارمغان بیاورند.
          </h2>

          <h3 className="mb-4 leading-relaxed">
            ما به کیفیت خدمات، شفافیت در ارتباط با مشتری و پاسخ‌گویی متعهد
            هستیم. در هر مرحله از خدمات، از تشخیص دقیق مشکل گرفته تا تعمیر و
            تحویل نهایی خودرو، شما را در جریان تمامی جزئیات قرار می‌دهیم. باور
            داریم که ایجاد حس آرامش و اطمینان، بخشی از مسئولیت حرفه‌ای ماست. این
            صداقت و شفافیت، پایه‌ی ارتباط بلندمدت ما با مشتریان‌مان بوده است.
          </h3>
          <h4 className="leading-relaxed">
            <span className="font-bold">رضایت شما بزرگ‌ترین سرمایه ماست</span>{" "}
            ما نه‌تنها به رفع ایرادهای فنی خودرو می‌پردازیم، بلکه با ارائه
            راهکارهای نگهداری هوشمندانه و مشاوره تخصصی، به ارتقاء عملکرد خودرو و
            کاهش هزینه‌های آتی شما کمک می‌کنیم. هدف نهایی ما این است که هر بار
            که به خدمات ما نیاز داشتید، با اطمینان و آرامش خاطر بازگردید.
          </h4>
        </div>
        <div className="w-full md:w-[40%] mt-8 md:mt-0 flex justify-center items-center hidden sm:flex">
          <Mainweel />
        </div>
      </div>
    </div>
  );
}

export default About;
