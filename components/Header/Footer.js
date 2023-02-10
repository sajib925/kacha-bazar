import React from "react";
import Link from "next/link";
import MobileMenuBar from "../SvgIcons/MobileMenuBar";
import HomeIcon from "../SvgIcons/HomeIocn";
import CartIcon from "../SvgIcons/CartIcon";
import ProfileIcon from "../SvgIcons/ProfileIocn";

const Footer = () => {
  return (
    <footer className="lg:hidden fixed z-30 bottom-0 bg-emerald-500 flex items-center justify-between w-full h-16 px-3 sm:px-10">
      <button className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none">
        <span className="text-xl text-white">
          <MobileMenuBar />
        </span>
      </button>
      <Link href="/" className="text-xl text-white">
        <HomeIcon />
      </Link>
      <button className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-white text-lg">
        <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">0</span>
        <CartIcon />
      </button>
      <button className="text-xl text-white indicator justify-center">
        <span>
          <ProfileIcon />
        </span>
      </button>
    </footer>
  );
};

export default Footer;
