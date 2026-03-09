
const saveOrder=async(req,res)=>{
    try {
              
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

const getOrder=async(req,res)=>{
    try {
           
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

module.exports={saveOrder,getOrder}