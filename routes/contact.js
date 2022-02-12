const path = require('path')

const express = require("express");

const rootDir = require("../util/path")

const router  = express.Router();


router.get('/contactus',(req,res, next) =>{
  res.sendFile(path.join(rootDir,'views','contact.html'))
});

router.post('/success',(req,res,next)=>{
const {name,email}=req.body;
console.log(name,email);
res.send('Form successfuly filled')

})




module.exports = router;