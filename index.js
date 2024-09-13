const express = require('express');
const app = express();
const port=4000;

app.get('/',(req,res)=>{
    res.send("deployment in vercel");
})

app.get('/home',(req,res)=>{
    res.send("this is home page")
})

app.listen(port,(req,res)=>{
    console.log(`app is listening on ${port}`)
})