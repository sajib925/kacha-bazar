import React, { useState } from "react";
import ProductsHeading from "../ProductsHeading/ProductsHeading";
import {useDispatch, useSelector} from "react-redux";
import LockIcon from "./../SvgIcons/LockIcon";
import Image from "next/image";
import {addItem, removeItem} from "@/redux/cart/cartSlice";
import MinusIcon from "../SvgIcons/MinusIcon";
import PlusIcon from "../SvgIcons/PlusIcon";

const PopularProducts = () => {
  const popularProducts = useSelector((state) => state.allPopularProduct.items);
  const dispatch = useDispatch();
  const [] = useState()
  return (
    <section className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
      <div className="mb-10 flex justify-center">
        <ProductsHeading
          title="Popular Products for Daily Shopping"
          description="See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping."
        />
      </div>

      <div className="flex">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
            {popularProducts?.map((item) => (
              <div
                className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative"
                key={item.id}
              >
                <div className="relative flex justify-center w-full cursor-pointer">
                  <Image
                    src={item.img}
                    alt="card image"
                    className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
                  />
                </div>

                <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                  <div className="relative mb-1">
                    <span className="text-gray-400 font-medium text-xs d-block mb-1 font-inter">
                      {item.name}
                    </span>
                    <h3 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600 font-inter">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                    <div className="font-inter product-price font-bold">
                      <span className="inline-block text-lg font-semibold text-gray-800 font-inter">
                        {item.price}
                      </span>
                    </div>
                    <div className="">
                      <button
                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                        onClick={() => dispatch(addItem(item))}
                      >
                        <span className="text-xl">
                          <LockIcon />
                        </span>
                      </button>

                      <div className="hidden">
                        <div className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded">
                          <button onClick={() => dispatch(removeItem(item))}>
                            <span className="text-dark text-base">
                              <MinusIcon />
                            </span>
                          </button>
                          <p className="text-sm text-dark px-1 font-inter font-semibold">
                            1
                          </p>
                          <button onClick={() => dispatch(addItem(item))}>
                            <span className="text-dark text-base">
                              <PlusIcon />
                            </span>
                          </button>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
