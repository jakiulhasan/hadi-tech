"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const sliderImages = ["/1.jpg", "/2.jpg", "/3.jpg"];

  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto px-4 my-6 md:my-8 h-auto md:h-125">
      <div className="w-full md:w-3/4 h-75 md:h-full overflow-hidden rounded-lg">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full w-full"
        >
          {sliderImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-4 h-37.5 md:h-full">
        <div className="relative w-1/2 md:w-full h-full md:h-1/2 overflow-hidden rounded-lg bg-gray-200">
          <Image src="/4.jpg" alt="Promo 1" fill className="object-cover" />
        </div>
        <div className="relative w-1/2 md:w-full h-full md:h-1/2 overflow-hidden rounded-lg bg-gray-200">
          <Image src="/5.jpg" alt="Promo 2" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
