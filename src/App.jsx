import { useState } from "react";
import "./App.css";
import Banar from "./components/Banar/Banar";
import Buycard from "./components/Buycard/Buycard";
import Cart from "./components/Buycard/Cart";
import Pricing from "./components/Buycard/Pricing";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Stepstab from "./components/Stepstab/Stepstab";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts]=useState([])

  return (
    <>
      <Navbar />
      <Banar />
      <div className="pt-20">
        <div className=" flex flex-col justify-center items-center space-y-4">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
            <p className="text-center text-[#627382] text-[14px]">
              Choose from our curated collection of premium digital products
              designed to
              <br /> boost your productivity and creativity.
            </p>
          </div>
          <div>
            {/* Button Section  */}
            <div className="tabs tabs-box bg-transparent ">
              <input
                type="radio"
                name="my_tabs_1"
                className="tab rounded-full w-30"
                aria-label="Products"
                onClick={() => setActiveTab("Products")}
                defaultChecked
              />
              <input
                type="radio"
                name="my_tabs_1"
                className="tab rounded-full w-30"
                aria-label={`Cart(${carts.length})`}
                onClick={() => setActiveTab("Cart")}
              />
            </div>
          </div>
        </div>
      </div>
      {activeTab==="Products"&& <Buycard modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}
      {activeTab==="Cart"&&<Cart carts={carts} setCarts={setCarts}/>}
      <Stepstab />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
