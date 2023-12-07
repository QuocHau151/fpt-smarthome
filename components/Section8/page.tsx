"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  "
      >
        <SwiperSlide>
          <div className=" relative">
            <h1 className="z-1 absolute top-10 inset-x-0 text-orange-500 font-semibold text-2xl ">
              Những đặc điểm nổi bật của nhà thông minh FPT
            </h1>
            <Image
              className="z-0 w-full h-full"
              src="/assets/images/slider/more/1680944741-1024x577.webp"
              alt=""
              width={2000}
              height={1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative">
            <h1 className="z-1 absolute top-10 inset-x-0 text-orange-500 font-semibold text-2xl ">
              Những đặc điểm nổi bật của nhà thông minh FPT
            </h1>
            <Image
              className="z-0 w-full h-full"
              src="/assets/images/slider/more/fpt-play-box-s-t590-1-org.jpg"
              alt=""
              width={2000}
              height={1}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
