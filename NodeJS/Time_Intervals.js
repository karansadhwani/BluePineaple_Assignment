//Timeout

        setTimeout(function(){
                console.log("3 Secs have passed");
        },3000);





// Time Interval
        var time=0;
    

        var timer=setInterval(function(){

            time+=2;
            console.log(time+" Secs have passed");

            if(time>15){
             clearInterval(timer);
         }

        },2000);

//To knoe Directory of the file

console.log(__dirname);
console.log(__filename);