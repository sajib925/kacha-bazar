import React from "react";
import CartButtonIcon from "../SvgIcons/CartButtonIcon";
import {useSelector} from "react-redux";

const CartButton = () => {
  const cartState = useSelector((state) => state.cart.items);
  return (
    <button className="absolute">
      <div className="right-0 w-35 float-right fixed top-2/4 bottom-2/4 align-middle shadow-lg cursor-pointer z-10 hidden lg:block xl:block">
        <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-tl-lg p-2 text-gray-700">
          <span className="text-2xl mb-1 text-emerald-600">
            <CartButtonIcon />
          </span>
          <span className="px-2 text-sm font-inter font-medium">
            Items{" "}
            {cartState.length > 0
              ? cartState.reduce((total, {quantity}) => total + quantity, 0)
              : 0}
          </span>
        </div>
        <div className="flex flex-col items-center justify-center bg-emerald-700 p-2 text-white text-base font-inter font-medium rounded-bl-lg mx-auto">
          $
          {cartState.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
          )}
        </div>
      </div>
    </button>
  );
};

export default CartButton;
