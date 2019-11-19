const http = require('http');
const fs = require('fs');
const loginPage = fs.readFileSync('loginpage.html');
const contactPage = fs.readFileSync('contact.html');
const homePage = fs.readFileSync('homepage.html');
const error = fs.readFileSync('error.html');

const server = http.createServer((req,res) => {
    console.log('url is '+ req.url);
    let a = req.url;
   
    if(req.url === '/login'){
        res.end(loginPage);
    }
    else if(req.url === '/home'){
        res.end(homePage);
    }
    else if(req.url === '/contact'){
        res.end(contactPage);
    }
    else if(req.url === '/favicon.ico'){
        res.end('favicon');
    }
    else{
        console.log('else block')
        res.writeHead(404);
        res.end(error);
    }
    //res.end('welcome to node js');
});
server.listen(3000);