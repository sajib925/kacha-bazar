import Image from "next/image";
import React from "react";
import img from "../../images/cta/delivery-boy.png"

const CTA = () => {
  return (
    <div className="block mx-auto max-w-screen-2xl">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="lg:p-16 p-6 bg-emerald-500 shadow-sm border rounded-lg">
          <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="lg:w-3/5">
                <span className="text-base lg:text-lg font-inter">
                  Organic Products and Food
                </span>
                <h2 className="font-inter text-lg lg:text-2xl font-bold mb-1">
                  Quick Delivery to
                  <span className="text-emerald-500">Your Home</span>
                </h2>
                <p className="text-sm font-inter leading-6">
                  There are many products you will find our shop, Choose your
                  daily necessary product from our KachaBazar shop and get some
                  special offer. See Our latest discounted products from here
                  and get a special discount.
                </p>
                <a
                  className="lg:w-1/4 text-xs font-inter font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white hover:bg-emerald-600"
                  href="/index#downloadApp"
                >
                  Download App
                </a>
              </div>
              <div className="w-1/5 flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-end">
                <Image src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
