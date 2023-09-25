const express = require('express');
const path = require ('path');
const app = express();
const PORT = 3000;
const mongoose=require('./Config/database.js');


//  view Engine setup 


app.set('views' , path.join(__dirname, 'views/layouts'));
app.set('view engine' ,'ejs' );

// Public folder setup 

app.use(express.static(path.join(__dirname , 'Public')));

// Routes 

var pages=require('./Routes/pages.js');
var adminPages=require('./Routes/admin_pages.js')
app.use('/admin/pages' , adminPages)
app.use('/' , pages)




// SERVER IS LISTENING 


app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}`)
})