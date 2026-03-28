import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux_toolkit/productSlice";
import productItem from "../components/ProductItem";
import ProductItem from "../components/ProductItem";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loading from "../components/loading";

const product = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.item);
  const status = useSelector((state) => state.product.status);
  console.log("product data", data);

  useEffect(() => {
    // setLoading(true);
    dispatch(fetchData());
    // setLoading(false);
  }, []);

  useEffect(() => {
    const getData = async () => {
      let param = new URLSearchParams();
      // selectedCategory.forEach((el) => param.append("category", el));
      // Check karein ki array khali na ho
      if (selectedCategory.length > 0) {
        selectedCategory.forEach((el) => param.append("category", el));
      }

      const queryString = param.toString(); // "category=watch" jaisa banega
      console.log("Query String:", queryString);

      // String bhejein, object nahi
      dispatch(fetchData(queryString));
    };
    getData();
  }, [selectedCategory]);
  const handleChange = async (e) => {
    let value = e.target.value;

    // Pehla letter Capital baaki small
    // const value =
    //   rawValue.charAt(0).toUpperCase() + rawValue.slice(1).toLowerCase();
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedCategory([...selectedCategory, value]);
    } else {
      setSelectedCategory(selectedCategory.filter((item) => item != value));
    }
  };

  useGSAP(() => {
    if (status == "success") {
      if (data && data.length > 0) {
        gsap.from(".product>div", {
          y: 50,
          stagger: 0.3,
          opacity: 0,
          duration: 1.5,
        });
      }
    }
  }, [status]);

  return (
    <>
      <div className="bg-yellow-600 px-2 py-3 font-bold italic lg:hidden">
        {" "}
        <input
          type="checkbox"
          name=""
          id=""
          value="Frize"
          onChange={handleChange}
          checked={selectedCategory.includes("Frize")}
          className="cursor-pointer"
        />
        <label htmlFor="" className="pr-4 pl-1">
          Frize
        </label>
        <input
          type="checkbox"
          name=""
          value="Tv"
          id=""
          onChange={handleChange}
          checked={selectedCategory.includes("Tv")}
          className="cursor-pointer"
        />
        <label htmlFor="" className="pr-4 pl-1">
          Tv
        </label>
        <input
          type="checkbox"
          name=""
          id=""
          value="Cooler"
          onChange={handleChange}
          checked={selectedCategory.includes("Cooler")}
          className="cursor-pointer"
        />
        <label htmlFor="" className="pr-4 pl-1">
          Cooler
        </label>
        <input
          type="checkbox"
          name=""
          id=""
          value="Smartwatch"
          onChange={handleChange}
          checked={selectedCategory.includes("Smartwatch")}
          className="cursor-pointer"
        />
        <label htmlFor="" className="pr-4 pl-1">
          watch
        </label>
        <input
          type="checkbox"
          name=""
          id=""
          value="Laptop"
          onChange={handleChange}
          checked={selectedCategory.includes("Laptop")}
          className="cursor-pointer"
        />
        <label htmlFor="" className="pr-4 pl-1">
          Laptop
        </label>
      </div>
      <div className="flex">
        <div className=" hidden lg:block w-64 h-screen fixed left-0 top-15 z-50 bg-pink-400 shadow-sidebar flex flex-col gap-y-1 m-auto pl-20 pt-4 ">
          <h1 className="text-2xl text-blue-600 mb-2 italic font-bold">
            category
          </h1>
          <div className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name=""
              value="Tv"
              id=""
              onChange={handleChange}
              checked={selectedCategory.includes("Tv")}
              className="cursor-pointer"
            />

            <label htmlFor="">Tv</label>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name=""
              id=""
              value="Frize"
              onChange={handleChange}
              checked={selectedCategory.includes("Frize")}
              className="cursor-pointer"
            />
            <label htmlFor="">Frize</label>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name=""
              id=""
              value="Cooler"
              onChange={handleChange}
              checked={selectedCategory.includes("Cooler")}
              className="cursor-pointer"
            />
            <label htmlFor="">Cooler</label>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name=""
              id=""
              value="Smartwatch"
              onChange={handleChange}
              checked={selectedCategory.includes("Smartwatch")}
              className="cursor-pointer"
            />
            <label htmlFor="">watch</label>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name=""
              id=""
              value="Laptop"
              onChange={handleChange}
              checked={selectedCategory.includes("Laptop")}
              className="cursor-pointer"
            />
            <label htmlFor="">Laptop</label>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name=""
              id=""
              value="Mobile"
              onChange={handleChange}
              checked={selectedCategory.includes("Mobile")}
              className="cursor-pointer"
            />
            <label htmlFor="">Mobile</label>
          </div>{" "}
          <div className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              name=""
              id=""
              value="Speaker"
              onChange={handleChange}
              checked={selectedCategory.includes("Speaker")}
              className="cursor-pointer"
            />
            <label htmlFor="" className="">
              Speaker
            </label>
          </div>
        </div>
        {/* <div> */}

        <div className=" w-full lg:mx-64 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-7 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pb-10 product">
          {status == "loading" ? (
            <Loading />
          ) : (
            data &&
            data.map((el, index) => <ProductItem item={el} key={index} />)
          )}
        </div>
        {/* </div> */}
        <div className="bg-pink-200 w-64  h-screen fixed right-0 top-15 hidden lg:block">
          <img
            src="https://img.freepik.com/free-vector/electronic-sale-poster_1302-5850.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default product;
