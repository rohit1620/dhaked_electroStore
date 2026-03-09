const {getOrder,saveOrder} =require("../controllers/orderController")
const express=require("express");

const router=express.Router();
router.route("/").get(getOrder);
router.route("/add").post(saveOrder);
module.exports=router;