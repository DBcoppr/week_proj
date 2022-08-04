const mongoose=require("mongoose")
const Schema=mongoose.Schema
const Usermodel=new Schema({
    Name:{
        type:String,

    },
    Password:{
        type:String
    },
    Role:{
        type:String
    },
    Likebooks:{
        type:Array,
        default:[]
    },
    Laterbooks:{
        type:Array,
        default:[]
    }
})
const userModel=mongoose.model("userModel",Usermodel)
module.exports=userModel
