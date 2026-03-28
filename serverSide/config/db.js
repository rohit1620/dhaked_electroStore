const mongoose=require("mongoose");

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connection successfully")
    } catch (error) {
        console.log("internals error",error)
    }
}

module.exports=connectDb