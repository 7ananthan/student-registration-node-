var express = require('express');
var {studentmodel}= require('../models/studentModel');

const studentrouter =express.Router();

studentrouter.post('/',async(req,res)=>{
    try {
        var studentdata= new studentmodel(req.body);
        var result =await studentdata.save();
        res.json(result);
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
        
    }
});
studentrouter.get('/viewall',async(req,res)=>{
    try {
        var result = await studentmodel.find();
        res.send(result);        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
module.exports=studentrouter;