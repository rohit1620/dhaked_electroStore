require("dotenv").config();
const express=require("express");
const cors=require("cors")
const connectDb =require("./config/db");
const authRouter=require("./routes/authRoute");
const productRouter=require("./routes/productRoute");
const cartRouter=require("./routes/cartRoute");
const addressRouter=require("./routes/addressRoute");
const orderRouter=require("./routes/orderRoute")


const app= express();
app.use(cors())
app.use(express.json());

app.use("/api/auth",authRouter);
app.use("/api/product",productRouter);
app.use("/api/cart",cartRouter);
app.use("/api/address",addressRouter);
app.use("/api/order",orderRouter);

app.get("/",(req,res)=>{
    res.status(200).json({"msg":"home page"})
})

connectDb().then(()=>{
app.listen(process.env.PORT,()=>{
    console.log("server running on port 3000")
})
})
