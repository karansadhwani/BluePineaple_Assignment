var express = require('express');

var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
        res.sendFile(__dirname+'/index.html');
});

app.get('/contact',function(req,res){
        res.sendFile(__dirname+'/contact.html');
});

app.get('/profile/:name', function(req,res){              // localhost:3000/profile/1234
    var data= {age:29,job:'ninja'};
    res.send('profile', {person: req.params.name, data:data} );
});


app.listen(3000);

