const User =require("../models/authSchema");
const Otp=require("../models/optSchema")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const sendOtpMail= require("../utils/email")

const generateOpt=()=>{
    return Math.floor(100000 + Math.random()*900000).toString()
}

const generateToken=(id,role)=>{
    return jwt.sign({id,role},process.env.JWT_SECRATE,{expiresIn:"30d"})
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
         const {email,password}=req.body;
         const userExist=await User.findOne({email});
         if(!userExist){
            return res.status(400).json({"msg":"Invailid credentials"})
         }
         const isMatch=await bcrypt.compare(password,userExist.password);
         if(!isMatch){
            return res.status(400).json({"msg":"Invailid credentials"})
         }
         if(!userExist.isVerified && userExist.role!=="admin"){
            const otp=generateOpt();
            await Otp.findOneAndDelete({email,type:"account varification"})
            await Otp.create({email,otp,type:"account varification"});
            await sendOtpMail(email,otp,"account varification");
            res.status(400).json({"msg":"Account not verified",needsVerification:true,email:userExist.email})
         }
         res.status(200).json({"msg":"Login successfully",id:userExist._id,name:userExist.name,role:userExist.role,email:userExist.email,token:generateToken(userExist._id,userExist.role)})
} catch (error) {
     res.status(500).json({"msg":"internal error",error})
}
}

const varify=async(req,res)=>{
    try {
        const {email,otp}=req.body;
        const validOtp= await Otp.findOne({email,otp,type:"account varification"});
        if(!validOtp){
          return res.status(400).json({"msg":"invailid otp or expires otp"})
        }
        const user=await User.findOneAndUpdate({email},{isVerified:true},{new:true});
        await Otp.deleteOne({_id:validOtp._id})
        res.status(200).json({"msg":"email verified successfully"})
            
    } catch (error) {
         res.status(500).json({"msg":"internal error",error})
    }
}

module.exports={register,login,varify}