const colors = require('colors');
const express = require('express');
const dotenv= require("dotenv").config();
const errorHandler= require('./middleware/errorHandle');
const connectDb = require('./config/dbConnection');

const app = express(); 
const PORT = process.env.PORT||5009;
connectDb();

app.use(express.json()) //middleware used to parse incoming requests with JSON payloads. When a client sends data to the server in JSON format (e.g., in the body of a POST request), this middleware processes that data and makes it available on req.body within your route handlers.

// here we changed get->use; we are using middleware
app.use('/api/contacts',require('./routes/contactRoute')) 

//we are calling a middleware named error handler, to use middleWare we write 'use' like 'app.use'
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Port running on ${PORT}`.bgBlue)
})