// // Reading the file (Synchronous)

// var fs= require('fs');

// var readMe = fs.readFileSync('readMe.txt' , 'utf8');
// console.log(readMe);


// // Write a file (Synchronous)

// var readMe = fs.readFileSync('readMe.txt' , 'utf8');
// fs.writeFileSync('writeMe.txt' , 'Hello there i am writing into the file');

// Reading a file (Asynchronous)

 fs.read('readMe.txt' , 'utf8', function(err, data){
            fs.writeFile('writeMe.txt',data);
 });
