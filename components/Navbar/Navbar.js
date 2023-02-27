import React from "react";
import Link from "next/link";
import ArrowDownIcon from "./../SvgIcons/ArrowDownEIcon";

const Navbar = () => {
  return (
    <div className="hidden lg:block xl:block bg-white border-b">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 h-12 flex justify-between items-center">
        {/* right side */}

        <div className="inline-flex">
          <div className="relative">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center md:justify-start md:space-x-10">
                <nav className="md:flex space-x-10 items-center">
                  <div className="relative font-inter">
                    <button className="group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none">
                      <span className="font-inter text-sm font-medium">
                        Categories
                      </span>
                      <ArrowDownIcon />
                    </button>
                  </div>
                  <Link
                    href="/"
                    className="font-inter mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/"
                    className="font-inter mx-4 py-2 text-sm font-medium hover:text-emerald-600"
                  >
                    Contact Us
                  </Link>
                  <div className="relative font-inter">
                    <button className="group inline-flex items-center py-2 hover:text-emerald-600 focus:outline-none">
                      <span className="font-inter text-sm font-medium">
                        Pages
                      </span>
                      <ArrowDownIcon />
                    </button>
                  </div>
                  <Link
                    href="/"
                    className="relative inline-flex items-center h-6 bg-red-100 font-inter ml-4 py-0 px-2 rounded text-sm font-medium text-red-500 hover:text-emerald-600"
                  >
                    Offers
                    <div className="absolute flex w-2 h-2 left-auto -right-1 -top-1">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* left side */}

        <div className="flex">
          <Link
            href="/"
            className="font-inter mx-4 py-2 text-sm font-medium hover:text-emerald-600"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="font-inter mx-4 py-2 text-sm font-medium hover:text-emerald-600"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
