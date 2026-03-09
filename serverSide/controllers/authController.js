

const register=async(req,res)=>{
    try {
            
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

const login=async(req,res)=>{
try {
         
} catch (error) {
     res.status(500).json({"msg":"internal error",error})
}
}

const varify=async(req,res)=>{
    try {
            
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

module.exports={register,login,varify}