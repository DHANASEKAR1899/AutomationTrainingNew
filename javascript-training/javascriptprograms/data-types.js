/*
Data type are two different catagories:

    1) primitive data type (Immutable/Unmodifiable)
    2) Non-primitive data type (mutable/modifiable)

*/

//---------------------Primitive Data Type---------------------------

// 1. number -----> represent number with decimal and without decimal.(without Quotes)

let a = 10;
let b = 29.9;
console.log(typeof a);                    // number
console.log("Data type of b: ",typeof b); // number


// 2. string ------> represents sequence of characters wrapped inside single or double quotes

let str1 = 'Hello world';
let str2 = "Hello Dhana";
let str3 = `Hello Sowmiya`; 
console.log("Data type of str1 : ",typeof str1); // string
console.log("Data type of str2 : ",typeof str2); // string
console.log("Data type of str3 : ",typeof str3); // string

// 3. Boolean ------> represents result of condition : true or false

let c = true;
let d = "true"; // Within double quotes - it consider as string
let f = false
console.log("Data type of c: ",typeof c);
console.log("Data type of d: ",typeof d);
console.log("Data type of e: ",typeof f);

// 4. undefined ------> represents variable that has been declared but not assigned a value

let g;
console.log("Data type of g: ",typeof g);

// 5. null ------> represents an intentional absence of any object value
//         ------> represents a varibale that is assinged with a null value

let h = null;
let i = "";
console.log("Data type of h: ",typeof h); // output - object - important
console.log("Data type of i: ",typeof i); // output - string

// 6. symbol ------> later point of time we will discuss

let countryOfOrigin = Symbol();
let productDetails = {

    productName      :"One plus 9",
    productPrice     :6999,
    [countryOfOrigin]:"China" // I don't want to revel country of origin key details - so Iam using symbol datatype
                              // [Symbol()]: 'China'
}

console.log(productDetails);
console.log(productDetails.productPrice); // Output - 6999
console.log(productDetails.countryOfOrigin); // Output - undefined




//--------------------Non-primitive data type--------------------------------

// 1.object -------> represent a combination of key-value pair (value - any datatype in JS;key,value any datatype in TS)
                // Key represent variablename - so Naming convention of key should be "lower case with camel casing"

let empDetails = {
         empId      : 101,
         empName    : "Dhanasekar",
         havingVisa : true,
         address    :{
                      city    : ["chennai","kumbakonam"],
                      pinCode : 600044,
                      state   : "TamilNadu",

                     }
                 }; // semicolon is must at the end of object

// To know type of employeeDetails variable/identifier type
console.log("Employeedetails variable type:", typeof empDetails); // object

// print employee Name
console.log("Employee Name: "+empDetails.empName);

// print employee pincode
console.log("Employee pincode: "+empDetails.address.pinCode);

// print employee secondary city
console.log("Employee city: "+empDetails.address.city[1]); // Output : Kumbakonam




// Iterating object using for-in- Loop

// 2.Array -------> array represents an ordered collection of items

 let fruits = ["Apple","Orange","Mango"];
  fruits.push("Grapes"); // to add new value to fruit array - Insertion order
  fruits.pop("Apple"); // By default it will not remove Apple value it will remove last value (i.e) Grapes
 let fruitsAndPrice = ["Apple",100,"Orange",200,"Mango",300];
 let fruitsPriceAndAvailabiltiy = ["Apple",100,true,"Orange",200,false,"Mango",300,true];

 console.log(fruits[1]);  // output Orange
 console.log(fruitsAndPrice[3]); // output 200
 console.log(fruitsPriceAndAvailabiltiy[5]); //output false
 console.log(fruits.length); // To find the length of array


 // 3.Function --------> function represents a block of code designed to perform a particular task
                         // its a kind of method in Java

 function launchTheApplication(broswerName,url){

    console.log("Launch the browser " + broswerName);
    console.log("Navigate to url " + url);
    console.log("Application lauched successfully");

 }

 // call the function :
launchTheApplication("chrome","https://www.example.com");


// 4.Date  --------> Date represent date and time in javascript to print todays date and time

// To get current date
let currentDate = new Date(); // creating object for Date class (Concept of OOPS)

console.log(currentDate.getFullYear()); //output : current year // To get current year alone
console.log(currentDate.getMonth() + 1 ); // To get current month (only for month - JS provide month number :-Indexvalue ==> Jan = 0; Feb = 1; month value start from 0;so while priniting we need to using +1 increment option
   // if we want to print the month name ==> let month = currentDate.getMonth()+1;
   // if(month==1){console.log("January");}
console.log(currentDate.getDate()); // To get current date 
console.log(currentDate.getMinutes()); // To get Minutes ; 
console.log(currentDate.getSeconds()); // To get Minutes ; 
console.log(currentDate.getHours());// To get Hours ; 
console.log(currentDate.getMilliseconds());// To get Milliseconds ; 

//  5.Map -------> Map represent a collection of key-value pairs where keys can be of any data type.
// key value always should enclose with single/double quotes otherwise while executing - key name is not defined error message will throw 

let employeeMap = new Map();
employeeMap.set('empId',101);
employeeMap.set("empName", "Dhana");
employeeMap.set("havingVisa", true);
employeeMap.set("empName","Sowmiya"); // empName key used again (key duplicate) --> value overridden
console.log(employeeMap.get("empName")); //sowmiya ---> value updated
console.log(employeeMap);

// Iterating Map using for- of loop

console.log("Iterating Map using for-of loop")

for(let a of employeeMap){

    console.log(a);

}




// To delete existing value in Map
employeeMap.delete("havingVisa");
console.log(employeeMap); 
console.log(employeeMap.size); 


// Note - In case of Typescript we have to mentione data type for each key and value pair along with value


// 6.set -------> Set represents a collection of unique values of any data type

// whenever we want to store duplicate values --> we will go for array in Javascript
// whenever we want to store unique values ---> we will go for set in Javascript

let uniqueNumbers = new Set();
let uniqueNumberss = new Set([10,20,30,40,20,50]); // second way of set declaration
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20); // duplicate value, will not be added
uniqueNumbers.add(40); 
uniqueNumbers.add(50); 
uniqueNumbers.delete(50);
console.log(uniqueNumbers); // output = 10,20,30,40
console.log(uniqueNumbers.size); // getting size of set

//============== iterating set using for of loop==============

for ( let a of uniqueNumbers){
    console.log(a);
}


// Note : above mentioned methods also applicable for Map



//================================set value print======================

// using for-of loop - To iterate array,set,Map

const mySet = new Set([10, 20, 30, 40]); // second day of declaring set

for (let value of mySet) {
  if (value === 30) {
    console.log(value); // prints 30
  }
}

// using for each loop

/* syntax : setName.forEach(value=>{block-of-code}); */

mySet.forEach(value => {
  if (value === 20) {
    console.log(value); // prints 20
  }
});


// converting set to array and then print specific value

const arr = Array.from(mySet);
console.log(arr[1]); // prints 20 (second element)

// checking if values exist and printing the existing value

if (mySet.has(40)) {
  console.log("Found:", 40);
}

// ============================== object looping key, value, key and value==============================



