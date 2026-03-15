const Cart=require("../models/cartSchema")

const getCart=async(req,res)=>{
    try {
           const {id}=req.params;
           const cart=await Cart.find({userId:id}).populate("items.productId");
           res.status(200).json(cart)
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}



const addToCart=async(req,res)=>{
    try {
      const {userId,productId}=req.body;
      // console.log("req.body",userId,productId)
      let cart= await Cart.findOne({userId});
      //  console.log("cart me",cart)
      if(!cart){
        cart = new Cart({userId,items:[{productId,quantity:1}]});
      }else{
          const item=cart.items.find((i)=>i.productId.toString()===productId);
          if(item){
            item.quantity+=1;
          }else{
            cart.items.push({productId,quantity:1})
          }
      }
      await cart.save();
      res.status(200).json({"msg":"add cart item"})
            
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

const updateQuantity=async(req,res)=>{
    try {
      const {userId,productId,quantity}=req.body;
      const cart =await Cart.findOne({userId});
      if(!cart){
        return res.status(400).json({"msg":"cart not found"})
      }
      const item=cart.items.find((i)=>i.productId.toString()===productId);
      if(!item){
        return res.status(400).json({"msg":"item not found"})
      }
      item.quantity=quantity;
      await cart.save();
        res.status(400).json({"msg":"cart updated successfully"})
             
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

const deleteCart=async(req,res)=>{
    try {
         const {userId,productId}=req.body;
         const cart=await Cart.findOne({userId});
         if(!cart){
             return res.status(400).json({"msg":"cart not found"})
         }  
         cart.items=cart.items.filter((i)=>i.productId.toString()!==productId);
         await cart.save();
         res.status(200).json({"msg":"cart deleted"})
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

module.exports={getCart,addToCart,updateQuantity,deleteCart}