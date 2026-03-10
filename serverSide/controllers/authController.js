const User =require("../models/authSchema");
const Otp=require("../models/optSchema")
const bcrypt=require("bcrypt");
const sendOtpMail= require("../utils/email")

const generateOpt=()=>{
    return Math.floor(100000 + Math.random()*900000).toString()
}

const register=async(req,res)=>{
    try {
           const {username,email,password,phone}=req.body;
           const userExist=await User.findOne({email});
           if(userExist){
               return res.status(400).json({"msg":"user already exist"})
           }
           const salt=await bcrypt.genSalt(10)
           const hashPassword=await bcrypt.hash(password,salt)
        await User.create({username,email,password:hashPassword,phone})
        const otp=generateOpt();
        console.log("opt",otp)
        await Otp.create({email,otp,type:"account varification"})
        await sendOtpMail(email,otp,"account varification")
        res.status(200).json({"msg":"register successfully"})
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