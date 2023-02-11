import React from 'react'

const CartButton = () => {
  return (
    <button className="absolute">
      <div className="right-0 w-35 float-right fixed top-2/4 bottom-2/4 align-middle shadow-lg cursor-pointer z-30 hidden lg:block xl:block">
        <div className="flex flex-col items-center justify-center bg-indigo-50 rounded-tl-lg p-2 text-gray-700">
          <span className="text-2xl mb-1 text-emerald-600">
            <CartButton />
          </span>
          <span className="px-2 text-sm font-serif font-medium">0 Items</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-emerald-700 p-2 text-white text-base font-serif font-medium rounded-bl-lg mx-auto">
          $0.00
        </div>
      </div>
    </button>
  );
}

export default CartButton