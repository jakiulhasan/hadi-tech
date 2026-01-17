"use client"; // Required for Swiper as it uses browser APIs

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const sliderImages = ["/1.jpg", "/2.jpg", "/3.jpg"];

  return (
    <div className="flex gap-4 max-w-7xl mx-auto px-4 h-125 my-10">
      {/* Left Side: Swiper Slider */}
      <div className="w-3/4 h-full overflow-hidden rounded-lg">
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
                  priority={index === 0} // Load first image faster
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Side: Static Images */}
      <div className="w-1/4 flex flex-col gap-4 h-full">
        <div className="relative w-full h-1/2 overflow-hidden rounded-lg bg-gray-200">
          <Image src="/4.jpg" alt="Promo 1" fill className="object-cover" />
        </div>
        <div className="relative w-full h-1/2 overflow-hidden rounded-lg bg-gray-200">
          <Image src="/5.jpg" alt="Promo 2" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
