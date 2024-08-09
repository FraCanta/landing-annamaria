import { Icon } from "@iconify/react";
import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-[0.05rem] bg-main mt-10"></div>
      <div className="flex flex-wrap items-center justify-between w-full gap-6 pt-8">
        <address className=" text-main">
          © 2024 Anna Maria Ricci. All Rights Reserved.
        </address>
        <div className="flex gap-8 text-main">
          <Icon icon="uil:linkedin" className="w-8 h-8 " />
          <Icon icon="dashicons:facebook" className="w-8 h-8 " />
          <Icon icon="streamline:instagram-solid" className="w-8 h-8 " />
        </div>
      </div>
    </>
  );
}

export default Footer;
