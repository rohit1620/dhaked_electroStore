const {getProduct,getProductById,addProduct,updateProduct,deleteProduct} =require("../controllers/productController")
const express=require("express");

const router=express.Router();
router.route("/").get(getProduct);
router.route("/:id").get(getProductById);
router.route("/add").post(addProduct);
router.route("/update").post(updateProduct);
router.route("delete").post(deleteProduct)

module.exports=router;