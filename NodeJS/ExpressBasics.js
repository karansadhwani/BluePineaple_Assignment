var express = require('express');

var app = express();

app.get('/',function(req,res){
        res.send('Welcome to the home page');
});

app.get('/contact',function(req,res){
        res.send('This is Contact Page');
});

app.listen(3000);

