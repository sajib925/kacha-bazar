import React from "react";
import CartIcon2 from "../SvgIcons/CartIcon2";
import MinusIcon from "../SvgIcons/MinusIcon";
import DeleteIcon from "../SvgIcons/DeleteIcon";
import PlusIcon from "../SvgIcons/PlusIcon";
import {IoMdClose} from "react-icons/io";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {toggleActive} from "@/redux/toggle/toggleSlice";
import Image from "next/image";
import {addItem, removeItem, singleItemRemove} from "@/redux/cart/cartSlice";

const CartPopup = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.items);

  return (
    <div className="min-h-screen w-[320px] sm:w-[420px]">
      <div className="flex flex-col w-full min-h-screen justify-between items-middle bg-white rounded cursor-pointer">
        <div className="w-full flex justify-between items-center relative px-5 py-4 border-b bg-indigo-50 border-gray-100">
          <h2 className="font-semibold font-inter text-lg m-0 text-heading flex items-center">
            <span className="text-xl mr-2 mb-1">
              <CartIcon2 />
            </span>
            Shopping Cart
          </h2>
          <button
            className="inline-flex text-base items-center justify-center text-gray-500 p-2 focus:outline-none transition-opacity hover:text-red-400"
            onClick={() => dispatch(toggleActive())}
          >
            <IoMdClose />
            <span className="font-inter text-sm text-gray-500 hover:text-red-400 ml-1">
              Close
            </span>
          </button>
        </div>

        <div className="overflow-auto flex-grow scrollbar-hide h-[700px] ">
          {cartState.map((item) => (
            <div
              className="group w-full h-auto flex justify-start items-center gap-x-[5px] bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0"
              key={item.id}
            >
              <div className="">
                <Image src={item.img} alt="product img" />
              </div>

              <div className="flex flex-col w-full overflow-hidden">
                <Link
                  className="text-sm font-medium text-gray-700 text-heading mb-[10px]"
                  href="#"
                >
                  {item.title}
                </Link>
                <span className="text-xs text-gray-400 mb-[10px]">
                  Item Price ${item.price}
                </span>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm md:text-base text-heading leading-5">
                    <span>$ {item.quantity * item.price}</span>
                  </div>
                  <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
                    <button>
                      <span
                        className="text-dark text-base"
                        onClick={() => dispatch(removeItem(item))}
                      >
                        <MinusIcon />
                      </span>
                    </button>
                    <p className="text-sm font-semibold text-dark px-1">
                      {item.quantity}
                    </p>
                    <button>
                      <span
                        className="text-dark text-base"
                        onClick={() => dispatch(addItem(item))}
                      >
                        <PlusIcon />
                      </span>
                    </button>
                  </div>
                  <button
                    className="hover:text-red-600 text-red-400 text-lg cursor-pointer"
                    onClick={() => dispatch(singleItemRemove(item))}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-5 my-3">
          <span>
            <div>
              <button className="w-full py-3 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 flex items-center justify-between bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300">
                <span className="align-middle font-medium font-inter">
                  Proceed To Checkout
                </span>
                <span className="rounded-lg font-bold font-inter py-2 px-3 bg-white text-emerald-600">
                  ${" "}
                  {cartState.reduce(
                    (total, cartItem) =>
                      total + cartItem.quantity * cartItem.price,

                    0
                  )}
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
