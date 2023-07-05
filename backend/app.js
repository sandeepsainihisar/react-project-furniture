var express = require('express')
var cookieParser=require('cookie-parser');
var app = express();

var path = require('path');
var dotenv = require('dotenv');
dotenv.config({path: './config.env'});
require("./db/connection");
app.use(express.json());   // 5-6-23
app.use(cookieParser());

app.use(require('./router/auth'));
//app.use('')


const PORT= process.env.PORT

// app.use('/', router)
app.listen(PORT,()=>{
    console.log('sever run on port no  ${PORT} ')
})