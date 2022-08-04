const bookmodel=require("../models/bookModel")
const usermodel=require("../models/userModel")
const Controllers={}
Controllers.signup=async function(req,res){
    const data=req.body
    try{   let udata=await new usermodel({
        Name:data.Name,
        Password:data.Password,
        Role:data.Role,
       }).save()
       return(res.send(udata))
}
catch(err){
    return(res.send("error in book-model"))
}
 
}

Controllers.addBook=async function(req,res){
    const data=req.body
    try{   let bdata=await new bookmodel({
        Name:data.Name,
        Author:data.Author,
        Edition:data.Edition

       }).save()
       return(res.send(bdata))

}
catch(err){
    return(res.send("error in book-model"))
}
 
}














module.exports=Controllers