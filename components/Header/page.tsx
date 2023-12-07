import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";

export default function Header() {
  return (
    <>
      <div className=" container top-0 w-full border-b shadow-sm bg-white z-100 ">
        <div className="  flex items-center  justify-between  ">
          <Logo />
          <Navbar />
        </div>
      </div>
    </>
  );
}
