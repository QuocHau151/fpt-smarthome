import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className=" flex items-center">
      <Link
        className=" flex items-center py-4 px-1 text-xs text-slate-900 font-medium"
        href="#"
      >
        <Image
          className="mr-2"
          src="/assets/images/header/alarm-150x150.png"
          alt=""
          width={40}
          height={40}
        />
        SMART HOME
      </Link>
      <Link
        className=" flex items-center py-4 px-1 text-xs text-slate-600 font-medium hover:text-slate-900"
        href="#"
      >
        <Image
          className="mr-2"
          src="/assets/images/header/wifi-150x150.png"
          alt=""
          width={40}
          height={40}
        />
        INTERNET HOME
      </Link>
      <Link
        className=" flex items-center py-4 px-1 text-xs text-slate-600 font-medium hover:text-slate-900"
        href="#"
      >
        <Image
          className="mr-2"
          src="/assets/images/header/dome-shape-150x150.png"
          alt=""
          width={40}
          height={40}
        />
        CAMERA FPT
      </Link>
      <Link
        className=" flex items-center py-4 px-1 text-xs text-slate-600 font-medium hover:text-slate-900"
        href="#"
      >
        <Image
          className="mr-2"
          src="/assets/images/header/cinema-150x150.png"
          alt=""
          width={40}
          height={40}
        />
        FPT PLAY
      </Link>
      <Link
        className=" flex items-center py-4 px-1 text-xs text-slate-600 font-medium hover:text-slate-900"
        href="#"
      >
        <Image
          className="mr-2"
          src="/assets/images/header/wifi-1-150x150.png"
          alt=""
          width={40}
          height={40}
        />
        MODEM ACCESS POINT
      </Link>
    </div>
  );
}
