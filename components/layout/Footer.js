import { Icon } from "@iconify/react";
import Link from "next/link";
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
          <Link
            href="https://www.linkedin.com/in/annamariaricci/"
            target="_blank"
          >
            <Icon icon="uil:linkedin" className="w-8 h-8 " />
          </Link>
          <Link
            href="https://www.facebook.com/annamariariccigiontella"
            target="_blank"
          >
            <Icon icon="dashicons:facebook" className="w-8 h-8 " />
          </Link>
          <Link
            href="https://www.instagram.com/annamariaricci_careerguidance/"
            target="_blank"
          >
            <Icon icon="streamline:instagram-solid" className="w-8 h-8 " />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
