import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo/logo.png";
import { Icon } from "@iconify/react";

const Menu = () => {
  return (
    <header>
      <nav className="flex items-center justify-between w-full py-4">
        <Image
          src={Logo}
          width={100}
          height={83}
          alt="logo"
          className="lg:w-[120px] lg:h-[65px] 2xla:w-[130px] 2xla:h-[80px] object-contain"
        />
        <a href="mailto:welcome@annamariaricci.eu">
          <Icon
            icon="mingcute:mail-fill"
            className="h-[30px] w-[30px] 2xla:w-[35px] 2xla:h-[35px] text-purple"
          />
        </a>
      </nav>
      <div className="w-full h-[0.05rem] bg-main"></div>
    </header>
  );
};

export default Menu;
