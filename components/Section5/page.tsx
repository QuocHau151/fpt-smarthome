"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
export default function Section5() {
  return (
    <div className="container ">
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="text-center mb-10 ">
          <h2 className="text-blue-700 text-2xl font-semibold mb-6">
            Bộ sưu tập công tắc Athena
          </h2>
          <h5 className="text-sm italic font-medium text-slate-600">
            Đẳng cáp tạo khác biệt! Với thiết kế mặt kính cường lực sang trọng,
            chống bám vân tay, cảm ứng nút lõm tạo cảm giác chạm tinh tế đẳng
            cấp.
          </h5>
        </div>
        <Image
          className="mb-10"
          src="/assets/images/content/de1550b6b4d673882ac7.jpg"
          alt=""
          width={500}
          height={500}
        />
        <div className="flex items-center justify-around gap-[200px] mb-10">
          <div className="flex  flex-col w-1/2">
            <h3 className="text-center italic text-[23px] mb-4">
              Công tắc chữ nhật Trắng
            </h3>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="max-w-[270px]"
            >
              <SwiperSlide>
                <Image
                  src="/assets/images/slider/1/1-nut-trang.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/1/2-nut-trang.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/1/3-nut-trang.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/1/4-nut-trang.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/1/55.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/1/O-Cam-Am-Tuong-Chu-Nhat-Trang.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex  flex-col w-1/2">
            <h3 className="text-center italic text-2xl mb-4">
              Công tắc chữ nhật Đen
            </h3>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="max-w-[270px]"
            >
              <SwiperSlide>
                <Image
                  src="/assets/images/slider/2/1-nut-den.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/2/2-nut-den.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/2/3-nut-den.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/2/4-nut-den.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/2/84.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/2/O-Cam-Am-Tuong-Chu-Nhat-Den.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex items-center justify-around gap-[200px]">
          <div className="flex  flex-col w-1/2">
            <h3 className="text-center italic text-2xl mb-4">
              Công tắc vuông Trắng
            </h3>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="max-w-[270px]"
            >
              <SwiperSlide>
                <Image
                  src="/assets/images/slider/3/1-nut-trang-1.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/3/2-nut-trang-1.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/3/3-nut-trang-1.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/3/4-nut-trang-1.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/3/O-Cam-Am-Tuong-Vuong-Trang.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex  flex-col w-1/2">
            <h3 className="text-center italic text-2xl mb-4">
              Công tắc vuông Đen
            </h3>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="max-w-[270px]"
            >
              <SwiperSlide>
                <Image
                  src="/assets/images/slider/4/1-nut-den-1.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/4/2-nut-den-1.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/4/3-nut-den-1.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/4/4-nut-den-1.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/4/O-Cam-Am-Tuong-Vuong-den.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="text-center  ">
          <h2 className="text-blue-700 text-2xl font-semibold mb-6">
            Bộ sưu tập công tắc Hera
          </h2>
          <h5 className="text-sm italic font-medium text-slate-600">
            Nâng tầm phong cách! Với thiết kế ấn tượng, hiện đại cùng nhiều màu
            sắc nhẹ nhàng trẻ trung sang trọng, tạo cảm giác thoải mái khi bước
            vào nhà.
          </h5>
        </div>
        <Image
          className="mb-10"
          src="/assets/images/content/bsthera.webp"
          alt=""
          width={500}
          height={500}
        />
        <div className="flex items-center justify-around gap-[200px] mb-10">
          <div className="flex  flex-col w-1/2">
            <h3 className="text-center italic text-2xl mb-4">
              Công tắc chữ nhật Hồng và Vàng
            </h3>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="max-w-[250px]"
            >
              <SwiperSlide>
                <Image
                  src="/assets/images/slider/5/Asset-50.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/5/Asset-51.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/5/Asset-52.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/5/Asset-53.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/5/Asset-54.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/5/Asset-55.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex  flex-col w-1/2">
            <h3 className="text-center italic text-2xl mb-4">
              Công tắc chữ nhật Xanh, Đen, Trắng
            </h3>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="max-w-[250px]"
            >
              <SwiperSlide>
                <Image
                  src="/assets/images/slider/6/Asset-56.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/6/Asset-57.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/6/Asset-58.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/6/Asset-59.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/6/Asset-60.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/6/Asset-61.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/6/Asset-61-1.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/6/Asset-61-2.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/6/Asset-61-3.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex items-center justify-around gap-[200px]">
          <div className="flex  flex-col w-1/2">
            <h3 className="text-center italic text-2xl mb-4">
              Công tắc vuông Hồng và Vàng
            </h3>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="max-w-[250px]"
            >
              <SwiperSlide>
                <Image
                  src="/assets/images/slider/7/Asset-38.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/7/Asset-39.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/7/Asset-40.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/7/Asset-44.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/7/Asset-45.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/7/Asset-46.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex  flex-col w-1/2">
            <h3 className="text-center italic text-2xl mb-4">
              Công tắc vuông Xanh, Đen, Trắng
            </h3>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="max-w-[250px]"
            >
              <SwiperSlide>
                <Image
                  src="/assets/images/slider/8/Asset-41.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/8/Asset-42.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/8/Asset-43.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/8/Asset-47.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/8/Asset-48.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/8/Asset-49.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/8/Asset-49-1.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/8/Asset-49-2.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <Image
                  src="/assets/images/slider/8/Asset-49-3.png"
                  alt=""
                  width={270}
                  height={270}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
