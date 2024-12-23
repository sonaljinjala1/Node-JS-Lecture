const { log } = require("console");
const http = require(`http`);

const port = 8000;

const server = http.createServer((req,res)=>{
    res.write(`<h1>I AM Node JS Developer</h1>`);
    res.write(`<h1> Node JS Developer</h1>`);
    res.write(`<h1>Node JS </h1>`);
    res.end();
});

server.listen(port,(err)=>{
    if(!err){
        console.log(`Server is run on port ${port}`);
    }
})

//most IMPORTANT:-

// //var m var terminal ctrl+c n karvu pade te mate ________(1).First_Step_[npm i nodemon] ____________karvu pade che. and packjson ma
// 
//  [ ______(2). Second_Step_  
//      ,
//   "scripts": {
//     "start":"nodemon index.js"
//   }]   karvu pade che. tethi var m var terminal  ma [node index.js]  lakhvu n pade. te mate apne compalsary uper na 2-step compalsary follow karva
