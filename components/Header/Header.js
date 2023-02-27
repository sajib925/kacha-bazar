import Link from "next/link";
import React, { useState } from "react";
import logo from "../../images/logo/logo-light.svg";
import Image from "next/image";
import BellIcon from "../SvgIcons/bellIcon";
import CartIcon from "../SvgIcons/CartIcon";
import ProfileIcon from "../SvgIcons/ProfileIocn";
import Navbar from "./../Navbar/Navbar";
import Footer from "./Footer";
import CartPopup from './../CartPopup/CartPopup';

const Header = () => {
  const [isCartPopup, setIsCartPopup] = useState(false)
  const handleCartPopup = () => {
    setIsCartPopup(isCartPopup => !isCartPopup)
  }
  return (
    <header className="bg-emerald-500 sticky top-0 z-20">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
        <div className="top-bar h-16 lg:h-auto flex items-center justify-between py-4 mx-auto">
          {/* header left part */}

          <Link
            href="/"
            className="mr-3 lg:mr-12 xl:mr-12 hidden md:hidden lg:block"
          >
            <Image src={logo} alt="logo" />
          </Link>
          {/* header middle part */}

          <div className="w-full transition-all duration-200 ease-in-out lg:flex lg:max-w-[520px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 lg:mx-4 xl:mx-0">
            <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
              <div className="flex flex-col mx-auto w-full">
                <form className="relative pr-12 md:pr-14 bg-white overflow-hidden shadow-sm rounded-md w-full">
                  <label className="flex items-center py-0.5">
                    <input
                      type="text"
                      className="form-input w-full pl-5 appearance-none transition ease-in-out border text-input text-sm font-sans rounded-md min-h-10 h-10 duration-200 bg-white focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                      placeholder="Search for products (e.g. fish, apple, oil)"
                    />
                  </label>
                  <button className="outline-none text-xl text-gray-400 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"></button>
                </form>
              </div>
            </div>
          </div>

          {/* header right part */}

          <div className="hidden md:hidden md:items-center lg:flex xl:block absolute inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="pr-5 text-white text-2xl font-bold">
              <BellIcon />
            </button>
            <button className="relative px-5 text-white text-2xl font-bold">
              <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                0
              </span>
              <span onClick={handleCartPopup}>
                <CartIcon />
              </span>
              
            </button>
            <button className="pl-5 text-white text-2xl font-bold">
              <ProfileIcon />
            </button>
          </div>
        </div>
      </div>

      {/* mobile nav */}

      <Footer />

      {/* mobile nav */}

      {/* navbar */}

      <Navbar />

      {/* navbar */}

      {/* cart popup */}

      <div
        className={`fixed top-0  z-30 text-center h-screen ${
          isCartPopup ? "right-0" : "-right-[100%]"
        }`}
      >
        <div className="fixed bg-black ease-out duration-300 opacity-100" onClick={handleCartPopup}></div>
        <CartPopup handleCartPopup={handleCartPopup} />
      </div>
    </header>
  );
};

export default Header;
