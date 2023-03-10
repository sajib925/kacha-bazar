import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import couponImg1 from "../../images/hero/ins3.jpg";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  /* The above code is a countdown timer. */
  const [day, setDay] = useState("00");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  let interval;

  /**
   * It takes the current date and time and subtracts it from the date and time of the event.
   */
  const startTimer = () => {
    const coundownDate = new Date("Apr 30 , 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = coundownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
      } else {
        // Update State
        setDay(days);
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
      }
    });
  };

  /* Calling the startTimer function. */
  useEffect(() => startTimer());
  return (
    <section className="bg-white">
      <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
        {/* hero section top */}

        <div className="flex w-full">
          {/* hero section top left */}

          <div className="flex-shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
            <HeroSlider />
          </div>

          {/* hero section top right */}

          <div className="w-full hidden lg:flex">
            <div className="w-full group">
              <div className="bg-gray-50 h-full border-2 border-orange-500 transition duration-150 ease-linear transform group-hover:border-emerald-500 rounded shadow">
                <div className="bg-orange-100 text-gray-900 px-6 py-2 rounded-t border-b flex items-center justify-center">
                  <h3 className="text-base font-medium font-inter">
                    Latest Super Discount Active Coupon Code
                  </h3>
                </div>
                <div className="overflow-hidden">
                  {/* coupon top */}

                  <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
                    <div className="tengah py-2 px-3 flex items-center justify-items-start">
                      <div
                        className=""
                        style={{
                          height: "100px",
                          width: "100px",
                        }}
                      >
                        <Image
                          src={couponImg1}
                          alt="coupon img"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                      <div className="ml-3">
                        <div className="flex items-center font-inter">
                          <h6 className="pl-1 text-base font-medium text-gray-600 font-inter">
                            <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold font-inter">
                              {"10"} {"%"}
                            </span>
                            Off
                          </h6>
                          <div className="ml-2 font-inter">
                            <span className="text-red-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-red-100">
                              Inactive
                            </span>
                          </div>
                        </div>
                        <h2 className="pl-1 text-base text-gray-700 leading-6 font-semibold font-inter mb-2">
                          October Gift Voucher
                        </h2>
                        <span className="inline-block mb-2">
                          <div className="flex items-center font-semibold font-inter">
                            <span className="flex items-center justify-center bg-red-500 text-white text-sm font-inter font-semibold mx-1 px-2 py-1 rounded">
                              00
                            </span>
                            {" : "}
                            <span className="flex items-center justify-center bg-red-500 text-white text-sm font-inter font-semibold mx-1 px-2 py-1 rounded">
                              00
                            </span>
                            {" : "}
                            <span className="flex items-center justify-center bg-red-500 text-white text-sm font-inter font-semibold mx-1 px-2 py-1 rounded">
                              00
                            </span>
                            {" : "}
                            <span className="flex items-center justify-center bg-red-500 text-white text-sm font-inter font-semibold mx-1 px-2 py-1 rounded">
                              00
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
                      <div className="info flex items-center">
                        <div className="w-full">
                          <div className="block">
                            <div className="font-inter border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block">
                              <button className="block w-full">
                                <span className="uppercase font-inter font-semibold text-sm leading-7 text-emerald-600">
                                  OCTOBER21
                                </span>
                              </button>
                            </div>
                          </div>
                          <p className="text-xs font-inter leading-4 text-gray-500 mt-2">
                            * This coupon apply when shopping more then
                            <span className="">
                              {"$"} {"500"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* coupon top */}

                  <div className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow">
                    <div className=" py-2 px-3 flex items-center justify-between ">
                      <div
                        style={{
                          height: "100px",
                          width: "100px",
                        }}
                      >
                        <Image
                          src={couponImg1}
                          alt="coupon img"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>

                      <div className="md:border-l-2 lg:border-l-2 border-dashed relative px-4">
                        <div className="flex items-center">
                          <h6 className="pl-1 text-base font-medium text-gray-600">
                            <span className="text-lg font-inter md:text-xl lg:text-xl text-red-500 font-bold">
                              15%
                            </span>
                          </h6>
                          <div className="ml-2">
                            <span className="text-red-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-red-100">
                              Active
                            </span>
                          </div>
                        </div>
                        <h2 className="pl-1 font-serif text-base text-gray-700 leading-6 font-semibold mb-2">
                          Winter Gift Voucher
                        </h2>
                        <span className="inline-block mb-2">
                          <div className="flex items-center font-semibold">
                            <span className="flex items-center justify-center bg-emerald-500 text-white text-sm font-inter font-semibold mx-1 px-2 py-1 rounded">
                              {day}
                            </span>
                            {" : "}
                            <span className="flex items-center justify-center bg-emerald-500 text-white text-sm font-inter font-semibold mx-1 px-2 py-1 rounded">
                              {hour}
                            </span>
                            {" : "}
                            <span className="flex items-center justify-center bg-emerald-500 text-white text-sm font-inter font-semibold mx-1 px-2 py-1 rounded">
                              {minute}
                            </span>
                            {" : "}
                            <span className="flex items-center justify-center bg-emerald-500 text-white text-sm font-inter font-semibold mx-1 px-2 py-1 rounded">
                              {second}
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="md:border-l-2 lg:border-l-2 border-dashed  relative px-4">
                      <div className="info flex items-center">
                        <div className="w-full">
                          <div className="block">
                            <div className="font-inter border border-dashed bg-emerald-50 py-1 border-emerald-300 rounded-lg text-center block">
                              <button className="block w-full">
                                <span className="uppercase font-inter font-semibold text-sm leading-7 text-emerald-600">
                                  WINTER21
                                </span>
                              </button>
                            </div>
                          </div>
                          <p className="text-xs leading-4 text-gray-500 mt-2">
                            * This coupon apply when shopping more then
                            <span className="">
                              {"$"} {"500"}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hero section bottom */}

        <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-inter text-xl">
                <span className="text-emerald-600  font-bold">
                  100% Natural Quality
                </span>{" "}
                Organic Product
              </h1>
              <p className="text-gray-500">
                See Our latest discounted products from here and get a special
                <Link href="/" className="text-emerald-600 ml-1">
                  discount product
                </Link>
              </p>
            </div>
            <Link
              href="/"
              className="text-sm font-inter font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
