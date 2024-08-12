import Link from "next/link";
import React from "react";

function CtaPurple({ link, children, title }) {
  return (
    <a
      href={link}
      title={title}
      download
      className="uppercase font-regular py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 text-lg md:text-2xl xl:text-[1rem] 2xl:text-lg  fxl:text-2xl 3xl:text-3xl rounded-[32px] shadow text-white hover:transition-all bg-purple flex items-center gap-2 max-w-max"
    >
      {children}
    </a>
  );
}

export default CtaPurple;
