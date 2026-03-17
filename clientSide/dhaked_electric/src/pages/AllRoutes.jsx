import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Product from "./product";
import Cart from "./Cart";
import Login from "./Login";
import Singup from "./Singup";
import ProductDetails from "./ProductDetails";
import Profile from "../components/Profile";
import PageNotFound from "./PageNotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/productdetails:id" element={<ProductDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
