const {getCart,addToCart,updateQuantity,deleteCart}=require("../controllers/cartController")
const express=require("express");

const router=express.Router();
router.route("/:id").get(getCart);
router.route("/add").post(addToCart);
router.route("/update").patch(updateQuantity);
router.route("/delete").delete(deleteCart)

module.exports=router;