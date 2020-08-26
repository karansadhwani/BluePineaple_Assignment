function sayHi(){

        console.log("Hello World");

}

sayHi();


// Another method


function funcCall(fun){              // funcCall calls the fun which is passed explicitly   
    fun();
}

var ByeBye= function(){             // ByeBye is function
    console.log("Bye Bye");     
}

funcCall(ByeBye);                   // Calling ByeBye() Through funcCall() 