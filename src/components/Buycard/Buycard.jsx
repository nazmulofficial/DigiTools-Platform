import React, { use } from "react";
import Modelscard from "./Modelscard";

const Buycard = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);
  return (
    <div className="max-w-[1600px] mx-auto px-[200px]">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
        {models.map((model) => (
          <Modelscard
            key={model.id}
            model={model}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-50 "></div>
    </div>
  );
};

export default Buycard;
