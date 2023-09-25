const express = require('express');
const router = express.Router();


router.get('/' , (req,res)=>{
    res.send('admin pages')
})

router.get('/test' , (req,res)=>{
    res.send('admin pages test')
})
module.exports=router;