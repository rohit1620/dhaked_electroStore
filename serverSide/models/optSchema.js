const mongoose=require("mongoose");

const OptSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    type:{
        type:String,
        requied:true
    },
    createdAt:{type:Date, default:Date.now(),expires:300}
});

const Otp=mongoose.model("Otp",OptSchema);

module.exports=Otp;