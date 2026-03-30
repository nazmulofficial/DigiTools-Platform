import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-[200px] ">
      <div className="flex gap-50 justify-center items-center">
        <div className="">
          <a className="text-4xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>

        <div className="flex gap-50">
          <div className="navbar-center">
            <ul className="menu menu-horizontal font-bold">
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>

          <div className="navbar gap-3">
            <img
              className="w-6 h-5"
              src="../assets/products/shopping-cart.png"
              alt=""
            />
            <a className="btn btn-ghost">Login</a>
            <a className="btn rounded-4xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white ">
              Get Started
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
