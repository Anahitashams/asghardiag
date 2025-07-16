"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Services({ services }) {
  return (
    <div className="w-[90%] m-auto py-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 5 },
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 5 },
        }}
        className="px-2"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="w-32 h-32 bg-amber-100 flex flex-col items-center justify-center rounded-lg shadow">
              <div className="w-16 h-16 relative mb-2">
                <Image
                  alt={service.description}
                  src={service.Image}
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-sm text-center">{service.description}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Services;
