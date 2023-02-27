import React from "react";
import CallIcon from "../SvgIcons/CallIcon";
import CarIcon from "../SvgIcons/CarIcon";
import OfferIcon from "../SvgIcons/OfferIcon";
import PaymentIcon from "../SvgIcons/PaymentIcon";

const Contact = () => {
  return (
    <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto">
        <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
          <div className="mr-3">
            <CarIcon />
          </div>
          <div className="">
            <span className="block font-inter text-sm font-medium leading-5">
              Free Shipping From $500.00
            </span>
          </div>
        </div>
        <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
          <div className="mr-3">
            <CallIcon />
          </div>
          <div className="">
            <span className="block font-inter text-sm font-medium leading-5">
              Support 24/7 At Anytime
            </span>
          </div>
        </div>
        <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
          <div className="mr-3">
            <PaymentIcon />
          </div>
          <div className="">
            <span className="block font-inter text-sm font-medium leading-5">
              Secure Payment Totally Safe
            </span>
          </div>
        </div>
        <div className=" border-r border-gray-200 py-1 flex items-center justify-center bg-white">
          <div className="mr-3">
            <OfferIcon />
          </div>
          <div className="">
            <span className="block font-inter text-sm font-medium leading-5">
              Latest Offer Upto 20% Off
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
