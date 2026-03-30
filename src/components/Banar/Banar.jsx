import React from "react";

const Banar = () => {
  return (
    <div className="">
      <div className=" flex justify-between gap-10 items-center max-w-[1600px] mx-auto px-[200px] pt-20 ">
        <div>
          <div className="space-y-6 max-w-xl">
            <button className="bg-[#E1E7FF] px-3 py-1 rounded-full">
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm">
                New: AI-Powered Tools Available
              </span>
            </button>

            <h3 className="font-bold text-6xl leading-tight">
              Supercharge Your <br />
              Digital Workflow
            </h3>

            <p className="text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity <br/> software—all in one place. Start creating faster
              today.<br/>Explore Products.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 items-center">
              <a className="inline-flex items-center justify-center text-sm px-6 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">
                Explore Products
              </a>

              <div className="p-[2px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] inline-block">
                <a className="inline-flex items-center gap-2 px-4 h-10 rounded-full bg-white text-[#6C4DF6] text-sm">
                  <img src="/assets/Play.png" alt="Play" className="w-4 h-4" />
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <img src="/assets/banner.png" alt="Banner" />
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-full pt-16">
        <div className="flex gap-30 justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white  py-10 ">
          <div>
            <h2 className="text-6xl font-bold">50K+</h2>
            <p className="text-[#ffffff] text-2xl">Active Users</p>
          </div>

          <div>
            <h2 className="text-6xl font-bold">200+</h2>
            <p className="text-[#ffffff] text-2xl">Premium Tools</p>
          </div>

          <div>
            <h2 className="text-6xl font-bold">4.9</h2>
            <p className="text-[#ffffff] text-2xl">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;
