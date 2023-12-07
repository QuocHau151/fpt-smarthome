import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <div className="">
        <Image
          src="/assets/images/header/FPT_Telecom_logo.png"
          alt="Logo"
          height={51}
          width={155}
        />
      </div>
    </Link>
  );
}
