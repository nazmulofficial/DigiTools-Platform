import React from "react";

const Stepstab = () => {
  return (
    <div className="p-18">
      <div className="p-20 bg-gray-50 ">
        <div className=" flex flex-col justify-center items-center space-y-4">
          <h2 className="text-4xl font-bold">Get Started in 3 Steps</h2>
          <p className="text-center text-[#627382] text-[14px]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Card Section */}

        <div className="flex gap-10 pt-10 justify-center items-center max-w-[1600px] mx-auto px-[200px] ">
          <div className="relative bg-white rounded-2xl shadow-sm p-8 text-center w-70">
            {/* Badge */}
            <div className="absolute top-2 right-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
              01
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 pt-6">
              <div className="bg-[#F3F0FF] w-20 h-20 rounded-full flex items-center justify-center">
                <img
                  className="w-10 h-10"
                  src="../assets/user.png"
                  alt="user"
                />
              </div>
            </div>
            {/* Title */}
            <h2 className="text-lg font-semibold mb-2">Create Account</h2>

            {/* Description */}
            <p className="text-[#627382] text-sm">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="relative bg-white rounded-2xl shadow-sm p-8 text-center w-70">
            {/* Badge */}
            <div className="absolute top-2 right-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
              02
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 pt-6">
              <div className="bg-[#F3F0FF] w-20 h-20 rounded-full flex items-center justify-center">
                <img
                  className="w-10 h-10"
                  src="/assets/package.png"
                  alt="user"
                />
              </div>
            </div>
            {/* Title */}
            <h2 className="text-lg font-semibold mb-2">Choose Products</h2>

            {/* Description */}
            <p className="text-[#627382] text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <div className="relative bg-white rounded-2xl shadow-sm p-8 text-center w-70">
            {/* Badge */}
            <div className="absolute top-2 right-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
              03
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 pt-6">
              <div className="bg-[#F3F0FF] w-20 h-20 rounded-full flex items-center justify-center">
                <img
                  className="w-10 h-10"
                  src="../assets/rocket.png"
                  alt="user"
                />
              </div>
            </div>
            {/* Title */}
            <h2 className="text-lg font-semibold mb-2">Start Creating</h2>

            {/* Description */}
            <p className="text-[#627382] text-[14px]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepstab;
