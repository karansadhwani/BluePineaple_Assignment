var http= require('http');
var fs= require('fs');

var server = http.createServer(function (req,res){

        console.log('request was made: '+req.url);
        res.writeHead(200,{'Content-Type':'text/html'});

        var Obj = {
            name:'Karan',
            job : 'Cloud Analyst',
            age:'22'
        };

        res.end(JSON.stringify(Obj));

});


server.listen(3000, '127.0.0.1');
console.log('Yo Dangs I am Karan here');