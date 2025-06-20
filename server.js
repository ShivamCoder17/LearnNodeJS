// console.log("Inside Server");

// To acces .env variables we have to install .env package from npm
require('dotenv').config()
console.log(process.env.PORT);

const express = require('express');
const app = express();
const path=require('path');
const DB = require('./config/db');

app.set("view engine","ejs");
app.set("views","taskViews");
app.use(express.static(path.join(__dirname,"/public")))

app.use(express.urlencoded({
    extended:true
}))
app.use(require('./routes/task.routes'));

app.listen(process.env.PORT,async()=>{
    DB.connectDb();
    console.log(`Server is running @http://127.0.0.1:${process.env.PORT}`)
})
