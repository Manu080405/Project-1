// 1. import express
var express = require('express');
require('./connection')
const user = require('./model/user');

// 2.initialization
var app = express();

// middleware
app.use(express.json());
// 3.api
app.get('/',(req,res)=>{
    res.send("HELLO!!!");
})

app.get('/login',(req,res)=>{
    res.send("HELLO!!! LOGIN SUCCESSFUL");
})

// to add data to db
app.post('/add',async(req,res)=>{
    try{
        console.log(req.body);
        await user(req.body).save();
        res.send({message:"Data added successfully!!"})
    } catch (error) {
        console.log(error)
    }
})

// to view all the users
app.get('/view',async(req,res)=>{
    try {
        const data = await user.find();
        res.send(data)
    } catch(error) {
        console.log(error)
    }
})  

// to delete any users
app.delete('/remove/:id',async(req,res)=>{
    try {
        console.log(req.params.id)
        await user.findByIdAndDelete(req.params.id)
        res.send({message:"Deleted"})
    } catch(error) {
        console.log(error)
    }    
})

// to update any user
app.put('/edit/:id',async(req,res)=>{
    try {
        var data = await user.findByIdAndUpdate(req.params.id,req.body);
        res.send({message:'Updated Successfuly',data})
    } catch (error) {
        console.log(error)
    }
})
// 4.port allocation
app.listen(3000,()=>{
    console.log("Port is up and running")
})