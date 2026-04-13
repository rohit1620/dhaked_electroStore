const Product= require("../models/productSchema")

const getProduct=async(req,res)=>{
    try {
        const {search,category}=req.query;
        let filter={};
        if(search){
            filter.name={$regex:search, $options:'i'}
        }
        if(category){
            const categoryList=Array.isArray(category)?category:[category]
          filter.category = { $in: categoryList };
        }

        const product=await Product.find(filter).sort({createdAt:-1});
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({"msg":"internal error",error})
    }
}

const getProductById=async(req,res)=>{
    try {
             const {id} =req.params;
             const single=await Product.find({_id:id})
             res.status(200).json(single)
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

const addManyProduct=async(req,res)=>{
    try {
         await Product.insertMany(req.body);
        res.status(200).json({"msg":"Many Product successfully added"}) 
    } catch (error) {
        res.status(500).json({"msg":"internal error",error})
    }
}

const updateProduct=async(req,res)=>{
    try {
 const {id}=req.params
//  console.log(id)
            await Product.findByIdAndUpdate(id,req.body) ;
            res.status(200).json({"msg":"update successfully"})
    } catch (error) {
          res.status(500).json({"msg":"internal error",error})
    }
}

const deleteProduct=async(req,res)=>{
    try {
           await Product.findByIdAndDelete(req.params.id)   
           res.status(200).json({"msg":"product deleted successfully"})
    } catch (error) {
          res.status(500).json({"msg":"internal error",error})
    }
}

module.exports={getProduct,addProduct,updateProduct,deleteProduct,getProductById,addManyProduct}