import express from "express"

const PORT=process.env.PORT||8000
const app=express()

app.get('/',(req,res)=>{
    res.json({message:"app is running on docker"})
})

app.listen(PORT)