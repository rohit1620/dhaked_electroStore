import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartData } from "../redux_toolkit/cartSlice";
import CartItem from "../components/CartItem";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.item);
  console.log("cartdata", data);
  useEffect(() => {
    dispatch(cartData());
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
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pb-6">
      <div className=" w-[90%] md:w-[60%] m-auto pt-10 product">
        {data && data.map((el) => <CartItem item={el} key={el._id} />)}
      </div>
    </div>
  );
};

export default Cart;
