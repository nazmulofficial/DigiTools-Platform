import React from "react";
import { SlBasket } from "react-icons/sl";

const Navbar = ({ carts }) => {
  // <--- carts prop receive koro
  return (
    <div className="max-w-[1600px] mx-auto px-[200px] justify-center ">
      <div className="flex gap-50 justify-center items-center fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="">
          <a className="text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>

        <div className="flex gap-50">
          <div className="navbar-center">
            <ul className="menu menu-horizontal font-bold">
              <li>
                <a className="transition-all duration-300 hover:bg-[#E1E7FF] hover:text-[#4F39F6]">
                  Products
                </a>
              </li>
              <li>
                <a className="transition-all duration-300 hover:bg-[#E1E7FF] hover:text-[#4F39F6]">
                  Features
                </a>
              </li>
              <li>
                <a className="transition-all duration-300 hover:bg-[#E1E7FF] hover:text-[#4F39F6]">
                  Pricing
                </a>
              </li>
              <li>
                <a className="transition-all duration-300 hover:bg-[#E1E7FF] hover:text-[#4F39F6]">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="transition-all duration-300 hover:bg-[#E1E7FF] hover:text-[#4F39F6]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar gap-2">
            {/* --- BASKET SECTION --- */}
            <div className="relative mr-2 cursor-pointer">
              <SlBasket className="text-2xl" />
              {carts.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {carts.length}
                </span>
              )}
            </div>

            <a className="btn btn-ghost hover:bg-[#E1E7FF]">Login</a>
            <a className="btn rounded-4xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white border-none">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
