// console.log("Inside Server");

// To acces .env variables we have to install .env package from npm
require('dotenv').config()
console.log(process.env.PORT);

const express = require('express');
const app = express();
const path=require('path');

app.set("view engine","ejs");
app.set("views","views");
app.use(express.static(path.join(__dirname,"/public")))


app.use(require('./routes/app.routes'));

app.listen(process.env.PORT,async()=>{
    console.log(`Server is running @http://127.0.0.1:${process.env.PORT}`)
})
