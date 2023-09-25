const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cmcart').then(()=>console.log("DB CONNECTED")).catch(()=>console.log("DB ERROR"))
module.exports=mongoose