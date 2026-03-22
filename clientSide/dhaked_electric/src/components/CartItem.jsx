import React, { useEffect } from "react";

const CartItem = ({ item }) => {
  const { category, name, image, price } = item?.productId;
  console.log("item", item.productId);
  return (
    <div className=" h-30 flex justify-between border mb-5">
      <div className="flex gap-x-3 lg:gap-x-10">
        <img src={image} alt="" className="h-30 w-20 lg:w-50" />

        <div>
          <h2>{category}</h2>
          <p>{name}</p>
          <h4>{price}</h4>
        </div>
      </div>
      <div className="lg:mr-10 lg:mt-5">
        <button className="shadow-cart bg-gray-300 text-green-600 lg:text-2xl lg:px-6 rounded-lg">
          +
        </button>
        <span className="mx-3">1</span>
        <button className="shadow-cart bg-gray-300 text-red-600 lg:text-2xl lg:px-6 rounded-lg">
          -
        </button>
        <div>
          <button className="bg-orange-500 text-gray-300 lg:px-4 md:py-1 italic font-bold rounded-2xl md:mt-5">
            Remove <span className="hidden md:inline">Item</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
