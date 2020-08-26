var express = require('express');

var app = express();

app.get('/',function(req,res){
        res.send('Welcome to the home page');
});

app.get('/contact',function(req,res){
        res.send('This is Contact Page');
});

app.get('/profile/:id', function(req,res){              // loccalhost:3000/profile/1234
    res.send('You requested to see a profile with the ID of '+ req.params.id);
});


app.listen(3000);

