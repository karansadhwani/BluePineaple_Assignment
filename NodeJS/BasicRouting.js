var http= require('http');
var fs= require('fs');
const { equal } = require('assert');

var server = http.createServer(function (req,res){

        console.log('request was made: '+req.url);

        if(req.url === '/home' || req.url==='/'){
            res.writeHead(200, {'Content-Type':'text/html'});
            fs.createReadStream(__dirname+'/index.html').pipe(res);
        }

        else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
         }

         else if(req.url === '/api/ninjas'){
                var ninjas = [{name:'Karan',place:'nasik',telNo:'8181818181'},{name:'Alia',place:'jail Road',telNo:'9191919191'}];
                res.end(JSON.stringify(ninjas));
            }

            else{
                res.writeHead(404,{'Content-type':'text/html'});
                fs.createReadStream(__dirname+'/404.html').pipe(res);
            }
});


server.listen(3000, '127.0.0.1');
console.log('Yo Dangs I am Karan here');