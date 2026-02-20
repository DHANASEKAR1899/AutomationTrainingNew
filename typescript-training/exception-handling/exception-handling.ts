//Exception Handling in TypeScript

//Exception + Handling ==>  Handling the exceptions in different ways. 

//1. Try...Catch...Finally Block  ==> When there is an exception, we can handle that particular exception and continue the execution process. 
//2. Throwing our own exceptions  ==> We can throw our own exceptions using the throw keyword.


//1. Try...Catch...Finally Block


//Before Exception Handling
//let empName: any; //declearing a variable

//create error in execution
// console.log(empName.toLowerCase())

// console.log("Execution is Completed");

//After Exception Handling
let newEmpName: any; //declearing a variable
try {
    console.log(newEmpName.toLowerCase())
} catch (error) { // superclass for exceptions in JavaScript is Error

    console.log("An exception occurred. Please check the variable.");
    console.log(newEmpName.toUpperCase())
} finally{
    console.log("Execution is Completed"); //This block will always execute
}


/*
JavaScript does not support multiple catch blocks for a single try. 
Unlike Java or C#, where you can chain multiple catch clauses for different exception types, JavaScript only allows one catch per try.


*/


//=======================================Additional cases ===============================

try {
  // Some code that may throw
  throw new TypeError("Wrong type!");
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Handle TypeError:", error.message);
  } else if (error instanceof ReferenceError) {
    console.log("Handle ReferenceError:", error.message);
  } else if (error instanceof Error) {
    console.log("Handle generic error:", error.message);
  }

}

/* 

- Nested try/catch: You can nest try...catch blocks if you want different handling scopes.
- Multiple try/catch blocks: You can write separate try...catch statements around different code sections, each with its own catch.
- Custom error classes: In TypeScript/JavaScript, you can define custom error classes and check with instanceof.

*/

