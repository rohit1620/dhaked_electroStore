const mongoose = require("mongoose");


const authSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isVarified:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const User= mongoose.model("USer",authSchema);

module.exports=User;