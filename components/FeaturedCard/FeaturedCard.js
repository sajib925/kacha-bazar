import Image from "next/image";
import Link from "next/link";
import React from "react";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

const FeaturedCard = ({
  img,
  title,
  link1,
  linkText1,
  link2,
  linkText2,
  link3,
  linkText3,
}) => {
  return (
    <div className="flex w-full h-full border border-gray-100 shadow-sm bg-white p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-lg">
      <div className="flex items-center">
        <div className="w-[35px] h-[42px]">
          <Image src={img} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className="pl-4">
          <h3 className="text-sm text-gray-600 font-serif font-medium group-hover:text-emerald-500">
            {title}
          </h3>
          <div className="pt-[8px] mt-[4px]">
            <Link
              href={link1}
              className="flex items-center justify-start text-[12px] font-inter text-gray-600 hover:text-emerald-500 hover:ease-in-out hover:duration-300"
            >
              <span className="">
                <MdOutlineKeyboardArrowRight size={18} />
              </span>
              {linkText1}
            </Link>
            {linkText2 && (
              <Link
                href={link2}
                className="flex items-center justify-start text-[12px] font-inter text-gray-600 hover:text-emerald-500 hover:ease-in-out hover:duration-300"
              >
                <span className="">
                  <MdOutlineKeyboardArrowRight size={18} />
                </span>
                {linkText2}
              </Link>
            )}

            {linkText3 && (
              <Link
                href={link3}
                className="flex items-center justify-start text-[12px] font-inter text-gray-600 hover:text-emerald-500 hover:ease-in-out hover:duration-300"
              >
                <span className="">
                  <MdOutlineKeyboardArrowRight size={18} />
                </span>
                {linkText3}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
