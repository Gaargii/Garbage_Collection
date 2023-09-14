const dotenv = require("dotenv");
const mongoose = require(`mongoose`);
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json);
//we link router files to make our routes easy
app.use(require('./router/auth'));
const PORT = process.env.PORT;
//const DB =  `mongodb+srv://gargi:gargi@cluster0.lxznm6t.mongodb.net/mernstack?retryWrites=true&w=majority`;


// Middleware
const middleware = (req,res,next) =>{
    console.log(`Hello my middleware`);
    next();
}

//app.get('/',(req,res)=>{
  //  res.send(`Hello world from the server` );
//});
app.get('/about',middleware,(req,res)=>{
    res.send(`Hello about from the server` );
});
app.get('/contact',(req,res)=>{
    res.send(`Hello contact from the server` );
});
app.get('/signin',(req,res)=>{
    res.send(`Hello login from the server` );
});
app.get('/signup',(req,res)=>{
    res.send(`Hello sign up from the server` );
});
app.listen(PORT,()=>{
    console.log(`Server is running at port no. ${PORT}`);
})
