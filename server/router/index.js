const express=require('express');
const router=express.Router();
const db=require('../db');
const jwt =require('jsonwebtoken');
const verify=require('./verifytoken')


router.post ('/login',async(req,res,next)=>{
    try{
        let result= await db.Login(req.body.username);
if (!result.length >0) return res.status(400).send("user not found");
if (!(result[0].password===req.body.password)) return res.status(400).send("password not found");
const token=jwt.sign({username:result[0].username},'oiuyhjklmnbvcxdfr');
res.send({ message:"success",
    islogin:true,
    Token:token});


    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});

router.get ('/',async(req,res,next)=>{
    try{
        let result= await db.all();
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.get ('/:id',async(req,res,next)=>{
    try{
        let result= await db.one(req.params.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.post ('/',async(req,res,next)=>{
    
    try{
        let result= await db.insert(req.body.id,req.body.name,req.body.date);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.delete ('/',async(req,res,next)=>{
    try{
        let result= await db.delete(req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});
router.put ('/',async(req,res,next)=>{
    try{
        let result= await db.put(req.body.name,req.body.id);
res.json(result);

    }catch (e) {
        console.log(e);
        res.sendStatus(500);


    }

});


module.exports=router;