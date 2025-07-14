const express = require('express'); // Load express modules 
const path = require('path');

const app = express(); // Return express application
const PORT = 8080; // set port 
var routes = require('./routes/index'); // Load Router module

// template으로 html 사용하기 위함
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// router 설정
app.use('/', routes);

// starts a server and listens on port 8080 for connections
app.listen(PORT, (err)=>{
    if(err) return console.log(err);
    console.log(`Server is on ${PORT}`);
});