import React from "react";
import FacebookIcon from "../SvgIcons/FacebookIcon";
import LinkedinIcon from "../SvgIcons/LinkedinIcon";
import PinterestIcon from "../SvgIcons/PinterestIcon";
import WhatsappIcon from './../SvgIcons/WhatsappIcon';
import TwitterIcon from './../SvgIcons/TwitterIcon';
import  Image  from 'next/image';
import footerLogo from "../../images/footer/logo-color.svg"
import paymentLogo from "../../images/footer/payment-logo.png";

const Footer = () => {
  return (
    <div className="border-t border-gray-100 w-full">
      <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                Company
              </h3>
              <ul className="text-sm flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/about-us"
                  >
                    About Us
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/contact-us"
                  >
                    Contact us
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/?fbclid=IwAR34oSAZhlzOax4GHmz-tl1CtFkt-DPNZQcT1RHqBnqgb6cQiyBMBEaLf_A#"
                  >
                    Careers
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/?fbclid=IwAR34oSAZhlzOax4GHmz-tl1CtFkt-DPNZQcT1RHqBnqgb6cQiyBMBEaLf_A#"
                  >
                    Latest news
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                Top Category
              </h3>
              <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/search?Category=fish--meat"
                  >
                    Fish &amp; Meat
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/search?Category=drinks"
                  >
                    Soft Drinks
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/search?Category=baby-care"
                  >
                    Baby Care
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/search?Category=beauty--health"
                  >
                    Beauty &amp; Health
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                My Account
              </h3>

              <ul className="text-sm lg:text-15px flex flex-col space-y-3">
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/?fbclid=IwAR34oSAZhlzOax4GHmz-tl1CtFkt-DPNZQcT1RHqBnqgb6cQiyBMBEaLf_A#"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/?fbclid=IwAR34oSAZhlzOax4GHmz-tl1CtFkt-DPNZQcT1RHqBnqgb6cQiyBMBEaLf_A#"
                  >
                    My Orders
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/?fbclid=IwAR34oSAZhlzOax4GHmz-tl1CtFkt-DPNZQcT1RHqBnqgb6cQiyBMBEaLf_A#"
                  >
                    Recent Orders
                  </a>
                </li>
                <li className="flex items-baseline">
                  <a
                    className="text-gray-600 inline-block w-full hover:text-emerald-500"
                    href="/?fbclid=IwAR34oSAZhlzOax4GHmz-tl1CtFkt-DPNZQcT1RHqBnqgb6cQiyBMBEaLf_A#"
                  >
                    Updated Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
              <a className="mr-3 lg:mr-12 xl:mr-12" rel="noreferrer" href="/">
                <Image src={footerLogo} alt="footer logo" />
              </a>
              <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
                <span>
                  987 Andre Plain Suite High Street 838, Lake Hestertown, USA
                </span>

                <span>Tell: 02.356.1666</span>
                <span>Email: ccruidk@test.com</span>
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 items-center justify-between">
              <div className="col-span-1">
                <span className="text-base leading-7 font-medium block mb-2 pb-0.5">
                  Follow Us
                </span>
                <ul className="text-sm flex">
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                      href="https://www.facebook.com"
                    >
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                      href="https://twitter.com"
                    >
                     <TwitterIcon />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                      href="https://www.pinterest.com"
                    >
                      <PinterestIcon />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                      href="https://www.linkedin.com"
                    >
                      <LinkedinIcon />
                    </a>
                  </li>
                  <li class="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      aria-label="Social Link"
                      rel="noreferrer"
                      target="_blank"
                      className="block text-center mx-auto text-gray-500 hover:text-white"
                      href="https://www.whatsapp.com"
                    >
                      <WhatsappIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 text-center hidden lg:block md:block">
                <p className="text-base leading-7 font-medium block">
                  Call Us Today!
                </p>
                <h5 className="text-2xl font-bold text-emerald-500 leading-7">
                  +012345-67900
                </h5>
              </div>
              <div className="col-span-1 hidden lg:block md:block">
                <ul className="lg:text-right">
                  <li className="px-1 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                    <Image src={paymentLogo} alt="footer logo" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
          <p className="text-sm text-gray-500 leading-6">
            Copyright 2022 @{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500"
              href="https://themeforest.net/user/htmllover"
            >
              HtmlLover
            </a>
            , All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
