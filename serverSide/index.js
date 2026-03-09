const express=require("express");

const app= express();

app.get("/",(req,res)=>{
    res.status(200).json({"msg":"home page"})
})

app.listen(3000,()=>{
    console.log("server running on port 3000")
})