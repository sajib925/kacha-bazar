import React from 'react'
import LockIcon from '../SvgIcons/lockIcon';
import img from "../../images/card/Kale-Sprouts-3oz.jpg"
import Image from 'next/image';

const Card = () => {
  return (
    <div className="group box-border overflow-hidden flex rounded-md shadow-sm pe-0 flex-col items-center bg-white relative">
      <div className="relative flex justify-center w-full cursor-pointer">
        <Image src={img} alt="card image" className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"/>
      </div>
      <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
        <div className="relative mb-1">
          <span className="text-gray-400 font-medium text-xs d-block mb-1">
            3oz
          </span>
          <h3 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
            Kale Sprouts
          </h3>
        </div>
        <div className="flex justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
          <div className="font-serif product-price font-bold">
            <span className="inline-block text-lg font-semibold text-gray-800">
              {"$ "} {"15"}
            </span>
          </div>
          <button className="h-9 w-9 flex items-center justify-center border border-gray-200 rounded text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white transition-all">
            <span className="text-xl">
                <LockIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card