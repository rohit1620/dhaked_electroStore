import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cartpage from "./Cartpage";
import Login from "./Login";
import Signup from "./Signup";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import PageNotFount from "./PageNotFount";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/produtdetails" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cartpage" element={<Cartpage />} />
      <Route path="*" element={<PageNotFount />} />
    </Routes>
  );
};

export default AllRoutes;
