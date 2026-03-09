const {register,login,varify} =require("../controllers/authController");
const express=require("express");

const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/varify").post(varify)

module.exports=router;