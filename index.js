const express = require('express');
const app = express();

const middleware1 = (req,res,next) =>{
    console.log("middleware 1");
    next()
}

const middleware2 = (req,res,next) =>{
    console.log("middleware2 for global");
    next()
}

app.use(middleware2);

app.get('/page1', middleware1, (req,res)=>{
    res.send('<h1> page1 with middleware 1 and 2 </h1>')
})

app.get('/page2', (req,res)=>{
    res.send('<h1> page2 with middleware2 </h1>')
})

app.get('/page3', (req,res)=>{
    res.send('<h1> page3 with middleware2 </h1>')
})

app.get('/page4', middleware1, (req,res)=>{
    res.send('<h1> page4 with middleware 1 and 2 </h1>')
})


app.listen(9000,()=>{
    console.log("server is Running");
})