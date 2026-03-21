import React from "react";

const ProductItem = ({ item }) => {
  const { image, name, price, category } = item;
  console.log("item", item);
  return (
    <div className="shadow-cart h-60 text-center rounded-2xl bg-gray-100">
      <img src={image} alt="" className="w-full h-40 rounded-t-2xl" />
      <h3>{category}</h3>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductItem;
