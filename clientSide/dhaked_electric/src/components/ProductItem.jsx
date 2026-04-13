import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartData } from "../redux_toolkit/cartSlice";
import { fetchData } from "../redux_toolkit/productSlice";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";

const ProductItem = ({ item }) => {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { image, name, price, category, _id } = item;
  // console.log("item", item);
  // let userId = "69b0f75d329c4587a89239d1";
  let userId = localStorage.getItem("userid");
  let productId = _id;
  const addToCart = async () => {
    if (!userId) {
      alert("Please Singup and Login First");
      navigate("/singup");
    }
    const data = await api.post("/cart/add", { userId, productId });
    dispatch(cartData());
    getCartItem();
    // dispatch(fetchData());
    // console.log("cart-item", data);
  };

  const getCartItem = async () => {
    let value = await api.get(`/cart/${userId}`);
    // console.log("id", value?.data[0]?.items);
    value = value?.data[0]?.items;
    setCart(value);
  };
  useEffect(() => {
    getCartItem();
  }, []);

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [cart]);

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
