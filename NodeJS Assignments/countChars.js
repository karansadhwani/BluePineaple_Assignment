// Counting the Occurence of Characters

var str=String("AAaabBccC");
var str=str.toLowerCase();

var flag= Boolean;



    for(var i=0;i<str.length;i++){      

        flag=true;    
        count=0;
      
            
            for(var j=0;j<str.length;j++){

                var k=i;
                    if(str[k]==str[k+1]){           // To avoid the printing of Result for multiple times we will compare if the Chars are repeating or Not.
                                                    // if current char is A and next Char is also A then Flag will remain False but Count will be increased.
                            flag=false;
                
                    }


                    if(str[i]==str[j]){
                            count++;            // If the Chars are Matching then we will be incresing Count.
                    }


            }

          
            if(flag==true){                     // If the flag is true then only it will be Printing Results.
                console.log("Count of : "+str[i]+" is "+count);
            }   
            
            

    }
        
//     RESULT :

//     PS F:\BluePineapple\Trainings\NodeJS Assignments> node .\countChars.js
// Count of : a is 4
// Count of : b is 2
// Count of : c is 3