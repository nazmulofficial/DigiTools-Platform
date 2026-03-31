import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className="p-18 pt-10 max-w-[1600px] mx-auto px-[200px]">
        <div className=" flex flex-col justify-center items-center space-y-4">
          <h2 className="text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-center text-[#627382] text-[14px]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Card Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
          <div className="w-80 bg-gray-100 rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-bold">Starter</h2>
            <p className="text-gray-500 text-sm mb-4">
              Perfect for getting started
            </p>

            <h1 className="text-3xl font-bold mb-4">
              $0<span className="text-base">/Month</span>
            </h1>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>✔ Access to 10 free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
              Get Started Free
            </button>
          </div>

          <div className="relative w-80 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 text-white shadow-xl p-6">
            {/* Badge */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
              Most Popular
            </span>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-1">Pro</h2>
            <p className="text-sm text-gray-200 mb-4">Best for professionals</p>

            {/* Price */}
            <h1 className="text-4xl font-bold mb-4">
              $29<span className="text-lg font-normal">/Month</span>
            </h1>

            {/* Features */}
            <ul className="space-y-2 text-sm">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            {/* Button */}
            <button className="mt-6 w-full bg-white text-purple-700 font-semibold py-2 rounded-full">
              Start Pro Trial
            </button>
          </div>

          <div className="w-80 bg-gray-100 rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-bold">Enterprise</h2>
            <p className="text-gray-500 text-sm mb-4">For teams of Business</p>

            <h1 className="text-3xl font-bold mb-4">
              $99<span className="text-base">/Month</span>
            </h1>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collabration</li>
              <li>✔ Custom intergrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-full">
              Get Started Free
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-full pt-16 ">
        <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-20 flex flex-col items-center justify-center text-center gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-sm opacity-80 pt-2">
              Join thousands of professionals who are already using Digitools to
              work smarter.
              <br /> Start your free trial today.
            </p>
          </div>

          <div className="flex gap-3 items-center justify-center">
            <button className="inline-flex items-center justify-center text-sm px-6 h-10 rounded-full bg-white text-[#6C4DF6]">
              <a href="#">Explore Products</a>
            </button>

            <div className="p-[2px] rounded-full bg-white inline-block">
              <button className="inline-flex items-center gap-2 px-4 h-10 rounded-full bg-[#6C4DF6] text-white text-sm">
                {" "}
                <a href="#">View Pricing</a>
              </button>
            </div>
          </div>
          <p className="text-[14px] opacity-80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
