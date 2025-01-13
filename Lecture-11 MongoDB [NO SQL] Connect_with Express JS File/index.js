//express ejs file ne atteched karne ke liye ye code likhna padata he
const express = require('express');

//local server pe apni file ko run karne ke liye hame ye code likhna compalsary he
const port = 8080;

//express app create karne ke liye
const app = express();

//mongodb ko connect karne ke liye code likhna padata he
const db = require('./config/db');

//css file ne atteched karne ke liye ye code likhna padata he
const path = require('path');

//express ejs file ne atteched karne ke liye ye code likhna padata he
app.set('view engine' ,'ejs');

//css file ne atteched karne ke liye ye code likhna padata he
app.use('/' ,express.static(path.join(__dirname,'assets')));

//multiple pages atteched karna ke ke liye te code likhna  padata he
app.get('/' ,(req,res)=>{
    return res.render('home');
})

//local server pe apni file ko run karne ke liye hame ye code likhna compalsary he.
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server is running on port:https://localhost:${port}`);
})

