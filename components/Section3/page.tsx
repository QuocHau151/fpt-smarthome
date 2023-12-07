import Image from "next/image";
import React from "react";

export default function Section3() {
  return (
    <div className=" relative h-[2560px] bg-no-repeat bg-cover bg-top bg-[url('/assets/images/bg/hera-pc-2-1-scaled.webp')] pt-[900px]">
      <div className="container pb-20">
        <div className=" absolute top-[40%] inset-x-0 text-center text-black mb-[-100px]">
          <h1 className=" text-5xl font-semibold mb-10">
            Bộ sưu tập công tắc Hera
          </h1>
          <h2 className="text-2xl text-slate-700">
            Đa sắc màu | Diện mạo tinh tế | Kết nối mượt mà
          </h2>
        </div>
        <div className="absolute top-[45%] inset-x-0 flex items-center justify-center">
          <Image
            src="/assets/images/content/image.webp"
            alt="hera"
            width={650}
            height={300}
          />
          <div className="text-black">
            <h1 className="text-5xl font-semibold mb-6">Hera Collection</h1>
            <ul className=" flex flex-col gap-6 text-xl">
              <li> {">"} Đa sắc màu tự do thể hiện dấu ấn riêng</li>
              <li>{">"} Mặt kình cường lực sang trọng chống bám vân tay</li>
              <li>{">"} Cảm ứng vuông siêu nhạy mượt mà</li>
            </ul>
          </div>
        </div>
        <div className="px-20 absolute bottom-[5%]  max-w-[1024px]">
          <h3 className="text-center text-5xl font-semibold mb-16 ">
            Điểm nổi bật của công tắc Hera
          </h3>
          <div className="flex justify-center gap-14 ">
            <div className="w-1/3">
              <div className="flex flex-col items-center justify-start gap-4">
                <Image
                  src="/assets/images/content/color-palette.png"
                  alt=""
                  width={81}
                  height={81}
                />
                <h4 className="text-center text-slate-800 text-2xl">
                  MÀU SẮC ĐA DẠNG
                </h4>
                <p className="text-center text-slate-800 ">
                  Năm màu sắc thời trang, phù hợp nhiều phong cách kiến trúc
                  khác nhau.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="flex flex-col items-center justify-start gap-4">
                <Image
                  src="/assets/images/content/value.png"
                  alt=""
                  width={81}
                  height={81}
                />
                <h4 className="text-center text-slate-800 text-2xl">
                  DIỆN MẠO TINH TẾ
                </h4>
                <p className="text-center text-slate-800 ">
                  Mặt kình cường lực sang trọng, hạn chế bám vân tay.
                </p>
              </div>
            </div>
            <div className="w-1/3 ">
              <div className="flex flex-col items-center justify-start gap-4 ">
                <Image
                  src="/assets/images/content/global-network.png"
                  alt=""
                  width={81}
                  height={81}
                />
                <h4 className="text-center text-slate-800 text-2xl">
                  KẾT NỐI MƯỢT MÀ
                </h4>
                <p className="text-center text-slate-800 ">
                  Sử dụng kết nối Zigbee ổn định, bảo mật cao.
                </p>
                <p className="text-center text-slate-800 ">
                  Sử dụng kết nối Zigbee ổn định, bảo mật cao.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
