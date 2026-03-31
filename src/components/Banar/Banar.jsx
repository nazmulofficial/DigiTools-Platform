import React from "react";

const Banar = () => {
  return (
    <div className="">
      <div className="flex justify-between gap-10 items-center max-w-[1600px] mx-auto px-[200px] pt-20">
        <div>
          <div className="space-y-6 max-w-xl">
            <button className="bg-[#E1E7FF] px-3 py-1 rounded-full cursor-default">
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm font-medium">
                New: AI-Powered Tools Available
              </span>
            </button>

            <h3 className="font-bold text-6xl leading-tight text-[#0F172A]">
              Supercharge Your <br />
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Digital Workflow
                </span>
            </h3>

            <p className="text-[#627382] text-[14px] leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity <br /> software—all in one place. Start creating
              faster today.
              <br />
              Explore Products
            </p>

            {/* BUTTONS WITH HOVER EFFECTS */}
            <div className="flex gap-4 items-center">
              {/* Primary Button */}
              <a 
                href="#"
                className="inline-flex items-center justify-center text-sm px-8 h-12 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Explore Products
              </a>
              <div className="p-[2px] rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] inline-block transition-transform duration-300 hover:scale-105">
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-white text-[#6C4DF6] text-sm font-medium transition-all duration-300 hover:bg-transparent hover:text-white group"
                >
                  <img 
                    src="/assets/Play.png" 
                    alt="Play" 
                    className="w-4 h-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
                  />
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <img 
            src="../assets/banner.png" 
            alt="Banner" 
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-full pt-16">
        <div className="flex gap-32 justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-12">
          <div className="text-center">
            <h2 className="text-6xl font-bold">50K+</h2>
            <p className="opacity-90 text-xl mt-2">Active Users</p>
          </div>

          <div className="text-center">
            <h2 className="text-6xl font-bold">200+</h2>
            <p className="opacity-90 text-xl mt-2">Premium Tools</p>
          </div>

          <div className="text-center">
            <h2 className="text-6xl font-bold">4.9</h2>
            <p className="opacity-90 text-xl mt-2">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banar;