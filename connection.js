// 1.impoort mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://manu0804:manu@cluster0.uyaxilh.mongodb.net/Openchdb1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to db");
})    
.catch((error)=>{
    console.log(error)
})