const colors = require('colors');
const express = require('express');
const dotenv= require("dotenv").config();

const app = express(); 
const PORT = process.env.PORT||5009;

// here we changed get->use; we are using middleware
app.use('/api/contacts',require('./routes/contactRoute')) 

app.listen(PORT, () => {
    console.log(`Port running on ${PORT}`.bgBlue)
})