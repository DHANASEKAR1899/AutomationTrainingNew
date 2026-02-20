/* 

Functions in Typescript

Javascript or Typescript supports three commonly used function styles:

      1. Named function
      2. Arrow functions/Lambda functions
      3. Anonymous functions

1. Named functions:-----> Name functions are nothing but the functions that are declared explicitly with some name.

syntax : function functionName(parameters) : returnType 
          {
                    function body;
          }
*/

function greetThePerson (name : string) : string {

    return `Hello, ${name}! Good Morning`;
//  return "Hello" +name + "! Good Morning";

}


function greetThePerson1 (name : string) : void {

    console.log( `Hello, ${name}! Good Morning`); // output :  Hello, Dhanasekar! Good Morning
//  console.log( "Hello" +name + "! Good Morning";);

}

console.log(greetThePerson("Dhanasekar"));
greetThePerson1("Sowmiya"); // output : Hello, Sowmiya! Good Morning


/* 2. Arrow function/Lambda functions :----> Arrow fn are more concise syntax for writing function expressions.They are often used for short term fucntions

syntax : let functionName = (parameters) : returnType => {
            // function body;
}

*/

//Regular Normal function

function sum(a:number,b:number):number{

    let c: number = a+b;
    return c;

}

console.log(sum(8,9));


// Arrow function :-

let add = (a:number,b:number) : number => a+b;  // Real time example => Array Map method, filter method , sort - double variable
console.log(add(4,5));

/* 3. Anonymous functions:-----> functions that are defined without a name.They are often used as arguments to another function

syntax:  function as parameter of another function

function outerFunctionName ( paramFunction : functionType) : returnType {
         // function body;
}
         */

function run(greet:(name:string)=>void) : void { // greet varaiable ku oru variable kuduka poraen adhoda data type string and return type void

     greet("Dhanasekar sowmiya");
}

// calling function

run(

function(name:string):void {
 console.log(" Hello " +name+ "! Good Morning"); // outuput : Hello Dhanasekar sowmiya! Good Morning

}
)



// ============================= Additional cases ================================

let adding = (...values: number[]): number => values.reduce((a,b) => a + b, 0);

console.log(adding(4,5,12,15)); // Output 36



/*


(method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number (+2 overloads)
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.


*/