/* Loop statements : Loop the statements or repeat the execution of statements multiple times based on the condition

 1.for-loop ---> when we know the total number of iterations to be exeucted before itseld,we use for loop
 2. while loop ---> we don't know the total no of iterations to be exeucted before itseld, we use a while loop

1.========================== For-loop===========================================================================

syntax :
==========

 for ( condition-to--start; condition-to-end ; increment/decrement)
{
    // statements
}
*/

// Example - print the name Bharath 10 times using for loop

let empName = "Bharath"; 
for (let i : number = 1; i<= 10;i++){ // let should be used for i instead of var because i value at the end incremented and changed to 10

    console.log(i +") " + empName);

}

/* 2.While loop
====================

syntax : Entering only one condition to enter into the loop - we need to give loop end inside while loop statement
           Intentionally and exceptionally user have to stop the loop
while(condition){

// statements


}
*/

// Problem statement : Refresh the page until application is launched successfully

let counter : number = 1;

while (counter > 0) {
    let isPageLoaded : boolean = false; // Assume this value is coming from application
     
    if (isPageLoaded || counter ===10){
        break; // Terminate the loop when the page is loaded or not loaded even after 10 attempts
    }
    console.log("Refresh the page");
    counter++;

}

//=====================special cases of while loop & for loop

/* 3. do-while loop --->  Atleast execute the loop one time before checking the condition
                       special case of while loop is Do-while loop
syntax:
========
 do{

// statements

} while(condition);

*/

/* 4.Special cases of for loop 
===================================

      1. for of loop
      2. for in loop

1. for-of-loop ------> Iterate over each and every value of the predefined list(array,set,map)

*/
// Normal for loop:

let fruits : string[] = ["Apple","Banana","Mango","Orange"];

for (let i : number = 0 ; i<fruits.length ; i++){

    console.log(fruits[i]);
}

// I want to print each and every value of particular predefined fruits list

for (let fruit of fruits){ // kind of enhanced for loop

    console.log(fruit);
}

// 2.for-in-loop ---> Iterate over each and every "key" of the predefined object


interface empDetails {
         empId      : number | string,
         empName    : string,
         havingvisa : boolean,
         address    :{
                      city    : (string|number)[],
                      pincode : number,
                      state   : string,
                      country : string

                     }
                 };


let empInfo : empDetails = {
         empId      : 101,
         empName    : "Dhanasekar",
         havingvisa : true,
         address    :{
                      city    : ["chennai","kumbakonam",101],
                      pincode : 600044,
                      state   : "TamilNadu",
                      country : "India"

                     }
                 };

console.log(empInfo.empId);
console.log(empInfo["empId"]);


//syntax:
//for (key in pre-defined-object)
{
    //statements
}

for (let key in empInfo) {
    console.log(key);           // Output ==> print key one by one [empId,empName,havingvisa,address]
    console.log(empInfo[key as keyof empDetails]);
}                



//==============================================================================//



// To get any level of key value present in object - make a note

empInfo.address.city.forEach(c => console.log("city:", c));

// Multiple ways to print object values:

const person = { 
    name: "Alice", 
    age: 25 
};

// Access with dot notation
console.log(person.name); // Alice

// Access with bracket notation
console.log(person["age"]); // 25
