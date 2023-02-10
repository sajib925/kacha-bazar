import React from "react";
import ArrowRightIcon from "../SvgIcons/ArrowRightIocn";
import img from "../../images/featured/chili-sauce.png";
import Image from "next/image";

const FeaturedSection = () => {
  return (
    <section className="bg-gray-100 lg:py-16 py-10">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
        <div className="mb-10 flex justify-center">
          <div className="text-center w-full lg:w-2/5">
            <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
              Featured Categories
            </h2>
            <p className="text-base font-sans text-gray-600 leading-6">
              Choose your necessary products from this feature categories.
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className=""></div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
               <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
              <div className="flex items-center">
                <div className="w-[35px] h-[42px]">
                  <Image src={img} alt="" className="w-[100%] h-[100%]" />
                </div>
                <div className="pl-4">
                  <h3 className="text-sm text-gray-600 font-serif font-medium leading-tight line-clamp-1 group-hover:text-emerald-500">
                    Organic Food
                  </h3>
                  <ul className="pt-1 mt-1">
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                    <li className="pt-1">
                      <a
                        href="/"
                        className="flex items-center font-serif text-xs text-gray-400 hover:text-emerald-600 cursor-pointer"
                      >
                        <span className="text-xs text-gray-400 hover:text-emerald-600">
                          <ArrowRightIcon />
                        </span>
                        Food
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturedSection;
