import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className=" bg-slate-700 pt-4  ">
      <div className="container">
        <div className="w-full flex gap-10">
          <div className=" flex-col items-center items-center justify-center  w-1/3 ">
            <div className="uppercase text-lg text-orange-700 font-semibold border-b-2  order-white pb-2 mb-6">
              Thông tin liên hệ
            </div>
            <div className="flex-col text-sm text-orange-600 mb-10">
              <div className="flex items-center">
                <i className=" fa fa-phone text-slate-500 mr-1"> </i>
                <a href="">08.1900.7747</a>
              </div>
              <div>
                <i className="fa fa-globe text-slate-500 mr-1"></i>
                <a href="">https://smarthomefpt.vn</a>
              </div>
              <div>
                <i className="fa fa-envelope text-slate-500 mr-1"></i>
                <a href="">hotrokhachhang@fpt.com.vn</a>
              </div>
              <div>
                <i className="fa fa-home text-slate-500 mr-1"></i>
                <a href="">
                  Số 10 Phạm Văn Bạch, P.Dịch Vọng, Q.Cầu Giấy, TP.Hà Nội
                </a>
              </div>
              <div>
                <i className="fa fa-home text-slate-500 mr-1"> </i>
                <a href="">
                  Lô 37-39A Đường 19, KCX Tân Thuận, Quận 7 TP.Hồ Chí Mình
                </a>
              </div>
            </div>

            <Image
              src="/assets/images/footer/FPT_Telecom_logo-2048x675.png"
              alt=""
              width={200}
              height={100}
            />
          </div>
          <div className=" flex-col items-center items-center justify-center  w-1/3 ">
            <div className="uppercase text-lg text-orange-700 font-semibold border-b-2  order-white pb-2 mb-6">
              Dich Vụ khách hàng
            </div>
            <div className="flex-col text-sm text-orange-600 mb-10">
              <div className="flex items-center">
                <i className=" fa fa-info-circle text-slate-500 mr-1"> </i>
                <a href="">Chính sách sử dụng</a>
              </div>
              <div>
                <i className="fa fa-credit-card text-slate-500 mr-1"></i>
                <a href="">Chính sách thanh toán</a>
              </div>
              <div>
                <i className="fa fa-lock text-slate-500 mr-1"></i>
                <a href="">Chính sách bảo mật thông tin</a>
              </div>
              <div>
                <i className="fa fa-video-camera text-slate-500 mr-1"></i>
                <a href="">Hướng dẫn cài đặt FPT Camera</a>
              </div>
              <div>
                <a className="text-[10px]" href="">
                  Giấy chứng nhận ĐKKD số 0101778163 do Sở Kế hoạch Đầu tư Thành
                  phố Hà Nội cấp ngày 28/07/2005
                </a>
              </div>
            </div>

            <Image
              src="/assets/images/footer/fpt-telecom-da-thong-bao-bo-cong-thuong.png"
              alt=""
              width={200}
              height={100}
            />
          </div>
          <div className=" flex-col items-center items-center justify-center  w-1/3 ">
            <div className="uppercase text-lg text-orange-700 font-semibold border-b-2  order-white pb-2 mb-6">
              CƠ HỘI NGHỀ NGHIỆP
            </div>
            <Image
              className="mb-6"
              src="/assets/images/footer/fpt-tuyen-dung.png"
              alt=""
              width={400}
              height={43}
            />
            <div className="flex-col text-center text-xs text-slate-400 mb-10">
              <p>TÌM KIẾM NHÂN TÀI </p>
              <p>TUYỂN CỘNG TÁC VIÊN VÀ ĐỐI TÁC</p>
            </div>
          </div>
        </div>
        <div className="uppercase text-center  text-orange-600 my-4">
          LINK SẢN PHẨM - DỊCH VỤ
        </div>
        <div className="flex items-center justify-between">
          <Image
            className="mb-6"
            src="/assets/images/footer/logo-camera.png"
            alt=""
            width={150}
            height={43}
          ></Image>
          <Image
            className="mb-6"
            src="/assets/images/footer/oncall-2048x671.png"
            alt=""
            width={150}
            height={43}
          ></Image>
          <Image
            className="mb-6"
            src="/assets/images/footer/logo_foxpay.png"
            alt=""
            width={150}
            height={43}
          ></Image>
          <Image
            className="mb-6"
            src="/assets/images/footer/logo-smart-home.png"
            alt=""
            width={150}
            height={43}
          ></Image>
          <Image
            className="mb-6"
            src="/assets/images/footer/logo-fpt-play.png"
            alt=""
            width={150}
            height={43}
          ></Image>
          <Image
            className="mb-6"
            src="/assets/images/footer/logo-fshare.png"
            alt=""
            width={150}
            height={43}
          ></Image>
        </div>
      </div>
      <div className="bg-neutral-600 text-gray-400 text-xs">
        <div className="container  flex items-center  w-full  h-10">
          <p className="">Copyright 2023 @</p>
          <Link href="/">FPT Telecom</Link>
        </div>
      </div>
    </div>
  );
}
