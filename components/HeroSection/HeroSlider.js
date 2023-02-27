import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";
import Link from "next/link";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="w-[100%] h-[357px]"
      >
        <SwiperSlide className="bg-hero-slider-1 w-[100%] h-[100%] bg-cover ">
          <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
              <h1 className="mb-2 font-inter text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                The Best Quality Products Guaranteed!
              </h1>
              <p className="text-base leading-6 text-gray-600 font-inter line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                Dramatically facilitate effective total linkage for go forward
                processes...
              </p>
              <Link
                href="/"
                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-inter font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-hero-slider-2">
          <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
              <h1 className="mb-2 font-inter text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                Best Different Type of Grocery Store
              </h1>
              <p className="text-base leading-6 text-gray-600 font-inter line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                Quickly aggregate empowered networks after emerging products...
              </p>
              <Link
                href="/"
                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-inter font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-hero-slider-3">
          <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
            <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
              <h1 className="mb-2 font-inter text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none lg:line-clamp-none lg:text-3xl font-bold text-gray-800">
                Quality Freshness Guaranteed!
              </h1>
              <p className="text-base leading-6 text-gray-600 font-inter line-clamp-1 md:line-clamp-none lg:line-clamp-none">
                Intrinsicly fashion performance based products rather than
                accurate benefits...
              </p>
              <Link
                href="/"
                className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-inter font-medium mt-6 px-6 py-2 bg-emerald-500 text-center rounded-md text-white hover:bg-emerald-600"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
