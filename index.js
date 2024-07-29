const express= require('express')

const app=express();

app.listen(5000,()=>{
    console.log("sever is on 5000 port")
})

app.get('/',(req,res)=> {
    res.json("hi  , this is running")
})