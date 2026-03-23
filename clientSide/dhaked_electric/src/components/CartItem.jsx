import React, { useEffect } from "react";

const CartItem = ({ item }) => {
  const { category, name, image, price } = item?.productId;
  console.log("item", item.productId);
  useGSAP(() => {
    gsap.from(".product>div", {
      y: 50,
      stagger: 0.3,
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <div className=" h-25 lg:h-30 flex justify-between shadow-cart mb-5 bg-gray-100 rounded-lg lg:rounded-2xl ">
      <div className="flex gap-x-3 lg:gap-x-10">
        <img
          src={image}
          alt=""
          className="h-25 lg:h-30 w-20 lg:w-50 rounded-l-lg lg:rounded-l-2xl"
        />

        <div>
          <h2 className="font-bold italic">{category}</h2>
          <p className="italic">{name}</p>
          <h4 className="text-green-600 italic">
            <span className="text-red-700">price:</span>
            {price}
          </h4>
        </div>
      </div>
      <div className="mr-2 lg:mr-10 mt-2 lg:mt-5">
        <button className="shadow-cart bg-gray-300 text-green-600 lg:text-2xl px-2 lg:px-6 lg:rounded-lg">
          +
        </button>
        <span className=" mx-1 lg:mx-3">1</span>
        <button className="shadow-cart bg-gray-300 text-red-600 lg:text-2xl px-2 lg:px-6 lg:rounded-lg">
          -
        </button>
        <div>
          <button className="bg-orange-500 text-gray-300 lg:px-4 md:py-1 italic font-bold md:rounded-2xl mt-4 md:mt-5">
            Remove <span className="hidden md:inline">Item</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
