import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux_toolkit/productSlice";
import productItem from "../components/ProductItem";
import ProductItem from "../components/ProductItem";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const product = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.item);
  console.log("product data", data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  useGSAP(() => {
    gsap.from(".product>div", {
      y: 50,
      stagger: 0.3,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="flex">
      <div className=" hidden lg:block w-64 h-screen fixed left-0 top-15 z-50 bg-pink-400 shadow-sidebar flex flex-col gap-y-1 m-auto pl-20 pt-4 ">
        <h1 className="text-2xl text-blue-600 mb-2 italic font-bold">
          category
        </h1>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="" />

          <label htmlFor="">Tv</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Frize</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Coolar</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">whashing</label>
        </div>
      </div>

      <div className=" w-full lg:mx-64 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-7 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pb-10 product">
        {data && data.map((el, index) => <ProductItem item={el} key={index} />)}
      </div>
      <div className="bg-pink-200 w-64  h-screen fixed right-0 top-15 hidden lg:block">
        <img
          src="https://img.freepik.com/free-vector/electronic-sale-poster_1302-5850.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default product;
