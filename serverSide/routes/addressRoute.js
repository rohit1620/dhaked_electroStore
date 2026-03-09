const {getAddress,saveAddress}=require("../controllers/addressController")
const express=require("express");

const router=express.Router();
router.route("/").get(getAddress);
router.route("/add").post(saveAddress);

module.exports=router;