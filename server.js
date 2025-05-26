// console.log("Inside Server");

// To acces .env variables we have to install .env package from npm
require('dotenv').config()
console.log(process.env.PORT);

const express = require('express');
const app = express();

app.listen(process.env.PORT,async()=>{
    console.log(`Server is running @http://127.0.0.1:${process.env.PORT}`)
})
