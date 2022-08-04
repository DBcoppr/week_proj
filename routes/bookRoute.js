const express=require("express")
const router=express.Router()
const Controllers=require("../controllers/bookController")
// router.get("/",Controllers.login) 
router.post("/add_user",Controllers.signup)
router.post("/add_book",Controllers.addBook)
module.exports=router

