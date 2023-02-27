import Image from "next/image";
import React from "react";
import img1 from "../../images/get-connect/app-download-img-left.png"
import img2 from "../../images/get-connect/app-download-img.webp";
import imgApple from "../../images/get-connect/app-store.svg";
import imgGoogle from "../../images/get-connect/play-store.svg";

const GetConnect = () => {
  return (
    <div className="bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-3 items-center">
          <div className="flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-start">
            <Image src={img1} alt="image" />
          </div>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-inter mb-3">
              Get Your Daily Needs From Our KachaBazar Store
            </h3>
            <p className="text-base opacity-90 leading-7 font-inter">
              There are many products you will find our shop, Choose your daily
              necessary product from our KachaBazar shop and get some special
              offer.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <a
                className="mx-2"
                target="_blank"
                rel="noreferrer"
                href="https://www.apple.com/app-store/"
              >
                <Image src={imgApple} alt="image" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://play.google.com/store/apps"
              >
                <Image src={imgGoogle} alt="image" />
              </a>
            </div>
          </div>
          <div className="md:hidden lg:block">
            <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
              <Image src={img2} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetConnect;
