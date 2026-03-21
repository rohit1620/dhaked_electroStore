import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux_toolkit/productSlice";
import productItem from "../components/ProductItem";
import ProductItem from "../components/ProductItem";

const product = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.item);
  console.log("product data", data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="flex">
      <div className=" w-64 h-screen fixed left-0 top-15 z-50 bg-pink-200 shadow-sidebar">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut rem
        aperiam exercitationem maiores aliquam nesciunt doloremque voluptas
        asperiores delectus earum nostrum minima, sit quod voluptatem quo
        tempora vel totam!
      </div>
      <div className="  mx-64 px-10 grid grid-cols-3 gap-5 pt-7 bg-pink-200">
        {data && data.map((el, index) => <ProductItem item={el} key={index} />)}
      </div>
      <div className="bg-pink-200 w-64 h-screen fixed right-0 top-15">
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
