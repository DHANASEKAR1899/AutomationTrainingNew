
function prime(value : number): void{

     if (value<= 1) { console.log ("Given value not comes under prime number : " + value); 
                       
                      }
else{
    for (let i : number= 2; i<=Math.SQRT2;i++){


            if(value % i == 0) {console.log("Given number is prime number : " +value);}
            else               {console.log("Given number is not prime number : " +value)}
            
        }
    }

}
prime(17);


