const Product= require("../models/productSchema")

const getProduct=async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({"msg":"internal error",error})
    }
}

const getProductById=async(req,res)=>{
    try {
             
    } catch (error) {
          res.status(500).json({"msg":"internal error",error})
    }
}

const addProduct=async(req,res)=>{
    try {
        await Product.create(req.body);
        res.status(200).json({"msg":"Product successfully added"}) 
    } catch (error) {
          res.status(500).json({"msg":"internal error",error})
    }
}

const updateProduct=async(req,res)=>{
    try {
             
    } catch (error) {
          res.status(500).json({"msg":"internal error",error})
    }
}

const deleteProduct=async(req,res)=>{
    try {
              
    } catch (error) {
          res.status(500).json({"msg":"internal error",error})
    }
}

module.exports={getProduct,addProduct,updateProduct,deleteProduct,getProductById}