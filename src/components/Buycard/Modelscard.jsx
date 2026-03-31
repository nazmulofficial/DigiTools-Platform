import React, { useState } from "react";
import Buycard from "./Buycard";
import { toast } from "react-toastify";

const Modelscard = ({ model, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubsCription = () => {
    setIsSubscribed(true);
    const isFound=carts.find(item=>item.id===model.id)
    if(isFound){
      toast.error("Item already in cart")
      return;
    }

    setCarts([...carts, model])
    toast.success("Item added")
  };
  return (
    <div>
      <div className="card w-90 bg-base-100 shadow-sm border border-transparent transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-100 cursor-pointer">
        <div className="card-body ">
          <div className="flex justify-between items-center space-y-2">
            <div className="w-13 h-13 rounded-full border border-gray-300 flex items-center justify-center">
              <img className="" src={model.image} />
            </div>
            <span className="badge badge-xs badge-warning">{model.badge}</span>
          </div>
          <div className=" space-y-2">
            <h2 className="text-2xl font-bold">{model.title}</h2>
            <span className="text-xl">${model.price} Month</span>
            <p className="p-2 text-[#627382] text-[14px]">
              {model.description}
            </p>
          </div>

          <ul className=" text-[#627382] text-[16px] items-center">
            {model.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <button
              onClick={handleSubsCription}
              className="btn rounded-4xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block 
             transition-all duration-300 ease-in-out 
             hover:scale-[1.02] hover:brightness-110 active:scale-95 shadow-lg hover:shadow-[#4f39f644]"
            >
              {isSubscribed ? "Added to Cart" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modelscard;
