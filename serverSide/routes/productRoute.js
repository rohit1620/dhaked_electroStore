const {getProduct,getProductById,addProduct,updateProduct,deleteProduct,addManyProduct} =require("../controllers/productController")
const express=require("express");

const router=express.Router();
router.route("/").get(getProduct);
router.route("/:id").get(getProductById);
router.route("/add").post(addProduct);
router.route("/addmany").post(addManyProduct)
router.route("/update/:id").patch(updateProduct);

router.route("/delete/:id").delete(deleteProduct)

module.exports=router;