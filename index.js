const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));

app.listen(3000,()=>{
    console.log('app running on 3000');
})

app.get('/', (req, res)=> {
    res.json({
        message: 'hello world'
    });
});

app.get('/index',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'));
})

app.get('/contact', (req,res)=>{
    res.sendFile(path.resolve(__dirname),'contact.html');
});
app.get('/error', (req,res)=>{
    res.sendFile(path.resolve(__dirname),'error.html');
});