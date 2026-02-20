/* 

Function Implementation types :

  1. Function without parameter without return type
  2. Function with parameter without return type
  3. Function with parameter with return type
  4. Function without paramerter with return type


  others:

  5. Function with optional parameter
  6. Function with default parameter
  7. Function with rest parameter

*/

//================ 1. Function without parameter and without return type========================

function helloworld():void{
    console.log("Hello,world!");
}

// calling function

helloworld(); // output:- Hello,World!

//================= 2. Function with parameters and without return type=========================

function greetUser(name : string):void{
    console.log(`Hello ${name} !`);
}

// calling function

greetUser("Dhanasekar"); // output:- Hello Dhanasekar !

//================ 3. Function with parameter with return type ===================================


function add(a:number,b:number):number{
    return a+b;

}

// calling function

console.log("Addition of 2 numbers : ", add(4,5));

//================= 4. Function without parameter with return type ================================

function getCurrentYear() : number {

       let currentDate : Date = new Date();
       return currentDate.getFullYear();

}

// calling function

      let year : number = getCurrentYear();
      console.log("Current year is: ",year);



//===================================== other types ===================================


//================================ 5. Function with optional parameter =============================


function printEmployeeDetails( name: string, age?:number) : void {

         if(age !== undefined) { console.log("EmployeeName: " + name + " Age : " + age);}
         else                 { console.log("EmployeeName: " + name + " Age : Not provided"); }

}

// Important Note : A required parameter cannot follow an optional parameter ===> compile time Error ==> Always optional parameter should be at the end

// calling function

printEmployeeDetails("Dhanasekar");
printEmployeeDetails("Sowmiya",26);


// =============================== 6. Function with default parameter ==============================


function printEmployeeInfo ( name : string , visaStatus : boolean = false) : void {

    console.log ("EmployeeName : " + name +  " Employee Visa status : " + visaStatus);
}

// Important Note : if the variable is optional parameter - then we cannot able to give default value after data type

// calling function

printEmployeeInfo("Dhanasekar"); // By default visaStatus takes default value
printEmployeeInfo("Sowmiya",true); // default value false will be overrided by true value


// ================================= 7. Function with rest parameter ( ... ) ================================

// problem statement - I want to perform addition with as many number as I want ( No of values - not known)

function sum(...numbers : number[]) : void{

    let sum = 0;

    for( let num of numbers) { sum += num;}
    console.log( "sum of numbers are : " + sum);
}

// calling function

sum(4,2,5,3,4,8,6); // output : 32
sum(5,4); 

//=================== own case ========================


function cricketer(name1 : string, name2?: string,...numbers : number[]) : void{

    let sum = 0;

    for( let num of numbers) { sum += num;}
    
    console.log( "Full Name : " + name1 + " " + name2 + " ", + sum);
}

// calling function

cricketer("virat","",10,8); // Output virat 18

// Importan note => After optional parameter - it is allowing rest parameter but not required parameter
