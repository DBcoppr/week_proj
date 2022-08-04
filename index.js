const express=require("express")
const app=express()
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const BookRouter=require("./routes/bookRoute")
app.use(bodyparser.json())
app.use("/",BookRouter)

run=async()=>{
    await mongoose.connect("mongodb://localhost:27017/book").then((res)=>console.log(" db connected book")).catch((err)=>console.log("Db notconnect"))
    await mongoose.connect("mongodb://localhost:27017/userinfo").then((res)=>console.log(" db connected user")).catch((err)=>console.log("db not connected"))
}
run()


app.listen(3005,()=>console.log("server hosted at 3005"))

