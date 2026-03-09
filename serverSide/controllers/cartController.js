
const getCart=async(req,res)=>{
    try {
           
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}



const addToCart=async(req,res)=>{
    try {
            
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

const updateQuantity=async(req,res)=>{
    try {
             
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

const deleteCart=async(req,res)=>{
    try {
            
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

module.exports={getCart,addToCart,updateQuantity,deleteCart}