const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send(`Hello world from the server router` );
});
router.post('/register',(req,res) =>{
    const { name,email,phone,work,password,cpassword } = req.body;
   if(!name || !email || !phone || !work || !password || !cpassword){
    return res.status(422).json({error :"please filled the field properly"});
   }
});


module.exports = router;