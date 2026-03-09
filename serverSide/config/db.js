const mongoose=require("mongoose");

const connectDb=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/electronic")
        console.log("connection successfully")
    } catch (error) {
        console.log("internals error",error)
    }
}

module.exports=connectDb