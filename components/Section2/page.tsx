import Image from "next/image";
import React from "react";

export default function Section2() {
  return (
    <div className=" relative w-full h-[2400px] pt-10 bg-no-repeat bg-cover bg-center  bg-top bg-[url('/assets/images/bg/athena-promotion-background-x1-scaled.webp')]">
      <div className="container">
        <div className="absolute top-[2%] inset-0 text-slate-200 text-center ">
          <h1 className="text-5xl mb-6 font-semibold tracking-wide">
            FPT SMART HOME
          </h1>
          <h2 className="text-xl ">Đẳng cấp tạo khác biệt</h2>
        </div>
        <div className="">
          <div className="absolute top-[35%] inset-x-0  text-slate-200 text-center">
            <h1 className="text-3xl font-semibold mb-6 tracking-wide">
              BỘ SƯU TẬP CÔNG TẮC ATHENA
            </h1>
            <h2>
              Thiết kế tinh tế | Mặt kính cường lực chống trầy, chống bám vân
              tay | Cảm ứng nút lõm
            </h2>
          </div>
          <div className="absolute top-[40%] inset-x-0  ">
            <div className=" flex items-center justify-center">
              <Image
                className=""
                src="/assets/images/content/athena-switch.webp"
                alt="athena-collection"
                width={500}
                height={500}
              />
              <div className="text-slate-200  ">
                <h1 className="text-5xl font-medium mb-4">ATHENA COLLECTION</h1>
                <ul className="list-disc pl-4">
                  <li className="text-xl mb-4">
                    Mặt kính cường lực chống trầy, chống bám vân tay
                  </li>
                  <li className="text-xl">
                    Thiết kế lõm ở các nút mang lại cảm giác tinh tế và sang
                    trọng
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-[10%] max-w-[1024px]">
            <h1 className="text-slate-200 text-center text-3xl font-medium mt-14 mb-[120px]">
              ĐIỂM NỔI BẬT CỦA CÔNG TẮC CẢM ỨNG ATHENA
            </h1>
            <div className="flex items-start px-16 gap-2 ">
              <div className="w-1/3 flex justify-center items-center flex-col gap-8">
                <Image
                  src="/assets/images/content/diamond.png"
                  alt="athena-1"
                  width={69}
                  height={69}
                />
                <h2 className="text-slate-200 text-2xl text-center">
                  VẺ ĐẸP TINH TẾ SANG TRỌNG
                </h2>
                <p className="text-slate-200 text-center px-10">
                  Mặt kính cường lực chống trầy, chống bám vân tay. Viền kim
                  loại bo cạnh sắc nét
                </p>
              </div>
              <div className="w-1/3 flex justify-center items-center flex-col gap-8">
                <Image
                  src="/assets/images/content/rating.png"
                  alt="athena-1"
                  width={69}
                  height={69}
                />
                <h2 className="text-slate-200 text-2xl text-center">
                  LINH HOẠT & DỄ SỬ DỤNG CHO MỌI ĐỘ TUỔI
                </h2>
                <p className="text-slate-200 text-center px-10">
                  Cảm ứng nút lõm mượt mà. Tích hợp đèn LED tại nút bấm giúp
                  định vị dễ dàng trong bóng tối
                </p>
              </div>
              <div className="w-1/3 flex justify-center items-center flex-col gap-8">
                <Image
                  src="/assets/images/content/productivity.png"
                  alt="athena-1"
                  width={69}
                  height={69}
                />
                <h2 className="text-slate-200 text-2xl text-center">
                  CÔNG NGHỆ CẢI TIẾN KHÔNG NGỪNG
                </h2>
                <p className="text-slate-200 text-center px-10">
                  Ứng dụng chip Bluetooth mới nhất cho khả năng kết nối xa hơn,
                  tốt hơn. Công suất tải tối đa của một kênh tăng gấp đôi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
