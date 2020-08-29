// a perfect number is a number that is equal to the sum of its divisors

const prompt= require("prompt-sync")();

var number = prompt('Enter number : ');
//console.log(`Entered Number is ${number}`);


//var number=7;
var perfect=0;

for(var i=1;i<=(number/2);i++){

        if(number%i==0){                //it checks that NUMBER is totally divided by DIVISOR.(Remainder = 0)              
            perfect += i;
        }

}

    if(number==perfect){                // if the addition of PERFECT DIVISORS- is equals to NUMBER then it is PERFECT NUMBER
        console.log(number+" is a perfect number ");
    }
    else    
        console.log(number+" is NOT a perfect number");

