var express =require('express');
var {coursemodel}=require('../models/courseModel');
var courserouter =express.Router();

courserouter.post("/",async(req,res)=>{
    try {
        var coursedata = new coursemodel(req.body);
        var result =await coursedata.save();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
courserouter.get('/viewall',async(req,res)=>{
    try {
        var result =await  coursemodel.find();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
module.exports=courserouter;