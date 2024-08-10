const colors = require('colors');
const express = require('express');
const dotenv= require("dotenv").config();

const app = express(); 
const PORT = process.env.PORT||5009;

app.get('/api/contacts',(req,res)=>{
    res.status(200).json({message:'get all contacts'});
})

app.listen(PORT, () => {
    console.log(`Port running on ${PORT}`.bgBlue)
})