/* Javascript syntax = Declaration variable = DataTransfer;
   Typescript syntax = Declaration variable : Data Type = Data; 
   
   Variable Declaration types in Js/TS:

       1) Const 
       2) let
       3) var

    variable declaration based on 4 parameter

       1) Initialization
       2) Re-Assignment
       3) Re-Declaration
       4) scope  
*/

// --------------------Const - feature-----------------------------

    const a = 10 ;
  //const a = 20 ;    ---->  Error cannot able to Re-Declare variable a to some other value
       // a = 20 ;    ---->  initialised a to 10 and Re-assingned to 20 - Run time Error===> No comiple time error 
     console.log("Value of a : "+ a);

// ---------------------let - feature-----------------------------------------------------------


     let b=10;
   //let b=20;         -----> it will allow you to redeclare the variable
         b=20;       //-----> let - allows you to reassingment the variable
     console.log("Value of b: "+b);

//------------------------ var - feature-----------------------------------------------------------
   
     var c = 10;
     var c = 20;    //------> Allow Re-declaration - so we are not using it
         c = 30;    //-------> Allow Re-assignment -Final value of c is 30
         console.log("Value of c: "+c);

//----------------------------------Scope of variable-------------------------------------------

{  
    
   let   d = 10; // Block scope
   const e = 20; // Block scope
   var   f = 30;

   console.log(d);
   console.log(e);

}

// console.log(d);   Error - not defined - due to block scope of let declaration
// console.log(e);   Error - not defined - due to block scope of const declaration
   console.log(f);

//===================================Block scope sample example ===============================


{
    let x = 5;

     console.log ("value outside below let loop:" +x); // Output = 5

    {  x = x+1;
        console.log ("value inside below let loop:" +x); // Output = 6

        { x = x+2;
            console.log ("value inside of inside below let loop:" +x); // Output = 8
        }
        
    }
   
   x = x-7;
    console.log ("value outside within blockscope:" +x); // Output = 1

}

console.log ("outside blockscope:" +x); // Run time error Referencetype : x is undefined



