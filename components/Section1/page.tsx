import Image from "next/image";
import React from "react";

export default function Section1() {
  return (
    <div className=" container flex-col items-center justify-center mt-16  ">
      <h1 className="text-center mb-8 text-2xl font-semibold text-slate-500">
        FPT Smart Home
      </h1>
      <Image
        className="mx-auto"
        src="/assets/images/content/solutions-overview-desktop.webp"
        alt=""
        width={1000}
        height={1000}
      />
      <div className="">
        <div className="mb-6">
          <h1 className="text-center text-slate-600 font-normal text-2xl mb-2">
            Đẳng cấp tạo khác biệt – Nâng tầm phong cách sống
          </h1>
          <h2 className="text-center text-slate-600 text-sm">
            Điều khiển tất cả các thiết bị điện bằng giọng nói Tiếng Việt tiện
            lợi nhanh chóng.
          </h2>
        </div>
        <div className=" flex items-center justify-center w-full gap-6 mb-20">
          <div className="flex flex-col items-center  w-1/4 h-[380px] border-[1px] border-black rounded-3xl bg-white drop-shadow-2xl ">
            <Image
              className="mb-2  mt-2"
              src="/assets/images/content/solution-image-1.webp"
              alt=""
              width={54}
              height={54}
            />
            <h2 className="text-lg font-semibold text-slate-600  border-b-[1px] pb-2 ">
              Giải Pháp Chiếu Sáng
            </h2>
            <p className="mt-4 text-center text-slate-500 text-sm px-6  leading-6">
              Điều chỉnh cường độ ánh sáng và độ ấm ánh sáng tự động Tự động bật
              khi mở cửa hoặc có người | Hẹn giờ bật tắt Bật tắt theo nhóm |
              Điều khiển theo từng ngữ cảnh
            </p>
          </div>
          <div className="flex flex-col items-center  w-1/4 h-[380px] border-[1px] border-black rounded-3xl bg-white drop-shadow-2xl ">
            <Image
              className="mb-2 mt-2"
              src="/assets/images/content/solution-image-2.webp"
              alt=""
              width={54}
              height={54}
            />
            <h2 className="text-lg font-semibold text-slate-600  border-b-[1px] pb-2 ">
              Giải Pháp Điều Khiển
            </h2>
            <p className="mt-4 text-center text-slate-500 text-sm px-6  leading-6">
              Điều khiển thiết bị gia dụng điều hòa… Bằng giọng nói Tiếng Việt
              Đóng mở rèm thông minh lập lịch tự động theo thời gian thực
            </p>
          </div>
          <div className="flex flex-col items-center  w-1/4 h-[380px] border-[1px] border-black rounded-3xl bg-white drop-shadow-2xl ">
            <Image
              className="mb-2  mt-2"
              src="/assets/images/content/solution-image-3.webp"
              alt=""
              width={54}
              height={54}
            />
            <h2 className="text-lg font-semibold text-slate-600  border-b-[1px] pb-2 ">
              Giải Pháp Truyền Hình
            </h2>
            <p className="mt-4 text-center text-slate-500 text-sm px-6  leading-6">
              Mở kênh, phim bằng giọng nói | Kho nội dung giải trí Kho phim điện
              ảnh đặc sắc Các sự kiện thể thao độc quyền
            </p>
          </div>
          <div className="flex flex-col items-center  w-1/4 h-[380px] border-[1px] border-black rounded-3xl bg-white drop-shadow-2xl ">
            <Image
              className="mb-2 mt-2"
              src="/assets/images/content/solution-image-4.webp"
              alt=""
              width={54}
              height={54}
            />
            <h2 className="text-lg font-semibold text-slate-600  border-b-[1px] pb-2 ">
              Giải Pháp An Ninh
            </h2>
            <p className="mt-4 text-center text-slate-500 text-sm px-6  leading-6">
              Điều chỉnh cường độ ánh sáng và độ ấm ánh sáng tự động Tự động bật
              khi mở cửa hoặc có người | Hẹn giờ bật tắt Bật tắt theo nhóm |
              Điều khiển theo từng ngữ cảnh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
