import React from "react";
import ProductsHeading from "../ProductsHeading/ProductsHeading";
import {useDispatch, useSelector} from "react-redux";
import LockIcon from "./../SvgIcons/LockIcon";
import Image from "next/image";
import {addItem} from "@/redux/cart/cartSlice";
import MinusIcon from "../SvgIcons/MinusIcon";
import PlusIcon from "../SvgIcons/PlusIcon";

const DiscountProducts = () => {
  const discountProducts = useSelector(
    (state) => state.allDiscountProduct.items
  );
  const cartState = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <section className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
      <div className="mb-10 flex justify-center">
        <ProductsHeading
          title="Latest Discounted Products"
          description="See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping."
        />
      </div>

      <div className="flex">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
            {discountProducts?.map((product) => (
              <div
                className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative"
                key={product.id}
              >
                <div className="relative flex justify-center w-full cursor-pointer">
                  <Image
                    src={product.img}
                    alt="card image"
                    className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
                  />
                </div>

                <span className=" absolute text-dark text-xs bg-orange-500 text-white py-1 px-2 rounded font-medium z-10 right-4 top-4">
                  {product.offer}
                </span>

                <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
                  <div className="relative mb-1">
                    <span className="text-gray-400 font-medium text-xs d-block mb-1 font-inter">
                      {product.name}
                    </span>
                    <h3 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600 font-inter">
                      {product.title}
                    </h3>
                  </div>
                  <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
                    <div className="font-inter product-price font-bold">
                      <span className="inline-block text-lg font-semibold text-gray-800 font-inter">
                        {product.price}
                      </span>

                      <del className="sm:text-sm font-normal text-base text-gray-400 ml-1">
                        {product.offerQuantity}
                      </del>
                    </div>
                    <div className="">
                      <button
                        className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all"
                        onClick={() => dispatch(addItem(product))}
                      >
                        <span className="text-xl">
                          <LockIcon />
                        </span>
                      </button>

                      <div className="hidden">
                        <div className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 bg-emerald-500 text-white rounded">
                          <button onClick={() => dispatch(removeItem(item.quantity))}>
                            <span className="text-dark text-base">
                              <MinusIcon />
                            </span>
                          </button>
                          <p className="text-sm text-dark px-1 font-inter font-semibold">
                            {cartState.quantity}
                          </p>
                          <button onClick={() => dispatch(addItem(item.quantity))}>
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

export default DiscountProducts;
