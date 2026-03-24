const {getCart,addToCart,updateQuantity,deleteCart}=require("../controllers/cartController")
const express=require("express");

const router=express.Router();
router.route("/:id").get(getCart);
router.route("/add").post(addToCart);
router.route("/update").post(updateQuantity);
router.route("/delete").post(deleteCart)

module.exports=router;