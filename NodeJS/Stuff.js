
var counter= function(arr){
    return 'There are '+arr.length+' elements in this array' 
};


var adder = function(a,b){
        return `The sum of the two numbers is ${a+b}`;
};


var pi= 3.142;

module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
};

//OR

// var counter= function(arr){
//     return 'There are '+arr.length+' elements in this array' 
// };


// var adder = function(a,b){
//         return `The sum of the two numbers is ${a+b}`;
// };


// var pi= 3.142;


// module.exports.counter=counter;
// module.exports.adder=adder;
// module.exports.pi=pi;


//OR

// module.exports.counter= function(arr){
//     return 'There are '+arr.length+' elements in this array' 
// };

// module.exports.adder = function(a,b){
//         return `The sum of the two numbers is ${a+b}`;
// };

// module.exports.pi= 3.142;

