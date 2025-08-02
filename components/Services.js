"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Services({ services }) {
  return (
    <div
      id="Services"
      className="w-full flex flex-col justify-start items-center"
    >
      <h1 className="m-auto text-2xl sm:text-3xl md:text-[40px] font-black mt-10">
        خدمات
      </h1>
      <div className="w-[95%] sm:w-[90%] m-auto py-6 sm:py-8 relative px-4 sm:px-8">
        <Swiper
          dir="rtl"
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 5000 }}
          spaceBetween={20} // کمی کمتر فاصله برای موبایل
          breakpoints={{
            320: { slidesPerView: 1.5 }, // موبایل کمی نیمه اسلاید دوم هم دیده شود
            480: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="relative"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="mb-6 sm:mb-10 flex items-center justify-center hover:scale-110 duration-200 rounded-lg shadow-orange-500 shadow-md w-36 h-36 sm:w-52 sm:h-52 relative">
                  <Image
                    alt={service.description}
                    src={service.img}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h1 className="text-sm sm:text-lg font-bold text-center text-gray-800 px-2">
                  {service.description}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Services;
