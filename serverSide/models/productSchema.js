const mongoose=require("mongoose");


const productSchema=mongoose.Schema({
    image:{
        type:String,
        required
    },
    category:{
        type:String,
        required
    },
    name:{
        type:String,
        required
    },
    price:{
        type:String,
        required
    },
    desc:String,
    title:String,
    stock:{
        type:Number,
        default:0
    }


},{timestamps:true});

const Product= mongoose.models("Product",productSchema);

module.exports=Product;