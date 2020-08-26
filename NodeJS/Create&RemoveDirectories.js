var fs= require('fs');

//  fs.mkdirSync('dir');                // Creating the Directory

// fs.rmdirSync('dir');                // Removing the Directory

fs.mkdirSync('dir',function(){
        fs.readFile('readMe.txt','utf8',function(err,data){
            fs.writeFile('./writeMe.txt',data);
        });
    });


    
 //fs.rmdirSync('dir');                // Removing the Directory
