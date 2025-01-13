const express = require('express');
const port = 8080;
const app = express();
app.get('/' , (req,res)=>{
    res.write(`<h1>Har Har Mahadev</h1>`);
    res.write(`<h1>Hello Express JS  YOU are NODE JS Framwork</h1>`);
    // res.send(`Hello World`);
    res.end();
})
app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false; //return false  thi code agal jato nathi
    }
    console.log(`Server is Start on port :- http://localhost:${port}`); 
})
