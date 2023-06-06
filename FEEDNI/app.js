//app.js 
const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;

//route
function route(page, res){
    fs.readFile(page,(err,data)=>{
        res.statusCode = 200 ;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    })
}

const server = http.createServer((req,res)=>{

    page = req.url ;

    switch(page){
    case '/' :
        route('homepage.html',res)
        break;
    case '/catagoty' :
        route('catagoty.html',res)
        break;
    case '/Cooperative' :
        route('Cooperative.html',res)
        break;     
    case '/languages' :
        route('languages.html',res)
        break;   
    case '/login' :
        route('login.html',res)
        break;         
    case '/MyAccount' :
        route('MyAccount.html',res)
        break; 
    case '/programming' :
        route('programming.html',res)
        break; 
    default:
        route('homepage.html',res)
        break;     
    } 
    app.post('/share-experience', (req, res) => {
        const experience = req.body.experience;
        // Save experience to database
        res.status(200).send(); 
    });

});

server.listen(port, hostname,()=> {
console.log('server is runnung on port ' + port);
});
fetch('http://localhost:3000/share-experience', {  
    method: 'POST',   
    headers: {      
      'Content-Type': 'application/json'   
    },      
    body: JSON.stringify({        
      experience     
    })  
}).then(() => {
    alert('Experience shared!');   
    experienceText.value = '';  
})
//for search
fetch(`/api/experiences?search=${searchTerm}&lang=${lang}&city=${city}`)
//app.js
const express = require('express');

const app = express();

app.set('view engine','ejs');

//homepage
app.get('/',function(req,res){
res.sendFile(__dirname +'/homepage.html');
});
//catagory
app.get('/',function(req,res){
    res.sendFile(__dirname +'/catagory.html');
    });
    //Coop
app.get('/',function(req,res){
    res.sendFile(__dirname +'/Cooperative.html');
    });
    //languages
app.get('/',function(req,res){
    res.sendFile(__dirname +'/languages.html');
    });
    //login
app.get('/',function(req,res){
    res.sendFile(__dirname +'/login.html');
    });
    //my account
app.get('/',function(req,res){
    res.sendFile(__dirname +'/myAccount.html');
    });
    //programming
app.get('/',function(req,res){
    res.sendFile(__dirname +'/programming.html');
    });

    app.listen(3000,function(req,res){
        console.log('server is running');
    })

      //register
// auth.service.js

function register(username, password) {
    return fetch('/register', {
        method: 'POST', 
        body: {
        username, 
        password  
    }
    }).then(res => res.json());
}
  
  function login(username, password) {
    return fetch('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  })
      .then(res => res.json());
  }