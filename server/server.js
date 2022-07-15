import express from "express";
import data from "./data.js";

const app=express();

app.get("/api/products",(req,res)=>{
    res.status(200).send(data.products);
})


app.get("/api/products/slug/:slug",(req,res)=>{
    const product=data.products.find(product=>product.slug===req.params.slug);
    if(product) {
        return res.status(200).send(product);
    }else{
        return res.status(404).json({message:"Product not Found"});
    }
    
})


const port=process.env.PORT||4000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
})

