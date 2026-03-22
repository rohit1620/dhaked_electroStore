import React, { useState } from "react";
import api from "../api/axios";

const ProductItem = ({ item }) => {
  const [cart, setCart] = useState([]);
  const { image, name, price, category, _id } = item;
  console.log("item", item);
  const userId = "69b0f75d329c4587a89239d1";
  const productId = _id;
  const addToCart = async () => {
    const data = await api.post("/cart/add", { userId, productId });
    console.log("cart-item", data);
  };

  const getCartItem = async () => {
    let value = await api.get(`/cart/${userId}`);
    console.log("id", value?.data[0]?.items);
    value = value?.data[0]?.items;
    setCart(value);
  };
  getCartItem();
  return (
    <div className="shadow-cart h-70 text-center rounded-2xl bg-gray-100">
      <img src={image} alt="" className="w-full h-40 rounded-t-2xl" />
      <h3 className="font-bold text-xl italic mt-1">{category}</h3>
      <p className="italic mb-3 ">{name}</p>
      <div className="flex justify-between px-2">
        <p className="text-green-700 font-bold">
          <span className="text-red-500 italic">Price:-</span>
          {price}
        </p>
        {cart && cart.find((e) => e?.productId?._id == productId) ? (
          <button
            onClick={addToCart}
            className="bg-gray-500 rounded-2xl px-2 py-1 font-bold italic text-gray-300 cursor-not-allowed"
          >
            Add to cart
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="bg-orange-500 rounded-2xl px-2 py-1 font-bold italic text-gray-300 cursor-pointer"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
