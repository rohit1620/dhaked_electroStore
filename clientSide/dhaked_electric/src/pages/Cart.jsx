import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartData } from "../redux_toolkit/cartSlice";
import CartItem from "../components/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.item);
  console.log("cartdata", data);
  useEffect(() => {
    dispatch(cartData());
  }, []);
  return (
    <div className=" w-[80%] md:w-[60%] m-auto mt-10">
      {data && data.map((el) => <CartItem item={el} key={el._id} />)}
    </div>
  );
};

export default Cart;
