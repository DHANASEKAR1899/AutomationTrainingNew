let fruits = ["Apple", "Orange", "Banana", "Grapes", "Pineapple"];


console.log("0 try" , fruits); // output [ 'Apple', 'Orange', 'Banana', 'Grapes', 'Pineapple' ]

fruits.pop("Apple");
console.log("1st try" , fruits); // output 1st try [ 'Apple', 'Orange', 'Banana', 'Grapes' ]

fruits.pop("Apple");
console.log("2nd try" , fruits); // output  2nd try [ 'Apple', 'Orange', 'Banana' ]



// If you want to remove a specific element (like "Orange"), you should use filter() or splice():

//------------------------------filter() Method ---------------------------------

// Below mentioned code works for both Javascript and typescript

fruits = fruits.filter(abc => abc !== "Apple");    // abc ===> arrow function dummy value
console.log(fruits);  

fruits = fruits.filter(abc => abc !== "Orange");    // abc ===> arrow function dummy value
console.log(fruits);// output [ 'Orange', 'Banana', 'Grapes', 'Pineapple' ]

fruits = fruits.filter(efg => efg !== "Grapes");    // efg ===> arrow function dummy value
console.log(fruits);   

fruits = fruits.filter(efg => efg !== "Banana");    // efg ===> arrow function dummy value
console.log(fruits);//[ 'Orange', 'Banana', 'Pineapple' ]

//------------------------------splice() Method -----------------------------------
console.log(fruits);

//=======================To remove orange alone =============================================
  
let index = fruits.indexOf("Orange");
if (index !== -1) {
  fruits.splice(index, 1); // 1st index la irukura 1 value remove pannanum ===> [ 'Apple', 'Banana', 'Grapes', 'Pineapple' ]
}
console.log(fruits); 

//===============================To remove orange and next value of orange==================

let index1 = fruits.indexOf("Orange");
if (index1 !== -1) {
  fruits.splice(index1, 2); // 1st index la irukura 2 value remove pannanum ===> [ 'Apple', 'Grapes', 'Pineapple' ]
}
console.log(fruits); 


//==================================Additional cases ========================================


