
const mongoose=require("mongoose")
const Schema=mongoose.Schema
const Bookschema=new Schema({
    Edition:{
        type:Number,
       
    },
    Name:{
        type:String,
       
    },
    Author:{
        type:String,
       
    }

})

const bookmodel=mongoose.model("bookmodel",Bookschema)
module.exports=bookmodel

