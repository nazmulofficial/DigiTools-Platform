import React from "react";
import { SlBasketLoaded } from "react-icons/sl";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  const handlePay=()=>{
  setCarts([])
  toast.success("Payment Successfull!")
  };
  const handleAddcart=(item)=>{
    const filterArray=carts.filter(c=>c.id!==item.id)
    setCarts(filterArray)
     toast.success("Remove Item")
  }


  return (
    <div className="max-w-[1600px] mx-auto px-[200px] pt-5 ">
      <div className="border border-amber-200 p-10 rounded-2xl">
        <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

        {carts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 opacity-50">
            <SlBasketLoaded className="w-20 h-20 text-gray-500" />
            <h2 className="text-2xl font-semibold p-5">Cart is empty</h2>
          </div>
        ) : (
          <>
            {carts.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between bg-base-200 p-3 mb-5 items-center rounded-4xl">
                  <div className="flex gap-4">
                    <div className="w-13 h-13 rounded-full border border-gray-300 flex items-center justify-center">
                      <img className="" src={item.image} alt={item.title} />
                    </div>
                    <div className=" space-y-2">
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <span className="text-xl">${item.price} Month</span>
                    </div>
                  </div>
                  <button onClick={()=>handleAddcart(item)} className="btn rounded-4xl text-red-500 ">
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className=" flex justify-between font-bold text-2xl p-5">
              <h2>Total</h2>
              <h2>$ {totalPrice}</h2>
            </div>
            <button onClick={handlePay} className="btn rounded-4xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block 
             transition-all duration-300 ease-in-out 
             hover:scale-[1.02] hover:brightness-110 active:scale-95 shadow-lg hover:shadow-[#4f39f644]">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
