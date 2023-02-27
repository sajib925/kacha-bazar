import React from "react";
import CartIcon2 from "../SvgIcons/CartIcon2";
import MinusIcon from "../SvgIcons/CartIcon2";
import DeleteIcon from "../SvgIcons/DeleteIcon";
import PlusIcon from "../SvgIcons/PlusIcon";
import {IoMdClose} from "react-icons/io";

const CartPopup = ({handleCartPopup}) => {
  return (
    <div className="min-h-screen px-4">
      <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer">
        <div className="w-full flex justify-between items-center relative px-5 py-4 border-b bg-indigo-50 border-gray-100">
          <h2 className="font-semibold font-serif text-lg m-0 text-heading flex items-center">
            <span className="text-xl mr-2 mb-1">
              <CartIcon2 />
            </span>
            Shopping Cart
          </h2>
          <button className="inline-flex text-base items-center justify-center text-gray-500 p-2 focus:outline-none transition-opacity hover:text-red-400" onClick={handleCartPopup}>
            <IoMdClose />
            <span className="font-sens text-sm text-gray-500 hover:text-red-400 ml-1">
              Close
            </span>
          </button>
        </div>

        <div className="overflow-y-scroll flex-grow scrollbar-hide w-full min-h-full">
          <div className="group w-full h-auto flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0">
            <div className="relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-4"></div>
            <div className="flex flex-col w-full overflow-hidden">
              <a
                className="truncate text-sm font-medium text-gray-700 text-heading line-clamp-1"
                href="/product/pineapple-imported"
              >
                Pineapple Imported
              </a>
              <span className="text-xs text-gray-400 mb-1">Item Price $12</span>
              <div className="flex items-center justify-between">
                <div className="font-bold text-sm md:text-base text-heading leading-5">
                  <span>$12.00</span>
                </div>
                <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
                  <button>
                    <span className="text-dark text-base">
                      <MinusIcon />
                    </span>
                  </button>
                  <p className="text-sm font-semibold text-dark px-1">1</p>
                  <button>
                    <span className="text-dark text-base">
                      <PlusIcon />
                    </span>
                  </button>
                </div>
                <button className="hover:text-red-600 text-red-400 text-lg cursor-pointer">
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5 my-3">
          <span>
            <div>
              <button className="w-full py-3 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300">
                <span className="align-middle font-medium font-serif">
                  Proceed To Checkout
                </span>
                <span className="rounded-lg font-bold font-serif py-2 px-3 bg-white text-emerald-600">
                  $12.00
                </span>
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
