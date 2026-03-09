
const saveAddress=async(req,res)=>{
    try {
       
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

const getAddress=async(req,res)=>{
    try {
             
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

module.exports={saveAddress,getAddress}